webpackJsonp(["faces.module"],{

/***/ "../../../../../src/app/faces/faces.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n#monitorsTable\nclass=\"material\"\n[limit]=\"5\"\n[columnMode]=\"'flex'\"\n[headerHeight]=\"50\"\n[footerHeight]=\"50\"\n[rowHeight]=\"'auto'\"\n[sortType]=\"'multi'\"\n[rows]=\"faces\">\n<ngx-datatable-column (click)=\"details(row)\" name=\"Id\" [flexGrow]=\"1\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Name\" [flexGrow]=\"1\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.value.name}}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Group\" [flexGrow]=\"1\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.value.groupId}}\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Signature\" [flexGrow]=\"1\">\n    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n      {{row.value.signature.substr(0, 6)}} ...\n    </ng-template>\n  </ngx-datatable-column>\n<ngx-datatable-column name=\"Actions\" [flexGrow]=\"2\">\n  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n    <!--<button md-raised-button md-button-sm color=\"primary\" class=\"mr-1\" (click)=\"editFace(row)\">Edit</button>-->\n    <button md-raised-button md-button-sm color=\"warn\" class=\"mr-1\" (click)=\"deleteFace(row , $event)\">Delete</button>\n  </ng-template>\n</ngx-datatable-column>\n</ngx-datatable>\n\n<button style=\"margin: 5px\" md-raised-button color=\"primary\" class=\"mr-1\" (click)=\"addGroup()\">Add</button>"

/***/ }),

/***/ "../../../../../src/app/faces/faces.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faces/faces.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_pouchdb_service_pouchdb_service__ = __webpack_require__("../../../../../src/app/shared/pouchdb-service/pouchdb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_api_service_base_api_service__ = __webpack_require__("../../../../../src/app/shared/api-service/base-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_dialog_service_dialog_service__ = __webpack_require__("../../../../../src/app/shared/dialog-service/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacesComponent = /** @class */ (function () {
    function FacesComponent(dialogsService, database, zone, apiService) {
        this.dialogsService = dialogsService;
        this.database = database;
        this.zone = zone;
        this.apiService = apiService;
        this.faces = new Array();
    }
    FacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.get('_design/faces/_view/all').subscribe(function (result) {
            console.log(result.rows);
            _this.faces = result.rows;
        }, function (error) {
            console.error('error');
        });
    };
    FacesComponent.prototype.deleteFace = function (row, $event) {
        var _this = this;
        this.dialogsService
            .confirm('Delete face ', 'Are you sure you want to delete ' + row.value.name + '?')
            .subscribe(function (res) {
            if (res) {
                _this.apiService.del(row.id + '?rev=' + row.value._sync.rev).subscribe(function (result) {
                    console.log(result);
                    _this.faces.splice(row.$$index, 1);
                }, function (error) {
                    console.error('error');
                });
            }
        });
    };
    FacesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faces',
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_pouchdb_service_pouchdb_service__["a" /* PouchdbService */], __WEBPACK_IMPORTED_MODULE_2__shared_api_service_base_api_service__["a" /* BaseApiService */]],
            template: __webpack_require__("../../../../../src/app/faces/faces.component.html"),
            styles: [__webpack_require__("../../../../../src/app/faces/faces.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_dialog_service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_dialog_service_dialog_service__["a" /* DialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_pouchdb_service_pouchdb_service__["a" /* PouchdbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_pouchdb_service_pouchdb_service__["a" /* PouchdbService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_api_service_base_api_service__["a" /* BaseApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_api_service_base_api_service__["a" /* BaseApiService */]) === "function" && _d || Object])
    ], FacesComponent);
    return FacesComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=faces.component.js.map

/***/ }),

/***/ "../../../../../src/app/faces/faces.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacesModule", function() { return FacesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__faces_component__ = __webpack_require__("../../../../../src/app/faces/faces.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__faces_routing__ = __webpack_require__("../../../../../src/app/faces/faces.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_dialog_service_dialog_service__ = __webpack_require__("../../../../../src/app/shared/dialog-service/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__ = __webpack_require__("../../../../angular2-google-maps/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var FacesModule = /** @class */ (function () {
    function FacesModule() {
    }
    FacesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__faces_routing__["a" /* FacesRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MdListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdTabsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__["AgmCoreModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__faces_component__["a" /* FacesComponent */]
            ],
            exports: [],
            entryComponents: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__shared_dialog_service_dialog_service__["a" /* DialogService */]
            ]
        })
    ], FacesModule);
    return FacesModule;
}());

//# sourceMappingURL=faces.module.js.map

/***/ }),

/***/ "../../../../../src/app/faces/faces.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__faces_component__ = __webpack_require__("../../../../../src/app/faces/faces.component.ts");

var FacesRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__faces_component__["a" /* FacesComponent */]
    }];
//# sourceMappingURL=faces.routing.js.map

/***/ })

});
//# sourceMappingURL=faces.module.chunk.js.map