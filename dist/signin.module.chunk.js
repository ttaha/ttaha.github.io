webpackJsonp(["signin.module"],{

/***/ "../../../../../src/app/shared/auth/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        if (username === "admin" && password === "pass") {
            localStorage.setItem('currentUser', JSON.stringify({ username: 'admin', password: 'pass' }));
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/shared/auth/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"session mat-indigo\">\n  <div class=\"session-content\">\n    <div class=\"session-wrapper\">\n      <md-card>\n        <md-card-content>\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"text-xs-center pb-1\">\n              <img src=\"assets/images/grafty-logo-inv.png\" alt=\"\"/>\n              <p class=\"mat-text-muted\">Sign in with your app id to continue.</p>\n            </div>\n            <div fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n              <div class=\"pb-1\">\n                <md-input-container style=\"width: 100%\">\n                  <input mdInput placeholder=\"Username\" [formControl]=\"form.controls['uname']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['uname'].hasError('required') && form.controls['uname'].touched\" class=\"mat-text-warn\">Username is required.</small>\n              </div>\n              <div class=\"pb-1\">\n                <md-input-container style=\"width: 100%\">\n                  <input mdInput type=\"password\" placeholder=\"Password\" [formControl]=\"form.controls['password']\">\n                </md-input-container>\n                <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"mat-text-warn\">Password is required.</small>\n              </div>\n              <button md-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Login</button>\n            </div>\n          </form>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-indigo {\n  background-color: #F50057 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_service_base_api_service__ = __webpack_require__("../../../../../src/app/shared/api-service/base-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_index__ = __webpack_require__("../../../../../src/app/shared/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_dialog_service_dialog_service__ = __webpack_require__("../../../../../src/app/shared/dialog-service/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninComponent = /** @class */ (function () {
    function SigninComponent(dialogsService, authenticationService, apiService, fb, router, zone) {
        this.dialogsService = dialogsService;
        this.authenticationService = authenticationService;
        this.apiService = apiService;
        this.fb = fb;
        this.router = router;
        this.zone = zone;
    }
    SigninComponent.prototype.ngOnInit = function () {
        // reset login status
        //this.authenticationService.logout();
        this.form = this.fb.group({
            uname: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])], password: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])]
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var isAuth = this.authenticationService.login(this.form.controls.uname.value, this.form.controls.password.value);
        console.log(isAuth);
        if (isAuth) {
            console.log("go to groups");
            this.router.navigate(['/groups']);
        }
        else {
            this.dialogsService.alert('Wrong username/pass ', 'The username/pass you entered is wrong');
        }
        // this.apiService.post("_session", {
        //     name : this.form.controls.uname.value,
        //     password : this.form.controls.password.value
        // }).subscribe(response => {
        //     console.log('Response' + response);
        //     alert("Horray");
        //     this.router.navigate ( [ '/dashboard' ] );
        // }, error => {
        //     console.log('Response' + error);
        //     alert("Wrong username / pass");
        // });
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/signin/signin.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_api_service_base_api_service__["a" /* BaseApiService */], __WEBPACK_IMPORTED_MODULE_5__shared_dialog_service_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_4__shared_auth_index__["a" /* AuthenticationService */]],
            styles: [__webpack_require__("../../../../../src/app/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_dialog_service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_dialog_service_dialog_service__["a" /* DialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_index__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_auth_index__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_api_service_base_api_service__["a" /* BaseApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_api_service_base_api_service__["a" /* BaseApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _f || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/signin/signin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninModule", function() { return SigninModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_routing__ = __webpack_require__("../../../../../src/app/signin/signin.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SigninModule = /** @class */ (function () {
    function SigninModule() {
    }
    SigninModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__signin_routing__["a" /* SigninRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__signin_component__["a" /* SigninComponent */]
            ]
        })
    ], SigninModule);
    return SigninModule;
}());

//# sourceMappingURL=signin.module.js.map

/***/ }),

/***/ "../../../../../src/app/signin/signin.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");

var SigninRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__signin_component__["a" /* SigninComponent */]
    }];
//# sourceMappingURL=signin.routing.js.map

/***/ })

});
//# sourceMappingURL=signin.module.chunk.js.map