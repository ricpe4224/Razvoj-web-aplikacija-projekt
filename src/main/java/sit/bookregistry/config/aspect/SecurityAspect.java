package sit.bookregistry.config.aspect;

import sit.bookregistry.model.User;
import sit.bookregistry.repository.UserRepository;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

@Aspect
@Configuration
public class SecurityAspect {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserRepository userRepository;

    @Before("@annotation(sit.bookregistry.config.aspect.customAnnotations.CanAccess)")
    public void before(JoinPoint joinPoint) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();

        String username = request.getHeader("User");
        checkIfUserHasPermission(username);
        logger.info("Dopusten pristup korisniku: " + username);
    }

    @Before("@annotation(sit.bookregistry.config.aspect.customAnnotations.CanAccessAdmin)")
    public void before2(JoinPoint joinPoint) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();

        String username = request.getHeader("User");
        User user = checkIfUserHasPermission(username);
        if (!user.isAdmin()) {
            logger.info("Korisnik nije admin");
            throw new AccessDeniedException("user does not have admin privilegies");
        }
        logger.info("Dopusten pristup korisniku: " + username);
    }

    private User checkIfUserHasPermission(String username) {
        logger.info("Provjera korisnika: " + username);
        return userRepository.findUserByUsername(username).orElseThrow(() -> {
            logger.info("Pristup zabranjen");
            throw new AccessDeniedException("user does not exist");
        });
    }
}
