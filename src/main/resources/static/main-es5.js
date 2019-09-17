(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/book-registry/pages/main/admin/add-book.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/book-registry/pages/main/admin/add-book.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center mt-4\">\n    <h4>Add Book</h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <form [formGroup]=\"bookForm\" (ngSubmit)=\"addBook()\" style=\"color: #757575;\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title: </label>\n          <input class=\"form-control\" type=\"text\" id=\"title\" formControlName=\"title\" name=\"title\" autocomplete=\"title\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"author\">Author: </label>\n          <input class=\"form-control\" type=\"text\" id=\"author\" formControlName=\"author\" name=\"author\" autocomplete=\"author\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"quantity\">Quantity: </label>\n          <input class=\"form-control\" type=\"number\" min=\"1\" id=\"quantity\" formControlName=\"quantity\" name=\"quantity\" autocomplete=\"quantity\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/book-registry/pages/main/books/available-books.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/book-registry/pages/main/books/available-books.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center my-4\">\n    <h4>Available books</h4>\n  </div>\n  <div *ngIf=\"showAlert\" class=\"alert alert-primary\" role=\"alert\">\n    There are no available books at the moment!\n  </div>\n  <div class=\"row\">\n    <div *ngFor=\"let book of availableBooks\" class=\"col-md-4 col-lg-3\">\n      <div class=\"card mb-2\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{book.title}}</h5>\n          <h6 class=\"card-subtitle text-muted mb-3\" >{{book.author}}</h6>\n          <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-block\" (click)=\"borrowBook(book.id)\">Borrow</a>\n        </div>\n        <div class=\"card-footer text-muted\">\n          {{book.quantity}} left\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/book-registry/pages/main/user/books/user-books.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/book-registry/pages/main/user/books/user-books.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center my-4\">\n    <h4>My books</h4>\n  </div>\n  <div *ngIf=\"showAlert\" class=\"alert alert-primary\" role=\"alert\">\n    You don't own any books at the moment!\n  </div>\n  <div class=\"row\">\n    <div *ngFor=\"let book of availableBooks\" class=\"col-md-4 col-lg-3\">\n      <div class=\"card mb-2\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{book.title}}</h5>\n          <h6 class=\"card-subtitle text-muted mb-3\">{{book.author}}</h6>\n          <a href=\"javascript:void(0)\" class=\"btn btn-outline-primary btn-block\" (click)=\"returnBook(book.id)\">Return</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/book-registry/pages/main/user/login/login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/book-registry/pages/main/user/login/login.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center mt-4\">\n    <h4>Login</h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"login()\" style=\"color: #757575;\">\n        <div *ngIf=\"showAlert\" class=\"alert alert-warning\" role=\"alert\">\n          Invalid Credentials\n        </div>\n        <div class=\"form-group\">\n          <label for=\"username\">Username: </label>\n          <input class=\"form-control\" type=\"text\" id=\"username\" formControlName=\"username\" name=\"username\"\n                 autocomplete=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password: </label>\n          <input class=\"form-control\" type=\"password\" id=\"password\" formControlName=\"password\" name=\"password\"\n                 autocomplete=\"password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Login</button><br/>\n        <a routerLink=\"/user/registration\">Not a user? Sign up here!</a>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/book-registry/pages/main/user/registration/registration.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/book-registry/pages/main/user/registration/registration.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center mt-4\">\n    <h4>Registration</h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"register()\" style=\"color: #757575;\">\n\n        <div *ngIf=\"alertMessage\" class=\"alert alert-warning\" role=\"alert\">\n          {{alertMessage}}\n        </div>\n        <div class=\"form-group\">\n          <label for=\"username\">Username: </label>\n          <input class=\"form-control\" type=\"text\" id=\"username\" formControlName=\"username\" name=\"username\" autocomplete=\"username\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password: </label>\n          <input class=\"form-control\" type=\"password\" id=\"password\" formControlName=\"password\" name=\"password\"\n                 autocomplete=\"password\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"rPassword\">Repeat password: </label>\n          <input class=\"form-control\" type=\"password\" id=\"rPassword\" formControlName=\"repeatedPassword\" name=\"rPassword\"\n                 autocomplete=\"rPassword\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n        <br/>\n        <a routerLink=\"/user/login\">Already a user? Login!</a>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/book-registry/shared/nav/nav-bar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/book-registry/shared/nav/nav-bar.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn\">\n  <nav class=\"navbar navbar-dark bg-dark navbar-expand-sm\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/books/available\">AVAILABLE BOOKS</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/user/books\">MY BOOKS</a></li>\n        <li *ngIf=\"isAdmin\" class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/books/add\">ADD BOOK</a></li>\n      </ul>\n      <button class=\"btn btn-danger my-2 my-sm-0 ml-auto btn-sm\" (click)=\"logout()\">LOGOUT</button>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_registry_pages_main_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-registry/pages/main/user/login/login.component */ "./src/app/book-registry/pages/main/user/login/login.component.ts");
/* harmony import */ var _book_registry_pages_main_user_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-registry/pages/main/user/registration/registration.component */ "./src/app/book-registry/pages/main/user/registration/registration.component.ts");
/* harmony import */ var _book_registry_pages_main_books_available_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-registry/pages/main/books/available-books.component */ "./src/app/book-registry/pages/main/books/available-books.component.ts");
/* harmony import */ var _book_registry_pages_main_user_books_user_books_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-registry/pages/main/user/books/user-books.component */ "./src/app/book-registry/pages/main/user/books/user-books.component.ts");
/* harmony import */ var _book_registry_pages_main_admin_add_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-registry/pages/main/admin/add-book.component */ "./src/app/book-registry/pages/main/admin/add-book.component.ts");
/* harmony import */ var _book_registry_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-registry/shared/auth/auth-guard */ "./src/app/book-registry/shared/auth/auth-guard.ts");









