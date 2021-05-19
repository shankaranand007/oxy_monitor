(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: "", component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
    },
    {
        path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/main.service */ "./src/app/shared/services/main.service.ts");
/* harmony import */ var _home_btn_cell_btn_cell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/btn-cell/btn-cell.component */ "./src/app/home/btn-cell/btn-cell.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var config = { url: 'http://164.52.210.197:4000', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _home_btn_cell_btn_cell_component__WEBPACK_IMPORTED_MODULE_12__["BtnCellComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__["SocketIoModule"].forRoot(config),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([_home_btn_cell_btn_cell_component__WEBPACK_IMPORTED_MODULE_12__["BtnCellComponent"]])
            ],
            providers: [
                _shared_services_main_service__WEBPACK_IMPORTED_MODULE_11__["MainService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/btn-cell/btn-cell.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/btn-cell/btn-cell.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0 flex-row flex-nowrap\">\n\n  <div *ngIf=\"params.btn?.includes('viewB')\" class=\"\">\n    <button class=\"btn btn-sm btn-secondary mb-1 mr-2\" type=\"button\" (click)=\"onClick($event, 'viewB')\" name=\"button\" style=\"line-height:1\">view</button>\n  </div>\n  <div *ngIf=\"params.btn?.includes('close') && params.close\" class=\"\">\n    <button class=\"btn btn-sm btn-danger mb-1\" type=\"button\" (click)=\"onClick($event, 'closeB')\" name=\"button\" style=\"line-height:1\">Close</button>\n  </div>\n  <div *ngIf=\"params.btn?.includes('viewV')\" class=\"\">\n    <button class=\"btn btn-sm btn-secondary mb-1 mr-2\" type=\"button\" (click)=\"onClick($event, 'viewV')\" name=\"button\" style=\"line-height:1\">view</button>\n  </div>\n  <div *ngIf=\"params.btn?.includes('edit')\" class=\"\">\n    <button class=\"btn btn-sm btn-success mb-1 mr-2\" (click)=\"onClick($event, 'edit')\"  type=\"button\" name=\"button\" style=\"line-height:1\">Edit</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/btn-cell/btn-cell.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/btn-cell/btn-cell.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYnRuLWNlbGwvYnRuLWNlbGwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/btn-cell/btn-cell.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/btn-cell/btn-cell.component.ts ***!
  \*****************************************************/
/*! exports provided: BtnCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnCellComponent", function() { return BtnCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';
var BtnCellComponent = /** @class */ (function () {
    function BtnCellComponent() {
    }
    BtnCellComponent.prototype.agInit = function (params) {
        this.params = params;
        this.label = this.params.label || null;
        if (params.data.status == 'delivered') {
            var exp_return_date = new Date((new Date(params.data.exp_return_date)).toDateString());
            var today = new Date((new Date()).toDateString());
            if (today >= exp_return_date) {
                params.close = true;
                params.data.status = 'to be returned';
            }
            else {
                params.data.status = 'delivered';
            }
        }
    };
    BtnCellComponent.prototype.refresh = function (params) {
        return true;
    };
    BtnCellComponent.prototype.onClick = function ($event, btn) {
        console.log(this.params);
        if (btn == 'edit') {
            this.params.parent.editVolunteer(this.params.data);
        }
        if (btn == 'viewV') {
            this.params.parent.viewVolunteer(this.params.data);
        }
        if (btn == 'viewB') {
            this.params.parent.viewBooking(this.params.data);
            this.params.parent.setCurrentBooking(this.params.data);
        }
        if (btn == 'closeB') {
            this.params.parent.closeBooking(this.params.data);
        }
        if (this.params.onClick instanceof Function) {
            // put anything into params u want pass into parents component
            var params = {
                event: $event,
                rowData: this.params.node.data
                // ...something
            };
            this.params.onClick(params);
        }
    };
    BtnCellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-btn-cell',
            template: __webpack_require__(/*! ./btn-cell.component.html */ "./src/app/home/btn-cell/btn-cell.component.html"),
            styles: [__webpack_require__(/*! ./btn-cell.component.scss */ "./src/app/home/btn-cell/btn-cell.component.scss")]
        })
    ], BtnCellComponent);
    return BtnCellComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100\">\n  <div id=\"cards\" class=\"container-lg p-lg-5 p-3\">\n    <div class=\"row h-100\">\n\n      <div class=\"col\">\n        <div class=\"card h-100 shadow border-0\">\n          <div class=\"card-body d-flex align-items-center\">\n            <div class=\"\">\n              <h6 class=\"mb-3 text-muted\">Total Delivered</h6>\n              <h5>OC - {{dashboard.totalCount?.Number_of_cylinder || 0}}</h5>\n              <h5>PO - {{dashboard.totalCount?.available_oxy_meters || 0}}</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col\">\n        <div class=\"card h-100 shadow border-0\">\n          <div class=\"card-body d-flex align-items-center\">\n            <div class=\"\">\n              <h6 class=\"mb-3 text-muted\">Delivered Today</h6>\n              <h5>OC - {{dashboard.todayCount?.Number_of_cylinder || 0}}</h5>\n              <h5>PO - {{dashboard.todayCount?.available_oxy_meters || 0}}</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col\">\n        <div class=\"card h-100 shadow border-0\">\n          <div class=\"card-body d-flex align-items-center\">\n            <div class=\"\">\n              <h6 class=\"mb-3 text-muted\">Available Stock</h6>\n              <h5>OC - {{available.oc || 0}}</h5>\n              <h5>PO - {{available.po || 0}}</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col\">\n        <div class=\"card h-100 shadow border-0\">\n          <div class=\"card-body d-flex align-items-center\">\n            <div class=\"\">\n              <h6 class=\"mb-3 text-muted\">Returns for Today</h6>\n              <h5>OC - {{dashboard.todayReturn?.available_oxygen_cylinder || 0}}</h5>\n              <h5>PO - {{dashboard.todayReturn?.available_oxy_meters || 0}}</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"sidebar\">\n    <nav id=\"sidenav\" class=\"nav flex-column\">\n      <a #tab1 class=\"nav-link active\" data-target=\"tab1\" aria-current=\"page\" (click)=\"switchTab(tab1)\">Volunteer</a>\n      <a #tab2 class=\"nav-link\" data-target=\"tab2\" (click)=\"switchTab(tab2)\">Stock</a>\n      <a #tab4 class=\"nav-link\" data-target=\"tab4\" (click)=\"switchTab(tab4)\">Bookings</a>\n      <a #tab3 class=\"nav-link\" data-target=\"tab3\" (click)=\"switchTab(tab3)\">Reports</a>\n      <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n    </nav>\n  </div>\n  <div id=\"main-section\" class=\"main-section p-3 border-top\">\n\n    <div id=\"tab1\" class=\"h-100 mx-auto\" style=\"display:block; max-width:920px\">\n      <div class=\"card-100 overflow-y-auto\">\n        <div class=\"text-right\">\n          <button class=\"btn btn-success mb-3\" type=\"submit\" name=\"button\" (click)=\"addVolunteer()\"> Add New Volunteer </button>\n        </div>\n        <ag-grid-angular\n        \tstyle=\"width: 100%; height: 300px;\"\n        \tclass=\"ag-theme-balham\"\n        \t[rowData]=\"volunteers\"\n        \t[columnDefs]=\"volColumnDefs\"\n          [frameworkComponents]=\"frameworkComponents\"\n          (gridReady)=\"onGridReady($event)\">\n        </ag-grid-angular>\n\n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"volunteerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"volunteerModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"volunteerModalLabel\">Voluteer Form</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n\n              <div class=\"modal-body\">\n                <form #volForm=\"ngForm\">\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Name<span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"volunteerForm.name\" type=\"text\" name=\"name\">\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Phone No<span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"volunteerForm.phone\" type=\"number\" name=\"phone\" required>\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Alternate Phone No</label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"volunteerForm.altPhone\" type=\"number\" name=\"altPhone\">\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Address Line 1<span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"volunteerForm.line1\" name=\"line1\" type=\"text\" required>\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Address Line 2</label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"volunteerForm.line2\" name=\"line2\" type=\"text\">\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">District<span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"volunteerForm.district\" name=\"district\" type=\"text\" required>\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">State<span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"volunteerForm.state\" name=\"state\" type=\"text\" required>\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Pincode<span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"volunteerForm.pincode\" name=\"pincode\" type=\"number\" required>\n                    </div>\n                  </div>\n                </form>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button class=\"btn btn-success\" type=\"button\" data-dismiss=\"modal\" (click)=\"onSubmit(volForm)\" name=\"button\" [disabled]=\"volForm.invalid\"> + Add Volunteer </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div id=\"tab2\" class=\"h-100 mx-auto\" style=\"display:none; max-width:920px\">\n      <div class=\"\">\n\n        <div class=\"text-right mb-3\">\n          <button class=\"btn btn-success\" type=\"button\" name=\"button\" data-toggle=\"modal\" data-target=\"#stockModal\" (click)=\"stockForm.oc=available.oc; stockForm.po=available.po\">Edit</button>\n        </div>\n\n        <div class=\"row mb-3\">\n          <div class=\"col-md-6\">\n            <div class=\"card border-0 shadow h-100\">\n              <div class=\"card-body\">\n                <h4 class=\"text-muted\">Available Oxygen Concentrators</h4>\n                <h3>{{available.oc || \"0\"}}</h3>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"card border-0 shadow h-100\">\n              <div class=\"card-body\">\n                <h4 class=\"text-muted\">Available Pulse Oxymeters</h4>\n                <h3>{{available.po || '0'}}</h3>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"modal fade\" id=\"stockModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"stockModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"stockModalLabel\">Stock Availablity</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n\n              <div class=\"modal-body\">\n                <form #stkForm=\"ngForm\">\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Oxygen Concentrators<span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"stockForm.oc\" type=\"number\" name=\"oc\">\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Pulse Oxymeters<span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"stockForm.po\" type=\"number\" name=\"po\">\n                    </div>\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"stockForm=available\">Close</button>\n                <button class=\"btn btn-success\" type=\"button\" name=\"button\" (click)=\"saveStock()\"> Save </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div id=\"tab3\" class=\"h-100 mx-auto\" style=\"display:none; max-width:920px\">\n      <div class=\"row\">\n\n        <div class=\"col-lg-4 col-md-6 col-12 h-100\">\n          <div class=\"card bg-secondary text-light my-3 shadow h-100\">\n            <div class=\"card-body\">\n              <h4>Total Bookings</h4>\n              <h3>OC : {{reports?.all?.Number_of_cylinder}}</h3>\n              <h3>PO : {{reports?.all?.Number_of_monitorKid}}</h3>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 col-12 h-100\">\n          <div class=\"card my-3 shadow h-100\">\n            <div class=\"card-body\">\n              <h4 class=\"text-muted\">Open Bookings</h4>\n              <h3>OC : {{reports?.open?.Number_of_cylinder}}</h3>\n              <h3>PO : {{reports?.open?.Number_of_monitorKid}}</h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 col-12 h-100\">\n          <div class=\"card my-3 shadow h-100\">\n            <div class=\"card-body\">\n              <h4 class=\"text-muted\">Rejected Bookings</h4>\n              <h3>OC : {{reports?.rejected?.Number_of_cylinder}}</h3>\n              <h3>PO : {{reports?.rejected?.Number_of_monitorKid}}</h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 col-12 h-100\">\n          <div class=\"card my-3 shadow h-100\">\n            <div class=\"card-body\">\n              <h4 class=\"text-muted\">Delivered</h4>\n              <h3>OC : {{reports?.delivered?.Number_of_cylinder}}</h3>\n              <h3>PO : {{reports?.delivered?.Number_of_monitorKid}}</h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 col-12 h-100\">\n          <div class=\"card my-3 shadow h-100\">\n            <div class=\"card-body\">\n              <h4 class=\"text-muted\">Completed</h4>\n              <h3>OC : {{reports?.closed?.Number_of_cylinder}}</h3>\n              <h3>PO : {{reports?.closed?.Number_of_monitorKid}}</h3>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"tab4\" class=\"h-100 mx-auto\" style=\"display:none; max-width:920px\">\n      <div class=\"\">\n\n        <ag-grid-angular\n          style=\"width: 100%; height: 300px;\"\n          class=\"ag-theme-balham\"\n          [rowData]=\"bookings\"\n          [columnDefs]=\"bookingColumnDefs\"\n          [frameworkComponents]=\"frameworkComponents\"\n          (gridReady)=\"onGridReady($event)\">\n        </ag-grid-angular>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"viewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"viewModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"viewModalLabel\">{{viewVar.title || \"\"}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <div *ngFor=\"let item of viewVar.content\" class=\"row mb-3\">\n          <div class=\"col-6\">\n            {{item.label}}\n          </div>\n          <div class=\"col-6\">\n            <span *ngIf=\"item.pipe == 'date'\">{{item.value | date: (item.format ? item.format: 'medium')}}</span>\n            <span *ngIf=\"item.pipe != 'date'\">{{item.value}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <div *ngIf=\"viewVar.type=='B' && viewVar.status == 'open'\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"reject()\" data-dismiss=\"modal\">Reject</button>\n        </div>\n        <div *ngIf=\"viewVar.type=='B' && viewVar.status == 'open'\">\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"approve()\" data-dismiss=\"modal\">Approve & Deliver</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cards {\n  height: 15rem; }\n\n.sidebar {\n  width: 15rem;\n  height: calc(100% - 15rem);\n  background: #536b7d; }\n\n.main-section {\n  background-color: #fff;\n  position: absolute;\n  margin-top: 15rem;\n  margin-left: 15rem;\n  top: 0;\n  height: calc(100% - 15rem);\n  width: calc(100% - 15rem) !important; }\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\ninput[type=number] {\n  -moz-appearance: textfield; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFua2FyYW5hbmQvRGVza3RvcC9Qcm9qamVjdHMvb3h5X21vbml0b3Ivb3h5X21vbml0b3Ivc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osMkJBQTBCO0VBQzFCLG9CQUNGLEVBQUM7O0FBRUQ7RUFDRSx1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLDJCQUEwQjtFQUMxQixxQ0FBb0MsRUFDckM7O0FBRUQ7O0VBRUUseUJBQXdCO0VBQ3hCLFVBQVMsRUFDVjs7QUFFRDtFQUNFLDJCQUEwQixFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJkcyB7XHJcbiAgaGVpZ2h0OiAxNXJlbTtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIHdpZHRoOiAxNXJlbTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE1cmVtKTtcclxuICBiYWNrZ3JvdW5kOiAjNTM2YjdkXHJcbn1cclxuXHJcbi5tYWluLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDE1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXJlbTtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNXJlbSk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cmVtKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/main.service */ "./src/app/shared/services/main.service.ts");
