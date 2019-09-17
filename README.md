# Razvoj-web-aplikacija-projekt


## Opis projekta


>Ovaj projekt je zamisljen kao jednostavni servis za posuđivanje i vraćanje knjiga, ima 2 razine autentifikacije korisnika admin i "obične korisnike".
Koristene tehologije su: **Angular CLI 7 (8.2.2), Java Spring boot (na JDK12),
HTML,CSS,bootstrap.**	
Korištena baza podataka je **PostgreSQL**.

##  Pokretanje projekta
>Na frontend stranu pokrecemo naredbom u terminalu **..\book-registry\book-registry-frontend>ng build** zatim pokrećemo backend stranu, a rezultate možemo vidjeti na [http://localhost:8080/#/user/login](http://http://localhost:8080/#/user/login/) .

## Razine autentifikacije

**Admin**: lozinka: admin sifra: admin
>- moze pregledavati knjige
>- moze posudjivati knjige
>- moze dodavati nove naslove u knjiznicu
>-  moze brisati tj. vracati knjige

**User** ili obicni korisnik moze:
>- pregledavati knjige
>- posudjivati knjige
>- brisati tj. vracati knjige
>- zahtjeva registraciju
