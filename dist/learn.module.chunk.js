webpackJsonp(["learn.module"],{

/***/ "../../../../../src/app/learn/learn.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-picture-section\">\n    <div ng2FileDrop [ng2FileDropSupportedFileTypes]=\"supportedFileTypes\" (ng2FileDropFileAccepted)=\"dragFileAccepted($event)\"\n         class=\"profile-picture-section-drop-zone\">\n        <div *ngIf=\"!imageShown\" class=profile-picture-section-request-image-group>\n            <p class=\"profile-picture-section-request-image-instructions\">Drop a profile picture here</p>\n        </div>\n        <div *ngIf=\"imageShown\" class=profile-picture-section-request-image-container>\n            <img class=profile-picture-section-request-image [src]=\"currentProfileImage\">\n        </div>\n    </div>\n    <p class=\"profile-picture-section-limitations\">Profile picture can be .png, .jpeg or .gif only</p>\n</div>\n\n<md-card>\n    <md-card-content>\n        <md-input-container class=\"ml-xs mr-xs\" style=\"width: 100%;\">\n            <input mdInput [(ngModel)]=\"name\" placeholder=\"Name\" type=\"text\" ngModel>\n        </md-input-container>\n        <button md-raised-button md-button-sm color=\"primary\" type=\"button\" (click)=\"train()\" >Train</button>\n    </md-card-content>\n</md-card>\n\n"

/***/ }),

/***/ "../../../../../src/app/learn/learn.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n    Top level drop zone styles\n*/\n.profile-picture-section {\n  margin: 30 auto;\n  padding-top: 15px; }\n\n.profile-picture-section-drop-zone {\n  margin: 0 auto;\n  border-radius: 30px;\n  width: 100px;\n  height: 100px; }\n\n/*\n    No image requests styles\n*/\n.profile-picture-section-request-image-group {\n  border-style: dashed;\n  border-width: 2px;\n  border-radius: 30px;\n  border-color: #979797;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.profile-picture-section-request-image-instructions {\n  position: relative;\n  color: #979797;\n  font-size: 12px;\n  top: 40px;\n  width: 100%; }\n\n/*\n    Profile image\n*/\n.profile-picture-section-request-image-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  border-radius: 30px; }\n\n.profile-picture-section-request-image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*\n    End of presentation limitations\n*/\n.profile-picture-section-limitations {\n  text-align: center;\n  color: #979797;\n  font-size: 12px;\n  padding-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/learn/learn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api_service_base_api_service__ = __webpack_require__("../../../../../src/app/shared/api-service/base-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dialog_service_dialog_service__ = __webpack_require__("../../../../../src/app/shared/dialog-service/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LearnComponent = /** @class */ (function () {
    function LearnComponent(apiService, dialogsService) {
        this.apiService = apiService;
        this.dialogsService = dialogsService;
        this.supportedFileTypes = ['image/png', 'image/jpeg', 'image/gif'];
        this.imageShown = false;
        this.currentProfileImage = 'assets/images/grafty-logo.png';
    }
    LearnComponent.prototype.dragFileAccepted = function (acceptedFile) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onloadend = function () {
            _this.currentProfileImage = fileReader.result;
            _this.imageShown = true;
            _this.image = fileReader.result.substr(23);
        };
        fileReader.readAsDataURL(acceptedFile.file);
    };
    LearnComponent.prototype.train = function () {
        var _this = this;
        if (this.image === undefined || this.image === '') {
            this.dialogsService.alert('Input image ', 'Please add the image you want to train.');
            return;
        }
        if (this.name === undefined || this.name === '') {
            this.dialogsService.alert('Input Name ', 'Please fill the name input above.');
            return;
        }
        var body = {
            command: 'fr-train-add',
            facename: this.name,
            image: this.image
        };
        console.log(body);
        this.apiService.frPost('train', body).subscribe(function (response) {
            console.log('Response', response);
            if (JSON.parse(response._body).result === 'success') {
                _this.dialogsService.alert('Done', 'Recognizing done');
            }
            else if (JSON.parse(response._body).result === 'fail') {
                _this.dialogsService.alert('Fail', 'Recognizing failed - No face detected');
            }
        }, function (error) {
            console.log('Error', error);
        });
    };
    LearnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-learn',
            template: __webpack_require__("../../../../../src/app/learn/learn.component.html"),
            styles: [__webpack_require__("../../../../../src/app/learn/learn.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_api_service_base_api_service__["a" /* BaseApiService */], __WEBPACK_IMPORTED_MODULE_2__shared_dialog_service_dialog_service__["a" /* DialogService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_api_service_base_api_service__["a" /* BaseApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_api_service_base_api_service__["a" /* BaseApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_dialog_service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_dialog_service_dialog_service__["a" /* DialogService */]) === "function" && _b || Object])
    ], LearnComponent);
    return LearnComponent;
    var _a, _b;
}());

//# sourceMappingURL=learn.component.js.map

/***/ }),

/***/ "../../../../../src/app/learn/learn.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnModule", function() { return LearnModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__learn_component__ = __webpack_require__("../../../../../src/app/learn/learn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__learn_routing__ = __webpack_require__("../../../../../src/app/learn/learn.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_drop__ = __webpack_require__("../../../../ng2-file-drop/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LearnModule = /** @class */ (function () {
    function LearnModule() {
    }
    LearnModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__learn_routing__["a" /* LearnRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MdRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_10_ng2_file_drop__["a" /* Ng2FileDropModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["a" /* TreeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__learn_component__["a" /* LearnComponent */]
            ]
        })
    ], LearnModule);
    return LearnModule;
}());

//# sourceMappingURL=learn.module.js.map

/***/ }),

/***/ "../../../../../src/app/learn/learn.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__learn_component__ = __webpack_require__("../../../../../src/app/learn/learn.component.ts");

var LearnRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__learn_component__["a" /* LearnComponent */]
    }];
//# sourceMappingURL=learn.routing.js.map

/***/ })

});
//# sourceMappingURL=learn.module.chunk.js.map