/* harmony import */ var _btn_cell_btn_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btn-cell/btn-cell.component */ "./src/app/home/btn-cell/btn-cell.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, router, mainService) {
        this.route = route;
        this.router = router;
        this.mainService = mainService;
        this.volunteerForm = {};
        this.volColumnDefs = [
            { headerName: 'Name', field: 'name' },
            { headerName: 'Phone Number', field: 'phoneNumber' },
            { headerName: 'Alternate Phome Number', field: 'alt_phoneNumber' },
            { headerName: 'Action', cellRenderer: 'buttonRenderer', cellRendererParams: { parent: this, btn: ['viewV', 'edit'] }, pinned: 'right', width: 120 }
        ];
        this.bookingColumnDefs = [
            { headerName: 'Patient\'s Name', field: 'user_details.Patient_Name', width: 150 },
            { headerName: 'Phone Number', field: 'phoneNumber', width: 150 },
            { headerName: 'Oxygen Concentrator', field: 'Number_of_cylinder', width: 150 },
            { headerName: 'Pulse Oxydators', field: 'Number_of_monitorKid', width: 150 },
            { headerName: 'Status', field: 'status', width: 150 },
            { headerName: 'Action', cellRenderer: 'buttonRenderer', cellRendererParams: { parent: this, btn: ['viewB', 'close'] }, pinned: 'right', width: 120 }
        ];
        this.dashboard = {};
        this.available = {};
        this.reports = {};
        this.volunteers = [];
        this.bookings = [];
        this.viewVar = {};
        this.stockForm = {};
        this.frameworkComponents = {
            buttonRenderer: _btn_cell_btn_cell_component__WEBPACK_IMPORTED_MODULE_2__["BtnCellComponent"]
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('login'));
        if (localStorage.getItem('login')) {
            this.getAllVolunteer();
            this.getAllBookings();
            this.getDashboard();
            this.getAvailableStock();
            this.getReports();
        }
        else {
            window.alert('Session expired! Please login');
            this.router.navigate(['login']);
        }
    };
    HomeComponent.prototype.getAllVolunteer = function () {
        var _this = this;
        this.mainService.getAllVolunteer().subscribe(function (data) {
            if (data.output) {
                _this.volunteers = data.output;
            }
        });
    };
    HomeComponent.prototype.getAllBookings = function () {
        var _this = this;
        this.mainService.getAllBookings().subscribe(function (data) {
            if (data.output) {
                _this.bookings = data.output;
            }
        });
    };
    HomeComponent.prototype.getDashboard = function () {
        var _this = this;
        this.mainService.dashboard().subscribe(function (data) {
            if (data.output) {
                _this.dashboard = data.output;
            }
        });
    };
    HomeComponent.prototype.getReports = function () {
        var _this = this;
        this.mainService.getReports().subscribe(function (data) {
            if (data.output) {
                _this.reports = data.output;
            }
        });
    };
    HomeComponent.prototype.getAvailableStock = function () {
        var _this = this;
        this.mainService.getAvailableStock().subscribe(function (data) {
            if (data.output) {
                _this.available.oc = data.output.available_oxygen_cylinder;
                _this.available.po = data.output.available_oxy_meters;
            }
        });
    };
    HomeComponent.prototype.viewVolunteer = function (data) {
        console.log(data);
        this.viewVar = {
            type: 'V',
            title: 'Volunteer Details',
            content: [
                { label: "Name", value: data.name },
                { label: "Phone Number", value: data.phoneNumber },
                { label: "Alternate Phone Number", value: data.alt_phoneNumber },
                { label: "Address Line 1", value: data.address1 },
                { label: "Address Line 2", value: data.address2 },
                { label: "District", value: data.district },
                { label: "State", value: data.state },
                { label: "Pincode", value: data.pincode }
            ]
        };
        $('#viewModal').modal('show');
    };
    HomeComponent.prototype.viewBooking = function (data) {
        this.viewVar = {
            type: 'B',
            status: data.status,
            title: 'Booking Details',
            content: [
                { label: "Patient's Name", value: data.user_details.Patient_Name },
                { label: "Gender", value: data.user_details.Gender },
                { label: "Age", value: data.user_details.Age },
                { label: "SpO2(Oxygen) Level", value: data.user_details.SPO2 },
                { label: "Comorbidities", value: data.user_details.Comorbidities },
                { label: "Symptoms", value: data.user_details.Symptoms },
                { label: "Covid+ Since", value: data.user_details.CovidSince },
                { label: "Mobile No", value: data.user_details.phoneNumber },
                { label: "Address", value: data.user_details.Address },
                { label: "Landmark", value: data.user_details.Landmark },
                { label: "Booked At", value: new Date(data.create_time), pipe: 'date' }
            ]
        };
        if (data.approve_reject_date) {
            if (data.status == 'rejected') {
                this.viewVar.content.push({ label: 'Rejected At', value: new Date(data.approve_reject_date), pipe: 'date' });
            }
            else {
                this.viewVar.content.push({ label: 'Approved At', value: new Date(data.approve_reject_date), pipe: 'date' });
            }
        }
        if (data.exp_return_date && data.status != 'rejected') {
            this.viewVar.content.push({ label: 'Expected Return Date', value: new Date(data.approve_reject_date), pipe: 'date', format: 'mediumDate' });
        }
        if (data.act_return_date && data.status != 'rejected') {
            this.viewVar.content.push({ label: 'Actually Returned At', value: new Date(data.approve_reject_date), pipe: 'date' });
        }
        if (data.reason && data.status == 'rejected') {
            this.viewVar.content.push({ label: 'Reason For Rejection', value: data.reason });
        }
        $('#viewModal').modal('show');
    };
    HomeComponent.prototype.addVolunteer = function () {
        this.volunteerForm = {};
        $('#volunteerModal').modal('show');
    };
    HomeComponent.prototype.editVolunteer = function (data) {
        this.volunteerForm = {
            name: data.name,
            phone: data.phoneNumber,
            altPhone: data.alt_phoneNumber,
            line1: data.address1,
            line2: data.address2,
            district: data.district,
            state: data.state,
            pincode: data.pincode
        };
        $('#volunteerModal').modal('show');
    };
    HomeComponent.prototype.setCurrentBooking = function (item) {
        this.currentBooking = item;
    };
    HomeComponent.prototype.getCurrentBooking = function () {
        return this.currentBooking;
    };
    HomeComponent.prototype.approve = function () {
        var _this = this;
        this.mainService.approve(this.getCurrentBooking()).subscribe(function (data) {
            if (data.output) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Success!',
                    text: 'Approved a booking succesfully!',
                    icon: 'success',
                    confirmButtonText: 'Close'
                }).then(function (value) {
                    _this.getAllBookings();
                    _this.getAvailableStock();
                });
            }
        });
    };
    HomeComponent.prototype.reject = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Reason rejection',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Reject',
            confirmButtonColor: "#dc3545",
            showLoaderOnConfirm: true,
            allowOutsideClick: function () { return !sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.isLoading(); }
        }).then(function (result) {
            if (result.value) {
                console.log(result.value);
                _this.mainService.rejectBooking(_this.getCurrentBooking(), result.value).subscribe(function (data) {
                    if (data.output) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: 'Success!',
                            text: 'A booking has been rejected succesfully!!',
                            icon: 'warning',
                            confirmButtonText: 'Close'
                        }).then(function (value) {
                            _this.getAllBookings();
                        });
                    }
                    else {
                        _this.errorAlert();
                    }
                });
            }
        });
    };
    HomeComponent.prototype.closeBooking = function (data) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure want close this booking?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            showLoaderOnConfirm: true
        }).then(function (result) {
            if (result.value) {
                _this.mainService.closeBooking(data).subscribe(function (data) {
                    if (data.output) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: 'Success!',
                            text: 'A booking has been closed succesfully!!',
                            icon: 'success',
                            confirmButtonText: 'Close'
                        }).then(function (value) {
                            _this.getAllBookings();
                        });
                    }
                    else {
                        _this.errorAlert();
                    }
                });
            }
        });
    };
    HomeComponent.prototype.switchTab = function (tab) {
        var tabs = document.getElementById('sidenav').children;
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].classList.contains('active')) {
                $(tabs[i]).removeClass('active');
                break;
            }
        }
        tab.classList.add('active');
        var contents = document.getElementById('main-section').children;
        for (var i = 0; i < contents.length; i++) {
            contents[i].style ? contents[i].style.display = 'none' : "";
        }
        var content = document.getElementById(tab.attributes['data-target'].value);
        content.style.display = "block";
    };
    HomeComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.mainService.addVolunteer(this.formatData(form.value), form.value.phone).subscribe(function (data) {
            if (data.output) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Success!',
                    text: 'Volunteer added succesfully!',
                    icon: 'success',
                    confirmButtonText: 'Close'
                }).then(function (value) {
                    _this.getAllVolunteer();
                });
            }
        });
    };
    HomeComponent.prototype.formatData = function (item) {
        return {
            phoneNumber: item.phone,
            alt_phoneNumber: item.altPhone,
            name: item.name,
            address1: item.line1,
            address2: item.line2,
            district: item.district,
            state: item.state,
            pincode: item.pincode
        };
    };
    HomeComponent.prototype.saveStock = function () {
        var _this = this;
        this.mainService.saveStock(this.stockForm).subscribe(function (data) {
            if (data.output) {
                $('#stockModal').modal('hide');
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Success!',
                    text: 'Stock saved succesfully!',
                    icon: 'success',
                    confirmButtonText: 'Close'
                }).then(function (value) {
                    _this.stockForm = {};
                    _this.getAvailableStock();
                });
            }
        });
    };
    HomeComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['login']);
    };
    HomeComponent.prototype.errorAlert = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Error!',
            text: 'Something went wrong!!',
            icon: 'error',
            confirmButtonText: 'Close'
        });
    };
    HomeComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        // this.http
        //   .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
        //   .subscribe((data) => {
        //     this.rowData = data;
        //   });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-100\">\n  <div class=\"row h-desktop-100\">\n    <div class=\"col-md-6 border-right d-flex align-items-center h-100 justify-content-center p-0\">\n      <img src=\"assets/4.jpeg\" alt=\"\">\n    </div>\n    <div class=\"col-md-6 border-left d-flex flex-row align-items-center h-100 justify-content-center p-3 py-5\" style=\"overflow-y: auto\">\n      <div class=\"my-auto\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-xs-12\">\n            <div class=\"card h-100 shadow mx-auto text-center\" style=\"max-width:300px; max-height: 500px\">\n              <div class=\"px-3\">\n                <h6 class=\"card-title mb-0\">Oxygen Concentrators</h6>\n              </div>\n              <div class=\"card-body py-0 h-100\">\n                <div class=\"d-flex align-items-center justify-content-center h-100\">\n                  <div class=\"mb-3\">\n                    <img src=\"assets/2.jfif\" alt=\"\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-footer pb-3\">\n                <div id=\"stock-oc\" class=\"stock mx-auto px-3 py-2\" [ngClass]=\"(available.oc > 0) ? 'success': 'danger'\">\n                  <span *ngIf=\"(available.oc > 0)\">In Stock: {{available.oc}}</span>\n                  <span *ngIf=\"!available.oc || available.oc == 0\">Out of Stock</span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-sm-6 col-xs-12 mt-5 mt-sm-0\">\n            <div class=\"card h-100 shadow mx-auto text-center\" style=\"max-width:300px; max-height: 500px\">\n              <div class=\"px-3\">\n                <h6 class=\"card-title mb-0\">Pulse Oxymeters</h6>\n              </div>\n              <div class=\"card-body py-0 h-100\">\n                <div class=\"d-flex align-items-center justify-content-center h-100\">\n                  <div class=\"mb-3\">\n                    <img src=\"assets/3.jfif\" alt=\"\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-footer pb-3\">\n                <div id=\"stock-po\" class=\"stock mx-auto px-3 py-2\" [ngClass]=\"(available.po > 0) ? 'success': 'danger'\">\n                  <span *ngIf=\"(available.po > 0)\">In Stock: {{available.po}}</span>\n                  <span *ngIf=\"!available.po || available.po == 0\">Out of Stock</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-12 pt-3\" id=\"forms\">\n            <div class=\"card card-body shadow mt-3\">\n              <div id=\"sendOtp\">\n                <h4 class=\"text-center text-muted mb-3\">BOOK NOW</h4>\n                <form #otpForm=\"ngForm\" class=\"form-group mx-auto\">\n                  <div class=\"mb-3\">\n                    <ng-select class=\"w-100\" [items]=\"itemList\" [(ngModel)]=\"form1.need\" name=\"need\" placeholder=\"Choose any one\" required></ng-select>\n                  </div>\n                  <div class=\"mb-3\">\n                    <input #mobile class=\"form-control\" [(ngModel)]=\"form1.mobile\" type=\"number\" name=\"mobile\" placeholder=\"Mobile Number\" required>\n                  </div>\n                  <div class=\"text-center\">\n                    <button class=\"btn btn-success\" type=\"button\" name=\"button\" (click)=\"sendOTP(otpForm)\" [disabled]=\"otpForm.invalid\">Send OTP</button>\n                  </div>\n                </form>\n              </div>\n\n              <div id=\"verify\" style=\"display: none\">\n                <form #verifyForm=\"ngForm\" class=\"form-group mx-auto\">\n                  <h4 class=\"text-center text-muted mb-3\">VERIFY OTP</h4>\n                  <div class=\"mb-3\">\n                    <input class=\"form-control\" #otpModel maxlength=\"4\" max=\"9999\" [(ngModel)]=\"otp\" type=\"number\" name=\"otp\" placeholder=\"Enter OTP\">\n                  </div>\n                  <div class=\"text-center\">\n                    <button class=\"btn btn-success\" type=\"button\" name=\"button\" (click)=\"verifyOtp(verifyForm.controls.otp)\">Next Step</button>\n                  </div>\n                </form>\n              </div>\n\n              <div id=\"details\" style=\"display: none\">\n                <form (ngSubmit)=\"onSubmit(detailsForm)\" #detailsForm=\"ngForm\" class=\"form-group mx-auto\" style=\"max-width: 720px\">\n                  <h4 class=\"text-center text-muted mb-3\">Personal Details</h4>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Patient's Name <span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"form3.name\" type=\"text\" name=\"name\" required>\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Gender <span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <ng-select class=\"w-100\" [items]=\"genderList\" [(ngModel)]=\"form3.gender\" name=\"gender\" required></ng-select>\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Age <span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"form3.age\" type=\"number\" name=\"age\" required>\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">SpO2(Oxygen) Level</label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"form3.spo2\" type=\"text\" name=\"spo2\">\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Comorbidities</label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <ng-select class=\"w-100\" [multiple]=\"true\" [items]=\"comorbiditiesList\" [(ngModel)]=\"form3.comorbidities\" name=\"comorbidities\"></ng-select>\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Symptoms</label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <ng-select class=\"w-100\" [multiple]=\"true\" [items]=\"symptomsList\" [(ngModel)]=\"form3.symptoms\" name=\"symptoms\"></ng-select>\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Covid+ Since</label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"form3.covidSince\" name=\"covidSince\" type=\"date\">\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Mobile No</label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"form3.mobile\" type=\"number\" name=\"mobile\">\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Address <span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <textarea class=\"form-control\" [(ngModel)]=\"form3.address\" name=\"address\" rows=\"4\" cols=\"80\" required></textarea>\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Landmark <span class=\"text-danger\">*</span></label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control\" [(ngModel)]=\"form3.landmark\" name=\"landmark\" type=\"text\" required>\n                    </div>\n                  </div>\n\n                  <div class=\"row mb-3\">\n                    <div class=\"col-lg-4 text-muted\">\n                      <label for=\"\">Aadhaar</label>\n                    </div>\n                    <div class=\"col-lg-8\">\n                      <input class=\"form-control-file\" [(ngModel)]=\"form3.aadhar\" name=\"aadhar\" type=\"file\" accept=\"image/*\" (change)=\"onUpload($event)\">\n                    </div>\n                  </div>\n\n                  <div class=\"text-center\">\n                    <button class=\"btn btn-success\" type=\"submit\" name=\"button\" [disabled]=\"detailsForm.invalid\">Submit</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 768px) {\n  .h-desktop-100 {\n    height: 100%; } }\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\ninput[type=number] {\n  -moz-appearance: textfield; }\n\nimg {\n  max-width: 100%;\n  max-height: 100%; }\n\nlabel {\n  font-weight: 600;\n  margin-bottom: 0; }\n\n.stock {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 6px;\n  font-weight: bold; }\n\n.stock.danger {\n    color: red;\n    border: 2px solid red; }\n\n.stock.success {\n    color: green;\n    border: 2px solid green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFua2FyYW5hbmQvRGVza3RvcC9Qcm9qamVjdHMvb3h5X21vbml0b3Ivb3h5X21vbml0b3Ivc3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQVksRUFDYixFQUFBOztBQUdIOztFQUVFLHlCQUF3QjtFQUN4QixVQUFTLEVBQ1Y7O0FBRUQ7RUFDRSwyQkFBMEIsRUFDM0I7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSwyQkFBa0I7RUFBbEIsd0JBQWtCO0VBQWxCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBU2xCOztBQVpEO0lBS0ksV0FBVTtJQUNWLHNCQUFxQixFQUN0Qjs7QUFQSDtJQVNJLGFBQVk7SUFDWix3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaC1kZXNrdG9wLTEwMCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zdG9jayB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAmLmRhbmdlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIH1cclxuICAmLnN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/main.service */ "./src/app/shared/services/main.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import * as io from 'socket.io-client';