var routes = [
    { path: '', redirectTo: 'user/login', pathMatch: 'full' },
    { path: 'user/login', component: _book_registry_pages_main_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'user/registration', component: _book_registry_pages_main_user_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'books/available', component: _book_registry_pages_main_books_available_books_component__WEBPACK_IMPORTED_MODULE_5__["AvailableBooksComponent"], canActivate: [_book_registry_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'books/add', component: _book_registry_pages_main_admin_add_book_component__WEBPACK_IMPORTED_MODULE_7__["AddBookComponent"], canActivate: [_book_registry_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'user/books', component: _book_registry_pages_main_user_books_user_books_component__WEBPACK_IMPORTED_MODULE_6__["UserBooksComponent"], canActivate: [_book_registry_shared_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'book-registry-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _book_registry_pages_main_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-registry/pages/main/user/login/login.component */ "./src/app/book-registry/pages/main/user/login/login.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _book_registry_pages_main_user_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-registry/pages/main/user/registration/registration.component */ "./src/app/book-registry/pages/main/user/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _book_registry_pages_main_books_available_books_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-registry/pages/main/books/available-books.component */ "./src/app/book-registry/pages/main/books/available-books.component.ts");
/* harmony import */ var _book_registry_pages_main_user_books_user_books_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book-registry/pages/main/user/books/user-books.component */ "./src/app/book-registry/pages/main/user/books/user-books.component.ts");
/* harmony import */ var _book_registry_pages_main_admin_add_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-registry/pages/main/admin/add-book.component */ "./src/app/book-registry/pages/main/admin/add-book.component.ts");
/* harmony import */ var _book_registry_shared_nav_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./book-registry/shared/nav/nav-bar.component */ "./src/app/book-registry/shared/nav/nav-bar.component.ts");
/* harmony import */ var _book_registry_shared_auth_AuthInterceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book-registry/shared/auth/AuthInterceptor */ "./src/app/book-registry/shared/auth/AuthInterceptor.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _book_registry_pages_main_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _book_registry_pages_main_user_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"],
                _book_registry_pages_main_books_available_books_component__WEBPACK_IMPORTED_MODULE_10__["AvailableBooksComponent"],
                _book_registry_pages_main_user_books_user_books_component__WEBPACK_IMPORTED_MODULE_11__["UserBooksComponent"],
                _book_registry_pages_main_admin_add_book_component__WEBPACK_IMPORTED_MODULE_12__["AddBookComponent"],
                _book_registry_shared_nav_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _book_registry_shared_auth_AuthInterceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
                    multi: true,
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-registry/pages/main/admin/add-book.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/book-registry/pages/main/admin/add-book.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stcmVnaXN0cnkvcGFnZXMvbWFpbi9hZG1pbi9hZGQtYm9vay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/book-registry/pages/main/admin/add-book.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/book-registry/pages/main/admin/add-book.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_book_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/book/book.service */ "./src/app/book-registry/service/book/book.service.ts");





