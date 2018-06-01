webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content-section\">\r\n  <div class=\"col-md-12 wow rollIn animated\">\r\n  <h3>About Food Start</h3>\r\n  We also deliver ready to cook healthy meal kits at your doorstep. Just cook and enjoy your own handmade made food without wasting the ingredients or the food.We also deliver ready to cook healthy meal kits at your doorstep. Just cook and enjoy your own handmade made food without wasting the ingredients or the food.We also deliver ready to cook healthy meal kits at your doorstep. Just cook and enjoy your own handmade made food without wasting the ingredients or the food.We also deliver ready to cook healthy meal kits at your doorstep. Just cook and enjoy your own handmade made food without wasting the ingredients or the food.We also deliver ready to cook healthy meal kits at your doorstep. Just cook and enjoy your own handmade made food without wasting the ingredients or the food.We also deliver ready to cook healthy meal kits at your doorstep. Just cook and enjoy your own handmade made food without wasting the ingredients or the food.</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ul id=\"gn-menu\" class=\"gn-menu-main {{sectionClass}}\">\r\n    <li class=\"gn-trigger\">\r\n      <a class=\"gn-icon gn-icon-menu\"><span>Menu</span></a>\r\n      <nav class=\"gn-menu-wrapper\">\r\n        <div class=\"gn-scroller\">\r\n          <ul class=\"gn-menu\">\r\n            <li *ngIf=\"loggedIn\">\r\n              <a href=\"#profile\">\r\n                <span class=\"fa\">\r\n                  <img width=\"32\" height=\"32\" class=\"img-circle\" src=\"assets/img/avatar-icon.png\">\r\n                </span>\r\n                {{loggedUserInfo.customer_name | titlecase}}\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"restaurant\" routerLinkActive=\"active\"><i class=\"fa fa-cutlery\"></i> Restaurants</a>\r\n            </li>\r\n            <li>\r\n                <a href=\"#about\"><i class=\"fa fa-bookmark\"></i> About Us</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#blogs\"><i class=\"fa fa-comments\"></i> Blog</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#contact\"><i class=\"fa fa-envelope\"></i> Feedback</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#contact\"><i class=\"fa fa-phone\"></i> Contact Us</a>\r\n              </li>\r\n              <li><a href=\"#service\"><i class=\"fa fa-cog\"></i> Terms & Conditions</a></li>\r\n              <li><a href=\"#works\"><i class=\"fa fa-briefcase\"></i> Privacy & Policy</a></li>\r\n\r\n          </ul>\r\n        </div><!-- /gn-scroller -->\r\n      </nav>\r\n    </li>\r\n    <li><a routerLink=\"/\" ><img src=\"assets/img/logo2.png\" /></a></li>\r\n    <li>\r\n        <ul class=\"wow bounceInDown animated\">\r\n          <ng-container *ngIf=\"!loggedIn\">\r\n            <li ><a (click)='openModal(\"login\")' id=\"signIn\" target=\"_blank\"><i class=\"fa fa-sign-in\"></i>Login</a></li>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"loggedIn\">\r\n            <li><a (click)=\"logout()\" title=\"{{loggedUserInfo.customer_name}}\"><i class=\"fa fa-sign-out\"></i>Logout</a></li>\r\n          </ng-container>\r\n        </ul>\r\n      </li>\r\n  </ul>\r\n</div>\r\n<section id=\"{{sectionId}}\" class=\"intro\">\r\n    <ngx-spinner bdOpacity = 0.9 bdColor = \"#333\" size = \"default\" color = \"#eb5d1e\" type = \"ball-clip-rotate-multiple\"></ngx-spinner>\r\n  <router-outlet></router-outlet>\r\n</section>\r\n<footer id=\"footer\" *ngIf=\"displayFooter\">\r\n    <div class=\"footer-section\">\r\n        <div class=\"container\">\r\n          <div class=\"footer-left\">\r\n            <ul class=\"company-social wow bounceInDown animated\">\r\n          <li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li>\r\n          <li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n          <li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li>\r\n          <li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n\r\n        </ul>\r\n          </div>\r\n          <div class=\"footer-right\">\r\n            Powered By : <a href=\"http:7einfotech.com\" target=\"__blank\">7einfotech.com</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_localstorage__ = __webpack_require__("../../../../ngx-localstorage/ngx-localstorage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(titleService, router, dialogService, _storageService) {
        var _this = this;
        this.titleService = titleService;
        this.router = router;
        this.dialogService = dialogService;
        this._storageService = _storageService;
        this.displayFooter = false;
        this.loggedIn = false;
        this.loggedUserInfo = '';
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationEnd */]) {
                if (router.url === '/') {
                    _this.sectionClass = '';
                    _this.displayFooter = false;
                    _this.sectionId = 'intro';
                }
                else {
                    _this.sectionClass = 'inner-page';
                    _this.displayFooter = true;
                    _this.sectionId = 'inner_bg';
                }
                var title = _this.getTitle(router.routerState, router.routerState.root).join('-');
                titleService.setTitle(title);
            }
        });
        if ((this._storageService.get('isLoggedIn', __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].storageKey))) {
            this.loggedIn = true;
            this.loggedUserInfo = JSON.parse(this._storageService.get('loggedUser', __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].storageKey));
        }
    }
    AppComponent.prototype.getTitle = function (state, parent) {
        var data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.title && (parent.snapshot.data.title !== 'undefined')) {
            data.push(parent.snapshot.data.title);
        }
        if (state && parent) {
            data.push.apply(data, this.getTitle(state, state.firstChild(parent)));
        }
        return data;
    };
    AppComponent.prototype.openModal = function (type) {
        if (type === 'login') {
            this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */], {}, { closeByClickingOutside: true });
        }
        else if (type === 'register') {
            this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */], {}, { closeByClickingOutside: true });
        }
    };
    AppComponent.prototype.logout = function () {
        this._storageService.clear();
        this.loggedIn = false;
        this.loggedUserInfo = '';
        this.router.navigate(['/']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_localstorage__["a" /* LocalStorageService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_localstorage__ = __webpack_require__("../../../../ngx-localstorage/ngx-localstorage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__restaurant_restaurant_component__ = __webpack_require__("../../../../../src/app/restaurant/restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__blog_details_blog_details_component__ = __webpack_require__("../../../../../src/app/blog-details/blog-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__blog_comments_blog_comments_component__ = __webpack_require__("../../../../../src/app/blog-comments/blog-comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__restaurant_filter_pipe__ = __webpack_require__("../../../../../src/app/restaurant-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__otp_otp_component__ = __webpack_require__("../../../../../src/app/otp/otp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__forgot_forgot_component__ = __webpack_require__("../../../../../src/app/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_with_opt_login_with_opt_component__ = __webpack_require__("../../../../../src/app/login-with-opt/login-with-opt.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


























var AppModule = /** @class */ (function () {
    function AppModule(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        var platform = Object(__WEBPACK_IMPORTED_MODULE_6__angular_common__["isPlatformBrowser"])(platformId) ?
            'in the browser' : 'on the server';
        console.log("Running " + platform + " with appId=" + appId);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__restaurant_restaurant_component__["a" /* RestaurantComponent */],
                __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__blog_details_blog_details_component__["a" /* BlogDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__blog_comments_blog_comments_component__["a" /* BlogCommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__restaurant_filter_pipe__["a" /* RestaurantFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_21__otp_otp_component__["a" /* OtpComponent */],
                __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_23__forgot_forgot_component__["a" /* ForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_24__login_with_opt_login_with_opt_component__["a" /* LoginWithOptComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'app-root' }),
                __WEBPACK_IMPORTED_MODULE_7_ngx_localstorage__["b" /* NgxLocalStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__app_app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_spinner__["NgxSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body })
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_21__otp_otp_component__["a" /* OtpComponent */], __WEBPACK_IMPORTED_MODULE_23__forgot_forgot_component__["a" /* ForgotComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_ID"])),
        __metadata("design:paramtypes", [Object, String])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_restaurant_restaurant_component__ = __webpack_require__("../../../../../src/app/restaurant/restaurant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");







var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__app_home_home_component__["a" /* HomeComponent */],
        data: { title: 'Home' }
    },
    {
        path: 'restaurant',
        component: __WEBPACK_IMPORTED_MODULE_2__app_restaurant_restaurant_component__["a" /* RestaurantComponent */],
        data: { title: 'Restaurant' }
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_4__app_about_about_component__["a" /* AboutComponent */],
        data: { title: 'About Us' }
    },
    {
        path: 'blogs',
        component: __WEBPACK_IMPORTED_MODULE_5__app_blog_blog_component__["a" /* BlogComponent */],
        data: { title: 'Blogs' }
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_6__app_profile_profile_component__["a" /* ProfileComponent */],
        data: { title: 'Profile' }
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__app_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
        data: { title: 'Page Not Found' }
    }
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true, enableTracing: false });


/***/ }),

/***/ "../../../../../src/app/blog-comments/blog-comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog-comments/blog-comments.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  blog-comments works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/blog-comments/blog-comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogCommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogCommentsComponent = /** @class */ (function () {
    function BlogCommentsComponent() {
    }
    BlogCommentsComponent.prototype.ngOnInit = function () {
    };
    BlogCommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-comments',
            template: __webpack_require__("../../../../../src/app/blog-comments/blog-comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog-comments/blog-comments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogCommentsComponent);
    return BlogCommentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/blog-details/blog-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog-details/blog-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  blog-details works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/blog-details/blog-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogDetailsComponent = /** @class */ (function () {
    function BlogDetailsComponent() {
    }
    BlogDetailsComponent.prototype.ngOnInit = function () {
    };
    BlogDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-details',
            template: __webpack_require__("../../../../../src/app/blog-details/blog-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog-details/blog-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogDetailsComponent);
    return BlogDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content-section\">\r\n  <div class=\"col-md-12 wow rollIn animated\">\r\n    <h3 class=\"page-title\" [innerHTML]=\"pageTitle\"></h3>\r\n    <nav class=\"breadcrumb\" [innerHTML]=\"breadcrumb\"></nav>\r\n    <div class=\"panel-group\" id=\"accordion\">\r\n      <div *ngFor=\"let blog of blogs\" class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h4 class=\"panel-title\">\r\n            <a (click)=\"getBlogDetails($event)\" data-expand=\"true\" [attr.data-id]=\"blog.blog_id\" href=\"javascript:void(0)\">\r\n              {{blog.blog_title}}</a>\r\n          </h4>\r\n        </div>\r\n        <div id=\"collapse{{blog.blog_id}}\" [ngClass]=\"className\" style=\"height:auto;\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body\">{{blogDetails}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogComponent = /** @class */ (function () {
    function BlogComponent(dataService, elRef) {
        this.dataService = dataService;
        this.elRef = elRef;
        this.pageTitle = 'Blogs';
        this.breadcrumb = "<a class=\"breadcrumb-item\" href=\"#\">Home</a>\n  <span class=\"breadcrumb-item active\">Blogs</span>";
        this.blogs = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.getBlogs();
    };
    BlogComponent.prototype.getBlogs = function () {
        var _this = this;
        this.dataService.getBlogs().subscribe(function (data) {
            _this.blogs = data;
        }, function (err) {
            console.log(err);
        }, function () {
            console.log('completed');
        });
    };
    BlogComponent.prototype.getBlogDetails = function (event) {
        var blogId = event.target.attributes['data-id'].value;
        var blogExpand = event.target.attributes['data-expand'].value;
        var emlement = this.elRef.nativeElement.querySelector('#collapse' + blogId);
        if (blogExpand === 'true') {
            emlement.html = 'this is test blog details';
            emlement.className = 'panel-collapse collapse in';
            event.target.attributes['data-expand'].value = false;
        }
        else {
            event.target.attributes['data-expand'].value = true;
            this.blogDetails = '';
            emlement.className = 'panel-collapse collapse';
        }
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.APIURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
    }
    DataService.prototype.sendOtp = function () {
        return this.http.get(this.APIURL + 'otp')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'server error'); });
    };
    DataService.prototype.getRestaurants = function () {
        return this.http.get(this.APIURL + 'list-restaurants/')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'server error'); });
    };
    DataService.prototype.getBlogs = function () {
        return this.http.get(this.APIURL + 'list-blogs')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'server error'); });
    };
    DataService.prototype.getCuisines = function () {
        return this.http.get(this.APIURL + 'list-cuisines')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'server error'); });
    };
    DataService.prototype.geCuisinesByIds = function (Ids) {
        return this.http.get(this.APIURL + 'get-cuisines-by-id/' + Ids)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'server error'); });
    };
    DataService.prototype.registerUser = function (userData) {
        return this.http.post(this.APIURL + "register-user/", userData)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json.error || 'server error'); });
    };
    DataService.prototype.loginUser = function (userData) {
        return this.http.post(this.APIURL + "login-user/", userData)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json.error || 'server error'); });
    };
    DataService.prototype.forgotPassword = function (userData) {
        return this.http.post(this.APIURL + "forgot-password/", userData)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json.error || 'server error'); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n    <div class=\"modal-content\" id=\"Login\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n        <h4>\r\n          <i class=\"fa fa-sign-in\"></i> FORGOT PASSWORD\r\n          <br>\r\n          <small>FORTGOT YOUR PASSWORD? DON'T WORRY WE CAN DEAL WITH IT</small>\r\n        </h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"col-md-12\">\r\n          <section class=\"login-panel\">\r\n            <ng-container *ngIf=\"isError\">\r\n              <div class=\"alert alert-danger text-center\" [innerHtml]=\"message\" role=\"alert\"></div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSuccess\">\r\n              <div class=\"alert alert-success text-center\" [innerHtml]=\"message\" role=\"alert\"></div>\r\n            </ng-container>\r\n            <form #forgotForm=\"ngForm\" (submit)=\"forgot()\" id=\"forgotForm\">\r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-addon\" id=\"basic-addon1\">\r\n                  <i class=\"fa fa-envelope\"></i>\r\n                </span>\r\n                <input name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" placeholder=\"Register email address\" class=\"form-control\" type=\"email\" id=\"email\" required email />\r\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert-bad\">\r\n                  <div *ngIf=\"email.errors.required\">\r\n                      <i class=\"fa fa-warning\"></i> Email is required.\r\n                  </div>\r\n                  <div *ngIf=\"email.errors.email\">\r\n                      <i class=\"fa fa-warning\"></i> Invalid email address.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"submit\">\r\n                <input [disabled]=\"!forgotForm.form.valid\" class=\"btn btn-primary btn-block\" type=\"submit\" value=\"Password Recovery\" />\r\n              </div>\r\n            </form>\r\n          </section>\r\n        </div>\r\n        <div class=\"col-md-12 not-a-member\">\r\n          <span> Already register with us?</span>\r\n          <strong>\r\n            <a id=\"signUp\" (click)='openModal(\"login\")'>Login</a>\r\n          </strong>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer clear\">\r\n        <button type=\"button\" class=\"btn btn-primary\">OK</button>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotComponent = /** @class */ (function (_super) {
    __extends(ForgotComponent, _super);
    function ForgotComponent(dialogService, dataServie, spinner) {
        var _this = _super.call(this, dialogService) || this;
        _this.dataServie = dataServie;
        _this.spinner = spinner;
        _this.user = {
            email: ''
        };
        _this.isError = false;
        _this.isSuccess = false;
        _this.message = '';
        return _this;
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent.prototype.forgot = function () {
        var _this = this;
        var userData = {
            email: this.user.email
        };
        this.spinner.show();
        this.dataServie.forgotPassword(userData).subscribe(function (data) {
            if (data.isSuccess) {
                _this.isSuccess = true;
                _this.message = "<strong>Thank you ! </strong> " + data.msg;
            }
            else {
                _this.isError = true;
                _this.message = "<strong>Sorry ! </strong> " + data.msg;
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    ForgotComponent.prototype.openModal = function (type) {
        var self = this;
        self.close();
        if (type === 'login') {
            this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], {}, { closeByClickingOutside: true });
        }
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("../../../../../src/app/forgot/forgot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerService"]])
    ], ForgotComponent);
    return ForgotComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slogan\">\r\n    <h1>You Drool, We Deliver</h1>\r\n    <p>Order food online from nearest restaurant.</p>\r\n    <form novalidate (ngSubmit)=\"search()\" #searchForm=\"ngForm\" id=\"searchForm\" class=\"form-inline\" accept-charset=\"utf-8\">\r\n      <div class=\"form-group home-search\">\r\n\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t<div class=\"input-group-addon\"><span class=\"gn-icon gn-icon-search\"></span></div>\r\n\t\t\t\t\t<div class=\"input-group-addon\">Gwalior</div>\r\n          <div class=\"input text\"><input name=\"searchTxt\" required #searchTxt=\"ngModel\" [(ngModel)]=\"searchFrm.searchTxt\" class=\"form-control\" placeholder=\"Search By Restaurant / Cuisine / Location\" type=\"text\" id=\"searchTxt\"/></div>\r\n          <!-- <div [hidden]=\"searchTxt.valid || searchTxt.pristine\" class=\"alert alert-danger\">  Search is required </div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<button type=\"submit\" [disabled]=\"!searchForm.form.valid\" id=\"SearchButton\" class=\"btn btn-skin\">GO</button>\r\n\t\t</form>\r\n  </div>\r\n  <ul class=\"company-social company-social-home wow bounceInDown animated\">\r\n      <li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li>\r\n      <li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n      <li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li>\r\n      <li><a href=\"#\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n  </ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_localstorage__ = __webpack_require__("../../../../ngx-localstorage/ngx-localstorage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_storageService, router) {
        this._storageService = _storageService;
        this.router = router;
        this.searchFrm = {
            searchTxt: ''
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.search = function () {
        this._storageService.set('searchValue', this.searchFrm.searchTxt, __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].storageKey);
        this.router.navigate(['restaurant']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_localstorage__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-with-opt/login-with-opt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-with-opt/login-with-opt.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login-with-opt works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/login-with-opt/login-with-opt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginWithOptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginWithOptComponent = /** @class */ (function () {
    function LoginWithOptComponent() {
    }
    LoginWithOptComponent.prototype.ngOnInit = function () {
    };
    LoginWithOptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-with-opt',
            template: __webpack_require__("../../../../../src/app/login-with-opt/login-with-opt.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-with-opt/login-with-opt.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginWithOptComponent);
    return LoginWithOptComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n  <div class=\"modal-content\" id=\"Login\">\r\n    <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n      <h4>\r\n        <i class=\"fa fa-sign-in\"></i> Member Login\r\n        <br>\r\n        <small>Welcome back, Login to get started</small>\r\n      </h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"col-md-12\">\r\n        <section class=\"social-login\">\r\n          <a class=\"btn btn-block btn-social btn-facebook\" href=\"http://sizzlingcuisines.comlogins/facebook\">\r\n            <span class=\"fa fa-facebook\"></span> Sign in with facebook\r\n          </a>\r\n          <a class=\"btn btn-block btn-social btn-twitter\" href=\"http://sizzlingcuisines.comlogins/twitter\">\r\n            <span class=\"fa fa-twitter\"></span> Sign in with twitter\r\n          </a>\r\n          <a href=\"https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%2Ffoodstar%2Flogins%2Fgoogle_callback&client_id=21081424908-g07aeea2cno6s4s78jefejepls2dk20l.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&approval_prompt=force\"\r\n            class=\"btn btn-block btn-social btn-google\">\r\n            <span class=\"fa fa-google-plus\"></span> Sign in with google+\r\n          </a>\r\n        </section>\r\n        <span class=\"or\">OR</span>\r\n        <section class=\"login-panel\">\r\n          <ng-container *ngIf=\"error\">\r\n            <div class=\"alert alert-danger text-center\" [innerHtml]=\"error\" role=\"alert\"></div>\r\n          </ng-container>\r\n          <form #loginForm=\"ngForm\" (submit)=\"login()\" id=\"loginForm\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\" id=\"basic-addon1\">\r\n                <i class=\"fa fa-envelope\"></i>\r\n              </span>\r\n              <input name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" placeholder=\"Register email address\" class=\"form-control\" type=\"email\" id=\"email\" required email />\r\n              <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert-bad\">\r\n                <div *ngIf=\"email.errors.required\">\r\n                    <i class=\"fa fa-warning\"></i> Email is required.\r\n                </div>\r\n                <div *ngIf=\"email.errors.email\">\r\n                    <i class=\"fa fa-warning\"></i> Invalid email address.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\" id=\"basic-addon1\">\r\n                <i class=\"fa fa-key\"></i>\r\n              </span>\r\n              <input name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" minlength=\"6\" placeholder=\"Password\" class=\"form-control\" type=\"password\" id=\"password\" required />\r\n              <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert-bad\">\r\n                <div *ngIf=\"password.errors.required\">\r\n                    <i class=\"fa fa-warning\"></i> Password is required.\r\n                </div>\r\n                <div *ngIf=\"password.errors.minlength\">\r\n                    <i class=\"fa fa-warning\"></i> Password must be at least 6 characters long.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"remember\">\r\n              <input type=\"checkbox\" name=\"data[User][remember]\" value=\"1\" id=\"UserRemember\" />\r\n              <span id=\"basic-addon1\">Remember me</span>\r\n              <a id=\"forgot\" (click)='openModal(\"forgot\")'>Forgot Password</a>\r\n            </div>\r\n            <div class=\"submit\">\r\n              <input [disabled]=\"!loginForm.form.valid\" class=\"btn btn-primary btn-block\" type=\"submit\" value=\"Login\" />\r\n            </div>\r\n          </form>\r\n        </section>\r\n      </div>\r\n      <div class=\"col-md-12 not-a-member\">\r\n        <span> Not a mebmber with us?</span>\r\n        <strong>\r\n          <a id=\"signUp\" (click)='openModal(\"register\")'>Register</a>\r\n        </strong>\r\n        <br>\r\n        <!-- <span> Don't remember password?</span> -->\r\n        <strong>\r\n          <a id=\"signUp\" (click)='openModal(\"login-with-otp\")'>Login with otp</a>\r\n        </strong>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer clear\">\r\n      <button type=\"button\" class=\"btn btn-primary\">OK</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_forgot_component__ = __webpack_require__("../../../../../src/app/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_localstorage__ = __webpack_require__("../../../../ngx-localstorage/ngx-localstorage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(dialogService, spinner, dataService, _storageService, router) {
        var _this = _super.call(this, dialogService) || this;
        _this.spinner = spinner;
        _this.dataService = dataService;
        _this._storageService = _storageService;
        _this.router = router;
        _this.user = {
            email: '',
            password: ''
        };
        _this.error = '';
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.openModal = function (type) {
        var self = this;
        self.close();
        if (type === 'register') {
            self.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */], {}, { closeByClickingOutside: true });
        }
        else if (type === 'forgot') {
            self.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_3__forgot_forgot_component__["a" /* ForgotComponent */], {}, { closeByClickingOutside: true });
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.spinner.show();
        var userData = this.user;
        this.dataService.loginUser(userData).subscribe(function (loginData) {
            if (loginData.login) {
                _this._storageService.set('loggedUser', JSON.stringify(loginData.result), __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].storageKey);
                _this._storageService.set('isLoggedIn', 'true', __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].storageKey);
                _this.close();
                window.location.reload(true);
            }
            else {
                _this.error = loginData.message;
                _this.spinner.hide();
            }
        }, function (err) {
            _this.error = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].serverError;
            _this.spinner.hide();
        }, function () {
            _this.spinner.hide();
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_localstorage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "../../../../../src/app/otp/otp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/otp/otp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n    <div class=\"modal-content\" id=\"OtpVerification\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n        <h4>\n          <i class=\"fa fa-sign-in\"></i> Otp Verification\n          <br>\n          <small>Verify your otp to complete your registration</small>\n        </h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"col-md-12\">\n          <section class=\"login-panel\">\n            <div *ngIf=\"otpDelivery\" [ngClass]=\"cls\" [innerHTML]=\"otpDeliveryMsg\"></div>\n            <form (ngSubmit)=\"verifyOtp()\" #otpForm=\"ngForm\" id=\"OtpPanel\" accept-charset=\"utf-8\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\" id=\"basic-addon1\">\n                  <i class=\"fa fa-phone\"></i>\n                </span>\n                <input name=\"otp\" placeholder=\"Enter your otp here\" [(ngModel)]=\"user.otp\" #otp=\"ngModel\" id=\"otp\" class=\"form-control\" type=\"number\" id=\"UserUsername\" required=\"required\"\n                />\n                <div *ngIf=\"otp.invalid && (otp.dirty || otp.touched)\" class=\"alert-bad\">\n                  <div *ngIf=\"otp.errors.required\">\n                      <i class=\"fa fa-warning\"> </i> Enter your otp.\n                  </div>\n                </div>\n              </div>\n              <div class=\"submit\">\n                <input [disabled]=\"otpForm.form.invalid\" class=\"btn btn-primary btn-block\" type=\"submit\" value=\"Verify Now\" />\n              </div>\n            </form>\n          </section>\n        </div>\n      </div>\n      <div class=\"modal-footer clear\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"resendOtp()\">Resend OTP</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">Cancel</button>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/otp/otp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_localstorage__ = __webpack_require__("../../../../ngx-localstorage/ngx-localstorage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OtpComponent = /** @class */ (function (_super) {
    __extends(OtpComponent, _super);
    function OtpComponent(dialogService, dataService, _storageService, router, spinner) {
        var _this = _super.call(this, dialogService) || this;
        _this.dataService = dataService;
        _this._storageService = _storageService;
        _this.router = router;
        _this.spinner = spinner;
        _this.user = {
            otp: '',
        };
        _this.data = {
            otp: '',
            userInfo: { contactNo: '' }
        };
        _this.otpDelivery = false;
        _this.otpDeliveryMsg = '';
        _this.cls = '';
        _this.error = '';
        return _this;
    }
    OtpComponent.prototype.ngOnInit = function () {
        this.checkOtp();
    };
    OtpComponent.prototype.checkOtp = function () {
        var startDigit = this.data.userInfo.contactNo.toString().slice(0, 2);
        var lastDigit = this.data.userInfo.contactNo.toString().slice(-2);
        if (this.data.otp !== '') {
            this.otpDelivery = true;
            this.cls = 'alert alert-success text-center';
            this.otpDeliveryMsg = "<strong>One Time Passcode has been to your register mobile i.e. " + startDigit + "xxxxxx" + lastDigit + ".</strong><hr>\n      <small>Please enter the OTP below to verify your mobile number. If you don not get OTP click on Resend OTP.</small>";
        }
    };
    OtpComponent.prototype.verifyOtp = function () {
        var _this = this;
        this.spinner.show();
        var userOtp = this.user.otp;
        var orgOtp = this.data.otp;
        if (userOtp !== orgOtp) {
            this.otpDelivery = true;
            this.cls = 'alert alert-danger text-center';
            this.otpDeliveryMsg = "<strong>One Time Passcode that you have entered not matched</strong><hr>\n      <small>Please enter the correct OTP below to verify your mobile number. If you don not get OTP click on Resend OTP.</small>";
            this.spinner.hide();
        }
        else {
            this.dataService.registerUser(this.data.userInfo).subscribe(function (data) {
                if (data.register) {
                    _this.dataService.loginUser(_this.data.userInfo).subscribe(function (loginData) {
                        if (loginData.login) {
                            _this._storageService.set('loggedUser', JSON.stringify(loginData.result), __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].storageKey);
                            _this._storageService.set('isLoggedIn', 'true', __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].storageKey);
                            _this.close();
                            // window.location.reload(true);
                        }
                        else {
                            _this.error = loginData.message;
                            _this.spinner.hide();
                        }
                    }, function (err) {
                        _this.error = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverError;
                        _this.spinner.hide();
                    }, function () {
                        _this.spinner.hide();
                    });
                }
                else {
                    _this.otpDelivery = true;
                    _this.cls = 'alert alert-danger text-center';
                    _this.otpDeliveryMsg = data.message;
                    _this.spinner.hide();
                }
            }, function (err) {
                _this.error = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverError;
                _this.spinner.hide();
            }, function () {
                _this.spinner.hide();
            });
        }
    };
    OtpComponent.prototype.resendOtp = function () {
        var _this = this;
        this.spinner.show();
        this.dataService.sendOtp().subscribe(function (data) {
            _this.orgOtp = data;
            _this.checkOtp();
        }, function (err) {
            _this.error = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serverError;
            _this.spinner.hide();
        }, function () {
            _this.spinner.hide();
        });
    };
    OtpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-otp',
            template: __webpack_require__("../../../../../src/app/otp/otp.component.html"),
            styles: [__webpack_require__("../../../../../src/app/otp/otp.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_localstorage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerService"]])
    ], OtpComponent);
    return OtpComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-template {padding: 40px 15px;text-align: center;}\r\n.error-actions {margin-top:15px;margin-bottom:15px;}\r\n.error-actions .btn { margin-right:10px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content-section\">\r\n  <div class=\"row\">\r\n    <div class=\"error-template\">\r\n      <h1>\r\n        Oops!</h1>\r\n      <h2>\r\n        404 Not Found</h2>\r\n      <div class=\"error-details\">\r\n        Sorry, an error has occured, Requested page not found!\r\n      </div>\r\n      <div class=\"error-actions\">\r\n        <a routerLink=\"/\" class=\"btn btn-primary btn-lg\">\r\n          <span class=\"glyphicon glyphicon-home\"></span>\r\n          Take Me Home </a>\r\n        <a routerLink=\"/contact\" class=\"btn btn-default btn-lg\">\r\n          <span class=\"glyphicon glyphicon-envelope\"></span> Contact Support </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content-section\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 wow bounceInLeft profile-left  animated\">\r\n      <div class=\"profile-img\">\r\n        <img src=\"assets/img/avatar-profile.png\" class=\"img-rounded\" />\r\n        <strong>\r\n          <a href=\"\">{{loggedUserInfo.customer_name | uppercase }}</a>\r\n        </strong>\r\n      </div>\r\n      <div class=\"profile-menu\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-pencil-square-o\"></i> Edit Profile\r\n              <i class=\"fa fa-arrow-circle-right pull-right\"></i>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-shopping-cart\"></i> Your Orders\r\n              <i class=\"fa fa-arrow-circle-right pull-right\"></i>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-comments\"></i> Review & Rating\r\n              <i class=\"fa fa-arrow-circle-right pull-right\"></i>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-map-marker\"></i> Address\r\n              <i class=\"fa fa-arrow-circle-right pull-right\"></i>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-picture-o\"></i> Photos\r\n              <i class=\"fa fa-arrow-circle-right pull-right\"></i>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-video-camera\"></i> Videos\r\n              <i class=\"fa fa-arrow-circle-right pull-right\"></i>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              <i class=\"fa fa-folder-open\"></i> Wallet\r\n              <i class=\"fa fa-arrow-circle-right pull-right\"></i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 padding-left-none wow bounceInRight animated\">\r\n      <div class=\"restaurant-menus\">\r\n        <strong>\r\n          <i class=\"fa fa-cutlery\"></i> RESTAURANT KEY DISHES</strong>\r\n        <img width=\"100%\" src=\"assets/img/dishes-mg.png\">\r\n        <div class=\"list-menu\">\r\n          <strong>\r\n            <i class=\"fa fa-list\"></i> TOP 5 STARTER MENU</strong>\r\n          <ul>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n          <strong>\r\n            <i class=\"fa fa-list\"></i> TOP 5 STARTER MENU</strong>\r\n          <ul>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n          <strong>\r\n            <i class=\"fa fa-list\"></i> TOP 5 STARTER MENU</strong>\r\n          <ul>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <div class=\"left\">Menu Name</div>\r\n              <div class=\"middle\">Full</div>\r\n              <div class=\"right\">\r\n                <i class=\"fa fa-rupee\"></i> 130.00\r\n                <a href=\"\">\r\n                  <img src=\"assets/img/add.png\">\r\n                </a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 wow bounceInLeft  animated\">\r\n      <strong class=\"restaurant-review\">\r\n        <i class=\"fa fa-eye\"></i> RECENT VIEWS RESTAURANTS</strong>\r\n      <div class=\"review-viewed\">\r\n        <div class=\"restaurant-logo\">\r\n          <img src=\"assets/img/restaurant_logo.jpg\">\r\n          <strong>\r\n            <i class=\"fa fa-cutlery\"></i> Chili pepper</strong>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n        <div class=\"restaurant-short-details\">\r\n          <small>\r\n            <i class=\"fa fa-map-marker\"></i>\r\n            Chilli Pepper Multi Cuisine Restaurant Rohini, Delhi NCR, India address G 89-90, Near M2K Cinemas, Aggarwal City Plaza, Sector\r\n            3, Rohini, New Delhi 110085\r\n          </small>\r\n        </div>\r\n      </div>\r\n      <div class=\"review-viewed\">\r\n        <div class=\"restaurant-logo\">\r\n          <img src=\"assets/img/restaurant_logo.jpg\">\r\n          <strong>\r\n            <i class=\"fa fa-cutlery\"></i> Chili pepper</strong>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n        <div class=\"restaurant-short-details\">\r\n          <small>\r\n            <i class=\"fa fa-map-marker\"></i>\r\n            Chilli Pepper Multi Cuisine Restaurant Rohini, Delhi NCR, India address G 89-90, Near M2K Cinemas, Aggarwal City Plaza, Sector\r\n            3, Rohini, New Delhi 110085\r\n          </small>\r\n        </div>\r\n      </div>\r\n      <div class=\"review-viewed\">\r\n        <div class=\"restaurant-logo\">\r\n          <img src=\"assets/img/restaurant_logo.jpg\">\r\n          <strong>\r\n            <i class=\"fa fa-cutlery\"></i> Chili pepper</strong>\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n        <div class=\"restaurant-short-details\">\r\n          <small>\r\n            <i class=\"fa fa-map-marker\"></i>\r\n            Chilli Pepper Multi Cuisine Restaurant Rohini, Delhi NCR, India address G 89-90, Near M2K Cinemas, Aggarwal City Plaza, Sector\r\n            3, Rohini, New Delhi 110085\r\n          </small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_localstorage__ = __webpack_require__("../../../../ngx-localstorage/ngx-localstorage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_storageService, router, spinner) {
        this._storageService = _storageService;
        this.router = router;
        this.spinner = spinner;
        this.loggedIn = false;
        this.loggedUserInfo = {
            customer_name: ''
        };
        this.spinner.show();
        if ((this._storageService.get('isLoggedIn', __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].storageKey))) {
            this.loggedIn = true;
            this.loggedUserInfo = JSON.parse(this._storageService.get('loggedUser', __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].storageKey));
            this.spinner.hide();
        }
        else {
            this.router.navigate(['/']);
        }
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_localstorage__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n  <div class=\"modal-content\" id=\"Register\">\r\n    <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n      <h4>\r\n        <i class=\"fa fa-pencil-square-o\"></i> Member Register\r\n        <br>\r\n        <small>Ready to get best offers? Let's get started!</small>\r\n      </h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"col-md-12\">\r\n        <section class=\"registration-panel\">\r\n          <form novalidate (ngSubmit)=\"register()\" #registerForm=\"ngForm\" id=\"registerForm\" accept-charset=\"utf-8\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\" id=\"basic-addon1\">\r\n                <i class=\"fa fa-user\"></i>\r\n              </span>\r\n              <input [(ngModel)]=\"user.fullName\" minlength=\"3\" #fullName=\"ngModel\" name=\"fullName\" placeholder=\"Full Name\" class=\"form-control input-addon\" type=\"text\"\r\n                id=\"fullName\" pattern=\"[a-zA-Z ]+\" required />\r\n              <div *ngIf=\"fullName.invalid && (fullName.dirty || fullName.touched)\" class=\"alert-bad\">\r\n                <div *ngIf=\"fullName.errors.required\">\r\n                    <i class=\"fa fa-warning\"></i> Full name is required.\r\n                </div>\r\n                <div *ngIf=\"fullName.errors.minlength\">\r\n                    <i class=\"fa fa-warning\"></i> Full name must be at least 3 characters long.\r\n                </div>\r\n                <div *ngIf=\"fullName.errors.pattern\">\r\n                  <i class=\"fa fa-warning\"></i> Only alphabets allowed.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\" id=\"basic-addon1\">\r\n                <i class=\"fa fa-phone\"></i>\r\n              </span>\r\n              <input [(ngModel)]=\"user.contactNo\" #contactNo=\"ngModel\" name=\"contactNo\" placeholder=\"Mobile Number (i.e xxxxxxxxxx)\" class=\"form-control input-addon\" type=\"text\"\r\n                id=\"contactNo\" minlength=\"10\" maxlength=\"10\" pattern=\"[0-9]*\" required />\r\n              <div *ngIf=\"contactNo.invalid && (contactNo.dirty || contactNo.touched)\" class=\"alert-bad\">\r\n                <div *ngIf=\"contactNo.errors.required\">\r\n                  <i class=\"fa fa-warning\"></i> Mobile number is required.\r\n                </div>\r\n                <div *ngIf=\"contactNo.errors.minlength\">\r\n                    <i class=\"fa fa-warning\"></i> Mobile number must be at least 10 digits long.\r\n                </div>\r\n                <div *ngIf=\"contactNo.errors.maxlength\">\r\n                    <i class=\"fa fa-warning\"></i> Mobile number must be at least 10 digits long.\r\n                </div>\r\n                <div *ngIf=\"contactNo.errors.pattern\">\r\n                  <i class=\"fa fa-warning\"></i> Only digits allowed.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\" id=\"basic-addon1\">\r\n                <i class=\"fa fa-envelope\"></i>\r\n              </span>\r\n              <input name=\"user.email\" placeholder=\"Email Address (i.e example@gmail.com)\" [(ngModel)]=\"user.email\" #email=\"ngModel\" class=\"form-control\" type=\"email\" id=\"email\"\r\n                required email />\r\n              <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert-bad\">\r\n                <div *ngIf=\"email.errors.required\">\r\n                  <i class=\"fa fa-warning\"></i> Email address is required.\r\n                </div>\r\n                <div *ngIf=\"email.errors.email\">\r\n                    <i class=\"fa fa-warning\"></i> Invalid email address.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\" id=\"basic-addon1\">\r\n                <i class=\"fa fa-key\"></i>\r\n              </span>\r\n              <input name=\"user.password\" placeholder=\"Password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" class=\"form-control\" type=\"password\" id=\"password\" minlength=\"6\" required />\r\n              <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert-bad\">\r\n                <div *ngIf=\"password.errors.required\">\r\n                    <i class=\"fa fa-warning\"></i> Password is required.\r\n                </div>\r\n                <div *ngIf=\"password.errors.minlength\">\r\n                    <i class=\"fa fa-warning\"></i> Password must be at least 6 characters long.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"submit\">\r\n              <input class=\"btn btn-primary btn-block\" [disabled]=\"!registerForm.form.valid\" type=\"submit\" value=\"Register\" />\r\n            </div>\r\n          </form>\r\n        </section>\r\n      </div>\r\n      <div class=\"col-md-12 is-a-member\">\r\n        <span> Already register with us?</span>\r\n        <strong>\r\n          <a id=\"signIn\" (click)='openModal(\"login\")'>Login</a>\r\n        </strong>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer clear\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"registerForm.reset()\">Reset</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otp_otp_component__ = __webpack_require__("../../../../../src/app/otp/otp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_localstorage__ = __webpack_require__("../../../../ngx-localstorage/ngx-localstorage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(dialogService, _storageService, dataService, spinner) {
        var _this = _super.call(this, dialogService) || this;
        _this._storageService = _storageService;
        _this.dataService = dataService;
        _this.spinner = spinner;
        _this.user = {
            fullName: '',
            contactNo: '',
            email: '',
            password: ''
        };
        return _this;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.openModal = function (type, data) {
        var self = this;
        self.close();
        if (type === 'login') {
            self.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], {}, { closeByClickingOutside: true });
        }
        else if (type === 'otp') {
            self.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_3__otp_otp_component__["a" /* OtpComponent */], { data: data }, { closeByClickingOutside: false });
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.spinner.show();
        var userData = this.user;
        this.dataService.sendOtp().subscribe(function (data) {
            _this.openModal('otp', { otp: data, userInfo: userData });
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
        }, function () {
            _this.spinner.hide();
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_4_ngx_localstorage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "../../../../../src/app/restaurant-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RestaurantFilterPipe = /** @class */ (function () {
    function RestaurantFilterPipe() {
    }
    RestaurantFilterPipe.prototype.transform = function (restaurants, searchQuery) {
        if (searchQuery.searchTxt === undefined && searchQuery.cuisineId === undefined) {
            return restaurants;
        }
        else if (searchQuery.searchTxt === undefined) {
            var reastr = restaurants.filter(function (restaurant) {
                if (restaurant.cuisine_id.indexOf(searchQuery.cuisineId) !== -1) {
                    return false;
                }
                else {
                    return restaurant;
                }
            });
        }
        else if (searchQuery.cuisineId === undefined) {
            return restaurants.filter(function (restaurant) {
                var rNameTmp = restaurant.restaurant_name.toLowerCase();
                var cNamesTmp = restaurant.cusineNames.toLowerCase();
                if (rNameTmp.includes(searchQuery.searchTxt.toLowerCase()) || cNamesTmp.includes(searchQuery.searchTxt.toLowerCase())) {
                    return true;
                }
            });
        }
        else {
            return restaurants.filter(function (restaurant) {
                if (restaurant.cusineNames === undefined) {
                    restaurant.cusineNames = '';
                }
                var rNameTmp = restaurant.restaurant_name.toLowerCase();
                var cNamesTmp = restaurant.cusineNames.toLowerCase();
                var lTmp = restaurant.location.toLowerCase();
                var sText = searchQuery.searchTxt.toLowerCase();
                if (rNameTmp.includes(sText) || cNamesTmp.includes(sText) || lTmp.includes(sText)) {
                    if (restaurant.cuisine_id.indexOf(searchQuery.cuisineId) !== -1) {
                        if (restaurant.min_order >= searchQuery.minOrderVal) {
                            return restaurant;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            });
        }
    };
    RestaurantFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'restaurantFilter'
        })
    ], RestaurantFilterPipe);
    return RestaurantFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/restaurant/restaurant.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".more-container {\r\n  line-height: 16px;\r\n  height: 16px;\r\n  overflow: hidden;\r\n}\r\n.show {\r\n  overflow: visible;\r\n  height: auto;\r\n}\r\na.show-more-link{color: #EB5D1E; cursor: pointer;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/restaurant/restaurant.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container content-section\">\r\n  <div class=\"col-md-12 padding-left-none padding-right-none\">\r\n    <h3 class=\"page-title\" [innerHTML]=\"pageTitle\"></h3>\r\n    <nav class=\"breadcrumb\" [innerHTML]=\"breadcrumb\"></nav>\r\n    <form #values=\"ngForm\" class=\"form-horizontal\">\r\n      <div class=\"form-group\">\r\n        <div class=\"col-sm-4\">\r\n          <input type=\"text\" class=\"form-control\" name=\"restaurantName\" [(ngModel)]=\"restaurantName\" placeholder=\"Search By Restaurant / Cuisine / Location\">\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <select name=\"cuisineName\" [(ngModel)]=\"cuisineName\" class=\"chosen-select form-control\">\r\n            <option selected value=\"\">Select Cuisine</option>\r\n            <option *ngFor=\"let cuisine of cuisines;\" value=\"{{cuisine.cuisine_id}}\">{{cuisine.cuisine_name}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <select name=\"minOrder\" [(ngModel)]=\"minOrder\"  class=\"chosen-select form-control\">\r\n            <option selected value=\"0\">Minimum Order</option>\r\n            <option *ngFor=\"let index of minOrderUpto\" value=\"{{index*100}}\">{{index*100}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div *ngFor=\"let restaurant of restaurants | restaurantFilter:{searchTxt:restaurantName,cuisineId:cuisineName,minOrderVal:minOrder};\">\r\n    <ng-container *ngIf=\"restaurant\">\r\n      <div class=\"col-md-12 pull-left restaurant-list-block padding-left-none wow bounceInRight animated\">\r\n        <div class=\"col-md-8 padding-left-none\">\r\n          <div class=\"col-md-9 padding-left-none padding-right-none restaurant-list\">\r\n            <div class=\"restaurant-logo\">\r\n              <img [src]=\"restaurant.restaurant_logo?'assets/img/restaurant_logo.jpg':''\" />\r\n            </div>\r\n            <div class=\"restaurant-short-details\">\r\n              <h5 style=\"margin-bottom:0px;\"><i class=\"fa fa-cutlery\"></i> {{restaurant.restaurant_name}}</h5>\r\n              <ng-container *ngIf=\"restaurant.cusineNames\">\r\n                <div class=\"more-container\" [ngClass]=\"selectedIndex == restaurant.restaurant_id?'show':''\">\r\n                  <small>\r\n                    {{restaurant.cusineNames}}\r\n                  </small>\r\n                </div>\r\n                <a class=\"show-more-link\" [innerHTML]=\"selectedIndex == restaurant.restaurant_id?'less &#9650;':'more &#9660;'\" (click)=\"showToggle(restaurant.restaurant_id)\"></a>\r\n              </ng-container>\r\n              <strong>\r\n                <i class=\"fa fa-map-marker\"></i>\r\n                {{restaurant.location}}\r\n              </strong>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n            <div class=\"restaurant-short-price\">\r\n              <strong>Min Order :\r\n                <small>\r\n                  <i class=\"fa fa-rupee\"></i> {{restaurant.min_order}}</small>\r\n              </strong>\r\n              <strong>Delivery Fee :\r\n                <small>\r\n                  <i class=\"fa fa-rupee\"></i> {{restaurant.delivery_charge}}</small>\r\n              </strong>\r\n              <strong>Delivery On Time :\r\n                <small>\r\n                  <i class=\"fa fa-rupee\"></i> {{restaurant.delivery_on_time}}</small>\r\n              </strong>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 restaurant-rate\">\r\n            <div>\r\n              <img height=\"75px\" width=\"75px\" src=\"assets/img/star.png\">\r\n            </div>\r\n            <div>5 Rating</div>\r\n            <div>\r\n              <a href=\"#\" class=\"btn btn-info\">Order Now</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"restaurant-video\">\r\n            <a href=\"https://www.youtube.com/embed/iqCFI2vOEq4\">\r\n              <!-- <img src=\"http://i3.ytimg.com/vi/iqCFI2vOEq4/hqdefault.jpg\"> -->\r\n            </a>\r\n          </div>\r\n          <div class=\"restaurant-thumb-images\">\r\n            <ul>\r\n              <li>\r\n                <a href=\"#\">\r\n                  <img src=\"assets/img/restaurant_logo.jpg\">\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">\r\n                  <img src=\"assets/img/restaurant_logo.jpg\">\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">\r\n                  <img src=\"assets/img/restaurant_logo.jpg\">\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">\r\n                  <img src=\"assets/img/restaurant_logo.jpg\">\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">\r\n                  <img src=\"assets/img/restaurant_logo.jpg\">\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"!(restaurants| restaurantFilter:{searchTxt:restaurantName,cuisineId:cuisineName,minOrderVal:minOrder}).length\" class=\"alert alert-danger clear text-center\">No Record matched!</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/restaurant/restaurant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_localstorage__ = __webpack_require__("../../../../ngx-localstorage/ngx-localstorage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent(dataService, spinner, _storageService) {
        this.dataService = dataService;
        this.spinner = spinner;
        this._storageService = _storageService;
        this.restaurants = [];
        this.pageTitle = 'Restaurants';
        this.breadcrumb = "<a class=\"breadcrumb-item\" href=\"#\">Home</a>\n  <span class=\"breadcrumb-item active\">Restaurants</span>";
        this.cuisines = [];
        this.restaurantName = '';
        this.cuisineName = '';
        this.resCuisine = '';
        this.selectedIndex = -1;
        this.minOrderUpto = [1, 2, 3, 4, 5];
        this.minOrder = 0;
        var searchQr = this._storageService.get('searchValue', __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].storageKey);
        if (searchQr != null) {
            this.restaurantName = searchQr;
        }
        this._storageService.remove('searchValue', __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].storageKey);
    }
    RestaurantComponent.prototype.ngOnInit = function () {
        this.getCuisines();
        this.getRestaurants();
    };
    RestaurantComponent.prototype.getRestaurants = function () {
        var _this = this;
        this.spinner.show();
        this.dataService.getRestaurants().subscribe(function (data) {
            var tempArr = [];
            var ctempArr = [];
            data.forEach(function (restaurant) {
                if (restaurant.cuisine_id !== undefined && restaurant.cuisine_id !== '') {
                    _this.dataService.geCuisinesByIds(restaurant.cuisine_id).subscribe(function (cdata) {
                        for (var i = 0; i < cdata.length; i++) {
                            ctempArr.push(cdata[i].cuisine_name);
                        }
                        restaurant.cusineNames = ctempArr.join(', ');
                    });
                }
                tempArr.push(restaurant);
            });
            _this.restaurants = tempArr;
        }, function (err) {
            _this.spinner.hide();
        }, function () {
            _this.spinner.hide();
        });
    };
    RestaurantComponent.prototype.getCuisines = function () {
        var _this = this;
        this.dataService.getCuisines()
            .subscribe(function (data) {
            _this.cuisines = data;
        }, function (err) {
        }, function () {
        });
    };
    RestaurantComponent.prototype.showToggle = function (resid) {
        if (this.selectedIndex === -1) {
            this.selectedIndex = resid;
        }
        else {
            this.selectedIndex = -1;
        }
    };
    RestaurantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-restaurant',
            template: __webpack_require__("../../../../../src/app/restaurant/restaurant.component.html"),
            styles: [__webpack_require__("../../../../../src/app/restaurant/restaurant.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_3_ngx_localstorage__["a" /* LocalStorageService */]])
    ], RestaurantComponent);
    return RestaurantComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://13.232.2.105:8081/api/',
    storageKey: 'foodstar',
    serverError: '<strong>Sorry</strong> ! Something went wrong, please try again after some time.',
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map