// import { Socket } from 'socket.io-client';

var LandingComponent = /** @class */ (function () {
    // socket: Socket;
    function LandingComponent(route, router, mainService, socket) {
        this.route = route;
        this.router = router;
        this.mainService = mainService;
        this.socket = socket;
        this.sendOtpForm = document.getElementById('sendOtp');
        this.verifyOtpForm = document.getElementById('verify');
        this.form1 = {};
        this.comorbiditiesList = ["BP", "Diabetes", "Heart Disease", "Cancer", "Asthama", "Others"];
        this.symptomsList = ["Fever", "Cold", "Throat Pain", "Loose Motions", "Headache", "Loss of Taste & Smell"];
        this.genderList = ["Male", "Female"];
        this.itemList = ["Oxygen Concentrators", "Pulse Oxymeters"];
        this.available = {};
        // this.socket = io("http://164.52.210.197:4000");
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.otp = "";
        this.form3 = {
            name: "",
            gender: "",
            age: "",
            spo2: "",
            comorbidities: [],
            symptoms: [],
            covidSince: "",
            mobile: "",
            address: "",
            landmark: ""
        };
        this.mainService2();
        this.socket.emit("join", function (data) {
            console.log(data);
            // setResponse(data);
        });
        this.socket.on("availableStock", function (data) {
            // alert()
            console.log(data);
            setTimeout(function () {
                _this.mainService2();
            }, 1000);
            // setResponse(data);
        });
    };
    LandingComponent.prototype.mainService2 = function () {
        var _this = this;
        this.mainService.getAvailableStock().subscribe(function (data) {
            if (data.output) {
                _this.available.oc = data.output.available_oxygen_cylinder;
                _this.available.po = data.output.available_oxy_meters;
            }
        });
    };
    LandingComponent.prototype.sendOTP = function (form) {
        this.mainService.sendOtp(form.value.mobile).subscribe(function (data) {
            // window.alert(data.output);
            var sendOtpForm = document.getElementById('sendOtp');
            var verifyOtpForm = document.getElementById('verify');
            $(sendOtpForm).hide();
            $(verifyOtpForm).show();
        });
    };
    LandingComponent.prototype.onUpload = function (event) {
        console.log(event, this.form1.mobile);
        this.form3.image = event.target.files[0];
    };
    LandingComponent.prototype.verifyOtp = function (otp) {
        console.log(otp.value);
        this.mainService.verifyOtp(this.form1.mobile, otp.value).subscribe(function (data) {
            if (data.output && data.output.status) {
                console.log(data);
                var verifyOtpForm = document.getElementById('verify');
                var detailsForm = document.getElementById('details');
                var cards = document.getElementById('cards');
                var forms = document.getElementById('forms');
                $(verifyOtpForm).hide();
                $(detailsForm).show();
            }
        });
    };
    LandingComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var item = form.value;
        item.image = this.form3.image;
        this.mainService.updateInfo(item, this.form1.mobile).subscribe(function (data) {
            if (data.output) {
                _this.mainService.createBookings(_this.form1.mobile, _this.form1.need).subscribe(function (bookingData) {
                    if (bookingData.output) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Success!',
                            text: 'Booked succesfully!',
                            icon: 'success',
                            confirmButtonText: 'Close'
                        }).then(function (value) {
                            location.reload();
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Error!',
                            text: 'Sorry! something went wrong',
                            icon: 'error',
                            confirmButtonText: 'Close'
                        });
                    }
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Error!',
                    text: 'Sorry! something went wrong',
                    icon: 'error',
                    confirmButtonText: 'Close'
                });
            }
        });
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-100 d-flex align-items-center justify-content-center\">\n  <div class=\"card\" style=\"width: 450px\">\n    <div class=\"card-body pt-0\">\n      <div class=\"card-title mb-0\"> Login </div>\n      <form #loginForm=\"ngForm\">\n        <div class=\"mb-4\">\n          <input class=\"form-control\" [(ngModel)]=\"login.username\" type=\"text\" name=\"username\" placeholder=\"Username/Phone number\">\n        </div>\n        <div class=\"mb-4\">\n          <input class=\"form-control\" [(ngModel)]=\"login.password\" type=\"password\" maxlength=\"8\" name=\"password\" placeholder=\"Password\">\n        </div>\n        <div class=\"text-center\">\n          <button class=\"btn btn-success\" type=\"button\" name=\"button\" (click)=\"loginFn(loginForm)\">submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router) {
        this.route = route;
        this.router = router;
        this.login = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginFn = function (form) {
        console.log(form);
        if (form.value.username == 'admin' && form.value.password == 'admin') {
            this.router.navigate(['home']);
            localStorage.setItem('login', 'true');
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/main.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/main.service.ts ***!
  \*************************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
    }
    MainService.prototype.sendOtp = function (mobile) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/login/sendOTP/" + (mobile || "");
        return this.http.get(url).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.verifyOtp = function (mobile, otp) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/login/verifyOTP/" + (mobile || "") + "/" + (otp || "");
        return this.http.get(url).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.updateInfo = function (item, mobile) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/login/updateInfo/" + (mobile || "");
        return this.http.post(url, this.formatData(item)).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.addVolunteer = function (item, mobile) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/volunteer/updateInfo/" + (mobile || '');
        return this.http.post(url, item).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.getAllVolunteer = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/volunteer";
        return this.http.get(url).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.getAllBookings = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/ticket";
        return this.http.get(url).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.createBookings = function (mobile, need) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/ticket/create/" + (mobile || '');
        var item = {
            phoneNumber: mobile,
            Number_of_cylinder: (need == "Oxygen Concentrators") ? 1 : 0,
            Number_of_monitorKid: (need == "Oxygen Concentrators") ? 0 : 1
        };
        return this.http.post(url, item).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.getAvailableStock = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/ticket/available";
        return this.http.get(url).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.approve = function (item) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/ticket/approve";
        var out = {
            phoneNumber: item.phoneNumber,
            Number_of_cylinder: item.Number_of_cylinder,
            Number_of_monitorKid: item.Number_of_monitorKid,
            _id: item._id
        };
        return this.http.post(url, out).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.rejectBooking = function (item, reason) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/ticket/reject";
        var out = {
            phoneNumber: item.phoneNumber,
            Number_of_cylinder: item.Number_of_cylinder,
            Number_of_monitorKid: item.Number_of_monitorKid,
            _id: item._id,
            reason: reason
        };
        return this.http.post(url, out).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.closeBooking = function (item) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/ticket/close";
        var out = {
            phoneNumber: item.phoneNumber,
            Number_of_cylinder: item.Number_of_cylinder,
            Number_of_monitorKid: item.Number_of_monitorKid,
            _id: item._id
        };
        return this.http.post(url, out).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.saveStock = function (item) {
        console.log('service', item);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/ticket/saveStock";
        var out = {
            cylinder: item.oc || 0,
            meter: item.po || 0
        };
        return this.http.post(url, out).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.dashboard = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/ticket/getDashboard";
        return this.http.get(url).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.getReports = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/api/ticket/getReports";
        return this.http.get(url).pipe(function (data) {
            return data;
        });
    };
    MainService.prototype.formatData = function (item) {
        return {
            Patient_Name: item.name,
            Gender: item.gender,
            Age: item.age,
            SPO2: item.spo2,
            Comorbidities: item.comorbidities,
            Symptoms: item.symptoms,
            CovidSince: item.covidSince,
            Address: item.address,
            Landmark: item.landmark,
            img: item.image
        };
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainService);
    return MainService;
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
    production: false,
    baseUrl: "http://164.52.210.197:4000"
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

module.exports = __webpack_require__(/*! /Users/shankaranand/Desktop/Projjects/oxy_monitor/oxy_monitor/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map