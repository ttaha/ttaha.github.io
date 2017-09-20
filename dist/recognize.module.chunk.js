webpackJsonp(["recognize.module"],{

/***/ "../../../../../src/app/recognize/recognize.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-picture-section\">\n  <div ng2FileDrop [ng2FileDropSupportedFileTypes]=\"supportedFileTypes\" (ng2FileDropFileAccepted)=\"dragFileAccepted($event)\"\n       class=\"profile-picture-section-drop-zone\">\n    <div *ngIf=\"!imageShown\" class=profile-picture-section-request-image-group>\n      <p class=\"profile-picture-section-request-image-instructions\">Drop a profile picture here</p>\n    </div>\n    <div *ngIf=\"imageShown\" class=profile-picture-section-request-image-container>\n      <img class=profile-picture-section-request-image [src]=\"currentProfileImage\">\n    </div>\n  </div>\n  <p class=\"profile-picture-section-limitations\">Profile picture can be .png, .jpeg or .gif only</p>\n</div>\n<!--<div ng2FileDrop class=\"custom-component-drop-zone\"></div>-->\n\n<ngx-datatable\n        class=\"material\"\n        [rows]=\"faces\"\n        [headerHeight]=\"50\"\n        [columnMode]=\"'force'\">\n  <ngx-datatable-column name=\"Id\" [flexGrow]=\"1\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Name\" [flexGrow]=\"1\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"X\" [flexGrow]=\"1\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Y\" [flexGrow]=\"1\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"W\" [flexGrow]=\"1\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"H\" [flexGrow]=\"1\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Src\" [flexGrow]=\"1\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      <button md-raised-button md-button-sm color=\"primary\" type=\"button\" (click)=\"openImageComponent(row.src, row.x, row.y, row.w, row.h)\" >Show Image</button>\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable>"

/***/ }),

/***/ "../../../../../src/app/recognize/recognize.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n    Top level drop zone styles\n*/\n.profile-picture-section {\n  margin: 30 auto;\n  padding-top: 15px; }\n\n.profile-picture-section-drop-zone {\n  margin: 0 auto;\n  border-radius: 30px;\n  width: 100px;\n  height: 100px; }\n\n/*\n    No image requests styles\n*/\n.profile-picture-section-request-image-group {\n  border-style: dashed;\n  border-width: 2px;\n  border-radius: 30px;\n  border-color: #979797;\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n\n.profile-picture-section-request-image-instructions {\n  position: relative;\n  color: #979797;\n  font-size: 12px;\n  top: 40px;\n  width: 100%; }\n\n/*\n    Profile image\n*/\n.profile-picture-section-request-image-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  border-radius: 30px; }\n\n.profile-picture-section-request-image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n/*\n    End of presentation limitations\n*/\n.profile-picture-section-limitations {\n  text-align: center;\n  color: #979797;\n  font-size: 12px;\n  padding-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recognize/recognize.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecognizeComponent; });
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



var RecognizeComponent = /** @class */ (function () {
    function RecognizeComponent(apiService, dialogService) {
        this.apiService = apiService;
        this.dialogService = dialogService;
        this.faces = [];
        this.supportedFileTypes = ['image/png', 'image/jpeg', 'image/gif'];
        this.imageShown = false;
        this.currentProfileImage = 'assets/images/grafty-logo.png';
    }
    RecognizeComponent.prototype.dragFileAccepted = function (acceptedFile) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onloadend = function () {
            _this.currentProfileImage = fileReader.result;
            _this.imageShown = true;
            var body = {
                command: 'fr-test',
                image: fileReader.result.substr(23)
            };
            _this.apiService.frPost('test', body).subscribe(function (response) {
                console.log('Response', response);
                _this.addToArray(JSON.parse(response._body).faces[0], fileReader.result);
            }, function (error) {
                console.error('Error', error);
            });
        };
        fileReader.readAsDataURL(acceptedFile.file);
    };
    RecognizeComponent.prototype.openImageComponent = function (src, x, y, w, h) {
        this.dialogService.showImage(src, x, y, w, h);
    };
    RecognizeComponent.prototype.addToArray = function (face, result) {
        face.src = result;
        this.faces = [];
        this.faces.push(face);
    };
    RecognizeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recognize',
            template: __webpack_require__("../../../../../src/app/recognize/recognize.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recognize/recognize.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_api_service_base_api_service__["a" /* BaseApiService */], __WEBPACK_IMPORTED_MODULE_2__shared_dialog_service_dialog_service__["a" /* DialogService */]],
            entryComponents: []
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_api_service_base_api_service__["a" /* BaseApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_api_service_base_api_service__["a" /* BaseApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_dialog_service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_dialog_service_dialog_service__["a" /* DialogService */]) === "function" && _b || Object])
    ], RecognizeComponent);
    return RecognizeComponent;
    var _a, _b;
}());

//# sourceMappingURL=recognize.component.js.map

/***/ }),

/***/ "../../../../../src/app/recognize/recognize.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognizeModule", function() { return RecognizeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recognize_component__ = __webpack_require__("../../../../../src/app/recognize/recognize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recognize_routing__ = __webpack_require__("../../../../../src/app/recognize/recognize.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_drop__ = __webpack_require__("../../../../ng2-file-drop/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RecognizeModule = /** @class */ (function () {
    function RecognizeModule() {
    }
    RecognizeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__recognize_routing__["a" /* RecognizeRoutes */]),
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
                __WEBPACK_IMPORTED_MODULE_8__recognize_component__["a" /* RecognizeComponent */]
            ],
            exports: [],
            entryComponents: [],
        })
    ], RecognizeModule);
    return RecognizeModule;
}());

//# sourceMappingURL=recognize.module.js.map

/***/ }),

/***/ "../../../../../src/app/recognize/recognize.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecognizeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recognize_component__ = __webpack_require__("../../../../../src/app/recognize/recognize.component.ts");

var RecognizeRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__recognize_component__["a" /* RecognizeComponent */]
    }];
//# sourceMappingURL=recognize.routing.js.map

/***/ })

});
//# sourceMappingURL=recognize.module.chunk.js.map