var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(bookService, formBuilder, router) {
        this.bookService = bookService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    AddBookComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("admin") == '' || localStorage.getItem("admin") == null) {
            this.router.navigateByUrl("/user/login");
        }
        this.bookForm = this.formBuilder.group({
            title: this.formBuilder.control(''),
            author: this.formBuilder.control(''),
            quantity: this.formBuilder.control('')
        });
    };
    AddBookComponent.prototype.addBook = function () {
        this.bookService.addBook(this.bookForm.value).subscribe(function () {
            console.log("success");
        }, function (err) {
        });
    };
    AddBookComponent.ctorParameters = function () { return [
        { type: _service_book_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AddBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! raw-loader!./add-book.component.html */ "./node_modules/raw-loader/index.js!./src/app/book-registry/pages/main/admin/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.css */ "./src/app/book-registry/pages/main/admin/add-book.component.css")]
        })
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/book-registry/pages/main/books/available-books.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/book-registry/pages/main/books/available-books.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stcmVnaXN0cnkvcGFnZXMvbWFpbi9ib29rcy9hdmFpbGFibGUtYm9va3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/book-registry/pages/main/books/available-books.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/book-registry/pages/main/books/available-books.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AvailableBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableBooksComponent", function() { return AvailableBooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user/user.service */ "./src/app/book-registry/service/user/user.service.ts");
/* harmony import */ var _service_book_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/book/book.service */ "./src/app/book-registry/service/book/book.service.ts");




var AvailableBooksComponent = /** @class */ (function () {
    function AvailableBooksComponent(userService, bookService) {
        this.userService = userService;
        this.bookService = bookService;
        this.showAlert = false;
    }
    AvailableBooksComponent.prototype.ngOnInit = function () {
        this.getAvailableBooks();
    };
    AvailableBooksComponent.prototype.getAvailableBooks = function () {
        var _this = this;
        this.showAlert = false;
        this.bookService.getAvailableBooks().subscribe(function (value) {
            _this.availableBooks = value;
            if (_this.availableBooks.length == 0)
                _this.showAlert = true;
        });
    };
    AvailableBooksComponent.prototype.borrowBook = function (bookId) {
        var _this = this;
        var userBook = {
            username: localStorage.getItem("username"),
            bookId: bookId,
        };
        this.userService.borrowBook(userBook).subscribe(function () {
            _this.getAvailableBooks();
        }, function () { return console.log("fail"); });
    };
    AvailableBooksComponent.ctorParameters = function () { return [
        { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _service_book_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] }
    ]; };
    AvailableBooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-available-books',
            template: __webpack_require__(/*! raw-loader!./available-books.component.html */ "./node_modules/raw-loader/index.js!./src/app/book-registry/pages/main/books/available-books.component.html"),
            styles: [__webpack_require__(/*! ./available-books.component.css */ "./src/app/book-registry/pages/main/books/available-books.component.css")]
        })
    ], AvailableBooksComponent);
    return AvailableBooksComponent;
}());



/***/ }),

/***/ "./src/app/book-registry/pages/main/user/books/user-books.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/book-registry/pages/main/user/books/user-books.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stcmVnaXN0cnkvcGFnZXMvbWFpbi91c2VyL2Jvb2tzL3VzZXItYm9va3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/book-registry/pages/main/user/books/user-books.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/book-registry/pages/main/user/books/user-books.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBooksComponent", function() { return UserBooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/user/user.service */ "./src/app/book-registry/service/user/user.service.ts");



var UserBooksComponent = /** @class */ (function () {
    function UserBooksComponent(userService) {
        this.userService = userService;
        this.showAlert = false;
    }
    UserBooksComponent.prototype.ngOnInit = function () {
        this.getUserBooks();
    };
    UserBooksComponent.prototype.getUserBooks = function () {
        var _this = this;
        this.showAlert = false;
        this.userService.getUserBooks(localStorage.getItem("username")).subscribe(function (value) {
            _this.availableBooks = value;
            if (_this.availableBooks.length == 0)
                _this.showAlert = true;
        });
    };
    UserBooksComponent.prototype.returnBook = function (bookId) {
        var _this = this;
        var userBook = {
            username: localStorage.getItem("username"),
            bookId: bookId,
        };
        this.userService.returnBook(userBook).subscribe(function () {
            _this.getUserBooks();
        }, function () { return console.log("fail"); });
    };
    UserBooksComponent.ctorParameters = function () { return [
        { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    UserBooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-books',
            template: __webpack_require__(/*! raw-loader!./user-books.component.html */ "./node_modules/raw-loader/index.js!./src/app/book-registry/pages/main/user/books/user-books.component.html"),
            styles: [__webpack_require__(/*! ./user-books.component.css */ "./src/app/book-registry/pages/main/user/books/user-books.component.css")]
        })
    ], UserBooksComponent);
    return UserBooksComponent;
}());



/***/ }),

/***/ "./src/app/book-registry/pages/main/user/login/login.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/book-registry/pages/main/user/login/login.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stcmVnaXN0cnkvcGFnZXMvbWFpbi91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/book-registry/pages/main/user/login/login.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/book-registry/pages/main/user/login/login.component.ts ***!
  \************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/user/user.service */ "./src/app/book-registry/service/user/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.showAlert = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            username: this.formBuilder.control(''),
            password: this.formBuilder.control('')
        });
    };
    ;
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.userForm.value).subscribe(function (value) {
            console.log("success");
            localStorage.setItem("username", _this.userForm.get("username").value);
            if (value === true) {
                localStorage.setItem("admin", "admin");
                console.log("admin set");
            }
            _this.router.navigateByUrl("/user/books");
        }, function () {
            console.log("fail");
            _this.showAlert = true;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/book-registry/pages/main/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/book-registry/pages/main/user/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/book-registry/pages/main/user/registration/registration.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/book-registry/pages/main/user/registration/registration.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stcmVnaXN0cnkvcGFnZXMvbWFpbi91c2VyL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/book-registry/pages/main/user/registration/registration.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/book-registry/pages/main/user/registration/registration.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../service/user/user.service */ "./src/app/book-registry/service/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertMessage = '';
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            username: this.formBuilder.control(''),
            password: this.formBuilder.control(''),
            repeatedPassword: this.formBuilder.control('')
        });
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.userForm.value).subscribe(function () {
            console.log("success");
            _this.router.navigateByUrl("/user/login");
        }, function (err) {
            _this.alertMessage = err.error.message;
        });
    };
    RegistrationComponent.ctorParameters = function () { return [
        { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/book-registry/pages/main/user/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/book-registry/pages/main/user/registration/registration.component.css")]
        })
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/book-registry/service/book/book.service.ts":
/*!************************************************************!*\
  !*** ./src/app/book-registry/service/book/book.service.ts ***!
  \************************************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var API_ENDPOINT = 'books/';
var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
    }
    BookService.prototype.getAvailableBooks = function () {
        return this.http.get(API_ENDPOINT + 'available');
    };
    BookService.prototype.addBook = function (book) {
        return this.http.post(API_ENDPOINT + 'add-book', book);
    };
    BookService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/book-registry/service/user/user.service.ts":
/*!************************************************************!*\
  !*** ./src/app/book-registry/service/user/user.service.ts ***!
  \************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var API_ENDPOINT = 'user/';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (user) {
        return this.http.post(API_ENDPOINT + 'login', user);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(API_ENDPOINT + 'register', user);
    };
    UserService.prototype.borrowBook = function (value) {
        return this.http.post(API_ENDPOINT + 'borrow-book', value);
    };
    UserService.prototype.returnBook = function (value) {
        return this.http.post(API_ENDPOINT + 'return-book', value);
    };
    UserService.prototype.getUserBooks = function (username) {
        return this.http.get(API_ENDPOINT + 'books?username=' + username);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/book-registry/shared/auth/AuthInterceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/book-registry/shared/auth/AuthInterceptor.ts ***!
  \**************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var username = localStorage.getItem("username");
        if (username != '' && username != null) {
            request = request.clone({ headers: request.headers.set('User', username) });
        }
        return next.handle(request);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/book-registry/shared/auth/auth-guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/book-registry/shared/auth/auth-guard.ts ***!
  \*********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var username = localStorage.getItem("username");
        if (username == null || username == '') {
            this.router.navigateByUrl("/user/login");
            return false;
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/book-registry/shared/nav/nav-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/book-registry/shared/nav/nav-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stcmVnaXN0cnkvc2hhcmVkL25hdi9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/book-registry/shared/nav/nav-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/book-registry/shared/nav/nav-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.isLoggedIn = false;
        this.isAdmin = false;
    }
    NavBarComponent.prototype.ngDoCheck = function () {
        var username = localStorage.getItem("username");
        this.isLoggedIn = username != null && username != '';
        var admin = localStorage.getItem("admin");
        this.isAdmin = admin != null && admin != '';
    };
    NavBarComponent.prototype.logout = function () {
        localStorage.removeItem("username");
        localStorage.removeItem("admin");
        location.reload();
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/book-registry/shared/nav/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/book-registry/shared/nav/nav-bar.component.css")]
        })
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marko\Desktop\book-registry\book-registry-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map