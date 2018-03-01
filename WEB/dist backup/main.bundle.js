webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Components/About/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/About/about.component.html":
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n  <div class=\"section light\">\n    <div class=\"container-4 w-container\">\n      <div class=\"div-center\">\n        <h1 class=\"heading-2 dark comp\">{{dataService.getText(dataService.challengesData[dataService.type].about.title)}}</h1>\n        <p class=\"paragraph light-copy\">{{dataService.getText(dataService.challengesData[dataService.type].about.text)}}</p>\n        <div class=\"row-5 w-row\">\n          <div class=\"column-2-but w-clearfix w-col w-col-6\"><a href=\"#\" class=\"smallbut-copy w-button\">{{dataService.getText(dataService.challengesData[dataService.type].about.buttonRight)}}</a></div>\n          <div class=\"column-6 w-col w-col-6\"><a href=\"#\" class=\"smallbut-2 w-button\">{{dataService.getText(dataService.challengesData[dataService.type].about.buttonLeft)}}</a></div>\n        </div>\n      </div>\n    </div>\n  </div>\n<main-footer [showPartners]=\"true\"></main-footer>\n"

/***/ }),

/***/ "../../../../../src/app/Components/About/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var AboutComponent = (function () {
    function AboutComponent(dataService) {
        this.dataService = dataService;
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        template: __webpack_require__("../../../../../src/app/Components/About/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/About/about.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object])
], AboutComponent);
exports.AboutComponent = AboutComponent;
var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/AnswerSent/answer-sent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section,\n.w-container {\n    background: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/AnswerSent/answer-sent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-6 w-container\">\n  <div class=\"mission-1st\"></div><img src=\"images/plane.png\" srcset=\"images/plane-p-500.png 500w, images/plane.png 601w\" sizes=\"(max-width: 479px) 100vw, (max-width: 646px) 93vw, 601px\" class=\"image-12\">\n  <h1 class=\"heading-5\">{{dataService.getText(dataService.challengesData[dataService.type].sentSuc)}}</h1>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/AnswerSent/answer-sent.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var AnswerSentComponent = (function () {
    function AnswerSentComponent(dataService) {
        this.dataService = dataService;
    }
    return AnswerSentComponent;
}());
AnswerSentComponent = __decorate([
    core_1.Component({
        selector: 'answer-sent',
        template: __webpack_require__("../../../../../src/app/Components/AnswerSent/answer-sent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/AnswerSent/answer-sent.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object])
], AnswerSentComponent);
exports.AnswerSentComponent = AnswerSentComponent;
var _a;
//# sourceMappingURL=answer-sent.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/ChangePass/change-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".disabled {\n    opacity: 0.5;\n    cursor: default;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/ChangePass/change-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<div class=\"section light-regular\">\n    <div class=\"profile-container w-container\">\n      <div class=\"mission-1st ishi\">\n        <div class=\"title-row personal w-row\">\n          <div class=\"column-15 w-clearfix w-col w-col-11\">\n            <h1 class=\"heading-2 dark comp\">{{dataService.getText(dataService.challengesData[dataService.type].passTitle)}}</h1>\n          </div>\n        </div>\n        <div class=\"row-but w-row\">\n          <div class=\"w-col w-col-6\"><input [(ngModel)]=\"user.current_password\" type=\"password\" class=\"groupfield w-input\" required=\"\" placeholder=\"{{dataService.getText('currentPassword')}}\"></div>\n        </div>\n        <div class=\"row-but w-row\">\n          <div class=\"w-col w-col-6\"><input [(ngModel)]=\"user.new_password\" type=\"password\" class=\"groupfield w-input\" required=\"\" placeholder=\"{{dataService.getText('newPassword')}}\"></div>\n        </div>\n        <div class=\"row-but w-row\">\n          <div class=\"w-col w-col-6\"><input [(ngModel)]=\"user.confirm_password\" type=\"password\" class=\"groupfield w-input\" required=\"\" placeholder=\"{{dataService.getText('confirmPassword')}}\"></div>\n        </div>\n        <div class=\"butleft\"><a (click)=\"changePassword()\" class=\"blue-but w-button\" [ngClass]=\"{'disabled': !(user.current_password && user.new_password && user.confirm_password) }\">{{dataService.getText('changePassword')}}</a></div>\n      </div>\n    </div>\n  </div>\n<main-footer [showPartners]=\"true\"></main-footer>\n"

/***/ }),

/***/ "../../../../../src/app/Components/ChangePass/change-pass.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var UserDataModel_1 = __webpack_require__("../../../../../src/app/DataModels/UserDataModel.ts");
var ChangePassComponent = (function () {
    function ChangePassComponent(route, dataService, router, _ngZone) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this._ngZone = _ngZone;
        this.user = new UserDataModel_1.default();
    }
    ChangePassComponent.prototype.ngOnInit = function () {
        this.user = this.dataService.user;
        this.globals = myGlobals;
        if (!this.dataService.type)
            this.router.navigate(['', this.route.snapshot.params['type']]);
    };
    ChangePassComponent.prototype.changePassword = function () {
        if ((this.dataService.user['current_password'] && this.dataService.user['new_password'] && this.dataService.user['confirm_password']))
            var that = this;
        this.dataService.changePassword(this.user)
            .then(function (user) {
            that.dataService.alertMessage = "הסיסמא שונתה בהצלחה";
            that.dataService.alertSubMessage = "";
            that.dataService.genericPopUpIsSuccess = true;
            that.dataService.showGenericPopup = true;
            that.router.navigate(['profile']);
        })
            .catch(function (reason) {
            that.dataService.alertMessage = "אירעה שגיאה בעת שינוי הסיסמא:";
            that.dataService.alertSubMessage = JSON.parse(reason._body).error;
            that.dataService.showGenericPopup = true;
        });
        ;
    };
    return ChangePassComponent;
}());
ChangePassComponent = __decorate([
    core_1.Component({
        selector: 'change-pass',
        template: __webpack_require__("../../../../../src/app/Components/ChangePass/change-pass.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/ChangePass/change-pass.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object])
], ChangePassComponent);
exports.ChangePassComponent = ChangePassComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=change-pass.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Common/AlertLeavingPage/ComponentCanDeactivate.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PendingChangesGuard = (function () {
    function PendingChangesGuard() {
    }
    PendingChangesGuard.prototype.canDeactivate = function (component) {
        // if there are no pending changes, just allow deactivation; else confirm first
        var resp = component.canDeactivate();
        if (resp[0])
            return true;
        // NOTE: this warning message will only be shown when navigating elsewhere within your angular app;
        // when navigating away from your angular app, the browser will show a generic warning message
        // see http://stackoverflow.com/a/42207299/7307355
        if (resp[1])
            return confirm('WARNING: You are leaving the Questionnaire, Are you Sure?');
        return false;
    };
    return PendingChangesGuard;
}());
exports.PendingChangesGuard = PendingChangesGuard;
//# sourceMappingURL=ComponentCanDeactivate.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Common/AlertPopUpMessage/AlertPopUpMessage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pop-solid {\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    z-index: 999;\n    height: 100%;\n    padding-top: 85px;\n    background-color: rgba(39, 45, 56, .7);\n  }\n\n  .pop-up {\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 8px;\n    border-radius: 13px;\n    padding: 24px 24px 0px 0px;\n    background-image: none;\n    background-color: #29313a;\n    background-position: 0px 0px;\n    background-size: auto;\n}\n\n  .alert-popup-message-container {\n    margin: 150px auto;\n    width: 660px;\n    height: 450px;\n    -webkit-box-shadow: inset 0 -6px 0 rgba(0, 0, 0, 0.17);\n            box-shadow: inset 0 -6px 0 rgba(0, 0, 0, 0.17);\n    border-radius: 13px;\n    background-color: #29313a;\n}\n\n  .close-pop-up-button-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n}\n\n  .close-pop-up-button-container:first-child{\n    cursor: pointer;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n  h1, h4 {\n    color: #ffffff;\n    font-family: 'Almoni dl aaa', sans-serif;\n    text-align: center; \n    font-weight: 800;\n    letter-spacing: 1.13px;\n    font-size: 28px !important;\n    padding-left: 60px;\n    padding-right: 45px;\n}\n\n  form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;           \n    -webkit-box-orient: vertical;           \n    -webkit-box-direction: normal;           \n        -ms-flex-direction: column;           \n            flex-direction: column;  \n    -webkit-box-pack: center;  \n        -ms-flex-pack: center;  \n            justify-content: center; \n    -webkit-box-align: center; \n        -ms-flex-align: center; \n            align-items: center;   \n}\n\n  .submit-button {\n    margin-bottom: 25px;\n}\n\n  .popup-but.w-button{\n   \n    background-image: linear-gradient(315deg, #f17a7a 49%, #d23b3b);\n}\n\n  .popup-but.w-button.success{\n    background-image: linear-gradient(315deg, #3BD309 49%, #7ff45a);\n}\n\n  .alert-popup-message-container{\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    background: rgba(0,0,0,0.8);\n    opacity: 1;\n    -webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n    z-index: 999;\n    overflow-x: hidden;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/Common/AlertPopUpMessage/AlertPopUpMessage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pop-solid\">\n    <div class=\"pop-up\">\n        <div class=\"close-pop-up-button-container\">\n            <img src=\"../../../images/X.png\" alt=\"X button to close the window\" class=\"close-pop-up-button\" (click)=\"dataService.showGenericPopup=false\">\n        </div>\n        <h1 class=\"heading-2 first-heading\">{{textForPopup}}</h1>\n        <h4 class=\"heading-2\">{{subTextForPopup}}</h4>\n        <form>\n            <div class=\"submit-button\">\n                <button (click)=\"dataService.showGenericPopup=false;dataService.genericPopUpIsSuccess=false\" class=\"popup-but w-button\" [ngClass]=\"{'success': success}\">\n                    {{dataService.getText('close')}}\n                </button>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/Common/AlertPopUpMessage/AlertPopUpMessage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var AlertPopUpMessageComponent = (function () {
    function AlertPopUpMessageComponent(route, dataService, router, _ngZone) {
        this.dataService = dataService;
        this.router = router;
        this._ngZone = _ngZone;
        this.success = false;
    }
    AlertPopUpMessageComponent.prototype.ngOnInit = function () {
        this.user = {};
        this.globals = myGlobals;
    };
    return AlertPopUpMessageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AlertPopUpMessageComponent.prototype, "textForPopup", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AlertPopUpMessageComponent.prototype, "subTextForPopup", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AlertPopUpMessageComponent.prototype, "success", void 0);
AlertPopUpMessageComponent = __decorate([
    core_1.Component({
        selector: 'alert-popup-message',
        template: __webpack_require__("../../../../../src/app/Components/Common/AlertPopUpMessage/AlertPopUpMessage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/Common/AlertPopUpMessage/AlertPopUpMessage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_2.ActivatedRoute !== "undefined" && router_2.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object])
], AlertPopUpMessageComponent);
exports.AlertPopUpMessageComponent = AlertPopUpMessageComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=AlertPopUpMessage.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Common/MainFooter/mainfooter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-footer-container {\n    direction: rtl;\n    height: 104px;\n}\n\n.moveo-link {\n    margin-bottom: -32px;\n    margin-top: 40px;\n}\n\n.seperator-container {\n    margin-bottom: 23px;\n    margin-left: 101px;\n}\n\n.same-line {\n    display: inline-block;\n}\n\n.separator {\n    width: 100%;\n}\n\n.footer-data-section {\n    margin-left: 101px;\n    height: 35px;\n}\n\n.logo-section {\n    height: 35px;\n    margin-left: 32px;\n}\n\n.links-section {\n    height: 35px;\n    vertical-align: top;\n    line-height: 35px;\n    font-size: 21px;\n}\n\n.social-logos-section {\n    float: left;\n}\n\n.social-logo-margin {\n    margin-right: 37px;\n}\n\n.text-style :hover {\n    color: #8b8b92;\n}\n\n.pointer {\n    cursor: pointer;\n}\n\n.margin-blue-container {\n    margin-right: 101px;\n}\n\n.background-color-blue-container {\n    background: rgba(86, 116, 185, 0.04);\n}\n\n.text-color {\n    color: #28313a;\n}\n\n.powered-style {\n    display: inline-block;\n    height: 35px;\n    vertical-align: top;\n    margin-top: 6px;\n}\n\n.w-container .w-row {}\n\n.fontFamilyRegular {\n    font-family: 'NarkisBlockMFWRegular'\n}\n\n.fontFamilyMedium {\n    font-family: 'NarkisBlockMFWMedium';\n}\n\n@media (max-width: 417px) {\n    .image-16 {\n        max-width: 150%;\n    }\n    .footer-container {\n        margin: 0 auto;\n        margin-top: -90px;\n    }\n    .image-4 {\n        margin-right: 71px;\n        margin-left: 8px;\n        -webkit-filter: brightness(60%);\n        filter: brightness(60%);\n    }\n    .fashion .container-first-footer {\n        position: relative;\n        top: -347px;\n    }\n    .heading-2-copy {\n        direction: rtl;\n        font-family: 'Almoni dl aaa', sans-serif;\n        font-size: 40pt;\n        font-weight: 900;\n        text-align: right;\n        text-align: center;\n    }\n}\n\n.container-first-footer .row-7.w-row {\n    margin-bottom: 11px;\n    padding-top: 20px;\n}\n\n.terms-link {\n    position: absolute;\n    left: 0px;\n    font-size: 30px;\n    font-family: 'Almoni dl aaa', sans-serif;\n    font-weight: 900;\n    color: #333;\n    cursor: pointer;\n}\n\n@media screen and (max-width:480px) {\n    .misrad.keren {\n        -webkit-transform: scale(0.6);\n                transform: scale(0.6);\n    }\n    .misrad.keren:hover {\n        opacity: 1;\n        -webkit-filter: saturate(154%);\n        filter: saturate(154%);\n        -webkit-transform: translate(0px, -2px) scale(0.8);\n        transform: translate(0px, -2px) scale(0.8);\n        text-shadow: 16px 16px 20px #000;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/Common/MainFooter/mainfooter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer accent-main\">\n    <div class=\"container-first-footer w-container\">\n      <div *ngIf=\"showPartners\" class=\"footer-container\">\n          <h1 class=\"heading-2-copy\">{{dataService.getText('accociated')}}</h1>\n          <div class=\"row-7 w-row\" >\n            <div class=\"column-16 w-col keren\">\n              <img src=\"images/Keren.png\" srcset=\"images/Keren-p-500.png 500w, images/Keren-p-800.png 800w, images/Keren-p-1080.png 1080w, images/Keren.png 1364w\" sizes=\"(max-width: 479px) 96vw, (max-width: 767px) 29vw, (max-width: 991px) 229.328125px, 299.984375px\" class=\"image-16 smallicon trump\">\n            </div>\n            <div class=\"column-16 w-col keren misrad\">\n              <img src=\"images/misrad.png\">\n            </div>\n            <div *ngIf=\"!isPisaSite && !isSocialSite\" class=\"column-16 w-col\">\n              <img src=\"images/Israel_football_association.svg.png\" srcset=\"images/Israel_football_association.svg-p-500.png 500w, images/Israel_football_association.svg-p-800.png 800w, images/Israel_football_association.svg-p-1080.png 1080w, images/Israel_football_association.svg.png 1200w\" sizes=\"(max-width: 479px) 48vw, (max-width: 767px) 14vw, (max-width: 991px) 114.65625px, 149.984375px\" class=\"image-15 smallicon\">\n              </div>\n            <div *ngIf=\"isSocialSite\" class=\"column-16 w-col\"><img src=\"images/social-logo.png\" class=\"image-15 smallicon\"></div>\n          </div>\n      </div>\n     <a class=\"moveo-link\" target=\"_blank\" href=\"http://moveo.group\"> <div class=\"w-clearfix\"><div class=\"footer-text\">Powered by</div><img src=\"images/Moveo-White.png\" width=\"120\" class=\"image-4\"></div></a>\n   \n      <div>\n          <a [routerLink]=\"['/terms']\" class=\"terms-link\">{{dataService.getText('terms')}}</a>\n          <a href=\"http://www.facebook.com/userid\" class=\"social-icon-link w-inline-block\"></a><a href=\"http://www.twitter.com/userid\" class=\"social-icon-link w-inline-block\"></a><a href=\"http://www.linkedin.com/userid\" class=\"social-icon-link w-inline-block\"></a><a class=\"social-icon-link w-inline-block\"></a></div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Components/Common/MainFooter/mainfooter.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var MainFooterComponent = (function () {
    function MainFooterComponent(dataService, route, router) {
        this.dataService = dataService;
        this.router = router;
        this.showPartners = true;
    }
    MainFooterComponent.prototype.ngOnInit = function () {
        this.globals = myGlobals;
        this.isDesktop = myGlobals.isDesktop;
        this.isPisaSite = this.router.url.indexOf('pisa') != -1;
        this.isSocialSite = window.location.hostname.indexOf('social') != -1;
    };
    MainFooterComponent.prototype.footerLogo = function () {
        window.scrollTo(0, 0);
    };
    MainFooterComponent.prototype.termsClicked = function () {
        this.router.navigate(['/terms']);
    };
    MainFooterComponent.prototype.privacyClicked = function () {
        this.router.navigate(['/privacySettings']);
    };
    return MainFooterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MainFooterComponent.prototype, "minimized", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MainFooterComponent.prototype, "isHome", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MainFooterComponent.prototype, "showPartners", void 0);
MainFooterComponent = __decorate([
    core_1.Component({
        selector: 'main-footer',
        template: __webpack_require__("../../../../../src/app/Components/Common/MainFooter/mainfooter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/Common/MainFooter/mainfooter.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object])
], MainFooterComponent);
exports.MainFooterComponent = MainFooterComponent;
var _a, _b, _c;
//# sourceMappingURL=mainfooter.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Common/MainHeader/mainheader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heading {\n  font-size: 120px;\n}\n\n.h1 .heading .headmobile{\n  top:4%;\n}\n\n.image-18 {\n\n}\n\n.navigation-link {\n  cursor: pointer !important;\n}\n\n.nav-menu-container{\n  padding: 8px 8% 0px;\n}\n\n.hero-section {\n  padding-top: 0px;\n  display: block;\n  width: 100%;\n}\n\n.navigation-bar.dark{\n  padding: 0px 0px;\n}\n\n.w-nav-menu{\n  top:0px;\n}\n\n.subtitle{\n}\n\n.soccer .heading, .social .heading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* margin-top: auto; */\n  margin-bottom: auto;\n  padding-right: 10%;\n  padding-left: 10%;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-top: 92px;\n}\n\n.subtitletext{\n  margin-top:404px;\n  color: #ffffff;\n  direction: rtl;\n  font-family: 'Almoni dl aaa', sans-serif;\n  font-size: 23px;\n  position: relative;\n}\n\n.soccer .image-18 {\n  top: 412px;\n}\n\n.soccer .subtitletext {\n  color: #ffffff;\n  direction: rtl;\n  font-family: 'Almoni dl aaa', sans-serif;\n  font-size: 30px;\n  position: relative;\n}\n\n.social .image-18{\n  color: #ffffff;\n  direction: rtl;\n  font-family: 'Almoni dl aaa', sans-serif;\n  font-size: 30px;\n  position: relative;\n  right: 0px;\n  top: 400px;\n}\n\n.w-nav-link {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n  color: #222222;\n  padding: 20px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15px;\n  color: #ffffff;\n}\n\n.container-pop-up{\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  background: rgba(0,0,0,0.8);\n  display: none;\n  opacity: 0;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n  z-index: -1;\n  overflow-x: hidden;\n}\n\n.show-pop-up{\n  opacity: 1;\n  z-index: 10;\n  display: block;\n}\n\n.show-contact-pop-up{\n  opacity: 1;\n  z-index: 10;\n  display: block; \n}\n\n.show-pop-up-sign-up{\n  opacity: 1;\n  z-index: 10;\n  display: block;\n  \n}\n\n.show-pop-up-sign-up{\n  opacity: 1;\n  z-index: 10;\n}\n\n.show-confirm-terms-pop-up {\n  opacity: 1;\n  z-index: 10;\n  display: block;\n}\n\n/* Social */\n\n.social .heading{\n  padding-right: 150px;\n  position: absolute !important;\n}\n\n.social .heading.headmobile{\n  text-shadow: 7px 7px 0 #af6216;\n}\n\n.social .subtitletext{\n  font-size: 30px;\n  margin-top: 323px;\n}\n\n.social .image{\n  top: 180px;\n  height: 420px;\n  left: 0;\n}\n\n/* Music */\n\n.music .nav-menu-container,\n.music .navigation-link {\n  background-color: black;\n}\n\n.music.hero-section {\n  background-position: bottom;\n}\n\n.music .subtitle {\n  margin-top: -600px\n}\n\n.music .image{\n  display: none;\n}\n\n.music .section.dark {\n  padding-top: 79px;\n  padding-right: 80px;\n  padding-left: 80px;\n  background-color: #5d5d5d;\n  background-image: url(/images/Dark-BG.png);\n  top: 33px;\n}\n\n.music .heading.headmobile[_ngcontent-c2] {\n  position: relative;\n  left: 158px;\n  display: block;\n  padding-right: 13%;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  font-size: 55px;\n  line-height: 70px;\n  text-shadow: 4px 2px 0 #3b4651;\n  top: 44px;\n}\n\n.music .image-18[_ngcontent-c2] {\n  top: 500px;\n  position: relative;\n  right: 352px;\n}\n\n.music w-col-5{\n  display: none;\n}\n\n.soccer .soccer .heading,  .social .social .heading{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: auto;\n  padding-right: 1%;\n}\n\n.soccer .subtitletext {\n  position: absolute;\n  right: 246px;\n  top: 45px;\n}\n\n.music .subtitletext {\n  margin-right: 900px;\n  width: 1000px;\n}\n\n.music .w-col-7 {\n  width: 116.333333%;\n}\n\n.music .subtitle  {\n  right: 850px;\n}\n\n@media (max-width: 1380px) and (min-width: 479px) { \n  .soccer .subtitletext {\n    top: 114px !important;\n    right: 246px !important;\n  }\n\n  .soccer .image-18 {\n    top: 480px !important;\n  }\n\n  .social .subtitletext {\n    right: 0px !important;\n  }\n\n}\n\n@media (max-width: 417px) {\n\n  .subtitle-small {\n    margin-top: 347px !important;\n    color: white;\n    font-size: 21px;\n    font-family: 'Almoni dl aaa', sans-serif;\n    margin-left: 136px;\n    width: 100% !important;\n  }\n  /* soccer */\n  .soccer .section.dark, .social .section.dark{\n    padding-right: 35px;\n    top: 430px;\n    padding-left: 35px;\n  }\n  .soccer  .heading, .social .section.dark {\n    position: absolute !important;\n    top: 150px !important;\n    padding-right: 0px !important;\n    right: 30px;\n    line-height: 50px !important;\n    padding-left: 100px;\n}\n\n.social .image-18 { \n  top: 140px !important;\n}\n\n.heading {\n  margin-top: 0px !important;\n}\n\n.header-container {\n  \n}\n\n\n\n\n\n.soccer .image-18 {\n  top: 175px !important;\n  position: absolute;\n  right: 24px;\n  width: 80vw;\n  margin-top: 110px;\n}\n\n.social {\n  margin-top: -51px;\n}\n\n.soccer .subtitletext, .social .subtitletext {\n  margin-top: 257px !important;\n  right: 10px;\n}\n\n.soccer .heading.headmobile {\n  position: relative;\n  left: 115px !important;\n  display: block;\n  padding-right: 13%;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  font-size: 55px;\n  line-height: 70px;\n  text-shadow: 4px 2px 0 #3b4651;\n  top: 4px;\n}\n.soccer .subtitletext, .social .subtitletext {\n  margin-top: 232px;\n  color: #ffffff;\n  direction: rtl;\n  font-family: 'Almoni dl aaa', sans-serif;\n  font-size: 22px;\n}\n.image-18 {\n  top: 703px;\n  position: relative;\n  right: 217px;\n}\n.soccer .heading, .social .heading {\n  position: relative;\n}\n\n.soccer .section.dark, .social .section.dark {\n  padding-right: 35px;\n  top: 129px;\n  padding-left: 35px;\n}\n  /*  */\n  /* tech */\n  .tech .image-18{\n    top: 676px;\n    position: relative;\n    right: 251px;\n}\n.tech .subtitletext {\n  top: 2px;\n  width: 336px;\n  font-size: 22px;\n  right: 258px;\n  color: #ffffff;\n}\n.tech .heading.headmobile{\n  position: relative;\n  left: 130px;\n  display: block;\n  padding-right: 13%;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  font-size: 55px;\n  line-height: 70px;\n  text-shadow: 4px 2px 0 #3b4651;\n  top: 100px;\n}\n/*  */\n.subtitletext{\n  top: 248px;\n  width: 336px;\n  font-size: 19px;\n  right: 244px;\n  color: #ffffff;\n}\n/* social */\n.social .image{\n  top: 240px;\n  height: 140px;\n  left: 0;\n}\n.social .image-18 {\n  top: 105px !important;\n  position: absolute;\n  right: 25px;\n  width: 350px;\n  margin-top: 110px;\n}\n.social .subtitletext{\n  top: -30px;\n  width: 336px;\n  font-size: 19px;\n  right: -40px;\n  color: #ffffff;\n}\n.social .heading.headmobile{\n  padding-right: 0px;\n  padding-left: 35px;\n  margin-right: 25px;\n  margin-top: 50px !important;\n}\n.social .bigbut[_ngcontent-c1] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 468px;\n  height: 113.6px;\n  margin-top: -184%;\n}\n.social .image-18 {\n  top: 412px;\n}\n.social .image-18  {\n  top: 138px !important;\n  position: absolute;\n  right: 24px;\n  width: 80vw;\n  margin-top: 110px;\n}\n.social .heading.headmobile{\n  position: relative;\n  right: 0;\n  left: 15px;\n  display: block;\n  padding-right: 13%;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  font-size: 55px;\n  line-height: 70px;\n  text-shadow: 4px 2px 0 #3b4651;\n  top: 4px;\n}\n.hero-section[_ngcontent-c2][_ngcontent-c2] {\n  padding-top: 9%;\n  background-position: 73% -5px;\n  background-size: cover;\n  background-attachment: scroll;\n  height: 420px;\n}\n\n/*  */\n \n  .bigbut {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 468px;\n    height: 113.6px;\n    margin-top: 10%;\n    margin-bottom: 39%;\n  }\n  /* fasion */\n  .fashion .image{\n    left: 5px;\n    margin-top: -58px;\n    width: 147px;\n    height: 188px;\n    top: 175px;\n    right: 115px;\n    left: 2px;\n}\n.fasion .heading{\n  position: relative;\n  left: 184px;\n  display: block;\n  padding-right: 17%;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  top: 66px;\n}\n.fashion .heading[_ngcontent-c2] {\n  position: relative;\n  left: 184px;\n}\n  .fashion .section.dark{\n    padding-right: 35px;\n    top: 357px;\n    padding-left: 35px;\n  }\n  .fashion .hero-section{\n    padding-top: 9%;\n    background-position: 73% -5px;\n    background-size: cover;\n    background-attachment: scroll;\n    height: 444px;\n}\n.fashion .paragraph.light {\n  margin-top: 21%;\n  direction: rtl;\n  font-family: 'Almoni dl aaa', sans-serif;\n  font-size: 30px;\n  line-height: 30px;\n  text-align: center;\n}\n/*  */\n\n  .section.light.prasim-section {\n    padding-bottom: 398px;\n  }\n  .section.light {\n    top: 107px;\n    height: 522px;\n  }\n  /* .navigation-link.white {\n    display: block;\n    padding-top: 68px;\n    float: right;\n    clear: right;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    direction: rtl;\n    text-align: right;\n  } */\n  .navigation-bar.dark {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    max-height: 70px;\n    min-height: 12px;\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n  } \n  .hamburger-button.white {\n      position: absolute;\n    left: 30px;\n    float: none;\n    clear: none;\n    top: 21px;\n  }\n  .navigation-menu {\n    background-color: #272d38;\n  }\n  .section.dark{\n    padding-right: 35px;\n    top: 430px;\n    padding-left: 35px;\n  }\n  .subtitletext{\n    top: 248px;\n    width: 336px;\n    font-size: 25px;\n    right: 200px;\n    color:#ffffff;\n  }\n  .image{\n    width: 147px;\n    height: 103px;\n    top: 120px;\n    right: 115px;\n    left: 11px;\n  }\n  .image-18{\n    top: 703px;\n    position: relative;\n    right: 241px;\n  }\n \n\n.hero-section[_ngcontent-c2] {\n  padding-top: 9%;\n  background-position: 73% -5px;\n  background-size: cover;\n  background-attachment: scroll;\n  height: 500px;\n}\n\n  .navigation-menu {\n    background-color: #272d38;\n  }\n  .section.light {\n    top: 107px;\n    height: 699px;\n  }\n  .section.light.prasim-section {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .section.light-regular {\n    position: static;\n    top: 107px;\n    height: 699px;\n  }\n  .hero-slider {\n    height: 550px;\n  }\n  .slide {\n    padding-right: 53px;\n    padding-left: 53px;\n  }\n  .hero-section {\n    padding-top: 9%;\n    background-position: 73% -5px;\n    background-size: cover;\n    background-attachment: scroll;\n  }\n  .footer.accent {\n    position: relative;\n    top: 226px;\n    z-index: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 30px;\n    padding-top: auto;\n    padding-bottom: 0px;\n  }\n  .footer.accent-main {\n    position: relative;\n    top: 226px;\n    z-index: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 30px;\n    padding-top: 73px;\n    padding-bottom: 0px;\n  }\n  .float-right {\n    margin-bottom: 78px;\n  }\n  .footer-text {\n    font-size: 11px;\n  }\n  .grid-fours {\n    width: 50%;\n  }\n  .heading {\n    position: relative;\n    left: 2px;\n    display: block;\n    padding-right: 13%;\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    font-size: 55px;\n    line-height: 51px;\n    text-shadow: 2px 2px 0 #3b4651;\n  }\n  .column {\n    right: 28px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-right: 15px;\n    padding-left: 0%;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 auto;\n    flex: 0 auto;\n  }\n  \n  .paragraph.light-copy {\n    font-size: 20px;\n    line-height: 20px;\n  }\n  .paragraph.light-1st {\n    position: relative;\n    top: 14px;\n    margin-bottom: 41px;\n    font-size: 30px;\n    line-height: 30px;\n  }\n  .paragraph.par-align-to-right {\n    font-size: 20px;\n    line-height: 20px;\n    text-align: center;\n  }\n  .bigbut {\n    width: 287px;\n    height: 73.6px;\n    margin-top: 9%;\n    font-size: 33px;\n  }\n  .mission-1st {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .mission-1st.ishi {\n    position: static;\n    right: 10px;\n    display: block;\n    margin-right: 0px;\n    margin-left: 0px;\n  }\n  .heading-2.dark {\n    font-size: 41pt;\n  }\n  .heading-2.dark.comp {\n    position: static;\n    display: block;\n    margin-bottom: 7%;\n    padding-right: auto;\n    font-size: 30pt;\n    text-align: center;\n  }\n  .heading-2.dark.title {\n    margin-bottom: 7%;\n    padding-left: 0px;\n    float: none;\n    font-size: 30pt;\n    text-align: center;\n  }\n  .heading-2.light-title {\n    margin-top: -62px;\n    margin-bottom: -15%;\n    padding-top: 17px;\n    padding-bottom: 0px;\n    font-size: 34pt;\n    line-height: 57px;\n  }\n  .container-2 {\n    position: relative;\n    margin-top: -74px;\n    padding-top: 0px;\n  }\n  .heading-3 {\n    left: 32px;\n    top: -68px;\n    font-size: 33px;\n    text-shadow: 1px 1px 0 #fff;\n  }\n  .column-3 {\n    position: static;\n    padding-top: 100px;\n    -webkit-transition-property: none;\n    transition-property: none;\n  }\n  .column-3:hover {\n    -webkit-transform: none;\n    transform: none;\n  }\n  .row-2 {\n    top: -120px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .container-3 {\n    position: relative;\n    bottom: 19px;\n    max-height: 45px;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .image-4 {\n    max-width: 26%;\n  }\n  .smallbut {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 300px;\n    height: 70px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    font-size: 35px;\n    font-style: normal;\n  }\n  .w-col.w-col-1 .image-5 {\n    left: 52px;\n    top: 37px;\n  }\n  .groupfield {\n    width: 287px;\n    height: 55px;\n  }\n  .groupfield.smallbut {\n    display: block;\n    width: 287px;\n    height: 76.3px;\n    margin-right: auto;\n    margin-bottom: 32px;\n    margin-left: auto;\n    padding-top: 25px;\n    font-size: 33px;\n    margin-top: 15px;\n  }\n  .groupfield.answer {\n    position: relative;\n    float: right;\n    clear: none;\n    text-align: right;\n  }\n  .groupfield.choices {\n    display: block;\n    width: 287px;\n    height: 76.3px;\n    margin-right: auto;\n    margin-bottom: 32px;\n    margin-left: auto;\n    padding-top: 25px;\n    font-size: 33px;\n  }\n  .groupfield.choices-pressed {\n    display: block;\n    width: 287px;\n    height: 76.3px;\n    margin-right: auto;\n    margin-bottom: 32px;\n    margin-left: auto;\n    padding-top: 25px;\n    font-size: 33px;\n  }\n  .groupfield-delete {\n    width: 287px;\n    height: 55px;\n    background-color: #d4d4d4;\n  }\n  .title-row {\n    display: block;\n    width: 110%;\n    padding-right: 0px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n  .title-row.personal {\n    padding-right: 0%;\n  }\n  .row-but {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-right: auto;\n    margin-left: auto;\n    padding-top: 0px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 auto;\n    flex: 0 auto;\n  }\n  .butleft {\n    display: block;\n    padding-top: 0px;\n    padding-right: 0px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n    -ms-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .butleft.answer-but {\n    position: static;\n    display: block;\n    overflow: visible;\n    margin-left: 0px;\n    padding-top: 42px;\n    float: right;\n    clear: none;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .butleft.answer-multi {\n    position: static;\n    display: block;\n    overflow: visible;\n    margin-left: 0px;\n    padding-top: 42px;\n    float: right;\n    clear: none;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n\n  .pop-up {\n    display: block;\n    width: 346px;\n    height: 294px;\n    margin-right: auto;\n    margin-left: auto;\n    padding-right: 5%;\n    padding-left: 5%;\n  }\n  .paragraph-2 {\n    position: relative;\n    z-index: 1;\n    margin-top: -12px;\n    margin-bottom: -52px;\n    padding-right: 44px;\n    padding-left: 44px;\n    font-size: 20px;\n    line-height: 37px;\n  }\n  .div-center {\n    margin-bottom: 14px;\n  }\n  .div-block-3 {\n    height: 25px;\n    padding-top: 69px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -ms-flex-line-pack: end;\n    align-content: flex-end;\n  }\n  .div-block-4 {\n    display: block;\n    width: 10%;\n    margin-top: 13px;\n    margin-right: auto;\n    margin-left: auto;\n    padding-bottom: 13px;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 auto;\n    flex: 0 auto;\n  }\n  .div-block-4.current-mobile-prog {\n    bottom: 4px;\n    width: 13%;\n  }\n  .progress-last {\n    position: relative;\n  }\n  .div-block-5 {\n    top: -35px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 5px;\n    margin-top: 10%;\n    margin-bottom: 1%;\n  }\n  .image-10 {\n    display: block;\n    max-width: 113%;\n  }\n  .column-7 {\n    margin-top: -83px;\n  }\n  .column-8 {\n    display: block;\n    padding-top: 12px;\n  }\n  .heading-4 {\n    top: 9px;\n    right: -26%;\n    margin-top: -125%;\n    margin-bottom: 70%;\n    padding-left: 11%;\n    font-size: 20px;\n  }\n  .heading-4.current-number {\n    left: 27%;\n    top: -38px;\n    right: 27%;\n    bottom: -40%;\n    margin-top: -11%;\n    font-size: 45px;\n  }\n  .prasim {\n    left: 0px;\n    top: 208px;\n    right: 0px;\n    width: 287px;\n    height: 76.3px;\n  }\n  .prasim:hover {\n    -webkit-backface-visibility: visible;\n    backface-visibility: visible;\n  }\n  .image-11.prasimobile {\n    position: relative;\n    right: 102px;\n    max-width: 14%;\n  }\n  .column-mobile {\n    -webkit-transition-property: none;\n    transition-property: none;\n  }\n  .column-mobile:hover {\n    -webkit-transform: none;\n    transform: none;\n  }\n  .text-span-2 {\n    position: relative;\n    bottom: 17px;\n    font-size: 26px;\n  }\n  .container-5 {\n    display: block;\n    margin-top: -36px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .column-11 {\n    margin-bottom: -44px;\n  }\n  .column-12 {\n    height: 79px;\n  }\n  .image-12 {\n    max-width: 44%;\n  }\n  .heading-5 {\n    bottom: 206px;\n    font-size: 17px;\n    line-height: 20px;\n  }\n  .container-6 {\n    height: 274.42712402px;\n    margin-top: -42px;\n  }\n  .column-3rd {\n    position: static;\n    -webkit-transition-property: none;\n    transition-property: none;\n  }\n  .column-3rd:hover {\n    -webkit-transform: none;\n    transform: none;\n  }\n  .container-7 {\n    position: static;\n    margin-top: -27px;\n  }\n  .heading-6 {\n    margin-bottom: 4px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    float: right;\n    font-size: 30px;\n  }\n  .mission-title {\n    padding-left: 39%;\n  }\n  .memphis1 {\n    display: block;\n    width: 300px;\n    height: 100px;\n    margin-bottom: 15px;\n    padding-bottom: 0px;\n  }\n  .row-6 {\n    position: relative;\n    display: block;\n    margin-bottom: 0px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n  }\n  .square-but-title {\n    position: relative;\n    bottom: 82px;\n    padding-right: 23px;\n    font-size: 30px;\n    text-align: right;\n  }\n  .profile-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .column-13 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n  .card-back {\n    display: none;\n  }\n  .square-but-column {\n    position: static;\n    display: block;\n    -webkit-transition-property: none;\n    transition-property: none;\n  }\n  .square-but-column:hover {\n    -webkit-transform: none;\n    transform: none;\n  }\n  .container-8 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .flipped-text {\n    left: 32px;\n    top: -62px;\n    font-size: 37px;\n    text-shadow: 1px 1px 0 #fff;\n  }\n  .text-span-6 {\n    position: relative;\n    bottom: 19px;\n    font-size: 13px;\n  }\n  .text-span-7 {\n    position: relative;\n    bottom: 15px;\n    font-size: 13px;\n  }\n  .blue-but {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 300px;\n    height: 70px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    font-size: 35px;\n    font-style: normal;\n  }\n  .notifi {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 110%;\n    margin-right: auto;\n    margin-left: auto;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n  .column-15 {\n    right: 38px;\n  }\n  .memphis2 {\n    display: block;\n    width: 300px;\n    height: 100px;\n    margin-bottom: 15px;\n    padding-bottom: 0px;\n  }\n  .memphis3 {\n    display: none;\n    width: 300px;\n    height: 100px;\n    margin-bottom: 15px;\n    padding-bottom: 0px;\n  }\n  .image-14 {\n    top: 15px;\n    bottom: -16px;\n    width: 90px;\n    height: 70px;\n  }\n  .memphis1-checkd {\n    display: block;\n    width: 300px;\n    height: 100px;\n    margin-bottom: 15px;\n    padding-bottom: 0px;\n  }\n  .square-but-checked {\n    position: static;\n    display: block;\n    -webkit-transition-property: none;\n    transition-property: none;\n  }\n  .square-but-checked:hover {\n    -webkit-transform: none;\n    transform: none;\n  }\n  .flipped-mobile {\n    display: block;\n    width: 300px;\n    height: 250px;\n    margin-bottom: 15px;\n    padding-bottom: 0px;\n    border: 1px solid #f1f1f1;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(hsla(0, 0%, 100%, .7)), to(hsla(0, 0%, 100%, .7))), url('/images/memphis-2.png');\n    background-image: linear-gradient(180deg, hsla(0, 0%, 100%, .7), hsla(0, 0%, 100%, .7)), url('/images/memphis-2.png');\n    background-position: 0px 0px, 50% 50%;\n    background-size: auto, 350px;\n  }\n  .square-but-mob {\n    position: relative;\n    bottom: 82px;\n    padding-right: 30px;\n    padding-left: 30px;\n    color: #000;\n    font-size: 30px;\n    line-height: 30px;\n    text-align: right;\n  }\n  .memphis4 {\n    display: block;\n    width: 300px;\n    height: 100px;\n    margin-bottom: 15px;\n    padding-bottom: 0px;\n  }\n  .memphis5 {\n    display: block;\n    width: 300px;\n    height: 100px;\n    margin-bottom: 15px;\n    padding-bottom: 0px;\n  }\n  .memphis6 {\n    display: block;\n    width: 300px;\n    height: 100px;\n    margin-bottom: 15px;\n    padding-bottom: 0px;\n  }\n  .group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .group.ishi {\n    position: static;\n    right: 10px;\n    display: block;\n    margin-right: 0px;\n    margin-left: 0px;\n  }\n  .text-span-9 {\n    font-size: 20px;\n    line-height: 20px;\n  }\n  .row-7 {\n    margin-bottom: 20px;\n    padding-top: 16px;\n  }\n  .heading-2-copy {\n    position: relative;\n    left: 90px;\n    margin-top: -155px;\n    font-size: 20pt;\n  }\n  .heading-2-copy.dark {\n    font-size: 41pt;\n  }\n  .heading-2-copy.dark.comp {\n    position: static;\n    display: block;\n    margin-bottom: 7%;\n    padding-right: auto;\n    font-size: 30pt;\n    text-align: center;\n  }\n  .heading-2-copy.dark.title {\n    margin-bottom: 7%;\n    padding-left: 0px;\n    float: none;\n    font-size: 30pt;\n    text-align: center;\n  }\n  .heading-2-copy.light-title {\n    margin-top: -63px;\n    margin-bottom: -11%;\n    padding-top: 17px;\n    padding-bottom: 0px;\n    font-size: 34pt;\n    line-height: 57px;\n  }\n  .column-16 {\n    padding-right: 0px;\n    padding-left: 0px;\n    opacity: 1;\n    -webkit-filter: none;\n    filter: none;\n    -webkit-transition-property: none;\n    transition-property: none;\n  }\n  .column-16:hover {\n    -webkit-filter: none;\n    filter: none;\n    -webkit-transform: none;\n    transform: none;\n  }\n  .container-first-footer {\n    position: relative;\n    bottom: 19px;\n    max-height: 45px;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .container-congrats {\n    height: 274.42712402px;\n    margin-top: -42px;\n  }\n  .div-single-choice {\n    margin-bottom: 14px;\n  }\n  .mission-multi {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n  .mission-multi.ishi {\n    position: static;\n    right: 10px;\n    display: block;\n    margin-right: 0px;\n    margin-left: 0px;\n  }\n  .image-20 {\n    left: 4px;\n    bottom: 18px;\n    width: 38px;\n  }\n  .blue-disable {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 300px;\n    height: 70px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    font-size: 35px;\n    font-style: normal;\n  }\n}\n\n@font-face {\n  font-family: 'Almoni tzar aaa';\n  src: url('/fonts/almoni-tzar-aaa-bold.otf') format('opentype');\n  font-weight: 700;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Almoni tzar aaa';\n  src: url('/fonts/almoni-tzar-aaa-light.otf') format('opentype');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Almoni dl aaa';\n  src: url('/fonts/almoni-dl-aaa-light.otf') format('opentype');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Almoni dl aaa';\n  src: url('/fonts/almoni-dl-aaa-regular.otf') format('opentype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Almoni dl aaa';\n  src: url('/fonts/almoni-dl-aaa-black.otf') format('opentype');\n  font-weight: 900;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Almoni dl aaa';\n  src: url('/fonts/almoni-dl-aaa-bold.otf') format('opentype');\n  font-weight: 700;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Almoni tzar aaa';\n  src: url('/fonts/almoni-tzar-aaa-regular.otf') format('opentype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n.subtitle-small {\n    margin-top: 223px;\n    margin-right: -133px;\n    color: white;\n    font-size: 21px;\n    font-family: 'Almoni dl aaa', sans-serif;\n}\n\n@media (max-width: 417px){\n .column.w-col.w-col-7.header-button .heading.headmobile{\n     margin: 0;\n    margin-top: 109px !important;\n    line-height: 1;\n    text-align: center;\n   \n  }\n\n  .column.w-col.w-col-7.header-button .image-18{\n      top: 114px !important;\n      left: 45px;\n  }\n\n\n  .column.w-col.w-col-7.header-button .subtitletext{\n      margin-left: -16px;\n      top: -55px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/Common/MainHeader/mainheader.component.html":
/***/ (function(module, exports) {

module.exports = "<div data-collapse=\"medium\" data-animation=\"over-left\" data-duration=\"400\" class=\"navigation-bar dark w-nav header-container social\"\n  >\n  <div class=\"nav-menu-container\">\n    <nav role=\"navigation\" class=\"navigation-menu w-nav-menu\">\n      <a *ngIf=\"dataService.user.isEmpty()==false;\" (click)=\"analyticsEvent('פרופיל')\" [routerLink]=\"['/profile']\" class=\"navigation-link white w-nav-link\">\n      {{dataService.getText('private')}}\n      </a>\n      <!-- <a [routerLink]=\"['', dataService.type]\" fragment=\"awardes\" class=\"navigation-link white w-nav-link\">{{dataService.getText(dataService.challengesData[dataService.type].nav.prasim)}}</a> -->\n      <a *ngIf=\"dataService.user.isEmpty() == false;\" [routerLink]=\"['/question-flow',dataService.type]\" class=\"navigation-link white w-nav-link\">\n      {{dataService.getText('comp')}}\n      </a>\n    </nav>\n    <a (click)=\"dataService.changeLanguage();analyticsEvent('החלפת שפה')\" class=\"navigation-link white w-nav-link\">עברית\\عربيه</a>\n    <div *ngIf=\"dataService.user.isEmpty() == true && !hidesignup\" (click)=\"dataService.showSignupPopup()\" class=\"navigation-link white w-nav-link\">\n      {{dataService.getText('enter')}}\n    </div>\n    <div *ngIf=\"dataService.user.isEmpty() == false;\" (click)=\"dataService.logOut();analyticsEvent('התנתק')\" class=\"navigation-link white w-nav-link\">\n      {{dataService.getText('disConnect')}}\n    </div>\n    <a (click)=\"dataService.showContacPopup();analyticsEvent('צור קשר')\" class=\"navigation-link white w-nav-link\">\n      {{dataService.getText('contactUs')}}\n      </a>\n    <div *ngIf=\"false\" class=\"hamburger-button white w-nav-button\">\n      <div class=\"w-icon-nav-menu\"></div>\n    </div>\n\n\n\n  </div>\n  <div class=\"w-nav-overlay\" data-wf-ignore=\"\"></div>\n  <div class=\"hero-section\" *ngIf=\"dataService.challengesData[dataService.type]\" [ngStyle]=\"{'background-image':'url('+dataService.challengesData[dataService.type].background + ')'}\">\n    <div class=\"row w-row\">\n      <div class=\"w-col w-col-5\">\n        <img src=\"{{dataService.challengesData[dataService.type].logo}}\" width=\"520\" class=\"image header-button\" [routerLink]=\"['']\">\n      </div>\n      <div class=\"column w-col w-col-7 header-button\" [routerLink]=\"['']\">\n        <h1 class=\"heading\" [ngClass]=\"{'headmobile': !globals.isDesktop }\">{{dataService.getText(dataService.challengesData[dataService.type].name)}}</h1>\n        <div class=\"subtitle\">\n          <img src=\"{{dataService.challengesData[dataService.type].imageSubtitle}}\" class=\"image-18\">\n          <div class=\"subtitletext\"><a [routerLink]=\"['']\" fragment=\"start\">{{dataService.getText(dataService.challengesData[dataService.type].subtitle)}}</a></div>\n\n        </div>\n\n      </div>\n    </div>\n    <div class=\"container-pop-up\" [ngClass]=\"{'show-pop-up': dataService.showPopup}\">\n      <popup-connect></popup-connect>\n    </div>\n    <div class=\"container-pop-up\" [ngClass]=\"{'show-pop-up-sign-up': dataService.showPopupSign}\">\n      <popup-sign></popup-sign>\n    </div>\n    <div class=\"container-pop-up\" [ngClass]=\"{'show-contact-pop-up': dataService.showPopupContac}\">\n      <contact-us></contact-us>\n    </div>\n    <div class=\"container-pop-up\" [ngClass]=\"{'show-confirm-terms-pop-up': dataService.showConfirmTerms}\">\n      <popup-confirm-terms></popup-confirm-terms>\n    </div>\n    <div *ngIf=\"dataService.showGenericPopup\">\n      <alert-popup-message [textForPopup]=\"dataService.alertMessage\" [subTextForPopup]=\"dataService.alertSubMessage\" [success]=\"dataService.genericPopUpIsSuccess\"></alert-popup-message>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/Common/MainHeader/mainheader.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var core_2 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var MainHeaderComponent = (function () {
    function MainHeaderComponent(dataService, router, _ngZone) {
        this.dataService = dataService;
        this.router = router;
        this._ngZone = _ngZone;
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
        this.globals = myGlobals;
    };
    MainHeaderComponent.prototype.analyticsEvent = function (eventName) {
        this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), eventName, 'לחיצה', 'auto_event');
    };
    return MainHeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MainHeaderComponent.prototype, "hidesignup", void 0);
MainHeaderComponent = __decorate([
    core_1.Component({
        selector: 'main-header',
        template: __webpack_require__("../../../../../src/app/Components/Common/MainHeader/mainheader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/Common/MainHeader/mainheader.component.css")],
        animations: [
            core_2.trigger('slideInOut', [
                core_2.state('in', core_2.style({
                    transform: 'translate3d(0, 0, 0)'
                })),
                core_2.state('out', core_2.style({
                    transform: 'translate3d(-100%, 0, 0)'
                })),
                core_2.transition('in => out', core_2.animate('400ms ease-in-out')),
                core_2.transition('out => in', core_2.animate('400ms ease-in-out'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _c || Object])
], MainHeaderComponent);
exports.MainHeaderComponent = MainHeaderComponent;
var _a, _b, _c;
//# sourceMappingURL=mainheader.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Congrats/congrats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".h1.heading-5{\n  margin-left: 450px;\n  padding-top: 20px;\n}\n.w-container{\n  position: absolute;\n}\n#congrats{\n  position: relative;\n  margin-left: 35.5vw;\n  margin-top: -4vh;\n  width: 400px;\n}\n.div-block-3 {\n  margin-top: -255px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/Congrats/congrats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"div-block-3 w-clearfix\">\n  <img src=\"/images/confetti.png\" sizes=\"(max-width: 1050px) 100vw, 1050px\" class=\"image-19\">\n  <div class=\"container-congrats w-container\">\n    <div class=\"mission-1st\"></div>\n    <h1 class=\"heading-5\" id=congrats [innerHTML]=\"dataService.getText(dataService.challengesData[dataService.type].congrats)\"></h1>\n  </div>\n  <div class=\"butleft answer-but\">\n    <a (click)=\"continue()\" class=\"blue-but w-button\">{{dataService.getText('congratsContinue')}}</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/Congrats/congrats.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var CongratsComponent = (function () {
    function CongratsComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.close = new core_1.EventEmitter();
    }
    CongratsComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.params['type']) {
            this.globals = myGlobals;
            this.type = this.route.snapshot.params['type'];
            this.dataService.type = this.type;
            this.dataService.sendGoogleTagVirtualPage('המשך');
        }
    };
    CongratsComponent.prototype.continue = function () {
        this.close.emit(false);
    };
    return CongratsComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CongratsComponent.prototype, "close", void 0);
CongratsComponent = __decorate([
    core_1.Component({
        selector: 'congrats',
        template: __webpack_require__("../../../../../src/app/Components/Congrats/congrats.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/Congrats/congrats.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], CongratsComponent);
exports.CongratsComponent = CongratsComponent;
var _a, _b;
//# sourceMappingURL=congrats.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/ContactUs/contact-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pop-solid {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 999;\n  height: 100%;\n  padding-top: 85px;\n  background-color: rgba(39, 45, 56, .7);\n}\n.pop-up {\n    display: block;\n    width: 660px;\n    height: 580px;\n    margin-right: auto;\n    margin-left: auto;\n    padding: 80px 149px 149px;\n    border-radius: 13px;\n    background-image: none;\n    background-color: #29313a;\n    background-size: auto;\n}\n.pop-solid .heading-2 {\n  color:#ffffff;\n  padding-top: 35px;\n  font-size: 60pt;\n}\n.image-9{\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/ContactUs/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pop-solid\">\n  <h1 class=\"heading-2 light-title\">{{dataService.getText('talkwithus')}}</h1>\n  <form id=\"contactForm\"> \n  <div class=\"pop-up w-clearfix\"><img src=\"/images/X.png\" class=\"image-9\" id=\"x\" (click)=\"dataService.showPopupContac=false\" >\n    <input type=\"name\" class=\"groupfield w-input\" maxlength=\"256\" name=\"name\"  placeholder=\"{{dataService.getText('fullName')}}\" required>\n    <input type=\"email\" class=\"groupfield w-input\" maxlength=\"256\" name=\"email\" placeholder=\"{{dataService.getText('emailAddress')}}\"  required>\n    <input type=\"phone\" class=\"groupfield w-input\" maxlength=\"256\" name=\"phone\" placeholder=\"{{dataService.getText('phone')}}\" >\n    <textarea class=\"groupfield w-input\" maxlength=\"256\" name=\"message\" placeholder=\"{{dataService.getText('contactUsMessage')}}\" required></textarea>\n    <a (click)=\"sendContactUsForm()\" class=\"popup-but w-button\">{{dataService.getText('sendButton')}}</a>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/Components/ContactUs/contact-us.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var ContactUsComponent = (function () {
    function ContactUsComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.sendContactUsForm = function () {
        var isEmailValid = this.validateEmail(this.objectifyForm($('#contactForm')[0])['email']);
        if (!isEmailValid) {
            this.dataService.alertMessage = "אנא הזן כתובת מייל תקינה";
            this.dataService.alertSubMessage = "";
            this.dataService.genericPopUpIsSuccess = false;
            this.dataService.showGenericPopup = true;
            return;
        }
        this.dataService.sendContactUsForm(this.objectifyForm($('#contactForm')[0]));
        this.dataService.showPopupContac = false;
        this.dataService.alertMessage = "תודה! קיבלנו ונהיה בקשר ממש בקרוב";
        this.dataService.alertSubMessage = "";
        this.dataService.genericPopUpIsSuccess = true;
        this.dataService.showGenericPopup = true;
        this.dataService.sendAnalyticsEvent('יצירת קשר', 'דברו איתנו', 'שליחה', 'auto_event');
    };
    ContactUsComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ContactUsComponent.prototype.objectifyForm = function (formArray) {
        var returnArray = {};
        for (var i = 0; i < formArray.length; i++) {
            returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
        return returnArray;
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    core_1.Component({
        selector: 'contact-us',
        template: __webpack_require__("../../../../../src/app/Components/ContactUs/contact-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/ContactUs/contact-us.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], ContactUsComponent);
exports.ContactUsComponent = ContactUsComponent;
var _a, _b;
//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/DidNotPass/did-not-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section,\n.w-container {\n    background: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/DidNotPass/did-not-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-6 w-container\">\n  <div class=\"mission-1st\"></div><img src=\"images/Vector-Smart-Object.png\" class=\"image-12\">\n  <h1 class=\"heading-5\" [innerHTML]=\"dataService.getText(dataService.challengesData[dataService.type].notPass)\"></h1>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/DidNotPass/did-not-pass.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var DidNotPassComponent = (function () {
    function DidNotPassComponent(dataService) {
        this.dataService = dataService;
    }
    return DidNotPassComponent;
}());
DidNotPassComponent = __decorate([
    core_1.Component({
        selector: 'did-not-pass',
        template: __webpack_require__("../../../../../src/app/Components/DidNotPass/did-not-pass.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/DidNotPass/did-not-pass.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object])
], DidNotPassComponent);
exports.DidNotPassComponent = DidNotPassComponent;
var _a;
//# sourceMappingURL=did-not-pass.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/FacebookIntergration/facebook-intergration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fb_iframe_widget{\n  width: 180px;\n  display: block;\n}\n.fb-login-button.fb_iframe_widget {\n  margin-top: -48px;\n  margin-right: -79px;\n  height: 60px;\n  opacity: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/FacebookIntergration/facebook-intergration.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"fb-login-button\" data-width=\"100px\" data-max-rows=\"1\" data-size=\"large\" data-button-type=\"login_with\" data-show-faces=\"false\" data-auto-logout-link=\"false\" data-use-continue-as=\"false\"></div> -->\n<div class=\"column-5 w-col w-col-6\">\n    <button href=\"#\" class=\"facebook-but w-button\">\n        Facebook\n        <div>\n           <div class=\"fb-login-button\" data-width=\"100px\" data-max-rows=\"1\" data-size=\"large\" data-button-type=\"login_with\" data-show-faces=\"false\"\n                data-auto-logout-link=\"false\" data-use-continue-as=\"false\" data-scope=\"public_profile, email, user_birthday, user_hometown\"></div>\n       </div>\n    </button>\n    <img src=\"/images/Face.png\" width=\"35\" class=\"image-7\">\n</div> "

/***/ }),

/***/ "../../../../../src/app/Components/FacebookIntergration/facebook-intergration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var FacebookComponent = (function () {
    function FacebookComponent(_ngZone, dataService) {
        var _this = this;
        this._ngZone = _ngZone;
        this.dataService = dataService;
        this.onSuccess = new core_1.EventEmitter();
        this.showTerms = new core_1.EventEmitter();
        this.facebookUser = { name: '', email: '' };
        if (window.FB) {
            var that = this;
            FB.Event.subscribe('auth.statusChange', (function (response) {
                if (response.status === 'connected') {
                    console.log(response.authResponse.userID);
                    FB.api('/' + response.authResponse.userID + '?fields=name, email, birthday, hometown, gender', (function (responses) {
                        if (_this.showTerms) {
                            that._ngZone.run(function () {
                                that.dataService.alertMessage = "היי, נראה ששכחת לקרוא את התקנון";
                                that.dataService.alertSubMessage = "";
                                that.dataService.showGenericPopup = true;
                            });
                        }
                        else {
                            if (responses.email) {
                                // this.facebookUser.email = responses.email;
                                _this.dataService['facebookUser'] = responses;
                                _this.dataService['facebookUser'].password = responses.id;
                                _this.onSuccess.emit(responses);
                            }
                            else {
                                FB.logout(function (response) {
                                    this.dataService.alertMessage = "לא ניתנה הרשאת אימייל";
                                    this.dataService.alertSubMessage = "";
                                    this.dataService.showGenericPopup = true;
                                    return;
                                });
                            }
                        }
                    }));
                }
            }));
        }
    }
    FacebookComponent.prototype.ngOnInit = function () {
        this.globals = myGlobals;
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    };
    return FacebookComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FacebookComponent.prototype, "onSuccess", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FacebookComponent.prototype, "showTerms", void 0);
FacebookComponent = __decorate([
    core_1.Component({
        selector: 'facebook-integration',
        template: __webpack_require__("../../../../../src/app/Components/FacebookIntergration/facebook-intergration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/FacebookIntergration/facebook-intergration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _a || Object, typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object])
], FacebookComponent);
exports.FacebookComponent = FacebookComponent;
var _a, _b;
//# sourceMappingURL=facebook-intergration.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/ForgotPass/forgot-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w-container {\n    position: relative;\n    max-width: 940px;\n    right: -25%;\n}\n.groupfield {\n    width: 337px;\n    height: 70px;;\n}\nh4.heading-2.dark.comp {\n    font-size: 27pt;\n    font-weight: 400;\n}\n.forgot-password-details {\n    margin-left: 285px;\n}\n.disabled {\n    opacity: 0.5;\n    cursor: default;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/ForgotPass/forgot-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<div class=\"section light-regular\">\n  <div class=\"profile-container w-container\">\n    <div class=\"title-row personal w-row\">\n      <div class=\"column-15 w-clearfix w-col w-col-11\">\n        <h1 class=\"heading-2 dark comp\">{{dataService.getText('forgotPasswordTitle')}}</h1>\n        <h4 class=\"heading-2 dark comp\">{{dataService.getText('forgotPasswordSubtitle')}}</h4>\n      </div>\n    </div>\n    <div class=\"w-row forgot-password-details\">\n      <input type=\"email\" class=\"groupfield w-input\" maxlength=\"256\" [(ngModel)]=\"user.email\" autofocus=\"true\" placeholder=\"כתובת מייל\"\n        required=\"\">\n      <a (click)=\"forgotPassword()\" class=\"blue-but w-button\" [ngClass]=\"{'disabled': !user.email || clicked }\">{{dataService.getText('sendButton')}}</a>\n    </div>\n  </div>\n  <main-footer [showPartners]=\"true\"></main-footer>"

/***/ }),

/***/ "../../../../../src/app/Components/ForgotPass/forgot-pass.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var UserDataModel_1 = __webpack_require__("../../../../../src/app/DataModels/UserDataModel.ts");
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(route, dataService, router) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.email = '';
        this.user = new UserDataModel_1.default();
        this.clicked = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.user = this.dataService.user;
        this.globals = myGlobals;
        if (!this.dataService.type)
            this.router.navigate(['', this.route.snapshot.params['type']]);
    };
    ForgotPasswordComponent.prototype.forgotPassword = function () {
        var _this = this;
        if (this.user.email && !this.clicked) {
            this.clicked = true;
            var that = this;
            this.dataService.forgotPassword(this.user.email)
                .then(function (result) {
                if (result) {
                    _this.dataService.genericPopUpIsSuccess = true;
                    _this.dataService.alertMessage = "הסיסמא אופסה בהצלחה";
                    _this.dataService.alertSubMessage = "";
                    _this.dataService.showGenericPopup = true;
                    _this.dataService.user = new UserDataModel_1.default();
                    _this.router.navigate(['', _this.dataService.type]);
                    _this.dataService.sendAnalyticsEvent(_this.dataService.getChallengeName(), 'איפוס סיסמא', 'שליחה', 'auto_event');
                }
            }).catch(function (reason) {
                that.dataService.alertMessage = "אירעה שגיאה בעת איפוס הסיסמא";
                that.dataService.alertSubMessage = JSON.parse(reason._body).error;
                that.dataService.showGenericPopup = true;
                that.clicked = false;
            });
            ;
        }
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    core_1.Component({
        selector: 'forgot-pass',
        template: __webpack_require__("../../../../../src/app/Components/ForgotPass/forgot-pass.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/ForgotPass/forgot-pass.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], ForgotPasswordComponent);
exports.ForgotPasswordComponent = ForgotPasswordComponent;
var _a, _b, _c;
//# sourceMappingURL=forgot-pass.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/General/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var home_component_1 = __webpack_require__("../../../../../src/app/Components/HomePage/home.component.ts");
var question_with_cards_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/QuestionWithCards/question-with-cards.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/Components/Profile/profile.component.ts");
var group_component_1 = __webpack_require__("../../../../../src/app/Components/Group/group.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/Components/About/about.component.ts");
var stage_component_1 = __webpack_require__("../../../../../src/app/Components/Stage/stage.component.ts");
var change_pass_component_1 = __webpack_require__("../../../../../src/app/Components/ChangePass/change-pass.component.ts");
var question_flow_component_1 = __webpack_require__("../../../../../src/app/Components/question-flow/question-flow.component.ts");
var not_yet_component_1 = __webpack_require__("../../../../../src/app/Components/NotYet/not-yet.component.ts");
var question_with_text_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/QuestionWithText/question-with-text.component.ts");
var multi_question_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/MultiQuestion/multi-question.component.ts");
var single_question_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/SingleQuestion/single-question.component.ts");
var pisa_question_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/PisaQuestion/pisa-question.component.ts");
var forgot_pass_component_1 = __webpack_require__("../../../../../src/app/Components/ForgotPass/forgot-pass.component.ts");
var homepisa_component_1 = __webpack_require__("../../../../../src/app/Components/PisaHome/homepisa.component.ts");
var pisa_questions_component_1 = __webpack_require__("../../../../../src/app/Components/PisaQuestions/pisa-questions.component.ts");
var pisapage_component_1 = __webpack_require__("../../../../../src/app/Components/PisaPage/pisapage.component.ts");
var terms_component_1 = __webpack_require__("../../../../../src/app/Components/Terms/terms.component.ts");
var routes = [
    { path: 'notyet', component: not_yet_component_1.NotyetComponent },
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'terms', component: terms_component_1.TermsComponent, pathMatch: 'full' },
    { path: 'question-with-text/:type', component: question_with_text_component_1.QuestionWithTextComponent },
    { path: 'question-with-cards/:type', component: question_with_cards_component_1.QuestionWithCardsComponent },
    { path: 'multi-question:type', component: multi_question_component_1.MultiQuestionComponent },
    { path: 'pisa-question/:type', component: pisa_question_component_1.PisaQuestionComponent },
    { path: 'single-question/:type', component: single_question_component_1.SingleQuestionComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'group/:type', component: group_component_1.GroupComponent },
    { path: 'about/:type', component: about_component_1.AboutComponent },
    { path: 'stage/:type', component: stage_component_1.StageComponent },
    { path: 'question-flow/:type', component: question_flow_component_1.QuestionFlowComponent },
    { path: 'change-pass/:type', component: change_pass_component_1.ChangePassComponent },
    { path: 'forgot/:type', component: forgot_pass_component_1.ForgotPasswordComponent },
    { path: 'pisa/question/single/:level', component: pisapage_component_1.PisaPageComponent },
    { path: '15', component: homepisa_component_1.PisaHomeComponent },
    { path: 'pisaquestions/:type', component: pisa_questions_component_1.PisaQuestionsComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/Components/General/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/General/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var AppComponent = (function () {
    function AppComponent(router, dataService, route) {
        this.router = router;
        this.dataService = dataService;
        this.route = route;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('#main-loader').remove();
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
        // global language detector
        this.router.events.subscribe(function (val) {
            if (val instanceof router_1.RoutesRecognized) {
                console.log(val.state.root.firstChild.queryParams);
                var lang = val.state.root.firstChild.queryParams.lang;
                if (lang == "ar") {
                    _this.dataService.currentLanguage.type = 'he';
                    _this.dataService.changeLanguage();
                }
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <router-outlet></router-outlet>\n  ",
        styles: [__webpack_require__("../../../../../src/app/Components/General/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/General/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var cust_ext_browser_xhr_1 = __webpack_require__("../../../../../src/app/cust-ext-browser-xhr.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/Components/General/app-routing.module.ts");
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
// Imports for loading & configuring the in-memory web api
var app_component_1 = __webpack_require__("../../../../../src/app/Components/General/app.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/Components/HomePage/home.component.ts");
var question_flow_component_1 = __webpack_require__("../../../../../src/app/Components/question-flow/question-flow.component.ts");
var congrats_component_1 = __webpack_require__("../../../../../src/app/Components/Congrats/congrats.component.ts");
var answer_sent_component_1 = __webpack_require__("../../../../../src/app/Components/AnswerSent/answer-sent.component.ts");
var multi_question_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/MultiQuestion/multi-question.component.ts");
var single_question_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/SingleQuestion/single-question.component.ts");
var video_question_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/VideoQuestion/video-question.component.ts");
var file_upload_question_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/FileUploadQuestion/file-upload-question.component.ts");
var progress_bar_component_1 = __webpack_require__("../../../../../src/app/Components/ProgressBar/progress-bar.component.ts");
var did_not_pass_component_1 = __webpack_require__("../../../../../src/app/Components/DidNotPass/did-not-pass.component.ts");
var question_with_text_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/QuestionWithText/question-with-text.component.ts");
var question_with_cards_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/QuestionWithCards/question-with-cards.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/Components/Profile/profile.component.ts");
var group_component_1 = __webpack_require__("../../../../../src/app/Components/Group/group.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/Components/About/about.component.ts");
var stage_component_1 = __webpack_require__("../../../../../src/app/Components/Stage/stage.component.ts");
var popup_connect_component_1 = __webpack_require__("../../../../../src/app/Components/PopUpConnect/popup-connect.component.ts");
var popup_sign_component_1 = __webpack_require__("../../../../../src/app/Components/PopupSign/popup-sign.component.ts");
var popup_confirm_terms_component_1 = __webpack_require__("../../../../../src/app/Components/PopUpConfirmTerms/popup-confirm-terms.component.ts");
var popup_finish_challenge_component_1 = __webpack_require__("../../../../../src/app/Components/PopUpFinishChallenge/popup-finish-challenge.component.ts");
var AlertPopUpMessage_component_1 = __webpack_require__("../../../../../src/app/Components/Common/AlertPopUpMessage/AlertPopUpMessage.component.ts");
var facebook_intergration_component_1 = __webpack_require__("../../../../../src/app/Components/FacebookIntergration/facebook-intergration.component.ts");
var contact_us_component_1 = __webpack_require__("../../../../../src/app/Components/ContactUs/contact-us.component.ts");
var change_pass_component_1 = __webpack_require__("../../../../../src/app/Components/ChangePass/change-pass.component.ts");
var google_intergration_component_1 = __webpack_require__("../../../../../src/app/Components/GoogleIntergration/google-intergration.component.ts");
var not_yet_component_1 = __webpack_require__("../../../../../src/app/Components/NotYet/not-yet.component.ts");
var pisa_question_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/PisaQuestion/pisa-question.component.ts");
var standalone_pisa_question_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/StandalonePisaQuestion/standalone-pisa-question.component.ts");
var pipe_find_image_question_pipe_1 = __webpack_require__("../../../../../src/app/Components/Pipes/PipeFindImageInQuestion/pipe-find-image-question.pipe.ts");
var pipe_find_ggb_1 = __webpack_require__("../../../../../src/app/Components/Pipes/PipeFindGGB/pipe-find-ggb.ts");
var pipe_init_ggb_1 = __webpack_require__("../../../../../src/app/Components/Pipes/PipeFindGGB/pipe-init-ggb.ts");
var pipe_bidi_1 = __webpack_require__("../../../../../src/app/Components/Pipes/PipeBiDi/pipe-bidi.ts");
var homepisa_component_1 = __webpack_require__("../../../../../src/app/Components/PisaHome/homepisa.component.ts");
var pisa_questions_component_1 = __webpack_require__("../../../../../src/app/Components/PisaQuestions/pisa-questions.component.ts");
var pisapage_component_1 = __webpack_require__("../../../../../src/app/Components/PisaPage/pisapage.component.ts");
var pisa_header_component_1 = __webpack_require__("../../../../../src/app/Components/PisaPage/PisaHeader/pisa-header.component.ts");
var pisa_questions_listing_component_1 = __webpack_require__("../../../../../src/app/Components/PisaQuestionsListing/pisa-questions-listing.component.ts");
var pop_for_action_component_1 = __webpack_require__("../../../../../src/app/Components/PopForAction/pop-for-action.component.ts");
var terms_component_1 = __webpack_require__("../../../../../src/app/Components/Terms/terms.component.ts");
var core_2 = __webpack_require__("../../../../angular2-cookie/core.js");
// import { CookieService } from 'angular2-cookie/services/cookies.service';
var globals_1 = __webpack_require__("../../../../../src/app/globals.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var mainheader_component_1 = __webpack_require__("../../../../../src/app/Components/Common/MainHeader/mainheader.component.ts");
var mainfooter_component_1 = __webpack_require__("../../../../../src/app/Components/Common/MainFooter/mainfooter.component.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var ComponentCanDeactivate_1 = __webpack_require__("../../../../../src/app/Components/Common/AlertLeavingPage/ComponentCanDeactivate.ts");
var pipe_find_input_1 = __webpack_require__("../../../../../src/app/Components/Pipes/PipeFindInput/pipe-find-input.ts");
var forgot_pass_component_1 = __webpack_require__("../../../../../src/app/Components/ForgotPass/forgot-pass.component.ts");
var AppModule = (function () {
    function AppModule(router) {
        this.router = router;
    }
    AppModule.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            animations_1.BrowserAnimationsModule
        ],
        declarations: [
            mainheader_component_1.MainHeaderComponent,
            mainfooter_component_1.MainFooterComponent,
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            homepisa_component_1.PisaHomeComponent,
            terms_component_1.TermsComponent,
            pisa_questions_component_1.PisaQuestionsComponent,
            pisapage_component_1.PisaPageComponent,
            pisa_header_component_1.PisaHeaderComponent,
            pisa_questions_listing_component_1.PisaQuestionsListComponent,
            congrats_component_1.CongratsComponent,
            answer_sent_component_1.AnswerSentComponent,
            multi_question_component_1.MultiQuestionComponent,
            single_question_component_1.SingleQuestionComponent,
            video_question_component_1.VideoQuestionComponent,
            file_upload_question_component_1.FileUploadQuestionComponent,
            did_not_pass_component_1.DidNotPassComponent,
            question_with_text_component_1.QuestionWithTextComponent,
            question_with_cards_component_1.QuestionWithCardsComponent,
            profile_component_1.ProfileComponent,
            group_component_1.GroupComponent,
            about_component_1.AboutComponent,
            popup_connect_component_1.ConnectComponent,
            popup_sign_component_1.SignupComponent,
            popup_confirm_terms_component_1.ConfirmComponent,
            popup_finish_challenge_component_1.PopupFinishChallenge,
            AlertPopUpMessage_component_1.AlertPopUpMessageComponent,
            question_flow_component_1.QuestionFlowComponent,
            stage_component_1.StageComponent,
            progress_bar_component_1.ProgressBarComponent,
            facebook_intergration_component_1.FacebookComponent,
            contact_us_component_1.ContactUsComponent,
            change_pass_component_1.ChangePassComponent,
            google_intergration_component_1.GoogleComponent,
            not_yet_component_1.NotyetComponent,
            pisa_question_component_1.PisaQuestionComponent,
            pipe_find_image_question_pipe_1.ImageSearch,
            pipe_find_input_1.InputSearch,
            pipe_find_ggb_1.GGBSearch,
            pipe_init_ggb_1.GGBInit,
            pipe_bidi_1.BiDi,
            forgot_pass_component_1.ForgotPasswordComponent,
            homepisa_component_1.PisaHomeComponent,
            pisa_questions_component_1.PisaQuestionsComponent,
            pisapage_component_1.PisaPageComponent,
            pisa_header_component_1.PisaHeaderComponent,
            pisa_questions_listing_component_1.PisaQuestionsListComponent,
            standalone_pisa_question_component_1.StandalonePisaQuestionComponent,
            pop_for_action_component_1.PopForActionComponent
        ],
        providers: [data_service_1.DataService, cust_ext_browser_xhr_1.CustExtBrowserXhr, core_2.CookieService, globals_1.GlobalsService, ComponentCanDeactivate_1.PendingChangesGuard, { provide: core_2.CookieOptions, useValue: {} }],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], AppModule);
exports.AppModule = AppModule;
var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/Components/GoogleIntergration/google-intergration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/GoogleIntergration/google-intergration.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"g-signin2\">\n  <div class=\"google w-col w-col-6\"><a href=\"#\" class=\"google-but w-button\">Google</a><img src=\"/images/G.png\" width=\"50\" class=\"image-6\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Components/GoogleIntergration/google-intergration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var GoogleComponent = (function () {
    function GoogleComponent(_ngZone, dataService) {
        this._ngZone = _ngZone;
        this.dataService = dataService;
    }
    GoogleComponent.prototype.ngAfterViewInit = function () {
        //this.googleInit();
    };
    GoogleComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: '169340044204-gdpre66imil38s22ccg8cqakqbuml5ht.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            _this.attachSignin(document.getElementById('g-signin2'));
        });
    };
    GoogleComponent.prototype.attachSignin = function (element) {
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            //YOUR CODE HERE
        }, function (error) {
            console.log(JSON.stringify(error, undefined, 2));
        });
    };
    return GoogleComponent;
}());
GoogleComponent = __decorate([
    core_1.Component({
        selector: 'google-intergration',
        template: __webpack_require__("../../../../../src/app/Components/GoogleIntergration/google-intergration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/GoogleIntergration/google-intergration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _a || Object, typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object])
], GoogleComponent);
exports.GoogleComponent = GoogleComponent;
var _a, _b;
//# sourceMappingURL=google-intergration.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Group/group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section,\n.w-container {\n    background: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n\n.group-user {\n    float: right;\n}\n\n.container-linkviral{\n    -webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n    background-image: url(\"/images/rectangle.png\");\n    height: 118px;\n    float: right;\n    padding-top: 42px;\n    border-radius: 16px;\n    margin-top: -336px;\n    margin-right: 400px;\n    font-family: 'Almoni dl aaa', sans-serif;\n    font-size: 25px;\n\n}\n\n.show-linkviral{\n    opacity: 1;\n    z-index: 10;\n}\n\n.container-linkviral {\n    -webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n    background-image: url(\"/images/rectangle.png\");\n    height: 118px;\n    width: 1000px;\n    background-repeat: no-repeat;\n    float: right;\n    padding-top: 30px;\n    border-radius: 16px;\n    margin-top: -400px;\n    padding-right: 340px;\n    margin-right: 33px;\n    direction: rtl;\n}\n\n.imageCopy img{\n    margin-left: -80px;\n    margin-top: -723px;\n}\n\n.w-container {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 866px;\n}\n\n.heading-2.dark.comp {\n    display: block;\n    margin-bottom: 28%;\n    width: 505px;\n    float: right;\n    clear: right;\n    text-align: right;\n}\n\n.group-user[_ngcontent-c12] {\n    /* float: right; */\n    margin-top: 30px;\n}\n\n.w-input[disabled], .w-select[disabled], .w-input[readonly], .w-select[readonly], fieldset[disabled] .w-input, fieldset[disabled] .w-select {\n    cursor: not-allowed;\n    background-color: #eeeeee;\n    width: 387px;\n}\n\n.blue-but {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 87px;\n    margin-bottom: 0%;\n    margin-bottom: 20%;\n    margin-left: -30px;\n    float: none;\n    clear: none;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    border-radius: 13px;\n    background-color: #272d38;\n    -webkit-box-shadow: inset 0 -8px 0 0 rgba(3, 3, 3, .17);\n            box-shadow: inset 0 -8px 0 0 rgba(3, 3, 3, .17);\n    -webkit-transition: -webkit-filter 200ms ease;\n    transition: -webkit-filter 200ms ease;\n    transition: filter 200ms ease;\n    transition: filter 200ms ease, -webkit-filter 200ms ease;\n    direction: rtl;\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #fff;\n    font-size: 30px;\n}\n\n.blue-button{\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 337px;\n    height: 87px;\n    margin-bottom: 10%;\n    float: none;\n    clear: none;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    border-radius: 13px;\n    background-color: #272d38;\n    -webkit-box-shadow: inset 0 -8px 0 0 rgba(3, 3, 3, .17);\n            box-shadow: inset 0 -8px 0 0 rgba(3, 3, 3, .17);\n    -webkit-transition: -webkit-filter 200ms ease;\n    transition: -webkit-filter 200ms ease;\n    transition: filter 200ms ease;\n    transition: filter 200ms ease, -webkit-filter 200ms ease;\n    direction: rtl;\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #fff;\n    font-size: 45px;\n    font-weight: 900;\n    text-shadow: 1px 1px 0 hsla(0, 0%, 100%, .2);\n}\n\n@media screen and (max-width:480px){\n    .blue-but.w-button {\n        margin: 0 auto;\n    }\n\n    .image-5.edit-group{\n        top:34px\n    }\n\n     .heading-2.dark.comp[_ngcontent-c3]{\n        width:initial;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/Group/group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section light group-section\" *ngIf=\"group\">\n  <div class=\"\">\n    <div class=\"group\">\n      <div class=\"\">\n        <div class=\"w-col w-col-1\" *ngIf=\"editGroup\">\n          <img src=\"images/Pencil.png\" class=\"image-5 edit-group\" >\n        </div>\n        <div class=\"w-col w-col-11\">\n          <h1 class=\"heading-2 dark comp\" *ngIf=\"group.users.length>1\">\n            {{dataService.getText(dataService.challengesData[dataService.type].group.title)}}\n          </h1>\n        </div>\n      </div>\n      <div class=\"row-but w-row\" *ngIf=\"group.users.length>1\">\n        <div class=\"w-col w-col-6 group-user\" *ngFor=\"let gu of group.users\">\n          <input [(ngModel)]=\"gu.email\" type=\"text\" class=\"groupfield w-input\" placeholder=\"שם חבר קבוצה\" disabled>\n        </div>\n      </div>\n      <div class=\"row-but w-row\" *ngIf=\"group.users.length>1\">\n        <div class=\"w-clearfix w-col w-col-6\">\n          <div class=\"butleft\">\n          </div>\n          <a (click)=\"leaveGroup()\" class=\"blue-button w-button\">{{dataService.getText('group_exit_button')}}</a>\n        </div>\n      </div>\n      <!-- <div class=\"butleft\">\n        <a href=\"#\" class=\"blue-but w-button\">{{dataService.getText(dataService.challengesData[dataService.type].group.button)}}</a>\n      </div> -->\n    </div>\n  </div>\n</div>\n<div class=\"blue-but w-button\" (click)=\"dataService.copy(viralLink)\">להעתקת לינק שיתוף</div>\n<div class=\"container-linkviral\" *ngIf=\"showVirallink\">\n  {{dataService.getText(dataService.challengesData[dataService.type].profile.link)}}<br><br>{{viralLink}}\n</div>\n\n<div *ngIf=\"showVirallink\" class=\"imageCopy\">\n  <img src=\"images/external-link.png\" (click)=\"dataService.copy(viralLink)\"></div>\n<div *ngIf=\"dataService.showMessagePopup\">\n  <pop-for-action [textForPopup]=\"dataService.alertMessage\" [subTextForPopup]=\"dataService.alertSubMessage\"></pop-for-action>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/Group/group.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var GroupComponent = (function () {
    function GroupComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.group = {};
        this.viralLink = "";
        this.showVirallink = false;
        this.editGroup = null;
    }
    GroupComponent.prototype.ngOnInit = function () {
        this.globals = myGlobals;
        if (!this.dataService.type)
            this.router.navigate(['', this.route.snapshot.params['type']]);
        this.type = this.dataService.type;
        this.viralLink = document.location.host + '/' + this.dataService.user.viralLink + '&pass=1';
    };
    GroupComponent.prototype.leaveGroup = function () {
        var _this = this;
        this.dataService.sendAnalyticsEvent('חברתי', 'איזור אישי', 'יציאה מקבוצה', 'auto_event');
        this.dataService
            .leaveGroup(this.group._id)
            .then(function (res) {
            _this.group = null;
        })
            .catch(function (e) {
            console.log('e', e);
        });
    };
    return GroupComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], GroupComponent.prototype, "group", void 0);
GroupComponent = __decorate([
    core_1.Component({
        selector: 'group',
        template: __webpack_require__("../../../../../src/app/Components/Group/group.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/Group/group.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], GroupComponent);
exports.GroupComponent = GroupComponent;
var _a, _b, _c;
//# sourceMappingURL=group.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/HomePage/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bigbut .w-button {\n    border-radius: 10px;\n}\n\n.container-pop-up {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    background: rgba(0, 0, 0, 0.8);\n    display: hidden;\n    opacity: 0;\n    -webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n    z-index: -1;\n    overflow-x: hidden;\n}\n\n.show-pop-up {\n    opacity: 1;\n    z-index: 10;\n}\n\n.show-pop-up-sign-up {\n    opacity: 1;\n    z-index: 10;\n}\n\n.pass {\n    padding-right: 33px;\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #fff;\n    font-size: 23px;\n    background-image: url(/images/Dark-BG.png);\n    position: absolute;\n    float: left;\n}\n\n.section .dark .last {\n    z-index: 7;\n}\n\n.prasim.prasim-flipped {\n    background-image: url(/images/Dark-BG.png), -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff)) !important;\n    background-image: url(/images/Dark-BG.png), linear-gradient(180deg, #fff, #fff) !important;\n}\n\n/*.desktop */\n\n.smallbut {\n    margin-bottom: 0px;\n    margin: 0px;\n}\n\n/* Soccer */\n\n.soccer .heading-2.dark,\n.social .heading-2.dark {\n    margin-top: 33px;\n}\n\n/* .soccer .section.light.prasim-section {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-bottom: -254px;\n}  */\n\n.soccer .heading-3 {\n    font-size: 29px;\n    top: 20px;\n    margin-top: 42px;\n    margin-right: 53px;\n    left: 32px;\n    font-size: 28px !important;\n}\n\n.social .heading-3 {\n    font-size: 29px;\n    top: 20px;\n    margin-top: 42px;\n    margin-right: 53px;\n    left: -5px;\n    font-size: 28px !important;\n}\n\n.soccer .text-span-7,\n.social .text-span-7 {\n    position: relative;\n    bottom: 4px;\n    font-size: 13px;\n}\n\n.soccer .groupfield.smallbut,\n.social .groupfield.smallbut {\n    background-image: linear-gradient(45deg, #d7ad5b 0%, #e8ca72 100%);\n    text-shadow: 2px 2px 0 #ffffff;\n}\n\n.soccer .prasim,\n.social .prasim {\n    background-image: linear-gradient(45deg, #d7ad5b 0%, #e8ca72 100%);\n}\n\n.soccer a.bigbut.w-button,\n.social a.bigbut.w-button {\n    background-image: linear-gradient(45deg, #d7ad5b 0%, #e8ca72 100%);\n    text-shadow: 2px 2px 0 #ffffff;\n}\n\n.soccer .section.light,\n.social .section.light {\n    background-image: url('/images/White-BG.png');\n}\n\n/* Fashion */\n\n.fashion .heading-3 {\n    color: #ffffff;\n    text-shadow: 2px 2px 0 #272d38;\n}\n\n.fashion .groupfield.smallbut {\n    background-color: rgb(50, 120, 105);\n    background-image: none;\n    color: #ffffff;\n    text-shadow: 2px 2px 0 #272d38;\n}\n\n.fashion .prasim {\n    background-color: #327869;\n    -webkit-box-shadow: inset 0 -8px 0 rgba(0, 0, 0, 0.17);\n            box-shadow: inset 0 -8px 0 rgba(0, 0, 0, 0.17);\n}\n\n.fashion a.bigbut.w-button {\n    background-color: rgb(50, 120, 105);\n    color: #ffffff;\n    text-shadow: 2px 2px 0 #272d38;\n}\n\n/* Tech */\n\n.tech .heading-3 {\n    color: #ffffff;\n    text-shadow: 2px 2px 0 #1e64a5;\n    top: 0;\n}\n\n.tech .groupfield.smallbut {\n    background-color: #4692d8;\n    background-image: none;\n    color: #ffffff;\n    text-shadow: 2px 2px 0 #1e64a5;\n}\n\n.tech .prasim {\n    background-color: #4692d8;\n}\n\n.tech a.bigbut.w-button {\n    background-color: #4692d8;\n    color: #ffffff;\n    text-shadow: 2px 2px 0 #1e64a5;\n}\n\n/* Social */\n\n.social .heading-3 {\n    color: #272d38;\n    text-shadow: 2px 2px 0 #ffffff;\n    margin: 0;\n}\n\n.social .groupfield.smallbut {\n    background-color: #e2ba35;\n    background-image: none;\n    color: #272d38;\n    text-shadow: 2px 2px 0 #ffffff;\n    font-size: 25px;\n}\n\n.social .prasim {\n    background-color: #e2ba35;\n    padding-top: 30px;\n}\n\n.social a.bigbut.w-button {\n    background-color: #e2ba35;\n    color: #272d38;\n    text-shadow: 2px 2px 0 #ffffff;\n}\n\n/* Music */\n\n.music .heading-3 {\n    color: #ffffff;\n    text-shadow: 2px 2px 0 #272d38;\n}\n\n.music .groupfield.smallbut {\n    background-color: #aa1717;\n    background-image: none;\n    color: #ffffff;\n    text-shadow: 2px 2px 0 #272d38;\n}\n\n.music .section.dark.last {\n    background-image: url(/images/baakgroundMusicPage.png);\n    background-color: black;\n    background-position: center;\n}\n\n.music .prasim {\n    background-color: #aa1717;\n}\n\n.music a.bigbut.w-button {\n    background-color: #aa1717;\n    color: #ffffff;\n    text-shadow: 2px 2px 0 #272d38;\n}\n\n.music .prasim-section {\n    background-image: url(/images/people.png);\n    background-position: bottom;\n    background-color: black;\n}\n\n@media (max-width: 1024px) and (min-width: 417px) {\n    .hamburger-button:hover {\n        color: #2196f3;\n    }\n    .hamburger-button.w--open {\n        background-color: #333;\n    }\n    .hamburger-button.left {\n        float: left;\n    }\n    .hamburger-button.white {\n        color: #fff;\n    }\n    .hero-slider {\n        height: 400px;\n    }\n    .form-wrapper.squeezed {\n        padding-right: 10%;\n        padding-left: 10%;\n    }\n    .left-navigation {\n        width: 100%;\n        height: auto;\n        float: none;\n    }\n    .nav-link {\n        padding-top: 15px;\n        padding-bottom: 15px;\n        color: #fff;\n    }\n    .nav-menu {\n        padding: 17px;\n        background-color: #333;\n    }\n    .logo-link {\n        margin-top: 0px;\n        margin-bottom: 0px;\n        margin-left: 10px;\n        float: left;\n    }\n    .content {\n        width: 100%;\n        height: auto;\n    }\n    .social-footer {\n        margin-top: 0px;\n    }\n    .content-column {\n        padding-top: 0px;\n    }\n}\n\n.brand-link.on-top {\n    float: left;\n}\n\n.column.w-col.w-col-5 .image {\n    max-width: 27%;\n}\n\n.groupfield {\n    width: 299.4px;\n    height: 69.6px;\n}\n\n.container-8.w-container h1 {\n    line-height: 78px;\n}\n\n.image-11 {\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n    height: 124px;\n}\n\n.prasim {\n    position: absolute;\n    left: 0px;\n    top: 191px;\n    right: 0px;\n    display: block;\n    width: 262px;\n    height: 284px;\n}\n\n.w-hidden-main {\n    font-size: 19px;\n}\n\n.heading-3 {\n    font-size: 29px;\n}\n\n.pop-solid .heading-2.light-title {\n    margin-top: -30px;\n}\n\n@media (min-width: 1024px) {\n    .brand-link.on-top {\n        float: left;\n    }\n    .brand-link.left-spacing {\n        padding-left: 0px;\n    }\n    .section {\n        padding-right: 20px;\n        padding-left: 20px;\n    }\n    .hero-slider {\n        height: 528px;\n    }\n    .slide {\n        padding-top: 30px;\n        padding-bottom: 30px;\n    }\n    .cta-section {\n        padding-right: 20px;\n        padding-left: 20px;\n        text-align: center;\n    }\n    .cta-heading {\n        margin-bottom: 10px;\n    }\n    .form-wrapper.squeezed {\n        padding-right: 9px;\n        padding-left: 0px;\n    }\n    .picture-border {\n        margin-bottom: 13px;\n    }\n    .footer {\n        padding-right: 20px;\n        padding-left: 20px;\n    }\n    .grid-fours {\n        width: 33.33%;\n    }\n    .image-column {\n        margin-bottom: 10px;\n    }\n    .content-column {\n        margin-bottom: 13px;\n        text-align: center;\n    }\n    .container {\n        padding-right: 20px;\n        padding-left: 20px;\n    }\n    .waterfall-content-column {\n        padding-top: 0px;\n        text-align: center;\n    }\n    .waterfall-image-column {\n        padding-top: 21px;\n        padding-bottom: 21px;\n    }\n}\n\n@media (max-width: 417px) {\n    /* soccer */\n    .soccer .section.dark,\n    .social .section.dark {\n        padding-right: 35px;\n        top: 430px;\n        padding-left: 35px;\n    }\n    .soccer .section.dark,\n    .social .section.dark {\n        padding-right: 35px;\n        top: 129px;\n        padding-left: 35px;\n    }\n    .social .heading-3 {\n        margin-top: 42px;\n        margin-right: -22px;\n        padding-right: 10px;\n        padding-left: 10px;\n    }\n    .third-section .prasim {\n        margin-top: 11px;\n    }\n    .column-3rd.w-col.w-col-6 {\n        margin-top: 10px !important;\n    }\n    .soccer .text-span-7,\n    .social .text-span-7 {\n        position: relative;\n        bottom: -4px;\n        line-height: 12px;\n        font-size: 13px;\n    }\n    /*  */\n    .soccer .heading,\n    .social .heading {\n        top: -107px !important;\n        line-height: 30px;\n        font-size: 28px !important;\n        text-shadow: 1px 1px 0 #fff;\n    }\n    .soccer .bigbut,\n    .social .bigbut {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 287px;\n        height: 73.6px;\n        margin-top: -42%;\n        padding-top: -13px;\n        font-size: 33px;\n        margin-bottom: 121px;\n    }\n    .soccer .paragraph.light,\n    .social .paragraph.light {\n        font-size: 20px;\n        line-height: 23px;\n        margin-top: 250px;\n    }\n    .row-but {\n        min-width: 292px;\n    }\n    /* fashion */\n    .fashion .section.dark {\n        padding-right: 35px;\n        top: -101px;\n        padding-left: 35px;\n    }\n    .fashion .hero-section {\n        padding-top: 9%;\n        background-position: 73% -5px;\n        background-size: cover;\n        background-attachment: scroll;\n        height: 444px;\n    }\n    .fashion .heading-3 {\n        color: #ffffff;\n        text-shadow: 2px 2px 0 #272d38;\n        top: -53px;\n    }\n    .fashion .section.dark {\n        padding-right: 35px;\n        top: -472px;\n        padding-left: 35px;\n    }\n    .fashion .div-center[_ngcontent-c1] {\n        margin-bottom: 161px;\n    }\n    .fashion .section.light[_ngcontent-c1] {\n        top: -245px;\n    }\n    .fashion .paragraph.light {\n        font-size: 20px;\n        line-height: 23px;\n        margin-top: 870px;\n        height: 36px;\n    }\n    .fashion .container-2[_ngcontent-c1] {\n        position: relative;\n        margin-top: -176px;\n    }\n    .fashion {\n        height: 2600px;\n    }\n    .fashion .bigbut {\n        width: 287px;\n        height: 73.6px;\n        margin-top: 105%;\n        font-size: 33px;\n        margin-bottom: -32%;\n    }\n    /*  */\n    /* tech */\n    .tech p.paragraph.light {\n        height: 1000px;\n        font-size: 20px;\n        top: 95px;\n        line-height: 36px;\n        padding-top: 459px;\n    }\n    .tech .heading-3 {\n        color: #ffffff;\n        text-shadow: 2px 2px 0 #1e64a5;\n        top: -53px;\n    }\n    /* \n.social p.paragraph.light {\n  height: 704px;\n  font-size: 20px;\n  top: 95px;\n  line-height: 36px;\n  padding-top: 432px;\n} */\n    .music .container-2[_ngcontent-c1] {\n        position: relative;\n        margin-top: -107px;\n        padding-top: 41px;\n    }\n    .music p.paragraph.light {\n        height: 704px;\n        font-size: 20px;\n        top: 95px;\n        line-height: 36px;\n        padding-top: 432px;\n    }\n    .section.light.prasim-section {\n        padding-bottom: 398px;\n    }\n    .section.light {\n        top: 107px;\n        height: 522px;\n    }\n    .image-11.prasimobile {\n        position: relative;\n        right: 102px;\n        max-width: 14%;\n        height: 60px;\n    }\n    p.paragraph.light {\n        font-size: 20px;\n        line-height: 36px;\n        padding-bottom: 150px;\n    }\n    .heading-2 {\n        margin-bottom: 14%;\n        direction: rtl;\n        font-family: 'Almoni dl aaa', sans-serif;\n        font-size: 59pt;\n    }\n    .navigation-link.white {\n        display: block;\n        padding-top: 68px;\n        float: right;\n        clear: right;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        direction: rtl;\n        text-align: right;\n    }\n    .navigation-bar.dark {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        max-height: 70px;\n        min-height: 12px;\n        -webkit-box-pack: end;\n        -ms-flex-pack: end;\n        justify-content: flex-end;\n    }\n    .hamburger-button.white {\n        position: relative;\n        left: 30px;\n        float: none;\n        clear: none;\n    }\n    .navigation-menu {\n        background-color: #272d38;\n    }\n    .section.light {\n        top: 107px;\n        height: 500px;\n    }\n    .section.light.prasim-section {\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n    }\n    .section.light-regular {\n        position: static;\n        top: 107px;\n        height: 699px;\n    }\n    .hero-slider {\n        height: 550px;\n    }\n    .slide {\n        padding-right: 53px;\n        padding-left: 53px;\n    }\n    .hero-section {\n        padding-top: 9%;\n        background-position: 73% -5px;\n        background-size: cover;\n        background-attachment: scroll;\n    }\n    .footer.accent {\n        position: relative;\n        top: 226px;\n        z-index: 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        height: 30px;\n        padding-top: auto;\n        padding-bottom: 0px;\n    }\n    .footer.accent-main {\n        position: relative;\n        top: 226px;\n        z-index: 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        height: 30px;\n        padding-top: 73px;\n        padding-bottom: 0px;\n    }\n    .float-right {\n        margin-bottom: 78px;\n    }\n    .footer-text {\n        font-size: 11px;\n    }\n    .grid-fours {\n        width: 50%;\n    }\n    .heading {\n        position: relative;\n        left: 2px;\n        display: block;\n        padding-right: 13%;\n        -webkit-box-flex: 1;\n        -ms-flex: 1;\n        flex: 1;\n        font-size: 55px;\n        line-height: 51px;\n        text-shadow: 2px 2px 0 #3b4651;\n    }\n    .column {\n        right: 28px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding-right: 15px;\n        padding-left: 0%;\n        -webkit-box-flex: 0;\n        -ms-flex: 0 auto;\n        flex: 0 auto;\n    }\n    .image {\n        position: relative;\n        left: 28px;\n        padding-right: 24px;\n        padding-left: 7px;\n    }\n    .image.mobile {\n        min-height: 50%;\n        min-width: 177%;\n        margin-left: -10px;\n    }\n    .paragraph.light {\n        font-size: 20px;\n        line-height: 23px;\n    }\n    .paragraph.light-copy {\n        font-size: 20px;\n        line-height: 20px;\n    }\n    .paragraph.light-1st {\n        position: relative;\n        top: 14px;\n        margin-bottom: 41px;\n        font-size: 30px;\n        line-height: 30px;\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n    .paragraph.par-align-to-right {\n        font-size: 20px;\n        line-height: 20px;\n        text-align: center;\n    }\n    .bigbut {\n        width: 287px;\n        height: 73.6px;\n        margin-top: 9%;\n        font-size: 33px;\n    }\n    .mission-1st {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n    }\n    .mission-1st.ishi {\n        position: static;\n        right: 10px;\n        display: block;\n        margin-right: 0px;\n        margin-left: 0px;\n    }\n    .heading-2.dark {\n        font-size: 41pt;\n    }\n    .heading-2.dark.comp {\n        position: static;\n        display: block;\n        margin-bottom: 7%;\n        padding-right: auto;\n        font-size: 30pt;\n        text-align: center;\n    }\n    .heading-2.dark.title {\n        margin-bottom: 7%;\n        padding-left: 0px;\n        float: none;\n        font-size: 30pt;\n        text-align: center;\n    }\n    .heading-2.light-title {\n        margin-top: -63px;\n        margin-bottom: -11%;\n        padding-top: 17px;\n        padding-bottom: 0px;\n        font-size: 34pt;\n        line-height: 57px;\n    }\n    .container-2 {\n        position: relative;\n        margin-top: -74px;\n        padding-top: 0px;\n    }\n    .heading-3 {\n        left: 32px;\n        top: -108px !important;\n        font-size: 33px;\n        text-shadow: 1px 1px 0 #fff;\n    }\n    .column-3 {\n        position: static;\n        padding-top: 100px;\n        -webkit-transition-property: none;\n        transition-property: none;\n    }\n    .column-3:hover {\n        -webkit-transform: none;\n        transform: none;\n    }\n    .row-2 {\n        top: -120px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n    }\n    .container-3 {\n        position: relative;\n        bottom: 19px;\n        max-height: 45px;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n    }\n    .image-4 {\n        max-width: 26%;\n    }\n    .smallbut {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 300px;\n        height: 70px;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        font-size: 35px;\n        font-style: normal;\n    }\n    .image-5 {\n        left: 52px;\n        top: 37px;\n    }\n    .groupfield {\n        width: 287px;\n        height: 55px;\n    }\n    .groupfield.smallbut {\n        display: block;\n        width: 287px;\n        height: 76.3px;\n        margin-right: auto;\n        margin-bottom: 32px;\n        margin-left: auto;\n        padding-top: 25px;\n        font-size: 33px;\n    }\n    .groupfield.answer {\n        position: relative;\n        float: right;\n        clear: none;\n        text-align: right;\n    }\n    .groupfield.choices {\n        display: block;\n        width: 287px;\n        height: 76.3px;\n        margin-right: auto;\n        margin-bottom: 32px;\n        margin-left: auto;\n        padding-top: 25px;\n        font-size: 33px;\n    }\n    .groupfield.choices-pressed {\n        display: block;\n        width: 287px;\n        height: 76.3px;\n        margin-right: auto;\n        margin-bottom: 32px;\n        margin-left: auto;\n        padding-top: 25px;\n        font-size: 33px;\n    }\n    .groupfield-delete {\n        width: 287px;\n        height: 55px;\n        background-color: #d4d4d4;\n    }\n    .title-row {\n        display: block;\n        width: 110%;\n        padding-right: 0px;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n        flex-direction: row;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        -webkit-box-align: start;\n        -ms-flex-align: start;\n        align-items: flex-start;\n    }\n    .title-row.personal {\n        padding-right: 0%;\n    }\n    .row-but {\n        position: relative;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-right: auto;\n        margin-left: auto;\n        padding-top: 0px;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n        -webkit-box-pack: start;\n        -ms-flex-pack: start;\n        justify-content: flex-start;\n        -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        -ms-flex-line-pack: stretch;\n        align-content: stretch;\n        -webkit-box-flex: 0;\n        -ms-flex: 0 auto;\n        flex: 0 auto;\n    }\n    .butleft {\n        display: block;\n        padding-top: 0px;\n        padding-right: 0px;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n    }\n    .butleft.answer-but {\n        position: static;\n        display: block;\n        overflow: visible;\n        margin-left: 0px;\n        padding-top: 42px;\n        float: right;\n        clear: none;\n        -webkit-box-pack: start;\n        -ms-flex-pack: start;\n        justify-content: flex-start;\n    }\n    .butleft.answer-multi {\n        position: static;\n        display: block;\n        overflow: visible;\n        margin-left: 0px;\n        padding-top: 42px;\n        float: right;\n        clear: none;\n        -webkit-box-pack: start;\n        -ms-flex-pack: start;\n        justify-content: flex-start;\n    }\n    .pop-solid {\n        display: none;\n    }\n    .pop-up {\n        display: block;\n        width: 346px;\n        height: 294px;\n        margin-right: auto;\n        margin-left: auto;\n        padding-right: 5%;\n        padding-left: 5%;\n    }\n    .paragraph-2 {\n        position: relative;\n        z-index: 1;\n        margin-top: -12px;\n        margin-bottom: -52px;\n        padding-right: 44px;\n        padding-left: 44px;\n        font-size: 20px;\n        line-height: 37px;\n    }\n    .div-center {\n        margin-bottom: 14px;\n    }\n    .div-block-3 {\n        height: 25px;\n        padding-top: 69px;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n        flex-direction: row;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n        -ms-flex-line-pack: end;\n        align-content: flex-end;\n    }\n    .div-block-4 {\n        display: block;\n        width: 10%;\n        margin-top: 13px;\n        margin-right: auto;\n        margin-left: auto;\n        padding-bottom: 13px;\n        -webkit-box-flex: 0;\n        -ms-flex: 0 auto;\n        flex: 0 auto;\n    }\n    .div-block-4.current-mobile-prog {\n        bottom: 4px;\n        width: 13%;\n    }\n    .progress-last {\n        position: relative;\n    }\n    .div-block-5 {\n        top: -35px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        height: 5px;\n        margin-top: 10%;\n        margin-bottom: 1%;\n    }\n    .image-10 {\n        display: block;\n        max-width: 113%;\n    }\n    .column-7 {\n        margin-top: -83px;\n    }\n    .column-8 {\n        display: block;\n        padding-top: 12px;\n    }\n    .heading-4 {\n        top: 9px;\n        right: -26%;\n        margin-top: -125%;\n        margin-bottom: 70%;\n        padding-left: 11%;\n        font-size: 20px;\n    }\n    .heading-4.current-number {\n        left: 27%;\n        top: -38px;\n        right: 27%;\n        bottom: -40%;\n        margin-top: -11%;\n        font-size: 45px;\n    }\n    .prasim {\n        left: 0px;\n        top: 208px;\n        right: 0px;\n        width: 287px;\n        height: 76.3px;\n    }\n    .prasim:hover {\n        -webkit-backface-visibility: visible;\n        backface-visibility: visible;\n    }\n    .image-11.prasimobile {\n        position: relative;\n        right: 102px;\n        max-width: 14%;\n    }\n    .column-mobile {\n        -webkit-transition-property: none;\n        transition-property: none;\n    }\n    .column-mobile:hover {\n        -webkit-transform: none;\n        transform: none;\n    }\n    .text-span-2 {\n        position: relative;\n        bottom: 17px;\n        font-size: 26px;\n    }\n    .container-5 {\n        display: block;\n        margin-top: -36px;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n    }\n    .column-11 {\n        margin-bottom: -44px;\n    }\n    .column-12 {\n        height: 79px;\n    }\n    .image-12 {\n        max-width: 44%;\n    }\n    .heading-5 {\n        bottom: 206px;\n        font-size: 17px;\n        line-height: 20px;\n    }\n    .container-6 {\n        height: 274.42712402px;\n        margin-top: -42px;\n    }\n    .column-3rd {\n        position: static;\n        -webkit-transition-property: none;\n        transition-property: none;\n    }\n    .column-3rd:hover {\n        -webkit-transform: none;\n        transform: none;\n    }\n    .container-7 {\n        position: static;\n        margin-top: -27px;\n    }\n    .heading-6 {\n        margin-bottom: 4px;\n        padding-top: 0px;\n        padding-bottom: 0px;\n        float: right;\n        font-size: 30px;\n    }\n    .mission-title {\n        padding-left: 39%;\n    }\n    .memphis1 {\n        display: block;\n        width: 300px;\n        height: 100px;\n        margin-bottom: 15px;\n        padding-bottom: 0px;\n    }\n    .row-6 {\n        position: relative;\n        display: block;\n        margin-bottom: 0px;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        -webkit-box-pack: start;\n        -ms-flex-pack: start;\n        justify-content: flex-start;\n        -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n        align-items: stretch;\n    }\n    .square-but-title {\n        position: relative;\n        bottom: 82px;\n        padding-right: 23px;\n        font-size: 30px;\n        text-align: right;\n    }\n    .profile-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n    }\n    .column-13 {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n    }\n    .card-back {\n        display: none;\n    }\n    .square-but-column {\n        position: static;\n        display: block;\n        -webkit-transition-property: none;\n        transition-property: none;\n    }\n    .square-but-column:hover {\n        -webkit-transform: none;\n        transform: none;\n    }\n    .container-8 {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n    }\n    .flipped-text {\n        left: 32px;\n        top: -62px;\n        font-size: 37px;\n        text-shadow: 1px 1px 0 #fff;\n    }\n    .text-span-6 {\n        position: relative;\n        bottom: 19px;\n        font-size: 13px;\n    }\n    .text-span-7 {\n        position: relative;\n        bottom: 15px;\n        font-size: 13px;\n    }\n    .blue-but {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 300px;\n        height: 70px;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        font-size: 35px;\n        font-style: normal;\n    }\n    .notifi {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 110%;\n        margin-right: auto;\n        margin-left: auto;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n        flex-direction: row;\n        -webkit-box-pack: end;\n        -ms-flex-pack: end;\n        justify-content: flex-end;\n        -webkit-box-align: start;\n        -ms-flex-align: start;\n        align-items: flex-start;\n    }\n    .column-15 {\n        right: 38px;\n    }\n    .memphis2 {\n        display: block;\n        width: 300px;\n        height: 100px;\n        margin-bottom: 15px;\n        padding-bottom: 0px;\n    }\n    .memphis3 {\n        display: none;\n        width: 300px;\n        height: 100px;\n        margin-bottom: 15px;\n        padding-bottom: 0px;\n    }\n    .image-14 {\n        top: 15px;\n        bottom: -16px;\n        width: 90px;\n        height: 70px;\n    }\n    .memphis1-checkd {\n        display: block;\n        width: 300px;\n        height: 100px;\n        margin-bottom: 15px;\n        padding-bottom: 0px;\n    }\n    .square-but-checked {\n        position: static;\n        display: block;\n        -webkit-transition-property: none;\n        transition-property: none;\n    }\n    .square-but-checked:hover {\n        -webkit-transform: none;\n        transform: none;\n    }\n    .flipped-mobile {\n        display: block;\n        width: 300px;\n        height: 250px;\n        margin-bottom: 15px;\n        padding-bottom: 0px;\n        border: 1px solid #f1f1f1;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(hsla(0, 0%, 100%, .7)), to(hsla(0, 0%, 100%, .7))), url('/images/memphis-2.png');\n        background-image: linear-gradient(180deg, hsla(0, 0%, 100%, .7), hsla(0, 0%, 100%, .7)), url('/images/memphis-2.png');\n        background-position: 0px 0px, 50% 50%;\n        background-size: auto, 350px;\n    }\n    .square-but-mob {\n        position: relative;\n        bottom: 82px;\n        padding-right: 30px;\n        padding-left: 30px;\n        color: #000;\n        font-size: 30px;\n        line-height: 30px;\n        text-align: right;\n    }\n    .memphis4 {\n        display: block;\n        width: 300px;\n        height: 100px;\n        margin-bottom: 15px;\n        padding-bottom: 0px;\n    }\n    .memphis5 {\n        display: block;\n        width: 300px;\n        height: 100px;\n        margin-bottom: 15px;\n        padding-bottom: 0px;\n    }\n    .memphis6 {\n        display: block;\n        width: 300px;\n        height: 100px;\n        margin-bottom: 15px;\n        padding-bottom: 0px;\n    }\n    .group {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n    }\n    .group.ishi {\n        position: static;\n        right: 10px;\n        display: block;\n        margin-right: 0px;\n        margin-left: 0px;\n    }\n    .text-span-9 {\n        font-size: 20px;\n        line-height: 20px;\n    }\n    .row-7 {\n        margin-bottom: 20px;\n        padding-top: 16px;\n    }\n    .heading-2-copy {\n        position: relative;\n        left: 90px;\n        margin-top: -155px;\n        font-size: 20pt;\n    }\n    .heading-2-copy.dark {\n        font-size: 41pt;\n    }\n    .heading-2-copy.dark.comp {\n        position: static;\n        display: block;\n        margin-bottom: 7%;\n        padding-right: auto;\n        font-size: 30pt;\n        text-align: center;\n    }\n    .heading-2-copy.dark.title {\n        margin-bottom: 7%;\n        padding-left: 0px;\n        float: none;\n        font-size: 30pt;\n        text-align: center;\n    }\n    .heading-2-copy.light-title {\n        margin-top: -63px;\n        margin-bottom: -11%;\n        padding-top: 17px;\n        padding-bottom: 0px;\n        font-size: 34pt;\n        line-height: 57px;\n    }\n    .column-16 {\n        padding-right: 0px;\n        padding-left: 0px;\n        opacity: 1;\n        -webkit-filter: none;\n        filter: none;\n        -webkit-transition-property: none;\n        transition-property: none;\n    }\n    .column-16:hover {\n        -webkit-filter: none;\n        filter: none;\n        -webkit-transform: none;\n        transform: none;\n    }\n    .container-first-footer {\n        position: relative;\n        bottom: 19px;\n        max-height: 45px;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n    }\n    .container-congrats {\n        height: 274.42712402px;\n        margin-top: -42px;\n    }\n    .div-single-choice {\n        margin-bottom: 14px;\n    }\n    .mission-multi {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n    }\n    .mission-multi.ishi {\n        position: static;\n        right: 10px;\n        display: block;\n        margin-right: 0px;\n        margin-left: 0px;\n    }\n    .image-20 {\n        left: 4px;\n        bottom: 18px;\n        width: 38px;\n    }\n    .blue-disable {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 300px;\n        height: 70px;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        font-size: 35px;\n        font-style: normal;\n    }\n}\n\n.social .flipped-text {\n    top: 0;\n    line-height: 42px;\n    font-size: 28px;\n    margin: 0;\n}\n\n.social[_ngcontent-c1] .prasim[_ngcontent-c1] {\n    background-color: #e2ba35;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\n.social[_ngcontent-c1] .prasim[_ngcontent-c1] .prize-image {\n    max-width: 90%;\n    margin: 0 auto;\n}\n\n#awardes .heading-2.dark {\n    padding-bottom: 20px;\n}\n\n@media screen and (max-width:991px) {\n    .social .prasim {\n        -webkit-box-pack: unset !important;\n            -ms-flex-pack: unset !important;\n                justify-content: unset !important;\n        padding-top: 0px !important;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/HomePage/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n\n<style>\n  .header-mobile-social {\n    z-index: 501 !important;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    display: none;\n  }\n  \n  .header-mobile-social .disconnect {\n    display: inline-block;\n  }\n  \n  .header-mobile-social .navigation-menup {\n    transform: scaleY(0);\n    transition: 0.3s ease-in-out;\n    width: 100%;\n    background-color: #272d38;\n    display: flex;\n    flex-direction: column;\n    transform-origin: 0 0;\n  }\n  \n  .header-mobile-social .navigation-menup.open {\n    transform: scaleY(1);\n  }\n  \n  @media (max-width: 480px) {\n    .header-mobile-social {\n      display: initial;\n    }\n    .pnavigation-link.pwhite {\n      display: inline-block !important;\n    }\n  }\n</style>\n<div *ngIf=\"!dataService.showPopupSign && !dataService.showPopupContac\" data-collapse=\"medium\" data-animation=\"default\" data-duration=\"400\"\n  class=\"navigation-barpp darkpp w-nav header-mobile-social\">\n\n  <div (click)=\"toggleMenu()\" id=\"hamburger\" class=\"hamburger-buttonp whitep w-nav-button\">\n    <div class=\"picon w-icon-nav-menu\"></div>\n  </div>\n  <nav role=\"navigation\" class=\"navigation-menup w-nav-menu\">\n    <a *ngIf=\"dataService.user.isEmpty() == false;\" (click)=\"dataService.logOut();analyticsEvent('התנתק')\" class=\"pnavigation-link pwhite w-nav-link\">\n    {{dataService.getText('disConnect')}}\n  </a>\n    <a (click)=\"dataService.showContacPopup();analyticsEvent('צור קשר')\" class=\"pnavigation-link pwhite w-nav-link\">\n      {{dataService.getText('contactUs')}}\n  </a>\n\n    <a *ngIf=\"dataService.user.isEmpty() == false;\" [routerLink]=\"['/question-flow',dataService.type]\" class=\"pnavigation-link pwhite w-nav-link\">\n      {{dataService.getText(dataService.challengesData[dataService.type].nav.comp)}}\n    </a>\n\n    <a (click)=\"dataService.changeLanguage();analyticsEvent('החלפת שפה')\" class=\"pnavigation-link pwhite w-nav-link\">\n      עברית\\عربيه\n      </a>\n    <a *ngIf=\"dataService.user.isEmpty() == true && !hidesignup\" (click)=\"dataService.showSignupPopup()\" class=\"pnavigation-link pwhite w-nav-link\">\n      {{dataService.getText('enter')}}\n    </a>\n    <a *ngIf=\"dataService.user.isEmpty()==false;\" (click)=\"analyticsEvent('פרופיל')\" [routerLink]=\"['/profile']\" class=\"pnavigation-link pwhite w-nav-link\">\n    {{dataService.getText('private')}}\n    </a>\n  </nav>\n</div>\n\n\n\n<div [ngClass]=\"{'soccer':dataService.type=='1', 'fashion': dataService.type=='2', 'tech': dataService.type=='3', 'social':dataService.type=='4', 'music': dataService.type=='5'}\">\n  <div class=\"section dark\" id=\"competition\">\n    <div class=\"h w-container\">\n      <div class=\"div-center\">\n        <p data-w-id=\"cf5fe0d4-d1a3-0468-874d-6b49b699e340\" class=\"paragraph light\" [innerHTML]=\"dataService.getText(dataService.challengesData[dataService.type].start_text)\"></p>\n        <a (click)=\"analyticsEvent('יש לי רעיון')\" [routerLink]=\"['']\" fragment=\"start\" data-w-id=\"f8f47435-7a22-35dd-9a3e-cfab646044d2\"\n          class=\"bigbut w-button\">{{dataService.getText(dataService.challengesData[dataService.type].startButton)}}\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"section light prasim-section\" id=\"awardes\">\n    <div class=\"container-2 w-container\">\n      <h1 class=\"heading-2 dark\">\n        {{dataService.getText(dataService.challengesData[dataService.type].prasim)}}\n      </h1>\n      <div class=\"column-mobile\">\n        <div class=\"prasim\">\n          <img src=\"/images/Layer-9.png\" class=\"image-11 prasimobile\">\n          <h1 class=\"heading-3\">\n            {{dataService.getText(dataService.challengesData[dataService.type].firstPrize.title)}}\n            <br>\n            <span class=\"text-span-7 w-hidden-main\">\n              {{dataService.getText(dataService.challengesData[dataService.type].firstPrize.text)}}\n            </span>\n          </h1>\n        </div>\n        <div class=\"prasim prasim-flipped w-hidden-medium w-hidden-small w-hidden-tiny\">\n          <h3 class=\"flipped-text\">{{dataService.getText(dataService.challengesData[dataService.type].firstPrize.smalltext1)}}</h3>\n          <img class=\"prize-image\" src=\"/images/social_first_prize.png\" alt=\"{{dataService.getText(dataService.challengesData[dataService.type].firstPrize.smalltext1)}}\">\n          <h3 class=\"flipped-text\"> {{dataService.getText(dataService.challengesData[dataService.type].firstPrize.smalltext2)}}</h3>\n          <!--<h1 class=\"flipped-text\" [innerHTML]=\"dataService.getText(dataService.challengesData[dataService.type].firstPrize.flippedText)\"></h1>-->\n        </div>\n      </div>\n      <div class=\"row-2 w-row\">\n        <div class=\"column-3 third-section w-col w-col-6\">\n          <div class=\"prasim\">\n            <img src=\"/images/Layer-10.png\" class=\"image-11 prasimobile\">\n            <h1 class=\"heading-3\">\n              {{dataService.getText(dataService.challengesData[dataService.type].thirdPrize.title)}}\n              <br>\n              <span class=\"text-span-7 w-hidden-main\">\n                {{dataService.getText(dataService.challengesData[dataService.type].thirdPrize.text)}}\n              </span>\n            </h1>\n          </div>\n          <div class=\"prasim prasim-flipped w-hidden-medium w-hidden-small w-hidden-tiny\">\n            <h3 class=\"flipped-text\">{{dataService.getText(dataService.challengesData[dataService.type].firstPrize.smalltext1)}}</h3>\n            <img class=\"prize-image\" src=\"/images/social_third_prize.png\" alt=\"{{dataService.getText(dataService.challengesData[dataService.type].firstPrize.smalltext1)}}\">\n            <h3 class=\"flipped-text\"> {{dataService.getText(dataService.challengesData[dataService.type].firstPrize.smalltext2)}}</h3>\n            <!--<h1 class=\"flipped-text\" [innerHTML]=\"dataService.getText(dataService.challengesData[dataService.type].thirdPrize.flippedText)\"></h1>-->\n          </div>\n        </div>\n        <div class=\"column-3rd w-col w-col-6\">\n          <div class=\"prasim\">\n            <img src=\"/images/Layer-11.png\" class=\"image-11 prasimobile\">\n            <h1 class=\"heading-3\">\n              {{dataService.getText(dataService.challengesData[dataService.type].secondPrize.title)}}\n              <br>\n              <span class=\"text-span-7 w-hidden-main\">\n                {{dataService.getText(dataService.challengesData[dataService.type].secondPrize.text)}}</span>\n            </h1>\n          </div>\n          <div class=\"prasim prasim-flipped w-hidden-medium w-hidden-small w-hidden-tiny\">\n            <h3 class=\"flipped-text\">{{dataService.getText(dataService.challengesData[dataService.type].firstPrize.smalltext1)}}</h3>\n            <img class=\"prize-image\" src=\"/images/social_second_prize.png\" alt=\"{{dataService.getText(dataService.challengesData[dataService.type].firstPrize.smalltext1)}}\">\n            <h3 class=\"flipped-text\"> {{dataService.getText(dataService.challengesData[dataService.type].firstPrize.smalltext2)}}</h3>\n            <!--<h1 class=\"flipped-text\" [innerHTML]=\"dataService.getText(dataService.challengesData[dataService.type].secondPrize.flippedText)\"></h1>-->\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"section dark last\" id=\"start\">\n    <div class=\"container-8 w-container\">\n      <h1 class=\"heading-2 light-title\">{{dataService.getText(dataService.challengesData[dataService.type].defaultStage.title)}}</h1>\n      <div class=\"div-center\">\n        <p class=\"paragraph light-1st\">{{dataService.getText(dataService.challengesData[dataService.type].defaultStage.question)}}</p>\n\n        <div class=\"row-but w-row\">\n          <div class=\"w-col w-col-6 answer-option\">\n            <a (click)=\"defaultQuestionClicked()\" class=\"groupfield smallbut w-button\">{{dataService.getText(dataService.challengesData[dataService.type].defaultStage.option1)}}</a>\n          </div>\n          <div class=\"w-col w-col-6 answer-option\">\n            <a (click)=\"defaultQuestionClicked()\" class=\"groupfield smallbut w-button\">{{dataService.getText(dataService.challengesData[dataService.type].defaultStage.option2)}}</a>\n          </div>\n        </div>\n        <div class=\"row-but w-row\">\n          <div class=\"w-col w-col-6 answer-option\">\n            <a (click)=\"defaultQuestionClicked()\" class=\"groupfield smallbut w-button\">{{dataService.getText(dataService.challengesData[dataService.type].defaultStage.option3)}}</a>\n          </div>\n          <div class=\"w-col w-col-6 answer-option\">\n            <a (click)=\"defaultQuestionClicked()\" class=\"groupfield smallbut w-button\">{{dataService.getText(dataService.challengesData[dataService.type].defaultStage.option4)}}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<main-footer [showPartners]=\"true\"></main-footer>"

/***/ }),

/***/ "../../../../../src/app/Components/HomePage/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var HomeComponent = (function () {
    function HomeComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
    }
    HomeComponent.prototype.toggleMenu = function () {
        $('.navigation-menup').toggleClass('open');
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if (window.location.hostname.indexOf('soccer') != -1) {
        //     this.dataService.type = '1';
        //     document.title = "Soccer Challenge";
        // }
        // if (window.location.hostname.indexOf('social') != -1) {
        this.dataService.type = '4';
        document.title = "Social Challenge";
        // }
        // if (window.location.hostname.indexOf('challenge15') != -1) {
        //     document.title = "15 Challenge";
        //     if (!this.route.snapshot.queryParams.pass) {
        //         this.router.navigate(['15'])
        //     }
        // }
        if (this.route.snapshot.queryParams) {
            var viralLink = this.route.snapshot.queryParams.viralLink;
            if (viralLink) {
                this.dataService.saveViralLink(viralLink);
                this.dataService.user.viralLink = viralLink;
            }
        }
        this.type = this.dataService.type;
        this.globals = myGlobals;
        this.challengesData = this.dataService.challengesData[this.dataService.type];
        this.dataService.getContest(this.type)
            .then(function (contest) {
            _this.contest = contest;
        }).catch(function (err) {
            console.log('failed to fetch contest data: ', err);
        });
    };
    HomeComponent.prototype.analyticsEvent = function (eventName, label) {
        this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), eventName, label ? label : 'לחיצה', 'auto_event');
    };
    HomeComponent.prototype.defaultQuestionClicked = function () {
        this.analyticsEvent('שאלת פתיחה', 'סיום משימה');
        if (this.dataService.user.isEmpty()) {
            this.dataService.showSignupPopup();
        }
        else {
            this.router.navigate(['question-flow', this.dataService.type]);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'my-home',
        template: __webpack_require__("../../../../../src/app/Components/HomePage/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/HomePage/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/NotYet/not-yet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".not-yet-sign-text {\n    -webkit-transform: rotate(13.5deg);\n    -moz-transform: rotate(13.5deg);\n    -ms-transform: rotate(13.5deg);\n    -o-transform: rotate(13.5deg);\n    font-size: 4vw;\n    left: 39vw;\n    position: absolute;\n    text-align: center;\n    top: 29%;\n    line-height: 4vw;\n    width: 22vw;\n    color: white;\n    font-family: 'Almoni dl aaa', sans-serif;\n    text-shadow: 5px 5px 0 #3b4651;\n    font-weight: 900;\n}\n\nimg {\n    width: 30%;\n}\n\n.div-center {\n    position: relative;\n}\n\n.subtext {\n    font-size: 2.5vw;\n    margin-left: 35vw;\n    text-align: center;\n    width: 30vw;\n    font-family: 'Almoni dl aaa', sans-serif;\n    font-weight: 900;\n    direction: rtl;\n    line-height: 50px;\n}\n\n@media (max-width:417px)\n{\n     .div-center {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        /* display: flex; */\n        margin-top: 114%;\n        text-align: center;\n    }\n    .subtext {\n        font-size: 7.5vw;\n        margin-left: 35vw;\n        text-align: center;\n        width: 34vw;\n    }\n   \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/NotYet/not-yet.component.html":
/***/ (function(module, exports) {

module.exports = "<main-header [hidesignup]=\"true\"></main-header>\n<div class=\"div-center\">\n    <img src=\"/images/generic-error-sign.svg\">\n    <span *ngIf=\"dataService.currentLanguage.type == 'he'\" class=\"not-yet-sign-text\">רגע, האתגר הגדול עוד לא יצא לדרך</span>\n    <span *ngIf=\"dataService.currentLanguage.type == 'ar'\" class=\"not-yet-sign-text\">الانتظار، والتحدي الكبير لم تبدأ بعد</span>\n</div>\n<div *ngIf=\"date && dataService.currentLanguage.type == 'he'\" class=\"subtext\">האתר יפתח ב-{{date}} נתראה אז!</div>\n<div *ngIf=\"date && dataService.currentLanguage.type == 'ar'\" class=\"subtext\">سيتم فتح التحدي في-{{date}} أراك بعد ذلك!</div>\n\n<main-footer [showPartners]=\"true\"></main-footer>"

/***/ }),

/***/ "../../../../../src/app/Components/NotYet/not-yet.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var NotyetComponent = (function () {
    function NotyetComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
    }
    NotyetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.type = '4';
        this.type = '4';
        this.date = '04.02';
        // subscribe to router event
        this.route.queryParams.subscribe(function (params) {
            if (params['ar'] == "") {
                _this.dataService.currentLanguage.type = 'he';
                _this.dataService.changeLanguage();
            }
        });
    };
    return NotyetComponent;
}());
NotyetComponent = __decorate([
    core_1.Component({
        selector: 'not-yet',
        template: __webpack_require__("../../../../../src/app/Components/NotYet/not-yet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/NotYet/not-yet.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object])
], NotyetComponent);
exports.NotyetComponent = NotyetComponent;
var _a, _b, _c;
//# sourceMappingURL=not-yet.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Pipes/PipeBiDi/pipe-bidi.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var BiDi = (function () {
    function BiDi(sanitizer) {
        this.sanitizer = sanitizer;
    }
    BiDi.prototype.transform = function (value) {
        var reg = /([^\u0590-\u05fe])+/g;
        if (typeof value == 'string') {
            value = value.replace(reg, '<span style="direction:ltr;" dir="ltr"> $1 </span>');
        }
        return this.sanitizer.bypassSecurityTrustHtml(value);
        // return value;
    };
    return BiDi;
}());
BiDi = __decorate([
    core_1.Pipe({
        name: 'bidi'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _a || Object])
], BiDi);
exports.BiDi = BiDi;
var _a;
//# sourceMappingURL=pipe-bidi.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Pipes/PipeFindGGB/pipe-find-ggb.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var GGBSearch = (function () {
    function GGBSearch(sanitizer) {
        this.sanitizer = sanitizer;
        this.ggbModelsDir = "../../../../ggbModels/";
        this.ggbSelectorId = "ggb-element";
    }
    GGBSearch.prototype.transform = function (value, args) {
        // find the ggb in the text
        value = value.replace("{{ggb}}", "<div><div id=\"" + this.ggbSelectorId + "\"></div></div>");
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    return GGBSearch;
}());
GGBSearch = __decorate([
    core_1.Pipe({
        name: 'ggb'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _a || Object])
], GGBSearch);
exports.GGBSearch = GGBSearch;
var _a;
//# sourceMappingURL=pipe-find-ggb.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Pipes/PipeFindGGB/pipe-init-ggb.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var GGBInit = (function () {
    function GGBInit(sanitizer) {
        this.sanitizer = sanitizer;
        this.ggbModelsDir = "../../../ggbModels/";
        this.ggbSelectorId = "ggb-element";
    }
    GGBInit.prototype.transform = function (value, args) {
        var fileName = args;
        var that = this;
        setTimeout(function () {
            that.injectGGB(fileName && fileName.toString());
        }, 20);
        // return this.sanitizer.bypassSecurityTrustHtml(value);
        return value;
    };
    GGBInit.prototype.injectGGB = function (fileName) {
        fileName = "" + this.ggbModelsDir + fileName;
        var that = this;
        $('#' + this.ggbSelectorId).ready(function () {
            console.log(fileName);
            var ggbApp = new GGBApplet({
                appName: "geometry",
                width: 700,
                height: 700,
                showToolBar: false,
                showAlgebraInput: true,
                showMenuBar: true,
                filename: fileName
            }, true);
            ggbApp.inject(that.ggbSelectorId);
        });
    };
    return GGBInit;
}());
GGBInit = __decorate([
    core_1.Pipe({
        name: 'ggbInit'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _a || Object])
], GGBInit);
exports.GGBInit = GGBInit;
var _a;
//# sourceMappingURL=pipe-init-ggb.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Pipes/PipeFindImageInQuestion/pipe-find-image-question.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ImageSearch = (function () {
    function ImageSearch() {
    }
    ImageSearch.prototype.transform = function (value) {
        // let re = /\/images\/[\w\s_.-]+\.png/gi
        var re = /https?:\/\/.*?\.(?:png|jpg|jpeg)/ig;
        var res = value.match(re);
        if (res) {
            res.forEach(function (src) {
                value = value.replace(src, "<img src='" + src + "'>");
            });
        }
        return value;
    };
    return ImageSearch;
}());
ImageSearch = __decorate([
    core_1.Pipe({
        name: 'image'
    })
], ImageSearch);
exports.ImageSearch = ImageSearch;
//# sourceMappingURL=pipe-find-image-question.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Pipes/PipeFindInput/pipe-find-input.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var InputSearch = (function () {
    function InputSearch(sanitizer) {
        this.sanitizer = sanitizer;
    }
    InputSearch.prototype.transform = function (value) {
        var input = "<span  type='text' class='button-5p mq-answer' style='min-width:200px;margin-right: 5px;'>\
            <span>\
                <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='39' height='39' viewBox='0 0 39 39'>\
                    <g>\
                        <g transform='translate(-372 -703)'>\
                            <image width='39' height='39' transform='translate(372 703)' \
                            xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAABo0lEQVRYR9XYS07EMAwG4N9iDxKX4QYsOAJCiC0nYosAcQQW3IDDgAT7kZGHNMqkeTnxlLZSN51M+tV1nDSExMHMFwDe3HlHRLtUu5FrzHwC4BHAlZxE9BH3R/EFB3sHcOp+ewVwawl0sCcA1+4ePwAuY+ABLgGb7GbABGy6xwzocQWYGbAASwL3uAbYMLABNgOSAtYNVMAOgcz8CeBcOfKac7ADNlG+JHLPAG6UOGleBQ7ApP8XwUm9CYe1xpkFmvTrBoQp0ARGtAtLiQnQCiZBi4vwKPAewENQ+YdSJDV9jQA1mLBtMndnOIMc1AKzgyqJWxBYLEdZ3ALAap0s4o4IrMJmozWXLIPlIe62CdaMM4xgM0yFc0BZHX9rh2PQ/oyIZFHZdFRzburF6NXaR84Ipl4PViNnDFMBt1nnjhQxVVnZ1ty6UMSaIriN9dxgxHz9surHzxCWHRpMdf5B1/31tfbv1lV/8ctGYbgfV1sxqCbvzhz82w5zf24FqmEdqxq/T7f+/bng6XIR7I5YnCNdO5sFoBms8Irre8IR8N93038BPEZms5CJPUUAAAAASUVORK5CYII='/>\
                        </g>\
                    </g>\
                </svg>\
            </span>\
        </span>";
        input = "<input class='mq-answer'  type='text' class='button-5p mq-answer' style='min-width:200px;margin-right: 5px;'></input>";
        do {
            // value = value.replace("{{input}}", "<input  #mathAnswers type='text' class='button-5p mq-answer' style='margin-right: 5px;'>x=</input>");
            value = value.replace("{{input}}", input);
        } while (value.indexOf("{{input}}") != -1);
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    return InputSearch;
}());
InputSearch = __decorate([
    core_1.Pipe({
        name: 'input'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _a || Object])
], InputSearch);
exports.InputSearch = InputSearch;
var _a;
//  <span #mathAnswers>x=1 </span>
// <span #mathAnswers>x=2 </span>
// <span #mathAnswers>x=3 </span> 
//# sourceMappingURL=pipe-find-input.js.map

/***/ }),

/***/ "../../../../../src/app/Components/PisaHome/homepisa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-9p.backp {\n  margin-left: 1px;\n  height: 387px;\n  margin-bottom: -40px;\n}\n\n.div-blockp {\n  margin-top: -10%;\n}\n\n.button-3p.levelp {\n  height: 100px;\n  line-height: 44px;\n}\n\n.button-3p.levelp.shefffel {\n  margin-top: 2%;\n  margin-left: -30px;\n}\n\n.sectionp.darkp._1p {\n  min-height: 400px;\n}\n\n.football-challange-link {\n  margin-bottom: 30px;\n  text-align: center;\n  width: 300px;\n  background-image: linear-gradient(315deg, #f2d36f 49%, #bd7d2f);\n}\n\n.button-3p.levelp.veryhard{\n  -webkit-box-shadow: inset 0 -8px 0 0 #bd7d2f;\n          box-shadow: inset 0 -8px 0 0 #bd7d2f;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/PisaHome/homepisa.component.html":
/***/ (function(module, exports) {

module.exports = "  <div data-collapse=\"medium\" data-animation=\"default\" data-duration=\"400\" class=\"navigation-barpp darkpp w-nav\"><a href=\"index.html\" class=\"brand-linkp left-spacingp w-nav-brand\"></a>\n    <nav role=\"navigation\" class=\"navigation-menup w-nav-menu\"><a [routerLink]=\"['/pisaquestions', 5]\" class=\"pnavigation-link pwhite w-nav-link\">שאלות</a><a [routerLink]=\"['/15']\" class=\"pnavigation-link pwhite w-nav-link\">אודות</a></nav><!--<a (click)=\"dataService.changeLanguage()\" class=\"pnavigation-link pwhite w-nav-link\">עברית\\عربيه</a>-->\n    <div class=\"hamburger-buttonp whitep w-nav-button\">\n      <div class=\"picon w-icon-nav-menu\"></div>\n    </div>\n  </div>\n  <div class=\"phero-sectionp w-clearfix\">\n    <h1 class=\"pheadingp\">אתגר ה-15</h1><img src=\"images/Rectangle-925.png\" width=\"215\" class=\"image-8p homep\">\n    <p class=\"paragraph-2p homep _1p\">?חושבים שאתם חכמים יותר מילד בן 15</p>\n    <div class=\"conp\"></div>\n    <div class=\"div-block-9p\"><img src=\"images/Rectangle-926.png\" srcset=\"images/Rectangle-926-p-500.png 500w, images/Rectangle-926.png 707w\" sizes=\"(max-width: 479px) 76vw, 100vw\" class=\"image-9p backp\">\n      <p class=\"paragraphp lightp title\">על המבחן</p>\n      <p class=\"paragraphp lightp\">כשאנחנו מתמודדים עם בעיות של מתמטיקה ביום יום, כמו לחשב כמה טיפ לשם, איזה קרן פנסיה הכי משתלמת, והאם הרהיט הזה יכנס לנו לסלון, אנחנו עושים את זה באופן כמעט אוטומטי, בדרך מתמטית. \n        אנחנו מזמינים אתכם לענות על החידות שמציגות מתמטיקה מהחיים, ולגלות האם שריר המתמטיקה שפיתחתם הופך אתכם ליותר חכמים מבני 15. יש לכם באמת ילד או ילדה בני 15? תעשו תחרות, רק אל תתביישו אם הם מנצחים אתכם, תהיו גאים.\n        </p>\n    </div>\n  </div>\n  <div class=\"sectionp darkp _1p\">\n    <div class=\"conconp w-container\">\n      <div class=\"div-blockp\">\n        <h1 class=\"heading-4p\">השאלות</h1>\n        <p class=\"paragraph-4p\">בחרו דרגת קושי</p></div>\n    </div>\n    <div class=\"div-block-2p w-clearfix\"><a [routerLink]=\"['/pisaquestions', 1]\" class=\"button-3p levelp veryhard w-button\">קשה מאוד</a><a [routerLink]=\"['/pisaquestions', 2]\" class=\"button-3p levelp hard w-button\">קשה</a><a [routerLink]=\"['/pisaquestions', 3]\" class=\"button-3p levelp average w-button\">ממוצע</a><a [routerLink]=\"['/pisaquestions', 4]\" class=\"button-3p levelp easy extremely w-button\">קל</a><a [routerLink]=\"['/pisaquestions', 5]\" class=\"button-3p levelp easy very w-button\">קל מאוד</a></div>\n    <p class=\"paragraph-5p\">-   או   -</p>\n    <div class=\"div-block-2p _2 w-hidden-main w-clearfix\"><a href=\"#\" class=\"button-3p levelp easy very surprise w-button\">הפתיעו<br>אותי</a></div>\n    <div class=\"div-block-6p w-clearfix\"><a [routerLink]=\"['/pisaquestions', randomDifficulty]\" class=\"button-3p levelp shefffel w-hidden-tiny w-button\">תפתיעו אותי</a></div>\n  </div>\n  <div class=\"sectionp lightp\">\n    <div class=\"container-2p w-container\">\n      <h1 class=\"heading-2p darkp\">עלינו</h1>\n      <p class=\"paragraph-3p\">אתגר ה-15 הוא יוזמה משותפת ראשונה מסוגה של קרן טראמפ ומט״ח, במטרה להעשיר אנשים מכל הגילאים וכל התחומים לבחון את השריר המתמטי שלהם. אתגר ה-15 הוא חלק מסדרת אתגרים לבני נוער</p>\n      <div class=\"div-block-2p w-clearfix\"><a [routerLink]=\"['/']\" class=\"button-3p levelp veryhard w-button football-challange-link\">אתגר הכדורגל</a></div>\n      <div class=\"row-2p w-row\">\n        <div class=\"column-2p w-col w-col-6\">\n          <div class=\"p\"><img src=\"images/third.png\" class=\"image-11p\"></div>\n        </div>\n        <div class=\"column-3p w-col w-col-6\">\n          <div class=\"p\"><img src=\"images/second.png\" class=\"image-10p\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footerp accentpp\">\n    <div class=\"container-3p w-container\">\n      <div class=\"float-rightp\"><a href=\"http://www.facebook.com/userid\" class=\"social-icon-linkp w-inline-block\"></a><a href=\"http://www.twitter.com/userid\" class=\"social-icon-linkp w-inline-block\"></a><a href=\"http://www.linkedin.com/userid\" class=\"social-icon-linkp w-inline-block\"></a><a class=\"social-icon-linkp w-inline-block\"></a></div>\n      <div class=\"footer-textp\">Powered by</div><img src=\"images/Moveo-White.png\" width=\"145.5\" class=\"image-4p\"></div>\n  </div>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js\" type=\"text/javascript\"></script>\n  <script src=\"js/webflow.js\" type=\"text/javascript\"></script>\n  <!-- [if lte IE 9]><script src=\"https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js\"></script><![endif] -->\n<main-footer [showPartners]=\"true\"></main-footer>"

/***/ }),

/***/ "../../../../../src/app/Components/PisaHome/homepisa.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var PisaHomeComponent = (function () {
    function PisaHomeComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
    }
    PisaHomeComponent.prototype.ngOnInit = function () {
        this.randomDifficulty = Math.floor(Math.random() * 6);
        if (this.randomDifficulty == 0) {
            this.randomDifficulty++;
        }
    };
    return PisaHomeComponent;
}());
PisaHomeComponent = __decorate([
    core_1.Component({
        selector: 'homepisa',
        template: __webpack_require__("../../../../../src/app/Components/PisaHome/homepisa.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/PisaHome/homepisa.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object])
], PisaHomeComponent);
exports.PisaHomeComponent = PisaHomeComponent;
var _a, _b, _c;
//# sourceMappingURL=homepisa.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/PisaPage/PisaHeader/pisa-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/PisaPage/PisaHeader/pisa-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div data-collapse=\"medium\" data-animation=\"default\" data-duration=\"400\" class=\"navigation-barpp darkpp w-nav\">\n  <a class=\"brand-linkp left-spacingp w-nav-brand\"></a>\n  <nav role=\"navigation\" class=\"navigation-menup w-nav-menu\"><a [routerLink]=\"['/pisaquestions', 5]\" class=\"pnavigation-link pwhite w-nav-link\">שאלות</a><a [routerLink]=\"['/15']\"\n    class=\"pnavigation-link pwhite w-nav-link\">אודות</a></nav>\n  <div class=\"hamburger-buttonp whitep w-nav-button\">\n    <div class=\"w-icon-nav-menu\"></div>\n  </div>\n</div>\n<div class=\"phero-sectionp pquestionsp porange\" [ngStyle]=\"{'background-image': setBgForHeader()}\">\n  <div class=\"rowp w-row\">\n    <div class=\"pcolumn w-col w-col-5\"><a href=\"#\" class=\"button-4p sharepp w-button\">אתגר חבר</a><img src=\"images/share-orange.png\" width=\"35\" srcset=\"images/share-orange-p-500.png 500w, images/share-orange-p-800.png 800w, images/share-orange-p-1080.png 1080w, images/share-orange.png 1990w\"\n        sizes=\"(max-width: 479px) 7vw, 35px\" class=\"image-17p\"><img src=\"images/Big-ball.png\" width=\"750\" srcset=\"images/Big-ball-p-500.png 500w, images/Big-ball-p-800.png 800w, images/Big-ball-p-1080.png 1080w, images/Big-ball-p-1600.png 1600w, images/Big-ball.png 1671w\"\n        sizes=\"100vw\" class=\"imagep\"></div>\n    <div class=\"pcolumn w-clearfix w-col w-col-7\">\n      <h1 class=\"pheadingp\">{{levelString}}</h1><img src=\"images/Rectangle-925.png\" class=\"image-12p\"></div>\n  </div>\n  <div class=\"rowp w-row\">\n    <div class=\"pcolumn w-col w-col-5\"><img src=\"images/Big-ball.png\" width=\"750\" srcset=\"images/Big-ball-p-500.png 500w, images/Big-ball-p-800.png 800w, images/Big-ball-p-1080.png 1080w, images/Big-ball-p-1600.png 1600w, images/Big-ball.png 1671w\"\n        sizes=\"100vw\" class=\"imagep\"></div>\n    <div class=\"pcolumn w-col w-col-7\"></div>\n  </div><img src=\"images/origami-2.png\" width=\"872\" srcset=\"images/origami-2-p-500.png 500w, images/origami-2-p-800.png 800w, images/origami-2-p-1080.png 1080w, images/origami-2-p-1600.png 1600w, images/origami-2-p-2000.png 2000w, images/origami-2-p-2600.png 2600w, images/origami-2-p-3200.png 3200w, images/origami-2.png 3919w\"\n    sizes=\"(max-width: 479px) 100vw, 65vw\" class=\"image-15p w-hidden-tiny\"></div>\n\n     <div *ngIf=\"dataService.showGenericPopup\">\n      <alert-popup-message [textForPopup]=\"dataService.alertMessage\" [subTextForPopup]=\"dataService.alertSubMessage\" [success]=\"dataService.genericPopUpIsSuccess\"></alert-popup-message>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/Components/PisaPage/PisaHeader/pisa-header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var PisaHeaderComponent = (function () {
    function PisaHeaderComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
    }
    PisaHeaderComponent.prototype.ngOnInit = function () {
        switch (this.level) {
            case 1:
                this.levelString = 'קל מאוד';
                break;
            case 2:
                this.levelString = 'קל';
                break;
            case 3:
                this.levelString = 'בינוני';
                break;
            case 4:
                this.levelString = 'קשה';
                break;
            case 5:
                this.levelString = 'קשה מאוד';
                break;
            default:
                break;
        }
    };
    PisaHeaderComponent.prototype.setBgForHeader = function () {
        switch (this.level) {
            case 1:
                this.bgForHeader = "linear-gradient(180deg, rgba(35, 190, 110, .83), rgba(35, 190, 110, .83)), url('/images/658.jpg');";
                break;
            case 2:
                this.bgForHeader = "linear-gradient(180deg, rgba(35, 190, 110, .83), rgba(35, 190, 110, .83)), url('/images/658.jpg');";
                break;
            case 3:
                this.bgForHeader = "linear-gradient(315deg, #f1d97a 49%, #d29d3b);";
                break;
            case 4:
                this.bgForHeader = "linear-gradient(315deg, #f1d97a 49%, #d29d3b);";
                break;
            case 5:
                this.bgForHeader = "linear-gradient(180deg, rgba(218, 50, 50, .68), rgba(218, 50, 50, .68)), url('/images/8681-Converted.png');";
                break;
            default:
                break;
        }
        return new Object({ 'background-color': 'red' });
    };
    return PisaHeaderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PisaHeaderComponent.prototype, "level", void 0);
PisaHeaderComponent = __decorate([
    core_1.Component({
        selector: 'pisa-header',
        template: __webpack_require__("../../../../../src/app/Components/PisaPage/PisaHeader/pisa-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/PisaPage/PisaHeader/pisa-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object])
], PisaHeaderComponent);
exports.PisaHeaderComponent = PisaHeaderComponent;
var _a, _b, _c;
//# sourceMappingURL=pisa-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/PisaPage/pisapage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/PisaPage/pisapage.component.html":
/***/ (function(module, exports) {

module.exports = "<pisa-header [level]=\"level\"></pisa-header>\n<standalone-pisa-question ></standalone-pisa-question>\n"

/***/ }),

/***/ "../../../../../src/app/Components/PisaPage/pisapage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var PisaPageComponent = (function () {
    function PisaPageComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
    }
    PisaPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this.route.params.subscribe(function (params) {
            _this.level = params['level'] - 1; // (+) converts string 'id' to a number
        });
    };
    return PisaPageComponent;
}());
PisaPageComponent = __decorate([
    core_1.Component({
        selector: 'pisa-page',
        template: __webpack_require__("../../../../../src/app/Components/PisaPage/pisapage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/PisaPage/pisapage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object])
], PisaPageComponent);
exports.PisaPageComponent = PisaPageComponent;
var _a, _b, _c;
//# sourceMappingURL=pisapage.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/PisaQuestions/pisa-questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div-block-3p.bottomp._2ndp {\n  margin-top: 0px;\n  margin-left: 276px;\n}\n\n.button-3p.levelp.average.group {\n    border: none;\n}\n\n.button-3p.levelp.group.selected {\n    border: 5px solid #fff;\n    border-radius: 10px;\n}\n\n.button-3p.levelp.group {\n    border-radius: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/PisaQuestions/pisa-questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div data-collapse=\"medium\" data-animation=\"default\" data-duration=\"400\" class=\"navigation-barpp darkpp w-nav\">\n  <a href=\"index.html\" class=\"brand-linkp left-spacingp w-nav-brand\"></a>\n  <nav role=\"navigation\" class=\"navigation-menup w-nav-menu\"><a [routerLink]=\"['/pisaquestions', 5]\" class=\"pnavigation-link pwhite w-nav-link\">שאלות</a><a [routerLink]=\"['/15']\"\n      class=\"pnavigation-link pwhite w-nav-link\">אודות</a></nav>\n  <div class=\"hamburger-buttonp whitep w-nav-button\">\n    <div class=\"piconp w-icon-nav-menu\"></div>\n  </div>\n</div>\n<div class=\"phero-sectionp pquestionsp\">\n  <div class=\"rowp grouprow1 w-row\">\n    <div class=\"pcolumn w-col w-col-5\">\n      <div class=\"div-block-3p transparent\">\n        <div class=\"text-blockp\">1,115</div>\n        <div class=\"text-block-2p\">סה״כ נקודות</div>\n      </div><img src=\"images/Big-ball.png\" width=\"750\" srcset=\"images/Big-ball-p-500.png 500w, images/Big-ball-p-800.png 800w, images/Big-ball-p-1080.png 1080w, images/Big-ball-p-1600.png 1600w, images/Big-ball.png 1671w\"\n        sizes=\"100vw\" class=\"imagep\"></div>\n    <div class=\"pcolumn group w-clearfix w-col w-col-7\">\n      <h1 class=\"pheadingp\">שאלות</h1><img src=\"images/Rectangle-925.png\" class=\"image-12p questiontitle popupquestions\"></div>\n  </div>\n  <div class=\"rowp grouprow2 w-row\">\n    <div class=\"pcolumn w-col w-col-5\">\n      <div class=\"div-block-3p bottomp\">\n        <div class=\"text-blockp upper\">1,015</div>\n        <div class=\"div-block-3p bottomp onlymobile w-hidden-main\">\n          <div class=\"text-blockp bottomp secondp\">נקודות ברמה</div>\n        </div>\n      </div><img src=\"images/Big-ball.png\" width=\"750\" srcset=\"images/Big-ball-p-500.png 500w, images/Big-ball-p-800.png 800w, images/Big-ball-p-1080.png 1080w, images/Big-ball-p-1600.png 1600w, images/Big-ball.png 1671w\"\n        sizes=\"100vw\" class=\"imagep\"></div>\n    <div class=\"pcolumn group w-col w-col-7\">\n      <div class=\"container-9p w-hidden-main w-container\"><a href=\"#\" class=\"button-7p w-button\">ממוצע</a><img src=\"images/left-arrow.png\" width=\"22\" srcset=\"images/left-arrow-p-500.png 500w, images/left-arrow-p-800.png 800w, images/left-arrow-p-1080.png 1080w, images/left-arrow-p-1600.png 1600w, images/left-arrow.png 2050w\"\n          sizes=\"(max-width: 479px) 20vw, (max-width: 991px) 22px, 100vw\" class=\"image-22p dropdownp w-hidden-main\"></div>\n    </div>\n  </div>\n</div>\n<div class=\"modawrapperp w-hidden-main\">\n  <div class=\"container-10p w-hidden-main w-container\"><a href=\"#\" class=\"button-7p afterpopup w-button\">ממוצע</a></div>\n  <div class=\"container-11p w-container\"><a href=\"#\" class=\"button-7p afterpopup _2nd w-button\">ממוצע</a></div>\n  <div class=\"container-12p w-container\"><a href=\"#\" class=\"button-7p afterpopup _3rd w-button\">ממוצע</a></div>\n  <div class=\"container-12p w-container\"><a href=\"#\" class=\"button-7p afterpopup _4th w-button\">ממוצע</a></div>\n  <div class=\"container-12p w-container\"><a href=\"#\" class=\"button-7p afterpopup _5th w-button\">ממוצע</a></div>\n</div>\n<div class=\"sectionp lightp levelsp\">\n  <div class=\"div-block-3p bottomp _2ndp groupdivp w-hidden-tiny\">\n    <div class=\"text-block-2p bottinmp\">נקודות ברמה</div>\n  </div>\n  <div class=\"div-block-2p _2 special w-hidden-tiny w-clearfix\">\n    <a *ngFor=\"let level of levels; let i = index\"  [routerLink]=\"['/pisaquestions', i+1]\"  [ngClass]=\"levels[i].class\"  class=\"button-3p levelp group w-button\">\n    {{ level.titleHe }}\n    </a>\n  </div>\n  <pisa-questions-list [level]=\"level\" [questions]=\"questions\"></pisa-questions-list>\n\n</div>\n<div class=\"footerp accentpp\">\n  <div class=\"container-3p w-container\">\n    <div class=\"float-rightp\">\n      <a href=\"http://www.facebook.com/userid\" class=\"social-icon-linkp w-inline-block\"></a>\n      <a href=\"http://www.twitter.com/userid\" class=\"social-icon-linkp w-inline-block\"></a>\n      <a href=\"http://www.linkedin.com/userid\" class=\"social-icon-linkp w-inline-block\"></a>\n      <a class=\"social-icon-linkp w-inline-block\"></a>\n    </div>\n    <div class=\"footer-textp\">Powered by</div><img src=\"images/Moveo-White.png\" width=\"145.5\" class=\"image-4p\"></div>\n</div>\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js\" type=\"text/javascript\"></script>\n<script src=\"js/webflow.js\" type=\"text/javascript\"></script>\n<!-- [if lte IE 9]><script src=\"https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js\"></script><![endif] -->"

/***/ }),

/***/ "../../../../../src/app/Components/PisaQuestions/pisa-questions.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var PisaQuestionsComponent = (function () {
    function PisaQuestionsComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.levels = [
            { class: "veryhard button-3p levelp group w-button", name: 'very-hard', titleHe: "קשה מאוד", titleAr: "" },
            { class: "hard button-3p levelp group w-button", name: 'hard', titleHe: "קשה", titleAr: "" },
            { class: "average button-3p levelp group w-button", name: 'medium', titleHe: "ממוצע", titleAr: "" },
            { class: "easy button-3p levelp group w-button", name: 'easy', titleHe: "קל", titleAr: "" },
            { class: "easy very button-3p levelp group w-button", name: 'very-easy', titleHe: "קל מאוד", titleAr: "" }
        ];
        this.questions = [];
    }
    PisaQuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this.route.params.subscribe(function (params) {
            _this.level = params['type'] - 1; // (+) converts string 'id' to a number
            _this.changeLevel(_this.levels[_this.level]);
            _this.levels.forEach(function (l, i) {
                var classes = l.class.split(' ');
                if (i == _this.level) {
                    classes.push('selected');
                }
                else {
                    classes = classes.filter(function (clazz) {
                        return clazz != 'selected';
                    });
                }
                l.class = classes.join(' ');
            });
        });
    };
    PisaQuestionsComponent.prototype.changeLevel = function (level) {
        var that = this;
        this.dataService.getPisaQuestionsForLevel(level.name)
            .then(function (res) {
            var questions = res;
            that.questions = questions;
        })
            .catch();
    };
    return PisaQuestionsComponent;
}());
PisaQuestionsComponent = __decorate([
    core_1.Component({
        selector: 'pisa-questions',
        template: __webpack_require__("../../../../../src/app/Components/PisaQuestions/pisa-questions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/PisaQuestions/pisa-questions.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object])
], PisaQuestionsComponent);
exports.PisaQuestionsComponent = PisaQuestionsComponent;
var _a, _b, _c;
//# sourceMappingURL=pisa-questions.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/PisaQuestionsListing/pisa-questions-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pisa-questions-container .rightp .div-block-4p{\n  float:left;\n}\n\n.pisa-questions-container .div-block-4p{\n  min-width: 50%;\n  max-width: 50%;\n  margin-bottom: 20px;\n  height: 342px;\n}\n\n.pisa-questions-container .w-col-6 {\n    width: 50%;\n    max-width: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/PisaQuestionsListing/pisa-questions-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row-6p _1st w-row pisa-questions-container\">\n  <a *ngFor=\"let question of questions; let i = index\" [routerLink]=\"['/pisa/question/single',level]\" [queryParams]=\"{q: question._id}\">\n    <div class=\"column-12p w-clearfix w-col w-col-6\"\n      [class.rightp]=\"i%2!=0\" >\n      <div class=\"div-block-4p\" [ngClass]=\"{'_2ndrow':i%4==0, '_3rd':i%4==1 , '_8th':i%4==2,'_9th':i%4==3,'rightp':i%2==1}\">\n        <h1 class=\"heading-5p\"> {{question.title}}</h1>\n        <!--<img src=\"images/badge.png\" width=\"114\" class=\"image-14p _2ndbadge\">-->\n      </div>\n    </div>\n\n  </a>\n\n  <!-- <div class=\"column-12p w-clearfix w-col w-col-6\">\n    <div class=\"div-block-4p _2ndrow\">\n      <h1 class=\"heading-5p\">רכבל הפוקר</h1>\n    </div>\n  </div>\n  <div class=\"column-12p w-clearfix w-col w-col-6\">\n    <div class=\"div-block-4p rightp _3rd\"><img src=\"images/badge.png\" width=\"114\" class=\"image-14p _1stbadge\">\n      <h1 class=\"heading-5p\">רכבל הפוקר</h1>\n    </div>\n  </div>\n  <div class=\"column-12p w-clearfix w-col w-col-6\">\n    <div class=\"div-block-4p _8th\">\n      <h1 class=\"heading-5p\">רכבל הפוקר</h1>\n    </div>\n  </div>\n  <div class=\"column-12p w-clearfix w-col w-col-6\">\n    <div class=\"div-block-4p rightp _9th\">\n      <h1 class=\"heading-5p\">רכבל הפוקר</h1>\n    </div>\n  </div> -->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/PisaQuestionsListing/pisa-questions-listing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var PisaQuestionsListComponent = (function () {
    function PisaQuestionsListComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
    }
    PisaQuestionsListComponent.prototype.ngOnInit = function () {
    };
    return PisaQuestionsListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PisaQuestionsListComponent.prototype, "questions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PisaQuestionsListComponent.prototype, "level", void 0);
PisaQuestionsListComponent = __decorate([
    core_1.Component({
        selector: 'pisa-questions-list',
        template: __webpack_require__("../../../../../src/app/Components/PisaQuestionsListing/pisa-questions-listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/PisaQuestionsListing/pisa-questions-listing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object])
], PisaQuestionsListComponent);
exports.PisaQuestionsListComponent = PisaQuestionsListComponent;
var _a, _b, _c;
//# sourceMappingURL=pisa-questions-listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/PopForAction/pop-for-action.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pop-solid {\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    z-index: 999;\n    height: 100%;\n    padding-top: 85px;\n    background-color: rgba(39, 45, 56, .7);\n  }\n\n  .pop-up {\n    width: 510px;\n    height: 271px;\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 8px;\n    border-radius: 13px;\n    padding: 24px 24px 0px 0px;\n    background-image: none;\n    background-color: #29313a;\n    background-position: 0px 0px;\n    background-size: auto;\n}\n\n  .alert-popup-message-container {\n    margin: 150px auto;\n    width: 660px;\n    height: 450px;\n    -webkit-box-shadow: inset 0 -6px 0 rgba(0, 0, 0, 0.17);\n            box-shadow: inset 0 -6px 0 rgba(0, 0, 0, 0.17);\n    border-radius: 13px;\n    background-color: #29313a;\n}\n\n  .close-pop-up-button-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n}\n\n  .close-pop-up-button-container:first-child{\n    cursor: pointer;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n  h1, h4 {\n    color: #ffffff;\n    font-family: 'Almoni dl aaa', sans-serif;\n    text-align: center; \n    font-weight: 800;\n    letter-spacing: 1.13px;\n    font-size: 36px !important;\n    padding-left: 60px;\n    padding-right: 45px;\n}\n\n  form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;           \n    -webkit-box-orient: vertical;           \n    -webkit-box-direction: normal;           \n        -ms-flex-direction: column;           \n            flex-direction: column;  \n    -webkit-box-pack: center;  \n        -ms-flex-pack: center;  \n            justify-content: center; \n    -webkit-box-align: center; \n        -ms-flex-align: center; \n            align-items: center;   \n}\n\n  .submit-button {\n    margin-bottom: 25px;\n}\n\n  .popup-but.w-button{\n  \n    background-image: linear-gradient(315deg, #f17a7a 49%, #d23b3b);\n}\n\n  .popup-but.w-button.success{\n    background-image: linear-gradient(315deg, #3BD309 49%, #7ff45a);\n}\n\n  .alert-popup-message-container{\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    background: rgba(0,0,0,0.8);\n    opacity: 1;\n    -webkit-transition: opacity 0.3s;\n    transition: opacity 0.3s;\n    z-index: 999;\n    overflow-x: hidden;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/PopForAction/pop-for-action.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pop-solid\">\n    <div class=\"pop-up\">\n        <div class=\"close-pop-up-button-container\">\n            <img src=\"../../../images/X.png\" alt=\"X button to close the window\" class=\"close-pop-up-button\" (click)=\"dataService.showMessagePopup=false\">\n        </div>\n        <h1 class=\"heading-2 first-heading\">{{textForPopup}}</h1>\n        <h4 class=\"heading-2\">{{subTextForPopup}}</h4>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/PopForAction/pop-for-action.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var PopForActionComponent = (function () {
    function PopForActionComponent(route, dataService, router, _ngZone) {
        this.dataService = dataService;
        this.router = router;
        this._ngZone = _ngZone;
        this.success = false;
    }
    PopForActionComponent.prototype.ngOnInit = function () {
        this.user = {};
        this.globals = myGlobals;
    };
    return PopForActionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PopForActionComponent.prototype, "textForPopup", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PopForActionComponent.prototype, "subTextForPopup", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PopForActionComponent.prototype, "success", void 0);
PopForActionComponent = __decorate([
    core_1.Component({
        selector: 'pop-for-action',
        template: __webpack_require__("../../../../../src/app/Components/PopForAction/pop-for-action.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/PopForAction/pop-for-action.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_2.ActivatedRoute !== "undefined" && router_2.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object])
], PopForActionComponent);
exports.PopForActionComponent = PopForActionComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=pop-for-action.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/PopUpConfirmTerms/popup-confirm-terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-confirm-terms-pop-up {\n    opacity: 1;\n    z-index: 10;\n}\n\n.cointainer-pop-up, .show-confirm-terms-pop-up {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.pop-up-container {\n    margin: 150px auto;\n    width: 660px;\n    -webkit-box-shadow: inset 0 -6px 0 rgba(0, 0, 0, 0.17);\n            box-shadow: inset 0 -6px 0 rgba(0, 0, 0, 0.17);\n    border-radius: 13px;\n    background-color: #29313a;\n}\n\n.close-pop-up-button-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    cursor: pointer;\n}\n\n.close-pop-up-button-container:first-child{\n    padding: 22px 22px 0px 0px;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\nh1 {\n    margin-top: 30px;\n    height: 34px;\n    color: #ffffff;\n    font-family: 'Almoni dl aaa', sans-serif;\n    font-size: 42px;\n    text-align: center; \n    font-weight: 800;\n    letter-spacing: 1.13px;\n}\n\nform {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;           \n    -webkit-box-orient: vertical;           \n    -webkit-box-direction: normal;           \n        -ms-flex-direction: column;           \n            flex-direction: column;  \n    -webkit-box-pack: center;  \n        -ms-flex-pack: center;  \n            justify-content: center; \n    -webkit-box-align: center; \n        -ms-flex-align: center; \n            align-items: center;   \n}\n\n.confirm-text{\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    font-size: 33px;\n}\n\n.submit-button {\n    margin-bottom: 25px;\n    margin-top: 25px;\n}\n\n.check-img{\n    width: 31px;\n    height: 32px;\n    cursor: pointer;\n}\n\n/* .popup-but, .w-button{\n    width: 498px;\n    height:87px;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/PopUpConfirmTerms/popup-confirm-terms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pop-up-container\">\n    <div class=\"close-pop-up-button-container\">\n        <img src=\"/images/X.png\" alt=\"X button to close the window\" class=\"close-pop-up-button\" (click)=\"dataService.showConfirmTerms=false\">\n    </div>\n    <h1 class=\"heading-2 first-heading\">אשר את התקנון לפני הכניסה</h1>\n    <form >\n        <div class=\"div-block-2\">\n            <img (click)=\"termsConfirmed = !termsConfirmed\" *ngIf=\"termsConfirmed\" src=\"/images/check.png\" class=\"image-8 check-img\">\n            <img (click)=\"termsConfirmed = !termsConfirmed\" *ngIf=\"!termsConfirmed\" src=\"/images/check_1.png\" class=\"image-8 check-img\">\n            <div class=\"text-block confirm-text\">קראתי ואישרתי את\n                <a class=\"text-span\">התקנון</a>\n            </div>\n        </div>\n        \n        <div class=\"submit-button\">\n            <button (click)=\"termsSubmitted()\" class=\"popup-but w-button\" [disabled]=\"!termsConfirmed\">המשך</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/PopUpConfirmTerms/popup-confirm-terms.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var ConfirmComponent = (function () {
    function ConfirmComponent(route, dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.termsConfirmed = false;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        this.globals = myGlobals;
    };
    ConfirmComponent.prototype.termsSubmitted = function () {
        var _this = this;
        this.dataService.joinContest().then(function (res) {
            _this.dataService.showConfirmTerms = false;
        }).catch(function (err) { return alert('Something went wrong..' + err); } /*TODO: change to warning popup*/);
    };
    return ConfirmComponent;
}());
ConfirmComponent = __decorate([
    core_1.Component({
        selector: 'popup-confirm-terms',
        template: __webpack_require__("../../../../../src/app/Components/PopUpConfirmTerms/popup-confirm-terms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/PopUpConfirmTerms/popup-confirm-terms.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_2.ActivatedRoute !== "undefined" && router_2.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], ConfirmComponent);
exports.ConfirmComponent = ConfirmComponent;
var _a, _b, _c;
//# sourceMappingURL=popup-confirm-terms.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/PopUpConnect/popup-connect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pop-solid {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 999;\n  height: 100%;\n  padding-top: 85px;\n  background-color: rgba(39, 45, 56, .7);\n}\n.img-19{\n  bottom: 24px;\n}\n.pop-up {\n    display: block;\n    width: 660px;\n    height: 580px;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 8px;\n    padding: 80px 149px 149px;\n    border-radius: 13px;\n    background-image: url(/images/Dark-BG.png);\n    background-position: 0px 0px;\n    background-size: auto;\n\n}\n.google-but{\n  display: block;\n    width: 189px;\n    height: 44px;\n    margin-bottom: 23px;\n    padding-right: 35px;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    border-radius: 5px;\n    background-color: #dd4b39;\n    /* box-shadow: inset 0 -8px 0 0 rgba(3, 3, 3, .17); */\n    direction: rtl;\n    /* font-family: 'Almoni dl aaa', sans-serif; */\n    color: #fff;\n    font-size: 18px;\n    line-height: 28px;\n    font-weight: 400;\n    text-align: right;\n}\n.pass{\n  margin: -10px 0 20px -250px;\n  font-family: 'Almoni dl aaa', sans-serif;\n  color: #ffffff;\n  font-size: 18px;\n  background-image: url(/images/Dark-BG.png);\n  text-decoration: underline;\n  cursor: pointer;\n}\nimg.image-7 {\n  left: 0;\n}\n.popup-but.w-button.disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.image-9 {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/PopUpConnect/popup-connect.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pop-solid\">\n  <div class=\"pop-up w-clearfix\">\n    <img src=\"/images/X.png\" class=\"image-9\" (click)=\"close()\">\n    <form>\n      <input type=\"email\" class=\"groupfield w-input\" maxlength=\"256\" [(ngModel)]=\"user.email\" name=\"Email-2\" data-name=\"Email 2\"\n        placeholder=\"{{dataService.getText('emailAddress')}}\" id=\"Email-2\" required=\"\">\n      <input type=\"password\" class=\"groupfield w-input\" maxlength=\"256\" [(ngModel)]=\"user.password\" autofocus=\"true\" name=\"Password\"\n        data-name=\"Password 2\" placeholder=\"{{dataService.getText('password')}}\" id=\"Password2\" required=\"\">\n    </form>\n    <a (click)=\"loginSubmitted()\" class=\"popup-but w-button\" [ngClass]=\"{'disabled' : !(user.email && user.password)}\">{{dataService.getText('login')}}</a>\n    <div class=\"pass\" (click)=\"forgotPassword()\">{{dataService.getText('forgotPassword')}}</div>\n    <div class=\"row-4 w-row\">\n      <div class=\"google w-col w-col-6\">\n        <google-intergration></google-intergration>\n      </div>\n      <div class=\"column-5 w-col w-col-6\">\n         <facebook-integration [showTerms]=\"false\" (onSuccess)=\"onSuccessFacebookLogin($event)\"></facebook-integration>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/PopUpConnect/popup-connect.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var UserDataModel_1 = __webpack_require__("../../../../../src/app/DataModels/UserDataModel.ts");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var ConnectComponent = (function () {
    function ConnectComponent(route, dataService, router, _ngZone) {
        this.dataService = dataService;
        this.router = router;
        this._ngZone = _ngZone;
        this.user = new UserDataModel_1.default();
    }
    ConnectComponent.prototype.ngOnInit = function () {
        this.user = new UserDataModel_1.default();
        this.globals = myGlobals;
    };
    ConnectComponent.prototype.onSuccessFacebookLogin = function (facebookUser) {
        if (!this.dataService.showPopupSign && this.dataService.showPopup) {
            if (facebookUser && facebookUser.email && facebookUser.password) {
                this.user.email = facebookUser.email;
                this.user.password = facebookUser.password;
                this.loginSubmitted();
            }
        }
    };
    ConnectComponent.prototype.onSignIn = function (googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    };
    ConnectComponent.prototype.loginSubmitted = function () {
        var _this = this;
        if (this.user.email && this.user.password) {
            var that_1 = this;
            this.dataService.login(this.user)
                .then(function (user) {
                _this._ngZone.run(function () {
                    _this.dataService.showPopup = false;
                });
                _this.dataService.sendAnalyticsEvent(_this.dataService.getChallengeName(), 'התחבר', 'לחיצה', 'auto_event');
                _this.dataService.sendGoogleTagEventUID(_this.dataService.user._id, 'UID');
            })
                .catch(function (reason) {
                that_1.dataService.logOut();
                that_1.user = new UserDataModel_1.default();
                that_1.dataService.alertMessage = "בעיה בהתחברות: ";
                that_1.dataService.alertSubMessage = JSON.parse(reason._body).error;
                that_1.dataService.showGenericPopup = true;
            });
        }
    };
    ConnectComponent.prototype.forgotPassword = function () {
        this.dataService.showPopup = false;
        this.router.navigate(['forgot', this.dataService.type]);
    };
    ConnectComponent.prototype.close = function () {
        this.dataService.showPopup = false;
        this.router.navigate(['']);
    };
    return ConnectComponent;
}());
ConnectComponent = __decorate([
    core_1.Component({
        selector: 'popup-connect',
        template: __webpack_require__("../../../../../src/app/Components/PopUpConnect/popup-connect.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/PopUpConnect/popup-connect.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_2.ActivatedRoute !== "undefined" && router_2.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object])
], ConnectComponent);
exports.ConnectComponent = ConnectComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=popup-connect.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/PopUpFinishChallenge/popup-finish-challenge.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w-input, .w-select {\n    height: 79px;\n    font-size: 29px;\n}\n\n.button-send-edgar {\n    display: block;\n    width: 103px;\n    height: 65px;\n    margin-right: 7%;\n    margin-left: 35%;\n    margin-top: 0px;\n    padding-top: 17px;\n    padding-bottom: 21px;\n    float: none;\n    border-radius: 10px;\n    background-color: #5faf41;\n    -webkit-box-shadow: inset 0 -7px 0 0 rgba(0, 0, 0, .5);\n            box-shadow: inset 0 -7px 0 0 rgba(0, 0, 0, .5);\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #fff;\n    font-size: 30px;\n    font-weight: 900;\n    text-align: center;\n  }\n\n.field-edgarim {\n    display: block;\n    width: 265px;\n    height: 65px;\n    margin-right: auto;\n    margin-left: auto;\n    padding: 17px auto 21px;\n    float: right;\n    border-radius: 10px;\n    background-color: #fff;\n    -webkit-box-shadow: inset 0 -7px 0 0 rgba(0, 0, 0, .5);\n            box-shadow: inset 0 -7px 0 0 rgba(0, 0, 0, .5);\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #333;\n    font-size: 22px;\n    font-weight: 400;\n    text-align: center;\n  }\n\n.button-share-edgarp {\n    display: block;\n    height: 65px;\n    margin-right: 7%;\n    margin-left: 7%;\n    padding: 17px 67px 21px 15px;\n    border-radius: 10px;\n    background-color: #425cac;\n    -webkit-box-shadow: inset 0 -7px 0 0 rgba(0, 0, 0, .5);\n            box-shadow: inset 0 -7px 0 0 rgba(0, 0, 0, .5);\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #fff;\n    font-size: 30px;\n    font-weight: 900;\n    text-align: center;\n  }\n\n.image-23p {\n    max-height: 36px;\n    margin-left: 352px;\n    margin-top: -93px;\n  }\n\n@media (max-width: 479px) {\n\n    .button-send-edgar {\n      position: absolute;\n      top: 170px;\n      margin-left: 18vw;\n    }\n\n    .button-share-edgarp{\n      font-size: 23px;\n      padding-right: 20px;\n      padding-left: 20px;\n    }\n\n    .field-edgarim{\n      margin-right: -17%\n    }\n    \n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/PopUpFinishChallenge/popup-finish-challenge.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup-congratualationsp\">\n\n  <img src=\"images/confetti.png\" width=\"771\" srcset=\"images/confetti-p-800.png 800w, images/confetti.png 1050w\" sizes=\"(max-width: 991px) 100vw, 771px\"\n    class=\"image-21-edgarp\">\n  <div *ngIf=\"dataService.currentLanguage.type == 'he'\" class=\"div-block-5p mzalatovp\">\n    <div class=\"container-8-edgarp congrats-edgarp w-container\">\n      <img src=\"images/trophy.png\" width=\"92\" class=\"image-19-edgarp\">\n      <h1 class=\"heading-9-edgarp\">\n        מזל טוב!<br>סיימת את האתגר\n      </h1>\n      <p class=\"paragraph-8-edgarp\">\n        כדאי להכניס את מספר הפלאפון<br>שלך שנוכל להתקשר אם זכית\n      </p>\n      <div class=\"row-10p w-row\">\n        <div class=\"w-col w-col-3\">\n          <a (click)=\"analyticsEventSend('סיום האתגר');updateUserPhone();\" href=\"#\" class=\"button-send-edgar w-button\">\n            שלח\n          </a>\n        </div>\n        <div class=\"w-clearfix w-col w-col-9\">\n          <input type=\"text\" class=\"field-edgarim w-input\" maxlength=\"256\" [(ngModel)]=\"dataService.user.phone\" autofocus=\"true\" name=\"Phone-number\"\n            data-name=\"Phone number\" placeholder=\"הזן את מספר הטלפון\" id=\"Phone-number\" required=\"\">\n        </div>\n      </div>\n      <a href=\"#\" (click)=\"analyticsEventClick('שיתוף חברים');copyLink()\" class=\"button-share-edgarp w-button\">\n        לאתגר את החבר&#x27;ה\n      </a>\n      <img src=\"images/ast-share.svg\" class=\"image-23p\">\n      <img (click)=\"goToHome()\" src=\"images/cancel.png\" width=\"25\" class=\"image-edgarp\">\n    </div>\n  </div>\n  <div *ngIf=\"dataService.currentLanguage.type == 'ar'\" class=\"div-block-5p mzalatovp\">\n    <div class=\"container-8-edgarp congrats-edgarp w-container\">\n      <img src=\"images/trophy.png\" width=\"92\" class=\"image-19-edgarp\">\n      <h1 class=\"heading-9-edgarp\">\n        حظَا سعيدًا<br>انهيت التحدي\n      </h1>\n      <p class=\"paragraph-8-edgarp\">\n        يفضل ادخاك رقم هاتفك <br>لنتواصل معك في حال ربحت\n      </p>\n      <div class=\"row-10p w-row\">\n        <div class=\"w-col w-col-3\">\n          <a (click)=\"analyticsEventSend('סיום האתגר');updateUserPhone();\" href=\"#\" class=\"button-send-edgar w-button\">\n            عرض\n            </a>\n        </div>\n        <div class=\"w-clearfix w-col w-col-9\">\n          <input type=\"text\" class=\"field-edgarim w-input\" maxlength=\"256\" [(ngModel)]=\"dataService.user.phone\" autofocus=\"true\" name=\"Phone-number\"\n            data-name=\"Phone number\" placeholder=\"أدخل رقم الهاتف\" id=\"Phone-number\" required=\"\">\n        </div>\n      </div>\n      <a href=\"#\" (click)=\"analyticsEventClick('שיתוף חברים');copyLink()\" class=\"button-share-edgarp w-button\">\n        تحدي أصدقائك\n        </a>\n      <img src=\"images/ast-share.svg\" class=\"image-23p\">\n      <img (click)=\"goToHome()\" src=\"images/cancel.png\" width=\"25\" class=\"image-edgarp\">\n    </div>\n  </div>\n</div>\n\n<!-- [if lte IE 9]><script src=\"https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js\"></script><![endif] -->"

/***/ }),

/***/ "../../../../../src/app/Components/PopUpFinishChallenge/popup-finish-challenge.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var PopupFinishChallenge = (function () {
    function PopupFinishChallenge(route, dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    PopupFinishChallenge.prototype.ngOnInit = function () {
    };
    PopupFinishChallenge.prototype.submitForm = function () {
    };
    PopupFinishChallenge.prototype.updateUserPhone = function () {
        var _this = this;
        this.dataService
            .updateUserPhoneNumber()
            .then(function (res) {
            _this.dataService.copy('social.challengim.co.il');
            _this.dataService.alertMessage = "הטלפון עודכן!";
            _this.dataService.alertSubMessage = "";
            _this.dataService.genericPopUpIsSuccess = true;
            _this.dataService.showGenericPopup = true;
        })
            .catch();
    };
    PopupFinishChallenge.prototype.goToHome = function () {
        this.router.navigate(['']);
    };
    PopupFinishChallenge.prototype.copyLink = function () {
        this.dataService.copy('social.challengim.co.il');
        this.dataService.alertMessage = "הלינק הועתק לClipboard!";
        this.dataService.alertSubMessage = "";
        this.dataService.genericPopUpIsSuccess = true;
        this.dataService.showGenericPopup = true;
    };
    PopupFinishChallenge.prototype.analyticsEventSend = function (eventName) {
        this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), eventName, 'שלח', 'auto_event');
    };
    PopupFinishChallenge.prototype.analyticsEventClick = function (eventName) {
        this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), eventName, 'לחיצה', 'auto_event');
    };
    return PopupFinishChallenge;
}());
PopupFinishChallenge = __decorate([
    core_1.Component({
        selector: 'popup-finish-challenge',
        template: __webpack_require__("../../../../../src/app/Components/PopUpFinishChallenge/popup-finish-challenge.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/PopUpFinishChallenge/popup-finish-challenge.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_2.ActivatedRoute !== "undefined" && router_2.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], PopupFinishChallenge);
exports.PopupFinishChallenge = PopupFinishChallenge;
var _a, _b, _c;
//# sourceMappingURL=popup-finish-challenge.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/PopupSign/popup-sign.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pop-solid {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 999;\n  height: 100%;\n  padding-top: 85px;\n  background-color: rgba(39, 45, 56, .7);\n}\n.img-19{\n  bottom: 29px;\n  }\n.div-block-2 .image-8{\n  bottom: 5px;\n  right: 20px;\n  height: 35px;\n}\n.pop-up {\n    display: block;\n    width: 660px;\n    height: 550px;\n    margin-right: auto;\n    margin-left: auto;\n    padding: 80px 149px 149px;\n    border-radius: 13px;\n    background-image: url(/images/Dark-BG.png);\n    background-position: 0px 0px;\n    background-size: auto;\n\n}\n.check-img{\n  width: 31px;\n  height: 32px;\n  cursor: pointer;\n}\n.disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.text-span {\n  cursor: pointer;\n}\n.exist-user{\n  font-family: 'Almoni dl aaa', sans-serif;\n  color: #ffffff;\n  font-size: 25px;\n  background-image: url(/images/Dark-BG.png);\n  text-decoration: underline;\n  cursor: pointer;\n}\n.image-9 {\n  cursor: pointer;\n}\n.pop-solid .heading-2 {\n  color: #ffffff;\n  margin-bottom: 20px;\n  margin-top: -27px;\n  margin-left: 39px;\n  font-size: 40px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/PopupSign/popup-sign.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pop-solid\">\n  <div class=\"pop-up w-clearfix\">\n    <img src=\"/images/X.png\" class=\"image-9\" (click)=\"close()\">\n    <h1 class=\"heading-2 light-title\">{{dataService.getText('signupTitle')}}</h1>\n    <input type=\"email\" class=\"groupfield w-input\" maxlength=\"256\" [(ngModel)]=\"user.email\" name=\"\"\n      placeholder=\"{{dataService.getText('emailAddress')}}\" id=\"Email-Sign\" required=\"\">\n    <input type=\"password\" class=\"groupfield w-input\" maxlength=\"256\" [(ngModel)]=\"user.password\" autofocus=\"true\" name=\"Password-2\"\n      data-name=\"Password 2\" placeholder=\"{{dataService.getText('password')}}\" id=\"Password-Sign\" required=\"\">\n    <a (click)=\"signupSubmitted()\" class=\"popup-but w-button\" [ngClass]=\"{'disabled' : !(user.email && user.password)}\">{{dataService.getText('signup')}}</a>\n    <div class=\"row-4 w-row\">\n      <div class=\"google w-col w-col-6\">\n        <google-intergration></google-intergration>\n      </div>\n      <div class=\"column-5 w-col w-col-6\">\n         <facebook-integration [showTerms]=\"!termsConfirmed\" (onSuccess)=\"onFacebookSignup($event)\"></facebook-integration>\n      </div>\n    </div>\n    <div class=\"div-block-2\">\n      <img (click)=\"termsConfirmed = !termsConfirmed\" *ngIf=\"termsConfirmed\" src=\"/images/check.png\" class=\"image-8 check-img\">\n      <img (click)=\"termsConfirmed = !termsConfirmed\" *ngIf=\"!termsConfirmed\" src=\"/images/check_1.png\" class=\"image-8 check-img\">\n      <div *ngIf=\"dataService.currentLanguage.type == 'he'\" class=\"text-block\">קראתי ואישרתי את\n        <span class=\"text-span\"><a (click)=\"gotoTerms()\">התקנון</a></span>\n      </div>\n      <div *ngIf=\"dataService.currentLanguage.type == 'ar'\" class=\"text-block\">  وأوافق على المكتوب\n          <span class=\"text-span\"><a (click)=\"gotoTerms()\">قرأت</a></span>\n        </div>\n    </div>\n    <div (click)=\"dataService.showLoginPopup()\" class=\"exist-user\">{{dataService.getText('existUser')}}</div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/PopupSign/popup-sign.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var UserDataModel_1 = __webpack_require__("../../../../../src/app/DataModels/UserDataModel.ts");
var SignupComponent = (function () {
    function SignupComponent(route, dataService, router, _ngZone) {
        this.dataService = dataService;
        this.router = router;
        this._ngZone = _ngZone;
        this.user = new UserDataModel_1.default();
    }
    SignupComponent.prototype.ngOnInit = function () {
        if (!myGlobals.isDesktop) {
            $(document.body).css('position', 'fixed');
        }
        this.globals = myGlobals;
        this.signupStep = 1;
        this.user = this.dataService.user;
    };
    SignupComponent.prototype.ngDoCheck = function () {
        if (!myGlobals.isDesktop) {
            if (this.dataService.showPopupSign) {
                $(document.body).css('position', 'fixed');
            }
            else {
                $(document.body).css('position', 'unset');
            }
        }
    };
    SignupComponent.prototype.onFacebookSignup = function (facebookUser) {
        var _this = this;
        if (this.dataService.showPopupSign && !this.dataService.showPopup) {
            var that_1 = this;
            if (facebookUser.email) {
                this.user.email = facebookUser.email ? facebookUser.email : '';
                this.user.password = facebookUser.id ? facebookUser.id : '';
                this.user.name = facebookUser.name ? facebookUser.name : '';
                this.user.gender = facebookUser.gender ? facebookUser.gender : 'male';
                this.user.birthday = facebookUser.birthday ? new Date(facebookUser.birthday) : new Date();
                this.user.city = facebookUser.hometown ? facebookUser.hometown.name : '';
                this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), 'הרשם', 'לחיצה', 'auto_event');
                this.dataService.sendGoogleTagEventUID(this.dataService.user._id, 'UID');
                this.dataService.createUser(this.user)
                    .then(function (user) {
                    _this.user = user;
                    _this._ngZone.run(function () {
                        _this.dataService.showPopupSign = false;
                        _this.router.navigate(['question-flow', _this.dataService.type]);
                    });
                }).catch(function (reason) {
                    that_1.dataService.logOut();
                    that_1.user = that_1.dataService.user;
                    that_1.dataService.showPopupSign = false;
                    var error = JSON.parse(reason._body).error;
                    if (error == 'User already exists') {
                        error = 'משתמש עם כתובת המייל שהוזנה כבר קיים במערכת';
                    }
                    that_1.dataService.alertMessage = 'בעיה ברישום: ';
                    that_1.dataService.alertSubMessage = error;
                    that_1._ngZone.run(function () {
                        that_1.dataService.showPopupSign = false;
                        that_1.dataService.showGenericPopup = true;
                    });
                });
            }
            this._ngZone.run(function () { });
        }
    };
    SignupComponent.prototype.onGoogleSignup = function (facebookUser) {
        if (this.dataService.showPopupSign && !this.dataService.showPopup) {
            this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), "הרשם", 'לחיצה', 'auto_event');
            this.dataService.sendGoogleTagEventUID(this.dataService.user._id, 'UID');
        }
        this._ngZone.run(function () { });
    };
    SignupComponent.prototype.signupSubmitted = function () {
        var _this = this;
        if (!this.termsConfirmed) {
            this.dataService.alertMessage = this.dataService.getText('didntReadTheTerms');
            this.dataService.alertSubMessage = "";
            this.dataService.showGenericPopup = true;
        }
        else {
            if (this.user.email && this.user.password) {
                var that_2 = this;
                this.dataService.createUser(this.user)
                    .then(function (user) {
                    that_2.router.navigate(['question-flow', _this.dataService.type]);
                    that_2.dataService.showPopupSign = false;
                    that_2.dataService.notifyOther({ option: 'onSubmit', value: 'From Signup' });
                    that_2.dataService.sendAnalyticsEvent(that_2.dataService.getChallengeName(), 'הרשם', 'לחיצה', 'auto_event');
                    _this.dataService.sendGoogleTagEventUID(_this.dataService.user._id, 'UID');
                })
                    .catch(function (reason) {
                    that_2.dataService.logOut();
                    that_2.dataService.showPopup = false;
                    var error = JSON.parse(reason._body).error;
                    if (error == 'User validation failed: email: invalid email address') {
                        error = 'נראה שהקלדת כתובת מייל לא תקינה';
                    }
                    if (error == 'User already exists') {
                        error = 'משתמש עם כתובת המייל שהוזנה כבר קיים במערכת';
                    }
                    that_2.dataService.alertMessage = 'בעיה ברישום: ';
                    that_2.dataService.alertSubMessage = error;
                    that_2.dataService.showGenericPopup = true;
                });
            }
        }
    };
    SignupComponent.prototype.disableSignButton = function () {
        return (!((this.user.email && this.user.password) && this.termsConfirmed));
    };
    SignupComponent.prototype.gotoTerms = function () {
        this.router.navigate(['terms']);
        this.dataService.showPopupSign = false;
    };
    SignupComponent.prototype.close = function () {
        if (!myGlobals.isDesktop) {
            $(document.body).css('position', 'initial');
        }
        this.router.navigate(['']);
        this.dataService.user.email = null;
        this.dataService.user.password = null;
        this.user.email = null;
        ;
        this.user.password = null;
        this.dataService.showPopupSign = false;
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        selector: 'popup-sign',
        template: __webpack_require__("../../../../../src/app/Components/PopupSign/popup-sign.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/PopupSign/popup-sign.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object])
], SignupComponent);
exports.SignupComponent = SignupComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=popup-sign.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 480px){\n    .profile-container.w-container {\n        margin-top: 320px;\n    }\n\n    .profile-container .row-but.w-row{\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n\n\n    .profile-container .w-input{\n        max-width: 80vw;\n        min-width: 80vw;\n    }\n\n    .profile-container ::ng-deep .heading-2.dark.comp[_ngcontent-c3]{\n        width:initial;\n    }\n\n    .profile-container .blue-but.w-button {\n        margin: 0 auto;\n    }\n\n    .profile-container ::ng-deep .pop-up{\n        max-width: 90vw;\n    }\n\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/Profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n\n<!-- Mobile Header-->\n<style>\n  .header-mobile-social {\n    z-index: 501 !important;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    display: none;\n    max-width: 100vw;\n  }\n  \n  .header-mobile-social .disconnect {\n    display: inline-block;\n  }\n  \n  .header-mobile-social .navigation-menup {\n    transform: scaleY(0);\n    transition: 0.3s ease-in-out;\n    width: 100%;\n    background-color: #272d38;\n    display: flex;\n    flex-direction: column;\n    transform-origin: 0 0;\n  }\n  \n  .header-mobile-social .navigation-menup.open {\n    transform: scaleY(1);\n  }\n  \n  @media (max-width: 480px) {\n    .header-mobile-social {\n      display: initial;\n    }\n    .pnavigation-link.pwhite {\n      display: inline-block !important;\n    }\n  }\n</style>\n<div *ngIf=\"!dataService.showPopupSign && !dataService.showPopupContac\" data-collapse=\"medium\" data-animation=\"default\" data-duration=\"400\"\n  class=\"navigation-barpp darkpp w-nav header-mobile-social\">\n\n  <div (click)=\"toggleMenu()\" id=\"hamburger\" class=\"hamburger-buttonp whitep w-nav-button\">\n    <div class=\"picon w-icon-nav-menu\"></div>\n  </div>\n  <nav role=\"navigation\" class=\"navigation-menup w-nav-menu\">\n    <a *ngIf=\"dataService.user.isEmpty() == false;\" (click)=\"dataService.logOut();analyticsEvent('התנתק')\" class=\"pnavigation-link pwhite w-nav-link\">\n    {{dataService.getText('disConnect')}}\n  </a>\n    <a (click)=\"dataService.showContacPopup();analyticsEvent('צור קשר')\" class=\"pnavigation-link pwhite w-nav-link\">\n      {{dataService.getText('contactUs')}}\n  </a>\n    <a *ngIf=\"dataService.user.isEmpty() == false;\" [routerLink]=\"['/question-flow',dataService.type]\" class=\"pnavigation-link pwhite w-nav-link\">\n      {{dataService.getText('comp')}}\n    </a>\n\n    <a *ngIf=\"dataService.user.isEmpty() == true && !hidesignup\" (click)=\"dataService.showSignupPopup()\" class=\"pnavigation-link pwhite w-nav-link\">\n      {{dataService.getText('enter')}}\n    </a>\n    <a *ngIf=\"dataService.user.isEmpty()==false;\" (click)=\"analyticsEvent('פרופיל')\" [routerLink]=\"['/profile']\" class=\"pnavigation-link pwhite w-nav-link\">\n    {{dataService.getText('private')}}\n    </a>\n  </nav>\n</div>\n<!-- End Mobile Header-->\n\n<div class=\"section light-regular\">\n  <div class=\"profile-container w-container\">\n    <div class=\"mission-1st ishi\">\n      <div class=\"title-row personal w-row\">\n\n        <div class=\"column-15 w-clearfix w-col w-col-11\">\n          <h1 class=\"heading-2 dark comp\">{{dataService.getText('titlePro')}}</h1>\n        </div>\n      </div>\n      <div class=\"row-but w-row\">\n        <div class=\"w-col w-col-6\">\n          <input disabled type=\"email\" class=\"groupfield w-input\" maxlength=\"256\" data-name=\"מייל\" placeholder=\"{{dataService.getText('emailAddress')}}\"\n            required=\"\" [(ngModel)]=\"dataService.user.email\">\n        </div>\n        <div class=\"w-col w-col-6\">\n          <input type=\"text\" class=\"groupfield w-input\" maxlength=\"256\" data-name=\"שם מלא\" placeholder=\"{{dataService.getText('fullName')}}\"\n            required=\"\" [(ngModel)]=\"dataService.user.name\">\n        </div>\n      </div>\n      <div class=\"row-but w-row\">\n        <div class=\"w-col w-col-6\">\n          <input type=\"text\" class=\"groupfield w-input\" maxlength=\"3\" data-name=\"גיל\" placeholder=\"{{dataService.getText('age')}}\"\n            required=\"\" [(ngModel)]=\"dataService.user.age\">\n        </div>\n        <div class=\"w-col w-col-6\" dir=\"rtl\">\n          <select class=\"groupfield w-input\" data-name=\"מין\" placeholder=\"מין\" required=\"\" [(ngModel)]=\"dataService.user.gender\">\n            <option value=\"choose\">{{dataService.getText('chooseGender')}}</option>\n            <option value=\"male\">{{dataService.getText('male')}}</option>\n            <option value=\"female\">{{dataService.getText('female')}}</option>\n            <option value=\"otherGender\">{{dataService.getText('otherGender')}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row-but w-row\">\n        <div class=\"column-13 w-col w-col-6\">\n          <a [routerLink]=\"['/change-pass',type]\" class=\"groupfield-delete w-input\">{{dataService.getText('changePassButton')}}</a>\n        </div>\n        <div class=\"column-10 w-col w-col-6\">\n          <input type=\"text\" class=\"groupfield w-input\" maxlength=\"256\" data-name=\"עיר מגורים\" placeholder=\"{{dataService.getText('hometown')}}\"\n            required=\"\" [(ngModel)]=\"dataService.user.city\">\n        </div>\n\n      </div>\n\n      <div class=\"column-13 w-col w-col-6\">\n        <a (click)=\"saveProfile()\" class=\"blue-but w-button\">{{dataService.getText('profileSave')}}</a>\n      </div>\n\n\n      <div *ngIf=\"ableToCreateGroup() && isSocialSite\" class=\"butleft\">\n        <a (click)=\"createGroup()\" class=\"blue-but w-button\">{{dataService.getText('profileCreateGroup')}}</a>\n      </div>\n    </div>\n    <div *ngIf=\"group\">\n      <group [group]=\"group\"></group>\n    </div>\n    <div *ngIf=\"notifications && notifications.length\" class=\"mission-1st notifications\">\n      <div class=\"notifi w-row\">\n        <div class=\"column-12 w-clearfix w-col w-col-1\">\n          <h1 class=\"heading-2 dark comp\">{{dataService.getText('subtitlePro')}}</h1>\n        </div>\n        <div class=\"column-2 w-col w-col-11\"></div>\n      </div>\n      <div class=\"paragraph-2\" *ngFor=\"let notification of notifications\">\n        <div>{{notification.createdAt | date: 'dd.MM.yyyy'}}: {{notification.text}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n<main-footer [showPartners]=\"true\"></main-footer>"

/***/ }),

/***/ "../../../../../src/app/Components/Profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var ProfileComponent = (function () {
    function ProfileComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.type = "4";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSocialSite = true;
        this.globals = myGlobals;
        if (this.dataService.user.isEmpty()) {
            if (this.dataService.getCookieObject('user') != null) {
                var id_1 = setInterval(function () {
                    if (!_this.dataService.user.isEmpty()) {
                        clearInterval(id_1);
                        _this.initData();
                    }
                }, 200);
            }
            else {
                this.router.navigate(['']);
            }
        }
        else {
            this.initData();
        }
    };
    ProfileComponent.prototype.initData = function () {
        if (!this.dataService.user.gender) {
            this.dataService.user.gender = 'choose';
        }
        if (this.dataService.contest) {
            this.initContest();
        }
        else {
            this.getContest();
        }
    };
    ProfileComponent.prototype.initContest = function () {
        var _this = this;
        this.dataService.getContestUserNotification(this.dataService.user._id, this.dataService.contest._id)
            .then(function (res) {
            _this.notifications = res;
        })
            .catch(function (err) {
            console.log('Failed to get notifications: ', err);
        });
        var groupId = '';
        var viralLink = this.dataService.getViralLink();
        if (viralLink) {
            if (viralLink.indexOf('?viral') != -1) {
                groupId = viralLink.split('?viralLink=')[1];
            }
            else {
                groupId = viralLink + "";
            }
            this.dataService.user.viralLink = viralLink;
            this.dataService.clearViralLink();
        }
        if (groupId) {
            this.dataService.getGroup(groupId)
                .then(function (res) {
                _this.group = res;
            }).catch(function (err) { return console.log(err); });
        }
        else {
            this.dataService.getUserGroups()
                .then(function (res) {
                if (res) {
                    if (Array.isArray(res)) {
                        _this.group = res[0] || _this.getStubGroup();
                    }
                    else {
                        _this.group = res;
                    }
                }
            }).catch(function (err) { return console.log(err); });
        }
    };
    ProfileComponent.prototype.getContest = function () {
        var _this = this;
        this.dataService
            .getContest("4")
            .then(function (res) {
            _this.initContest();
        })
            .catch(function (err) { return alert('error: ' + err); });
    };
    ProfileComponent.prototype.toggleMenu = function () {
        $('.navigation-menup').toggleClass('open');
    };
    ProfileComponent.prototype.getStubGroup = function () {
        return null;
        // return {
        //     "_id": "5a6a8d0abc6417bf8fa94c67",
        //     "name": "5a6a8c7dbc6417bf8fa94c64",
        //     "contest": "5a2fe429137c2c1cd0e9146a",
        //     "admin": "5a6a8c7dbc6417bf8fa94c64",
        //     "status": "active",
        //     "users": [
        //         {
        //             email: "ajkshfhasf"
        //         },
        //         {
        //             email: "ajkshfhasf"
        //         }
        //     ]
        // };
    };
    ProfileComponent.prototype.createGroup = function () {
        var _this = this;
        this.dataService.sendAnalyticsEvent('חברתי', 'איזור אישי', 'צור קבוצה', 'auto_event');
        this.dataService.createGroup().then(function (resu) {
            var viral = _this.dataService.user.viralLink.split('?viralLink=')[1];
            _this.dataService.getGroup(viral).then(function (res) {
                _this.group = res;
            }).catch(function (err) { return console.log(err); });
        }).catch(function (err) { return console.log(err); });
    };
    ProfileComponent.prototype.ableToCreateGroup = function () {
        return !this.group && !this.dataService.user.viralLink;
    };
    ProfileComponent.prototype.saveProfile = function () {
        // dont delete this
        // will cause compilation errors
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        template: __webpack_require__("../../../../../src/app/Components/Profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/Profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/ProgressBar/progress-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section.progress{\n  display: block;\n  z-index: -1;\n}\n\n.div-block-3.w-clearfix {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n\n.heading-4 {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: initial;\n  right: 43%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.heading-4.visited {\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin-right: -70%;\n  margin-top: 30px;\n}\n\n.heading-4.current-number {\n  right: 35%;\n}\n\n.one-fix {\n  padding-left: 0.25vw;\n}\n\n.heading-4.current-number{\n  right: 35%;\n  top: 70px;\n}\n\n.heading-4 {\n  position: absolute;\n  left: 50%;\n  top: 25px;\n}\n\n.progress-last-crown {\n  position: absolute;\n    top: -53px;\n  margin-right: 13px;\n}\n\n.step-container-images{\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  direction: rtl;\n}\n\n.info-bubble {\n  opacity: 0;  \n  -webkit-transition: opacity 0.5s;  \n  transition: opacity 0.5s;\n  position: absolute;\n  top: -88px;\n}\n\n.div-block-4 {\n  z-index: 999;\n}\n\n.info-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translate(-50%, -35%);\n          transform: translate(-50%, -35%);\n  margin-left: 0;\n  font-family: 'Almoni dl aaa', sans-serif;\n  font-size: 25px;\n  text-align: center;\n  word-break: break-word;\n}\n\n.info-container .info {\n  margin-right: 10px;\n  position: relative;\n}\n\n.step-container-images .info-container:hover .info-bubble {\n  opacity: 1;\n}\n\n.info-img-container{\n  vertical-align: sub;\n  cursor: pointer;\n}\n\n.info-bubble.last {\n    top: 66px;\n    left: 101px;\n}\n\n.info-bubble.last .info-text {\n  margin-right: 0px;\n  top: 70%;\n  left: 55%;\n  right: -50%;\n  padding: 0 10px;\n}\n\n.stage-data-container.pisa-question {\n  left: -8vw !important;\n  position: absolute;\n}\n\n.progress-last-crown-current {\n  position: absolute;\n    top: -41px;\n    margin-right: 72px;\n}\n\n.fixed-top-pisa {\n  top: -36px;\n}\n\n.padding-pisa {\n  padding-top:50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/ProgressBar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section progress\" [ngClass]=\"{'soccer':dataService.type=='1', 'fashion': dataService.type=='2', 'tech': dataService.type=='3', 'social':dataService.type=='4', 'music': dataService.type=='5', 'padding-pisa':contestStages[0].onPisa}\">\n  <div class=\"div-block-3 w-clearfix\">\n    <div class=\"step-container-images\">\n        <div class=\"div-block-4 info-container\">\n            <div class=\"stage-data-container\">\n              <img src=\"{{getStageBackground(0)}}\" class=\"progress-last\">\n              <img class=\"heading-4 visited\" src=\"/images/checked.svg\">\n            </div>\n        </div>\n      <div class=\"div-block-4 info-container\" *ngFor=\"let stage of stages\">\n        <span *ngIf=\"stage.hover_text && stage.index != currentStage\" class=\"info-bubble\" [ngClass]=\"{'last': stage.index == stages.length }\">\n          <div class=\"info-text\">\n            {{stage.hover_text}}\n          </div>\n          <span class=\"info-img\">\n            <img src=\"{{getStageHoverBackground(stage.index)}}\" class=\"progress-hover-image\" *ngIf=\"stage.index != stages.length && stage.index != currentStage\">\n            <img src=\"{{getStageLastHoverBackground(stage.index)}}\" class=\"progress-last-hover-image\" *ngIf=\"stage.index == stages.length && stage.index != currentStage\">\n          </span>\n        </span>\n        <div class=\"stage-data-container\">\n          <img src=\"/images/crown.svg\" class=\"progress-last-crown\" *ngIf=\"stage.index == stages.length && stage.index != currentStage\">\n          <img src=\"/images/crown.svg\" class=\"progress-last-crown-current\" *ngIf=\"stage.index == stages.length && stage.index == currentStage\">\n\n          <img src=\"{{getStageBackground(stage.index)}}\" class=\"progress-last\">\n          <h1 *ngIf=\"stage.index > currentStage || (stage.index == currentStage && stage.pisa_questions_difficulty.length && !contestStages[0].onPisa)\" class=\"heading-4\" [ngClass]=\"{'current-number': stage.index==currentStage && !contestStages[0].onPisa, 'one-fix': stage.index==1}\">\n            {{stage.index + 1}}\n          </h1>\n          <img *ngIf=\"stage.index < currentStage || (stage.index == currentStage && contestStages[0].onPisa )\" class=\"heading-4 visited\" src=\"/images/checked.svg\">\n        </div>\n        <div class=\"stage-data-container pisa-question\" *ngIf=\"stage.pisa_questions_difficulty.length && stage.question_type != 'missions' \">\n            <img src=\"{{getStageBackgroundForPisa(stage.index)}}\">\n            <img *ngIf=\"stage.index < currentStage\" class=\"heading-4 visited\" src=\"/images/checked.svg\">\n          </div>\n      </div>\n    </div>\n    <div class=\"div-block-5\" [ngClass]=\"{'fixed-top-pisa':contestStages[0].onPisa}\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/ProgressBar/progress-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var ProgressBarComponent = (function () {
    function ProgressBarComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        // this.stages = [''].concat(this.stages)
    };
    ProgressBarComponent.prototype.getStageBackground = function (stage) {
        switch (this.type) {
            case '1':
                if (stage == this.currentStage && !this.contestStages[0].onPisa)
                    return 'images/Big-Progress.png';
                if (stage < this.currentStage || stage == this.currentStage && this.contestStages[0].onPisa)
                    return 'images/small-progress-background-checked-soccer.svg';
                else
                    return 'images/reg-progress.png';
            case '2':
                if (stage == this.currentStage && !this.contestStages[0].onPisa)
                    return 'images/big-desgin.png';
                if (stage < this.currentStage)
                    return 'images/small-desgin.png';
                else
                    return 'images/reg-progress.png';
            case '3':
                if (stage == this.currentStage && !this.contestStages[0].onPisa)
                    return 'images/big-tech.png';
                if (stage < this.currentStage)
                    return 'images/small-tech.png';
                else
                    return 'images/reg-progress.png';
            case '4':
                if (stage == this.currentStage && !this.contestStages[0].onPisa)
                    return 'images/big-social.png';
                if (stage < this.currentStage)
                    return 'images/small-progress-background-checked-soccer.svg';
                else
                    return 'images/reg-progress.png';
            case '5':
                if (stage == this.currentStage && !this.contestStages[0].onPisa)
                    return 'images/big-music.png';
                if (stage < this.currentStage)
                    return 'images/small-music.png';
                else
                    return 'images/reg-progress.png';
        }
    };
    ProgressBarComponent.prototype.getStageBackgroundForPisa = function (stage) {
        switch (this.type) {
            case '1':
                if (stage == this.currentStage && this.contestStages[0].onPisa)
                    return 'images/Big-Progress.png';
                else {
                    return 'images/small-progress-background-checked-soccer.svg';
                }
            case '2':
                if (stage == this.currentStage && this.contestStages[0].onPisa)
                    return 'images/big-desgin.png';
                else {
                    return 'images/small-desgin.png';
                }
            case '3':
                if (stage == this.currentStage && this.contestStages[0].onPisa)
                    return 'images/big-tech.png';
                else {
                    return 'images/small-tech.png';
                }
            case '4':
                if (stage == this.currentStage && this.contestStages[0].onPisa)
                    return 'images/big-social.png';
                else {
                    return 'images/small-progress-background-checked-soccer.svg';
                }
            case '5':
                if (stage == this.currentStage && this.contestStages[0].onPisa)
                    return 'images/big-music.png';
                else {
                    return 'images/small-music.png';
                }
        }
    };
    ProgressBarComponent.prototype.getStageHoverBackground = function (stage) {
        switch (this.type) {
            case '1':
                return 'images/progress-rectangle-soccer.svg';
            case '2':
                return 'images/progress-rectangle-design.svg';
            case '3':
                return 'images/progress-rectangle-tech.svg';
            case '4':
                return 'images/progress-rectangle-social.svg';
            case '5':
                return 'images/progress-rectangle-music.svg';
        }
    };
    ProgressBarComponent.prototype.getStageLastHoverBackground = function (stage) {
        switch (this.type) {
            case '1':
                return 'images/progress-rectangle-last-soccer.svg';
            case '2':
                return 'images/progress-rectangle-last-design.svg';
            case '3':
                return 'images/progress-rectangle-last-tech.svg';
            case '4':
                return 'images/progress-rectangle-last-social.svg';
            case '5':
                return 'images/progress-rectangle-last-music.svg';
        }
    };
    return ProgressBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProgressBarComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "stages", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "currentStage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "contestStages", void 0);
ProgressBarComponent = __decorate([
    core_1.Component({
        selector: 'progress-bar',
        template: __webpack_require__("../../../../../src/app/Components/ProgressBar/progress-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/ProgressBar/progress-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], ProgressBarComponent);
exports.ProgressBarComponent = ProgressBarComponent;
var _a, _b;
//# sourceMappingURL=progress-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Stage/stage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".answer-but.backbutton a{\n    margin: 0 auto;\n}\n\n.butleft.answer-but.backbutton .blue-but.w-button{\n    margin: 0;\n    margin-left: 10px;\n    margin-top: -150px;\n}\n\n.butleft.answer-but.backbutton .blue-but.w-button.video-back{\n    margin: unset;\n    margin-left: unset;\n    margin-top: unset;\n}\n\n.video-back-container{\n    max-width: 940px;\n    margin: 0 auto;\n}\n\n@media screen and (max-width:480px){\n    .butleft.answer-but.backbutton{\n        margin-top: 0;\n    }\n    .butleft.answer-but.backbutton .blue-but.w-button{\n        margin: 0 auto;\n    }\n\n    .butleft.answer-but.backbutton .blue-but.w-button.video-back{\n        margin: 0 auto;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/Stage/stage.component.html":
/***/ (function(module, exports) {

module.exports = "<question-with-text (answer)=\"questionAnswered($event)\" *ngIf=\"!showSent && stage.question_type == 'free_text'\" [stage]=\"stage\"></question-with-text>\n<multi-question (answer)=\"questionAnswered($event)\" *ngIf=\"!showSent && stage.question_type == 'multiselect'\" [stage]=\"stage\"></multi-question>\n<single-question (answer)=\"questionAnswered($event)\" *ngIf=\"!showSent && stage.question_type == 'select'\" [stage]=\"stage\"></single-question>\n<question-with-cards (updateChoosenCardIndex)=\"updateChoosenCardIndex($event)\" (showCard)=\"showCard($event)\" (answer)=\"questionAnswered($event)\"\n  *ngIf=\"!showSent && stage.question_type == 'missions' && !showVideoCard && !showPisaCard\" [stage]=\"stage\" [answeredIndexes]=\"answeredIndexes\"\n  [earnedPoints]=\"earnedPoints\"></question-with-cards>\n\n<video-question [choosenCardIndex]=\"choosenCardIndex\" (answer)=\"questionAnswered($event)\" *ngIf=\"(!showSent && stage.question_type == 'video') || showVideoCard\"></video-question>\n\n<!-- Go over pisa questions.. -->\n<standalone-pisa-question (answer)=\"questionAnswered($event)\" *ngIf=\"(!showSent && stage.question_type == 'pisa' ) || showPisaCard\"\n  [stage]=\"stage\"></standalone-pisa-question>\n\n<answer-sent *ngIf=\"showSent\"></answer-sent>\n<not-yet *ngIf=\"showNotYet\"></not-yet>\n\n<div class=\"butleft answer-but backbutton\" *ngIf=\"showPisaCard || showVideoCard\" [ngClass]=\"{'video-back-container':showVideoCard}\">\n  <a (click)=\"showVideoCard=false;showPisaCard=false\" class=\"blue-but w-button\" [ngClass]=\"{'video-back':showVideoCard}\">\n    {{dataService.getText(dataService.challengesData[dataService.type].cards.back)}}\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/Stage/stage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var StageComponent = (function () {
    function StageComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.answeredIndexes = { 0: {}, 1: {} };
        this.earnedPoints = 0;
        this.choosenCardIndex = 0;
        this.stage = {};
        this.answer = new core_1.EventEmitter();
        this.showSent = false;
        this.showNotYet = false;
    }
    StageComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.params['type']) {
            this.globals = myGlobals;
            this.type = this.route.snapshot.params['type'];
            this.dataService.type = this.type;
            this.challengesData = this.dataService.challengesData[this.dataService.type];
            if (this.stage.question_type == 'missions') {
                this.getMissionProgress();
                this.dataService.sendGoogleTagVirtualPage(this.stage.index + 1, this.stage.stage_details);
            }
            else {
                this.dataService.sendGoogleTagVirtualPage(this.stage.index + 1, this.stage.question_text);
            }
        }
    };
    /**
     * Make data service call to update server with answer.
     * @param answers
     */
    StageComponent.prototype.questionAnswered = function (answers) {
        var _this = this;
        // this.answered = true;
        if (this.showVideoCard || this.showPisaCard) {
            this.showVideoCard = false;
            this.showPisaCard = false;
            var pointsToAdd_1 = 100;
            if (this.answeredIndexes[this.choosenCardSection][this.choosenCardIndex]) {
                pointsToAdd_1 = 0;
            }
            this.answeredIndexes[this.choosenCardSection][this.choosenCardIndex] = true;
            this.earnedPoints = this.earnedPoints || 0;
            switch (this.choosenCardSection) {
                case 0:
                    this.earnedPoints = this.earnedPoints + pointsToAdd_1;
                    this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), "1", 'סיום משימת 100', 'auto_event');
                    this.dataService
                        .saveMissionProgress(this.answeredIndexes, this.earnedPoints)
                        .then(function (res) {
                        _this.answeredIndexes = res.answered;
                        _this.earnedPoints = res.earnedPoints;
                    });
                    break;
                case 1:
                    this.dataService
                        .questionAnswered({
                        stage: this.stage,
                        answers: answers,
                        user: this.dataService.user,
                        contest: this.dataService.contest
                    })
                        .then(function (res) {
                        _this.earnedPoints = _this.earnedPoints + pointsToAdd_1;
                        // update progress 
                        _this.dataService.saveMissionProgress(_this.answeredIndexes, _this.earnedPoints)
                            .then(function (res) {
                            _this.answeredIndexes = res.answered;
                            _this.earnedPoints = res.earnedPoints;
                        });
                    })
                        .catch(function (err) { return console.log('err: ', err); });
                    this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), "1", 'סיום משימת 100', 'auto_event');
                    break;
                default:
                    break;
            }
        }
        else {
            this.dataService.questionAnswered({ stage: this.stage, answers: answers, user: this.dataService.user, contest: this.dataService.contest }).then(function (res) {
                _this.answer.emit(res);
            }).catch(function (err) { return console.log('err: ', err); });
        }
    };
    StageComponent.prototype.getMissionProgress = function () {
        var _this = this;
        this.dataService.getMissionProgress()
            .then(function (res) {
            if (res.answered) {
                _this.answeredIndexes = res.answered;
                _this.earnedPoints = res.earnedPoints;
            }
        })
            .catch(function (e) {
            console.error('gmp');
        });
    };
    StageComponent.prototype.showCard = function (type) {
        switch (type) {
            case 'video':
                this.showVideoCard = true;
                break;
            case 'pisa':
                this.showPisaCard = true;
                break;
            default:
                break;
        }
        window.scrollTo(0, 450);
    };
    StageComponent.prototype.updateChoosenCardIndex = function (clickedIndex) {
        this.choosenCardIndex = clickedIndex['index'];
        this.choosenCardSection = clickedIndex['section'];
    };
    StageComponent.prototype.uploadFiles = function (files) {
        /*this.uploader.uploadMultiple(files, (err: any, results: Array<any>) => {
            if (err) {
                return console.log('Error uploading files', err);
            }

            console.log('file upload success')
        })*/
    };
    return StageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StageComponent.prototype, "stage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], StageComponent.prototype, "answer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StageComponent.prototype, "showSent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StageComponent.prototype, "showNotYet", void 0);
__decorate([
    core_1.ViewChildren('questionWithCard'),
    __metadata("design:type", typeof (_a = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _a || Object)
], StageComponent.prototype, "questionWithCard", void 0);
StageComponent = __decorate([
    core_1.Component({
        selector: 'stage',
        template: __webpack_require__("../../../../../src/app/Components/Stage/stage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/Stage/stage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], StageComponent);
exports.StageComponent = StageComponent;
var _a, _b, _c;
//# sourceMappingURL=stage.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/Terms/terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".not-yet-sign-text {\n\n    font-size: 4vw;\n    left: 39vw;\n    text-align: center;\n    top: 29%;\n    line-height: 4vw;\n    width: 400px;\n    color: white;\n    font-family: 'Almoni dl aaa', sans-serif;\n    font-weight: 900;\n    color: black;\n    margin-bottom: 200px;\n}\n\nimg {\n    width: 30%;\n}\n\n.div-center {\n    position: relative;\n    margin-bottom: -100px;\n}\n\n.title {\n    font-size: 30px;\n    text-align: center;\n    font-family: 'Almoni dl aaa', sans-serif;\n    font-weight: 900;\n    direction: rtl;\n    float: right;\n    margin-right: 108px;\n    margin-bottom: 50px;\n    margin-top: 5px;\n}\n\n.subtext {\n    font-size: 26px;\n    text-align: center;\n    font-family: 'Almoni dl aaa', sans-serif;\n    direction: rtl;\n    padding-right: 230px;\n    padding-left: 230px;\n    line-height: 32px;\n    margin-bottom: 100px;\n}\n\n@media (max-width:417px)\n{\n     .div-center {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        /* display: flex; */\n        margin-top: 114%;\n    }\n    .subtext {\n    width: 100%;\n    padding-right: 20px !important;\n    padding-left: 20px !important;\n    }\n    .title {\n        float: initial;\n        margin-right: 0px !important;\n    }\n    .not-yet-sign-text {\n        font-size: 30px !important;\n        margin-bottom: 0px !important;\n    }\n   \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/Terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<div class=\"div-center\">\n        <span class=\"not-yet-sign-text\">תקנון פעילות {{dataService.getChallengeName()}}\n        </span>\n</div>\n\n<div class=\"subtext\">\n        <div class=\"title\">\n                \"החברה\"\n        </div>\n        <div class=\"subtext\">\n                פרזנטנס ישראל בע\"מ (חל\"צ) מ\"ר 514259399, דרך חברון 24 סניף 112, רחוב קק\"ל 8, רחביה, ירושלים 9354212.\n        </div>\n        <div class=\"title\">\n                \"משתתף\"\n        </div>\n        <div class=\"subtext\">\n                \"אדם או קבוצה של עד שישה (6) אנשים העונים על כל אלה: (1) מלאו לו 14 (ארבע עשרה) שנים וגם טרם מלאו לו 16 (שש עשרה) שנים וגם הוא בכיתה ט'-י'; (2) הינו תושב ישראל ו/או בעלי היתר שהייה כדין (3) ;הוא בעל דרכון בתוקף ל-12 החודשים הבאים ממועד הפעילות; ו-(4) עמד בכל תנאי מתנאי תקנון זה.\n\nמובהר בזאת כי קטינים (כמשמעות המונח בחוק הכשרות המשפטית והאפוטרופסות, תשכ\"ב-1962) מתחת לגיל 14 אינם רשאים להשתתף בפעילות ולא יזכו בפרסים. \nמובהר כי, המשתתף כקטין, צריך לקבל את הסכמת הורהו/אפוטרופוס החוקי על מנת להשתתף בפעילות. כמו כן, מובהר בזאת, כי קבלת הפרס במסגרת הפעילות מותנית בקבלת אישור הורהו או אפוטרופוס החוקי של הקטין, והכל כמפורט בתקנון זה להלן.\n\nיובהר כי החברה ו/או מי מטעמה רשאיות לפסול כל משתתף. עוד יובהר כי על המשתתף לעמוד בתנאי תקנון זה. משתתף אשר נפסל כתוצאה מהפרה של כל תנאי מתנאי תקנון זה, לא יעלה כל טענה ו/או תביעה ו/או דרישה כלפי החברה ומי מטעמה בקשר עם פסילתו.\"\n        </div>\n        <div class=\"title\">\n                \"אתר הפעילות\"\n        </div>\n        <div class=\"subtext\">\n                http://social.challengim.co.il\n        </div>\n\n        <div class=\"title\">\n                \"הפעילות\"\n        </div>\n        <div class=\"subtext\">\n                פעילות בת שני שלבים הנערכת ע\"י החברה באתר הפעילות במהלך תקופת הפעילות במסגרתה המשתתפים יידרשו להיכנס לאתר הפעילות ולהירשם באמצעות הזנת פרטים אישיים (שם מלא, אימייל וסיסמה אישית) או באמצעות שימוש בחשבון ה-FACEBOOK או ה-GOOGLE שלהם, ותתבצע כדלקמן:\n\nשלב א'\nהמשתתפים יתבקשו לענות נכונה על ארבע (4) שאלות אוריינות מתמטיות.\n\nשלב ב'\nהמשתתפים יתבקשו להעלות לאתר הפעילות (בתיבת הטקסט או בהעלאת קובץ טקסט) קמפיין להעלאת מודעות לחזרה לשגרה של בני נוער חולי סרטן (\"התכנים\" או \"הקמפיין\"). שלושת המשתתפים אשר הקמפיינים שלהם שיבחרו כקמפיינים הטובים ביותר על ידי צוות השופטים, יוכלו להיות מועמדים לזכייה בפרס כמפורט להלן.\n\nעם השלמת השלבים יידרש המשתתף להזין גם את מספר הטלפון שלו לצורך יצירת קשר. בכל שלב יוכל המשתתף לעדכן את פרטיו ב\"איזור האישי\" באתר הפעילות.\n\n        </div>\n        <div class=\"title\">\n                \"צוות השופטים\"\n        </div>\n        <div class=\"subtext\">\n                צוות שופטים אשר ימונה על ידי החברה ו/או מי מטעמה ויבחר את הקמפיינים הטובים ביותר. \nיובהר כי שיקול הדעת הסופי בבחירת המועמד לזכייה בכל אחד מהפרסים נתון לצוות השופטים בהתאם לשיקול דעתו הבלעדי ולא לאף גורם זולתו, ולמשתתף לא תעמוד כל דרישה ו/או טענה ו/או תביעה בקשר עם בחירה כזו או אחרת. לצרכי קבלת החלטה על כל זכייה, השופטים לא יהיו חייבים לנמק את החלטתם.\n\n        </div>\n        <div class=\"title\">\n                \"תקופת הפעילות \"\n        </div>\n        <div class=\"subtext\">\n                מיום ג' ה-30.1.2018 בשעה 08:00 ועד ליום ה' ה-22.2.2018 בשעה 20:00.\n\nשעון החברה הוא השעון הקובע לעניין תקופת הפעילות ולעניין יום הפעילות.\n\nהחברה ו/או מי מטעמה רשאיות לשנות את תקופת הפעילות, להאריכה, לקצרה או לבטלה באופן מוחלט, בהתאם לעדכונים אשר יפורסמו על ידי החברה ו/או מי מטעמה באתר הפעילות ויוטמעו בתקנון המעודכן שיפורסם מעת לעת באתר הפעילות, ולמשתתף ו/או למי מטעמו לא תעמוד כל טענה ו/או תביעה ו/או דרישה כלפי החברה.\n\n        </div>\n        <div class=\"title\">\n                \"מועמד לזכייה בפרס א\"\n        </div>\n        <div class=\"subtext\">\n                משתתף אשר ענה נכונה על השאלות בשלב א' ובשלב ב' הקמפיין שלו דורג במקום הראשון בדירוג על ידי צוות השיפוט, ועמד ביתר הוראות התקנון.\n        </div>\n        <div class=\"title\">\n                \"מועמד לזכייה בפרס ב\"\n        </div>\n        <div class=\"subtext\">\n                משתתף אשר ענה נכונה על השאלות בשלב א' ובשלב ב' הקמפיין שלו דורג במקום השני בדירוג על ידי צוות השיפוט, ועמד ביתר הוראות התקנון.\n        </div>\n        <div class=\"title\">\n                \"מועמד לזכייה בפרס ג\" \n        </div>\n        <div class=\"subtext\">\n                משתתף אשר ענה נכונה על השאלות בשלב א' ובשלב ב' הקמפיין שלו דורג במקום השלישי בדירוג על ידי צוות השיפוט, ועמד ביתר הוראות התקנון.\n\n                בכל מקום בתקנון זה בו צויין \"מועמד לזכייה\" הכוונה היא למועמד לזכייה בפרס א, למועמד לזכייה בפרס ב ולמועמד לזכייה בפרס ג' ביחד.\n\n        </div>\n        <div class=\"title\">\n                \"זוכה\"\n        </div>\n        <div class=\"subtext\">\n                מועמד  אחד (1) לזכייה בפרס א, מועמד אחד (1) לזכייה בפרס ב ומועמד אחד (1) לזכייה בפרס ג אשר: (1) עמדו בכל תנאי מתנאי תקנון זה; (2) לא נפסלו מלהיות מועמדים לזכייה בפרס על פי הוראות תקנון זה; (3) לא נמנעה מהם קבלה או מימוש של פרס עפ\"י הוראות תקנון זה; (4) הוכרזו כזוכים בפרס על ידי החברה לפי המנגנון המפורט בתקנון זה; \n\n        </div>\n        <div class=\"title\">\n                \"פרס א\"\n        </div>\n        <div class=\"subtext\">\n                הפקת הקמפיין הזוכה על ידי החברה בתקציב של עד 20,000 ₪ אשר ימומש באמצעות החברה ובכפוף לשיקול דעתה הבלעדי של החברה וגם שובר שי בשווי של 1,000 של BUYME.\n\n        </div>\n        <div class=\"title\">\n                \"פרס ב\"\n        </div>\n        <div class=\"subtext\">\n                הפקת הקמפיין הזוכה על ידי החברה בתקציב של עד 10,000 ₪ אשר ימומש באמצעות החברה ובכפוף לשיקול דעתה הבלעדי של החברה וגם שובר שי בשווי של 600 של BUYME.\n\n        </div>\n        <div class=\"title\">\n                \"פרס ג\"\n        </div>\n        <div class=\"subtext\">\n                הפקת הקמפיין הזוכה על ידי החברה בתקציב של עד 5,000 ₪ אשר ימומש באמצעות החברה ובכפוף לשיקול דעתה הבלעדי של החברה.\n\nבכל מקום בתקנון זה בו צוין \"הפרס\" הכוונה היא לפרס א, פרס ב' ו-פרס ג' ביחד.\n\nמובהר כי, במקרה בו קבוצה זוכה בפרס הכולל בו שובר שי, יחולק שובר כאמור לכל אחד מחברי הקבוצה.\n\nהשלמת שני השלבים בפעילות זו תיחשב למשתמש כביצוע תשע (9) שעות מעורבות חברתית לצורך \"התכנית להתפתחות אישית ולמעורבות חברתית\" של משרד החינוך. אישור שעות המעורבות החברתית יעשה בכפוף להנחיות ואישור רכז המעורבות החברתית הבית ספרי של המשתתף.\nמובהר כי כל משתתף יוכל לזכות בפרס אחד לכל היותר, בכל תקופת הפעילות.\nיובהר כי, ייתכן והפרס ואופן מימושו יהיו כפופים למגבלות נוספות, כפי שיפורטו באתר החברה ו/או בכל דרך אחרת שתבחר החברה בהתאם לשיקול דעתה. \nהחברה ו/או מי מטעמה רשאיות לשנות ו/או להחליף את זהות הפרס, כולו או חלקו, ו/או את כמותו ו/או להוסיף עליו פרסים נוספים, לפי שיקול דעתה הבלעדי. עדכונים לעניין זה יפורסמו באתר הפעילות. \nלא תעמוד לכל משתתף ו/או לזוכה ו/או למקבל הפרס כל טענה ו/או תביעה ו/או דרישה כלפי החברה ו/או מי מטעמה, לרבות בגין מימוש הפרס או אי מימושו לפי העניין ובהתאם לסוג הפרס, התאמתו לצרכי הזוכה, ערכו ולרבות בשל כל שינוי בו מכל סוג שהוא.\nמובהר בזאת כי קבלת הפרס הינה בכפוף לעמידה בכל הוראות תקנון זה. \n\n        </div>\n\n        <div class=\"title\">\n                \"התקנון\"\n        </div>\n        <div class=\"subtext\">\n                תקנון זה. התקנון יהיה זמין באתר הפעילות.\n        </div>\n        <div class=\"title\">\n                כללי\n        </div>\n        <div class=\"subtext\">\n                בכל מקרה של סתירה ו/או אי התאמה כלשהי בין הוראות תקנון זה לפרסומים אחרים כלשהם בדבר הפעילות, לרבות באתר הפעילות ו/או בכל\n                דרך אחרת, למעט הודעה מטעם החברה בדבר שינוי תקנון זה, תגברנה הוראות תקנון זה לכל דבר ועניין. ייתכן ובמהלך\n                הפעילות יעודכן התקנון, על פי שיקול דעתה של החברה. התקנון המעודכן יהיה זמין באתר הפעילות. נוסחו המחייב של\n                התקנון בכל עת הוא הנוסח המעודכן, אף אם המשתתף או אדם אחר הסתמך על נוסח קודם. לא ניתן לערער על תוצאות הפעילות\n                ו/או על כל עניין הנוגע אליהם, וקביעתה של החברה בעניין זה תהא סופית ומוחלטת ולא יבוא אחריה דבר. בתקנון הפעילות\n                השימוש הינו בלשון זכר לצורכי נוחיות בלבד וכולל גם פניה בלשון נקבה ו/או רבים. הסכמה לאמור בתקנון זה מהווה\n                תנאי להשתתפות בפעילות. בהשתתפותו בפעילות זו, מסכים, מאשר ומצהיר כל אחד מהמשתתפים, כי קרא את תקנון הפעילות\n                וכי הוא מקבל על עצמו את כל הוראותיו, וגם אם לא קרא את התקנון, הוא מסכים כי התקנון יחול עליו ויחייבו לכל דבר\n                ועניין.\n\n        </div>\n        <div class=\"title\">\n                ההשתתפות בפעילות\n        </div>\n        <div class=\"subtext\">\n                אדם המעוניין להשתתף בפעילות יגלוש לאתר הפעילות ויירשם באמצעות הזנת פרטים אישיים (שם מלא, אימייל וסיסמה אישית) או באמצעות\n                שימוש בחשבון ה-FACEBOOK או ה-GOOGLE שלהם. עם השלמת השלבים יידרש המשתתף להזין גם את מספר הטלפון שלו לצורך\n                יצירת קשר. בכל שלב יוכל המשתתף לעדכן את פרטיו ב\"איזור האישי\" באתר הפעילות. מובהר בזאת כי, כניסה לאתר הפעילות\n                ע\"י משתתף אינה מהווה ראיה או הבטחה לקבלת פרס כלשהו. במהלך תקופת הפעילות תעלה החברה עם הפעילות באתר הפעילות\n                ותזמין את המשתתפים להשתתף בה. הפעילות תכלול שלושה שלבים ותתבצע באופן הבא: שלב א' המשתתפים יתבקשו לענות נכונה\n                על שתי (2) שאלות ידע כללי סגורות בנושא כדורגל. שלב ב' המשתתפים יתבקשו לענות נכונה על שתי (2) שאלות אוריינות\n                מתמטיות בנושא כדורגל. שלב ג' בשלב זה המשתתפים יוכלו לבחור באחד מהמסלולים הבאים בהתאם לפרס עליו הם מעוניינים\n                להתחרות: א. מסלול אתגר הכדורגל המתמטי– המשתתפים יתבקשו להעלות סרטון המתעד אותם בועטים לשער באופן יצירתי ותוך\n                הקפדה על טכניקה כאשר הם עוטים כיסוי עיניים המונע מהם לראות (\"התכנים\") וינוקדו על בעיטתם על ידי צוות השופטים\n                וגם יתבקשו לענות על עד שלוש (3) שאלות אוריינות מתמטיות בתחום הכדורגל; או- ב. מסלול אתגר המתמטיקה – המשתתפים\n                יתבקשו לענות על עד שלוש (3) שאלות אוריינות מתמטית בתחום הכדורגל. מובהר בזאת כי המשתתפים בפעילות נותנים מראש\n                ובעצם השתתפותם בפעילות את הסכמתם לחברה לעשות שימוש במידע שהתקבל כראות עינה ולפרסמה באמצעי תקשורת שונים לרבות\n                - טלוויזיה, עיתונות, אינטרנט - פייסבוק ואינסטגרם, שילוט חוצות ומסכי חוצות, מבלי שהמשתתפים יקבלו תשלום. במידה\n                ושני (2) משתתפים או יותר השתתפו בפעילות וענו נכונה בזמן זהה או קיבלו את אותו הניקוד, ידורגו המשתתפים לפי\n                המועד בו השתתפו, כך שהמשתתף אשר השתתף ראשון בזמן, ידורג ראשון מבין המשתתפים הללו. המשתתף אשר השתתף שני בזמן\n                ידורג שני מבין המשתתפים הללו, וכן הלאה. מועמד לזכייה יוכל לזכות, לכל היותר, בפרס אחד בלבד במהלך כל תקופת\n                הפעילות, ולא תעמוד לו כל טענה ו/או תביעה ו/או דרישה כלפי החברה ו/או העוזרת לחברה בגין האמור.\n\n        </div>\n        <div class=\"title\">\n                הגבלות לגבי העלאת תכנים\n        </div>\n        <div class=\"subtext\">\n                המשתתף מסכים, מאשר ומצהיר לגבי התכנים שאותם הוא העלה, כי: הוא האדם היחיד אשר יצר את התכנים ואין לכל צד שלישי זכות כלשהי בתכנים.\n                לחילופין, מקום בו צד שלישי יצר את התכנים, קיבל המשתתף את הסכמתו של היוצר כאמור להשתמש בתכנים אלה לשם ההשתתפות\n                בפעילות וכן, קיבל את הסכמתו להעביר לחברה ו/או למי מטעמה את הזכויות בתכנים לרבות תנאי תקנון זה. בכל מקרה שבו\n                אדם אחר יצר את התכנים, המשתתף מצהיר מפורשות כי לחברה ו/או לעוזרת לחברה אין כל אחריות כלפיי כל נזק שייגרם\n                כתוצאה מכך וכל האחריות בקשר עם האמור וכל נזק שייגרם יוטל על המשתתף. ידוע למשתתף שחל איסור מוחלט להעלות לאתר\n                הפעילות כל תוכן המפר כל דין או הסכם או אשר פרסומו יהווה הפרה של כל דין או הסכם, לרבות אך לא רק תכנים אשר\n                שימוש בהם או פרסומם יהווה או עשוי להוות (יחדיו להלן: \"תוכן אסור\"): הפרה של זכויות צדדים שלישיים, לרבות זכויות\n                יוצרים, סימני מסחר, סימני שירות, מדגמים, זכויות מוסריות או כל זכות קניין רוחני אחרת; הפרה של דיני לשון הרע\n                או הוצאת דיבה או פגיעה בשמו הטוב של אדם ו/או גוף כלשהו; הפרה של דיני העונשין בקשר עם פרסומי תועבה; הפרה של\n                דיני הגנת הפרטיות; הטעיה של צרכן; פגיעה ברגשות הציבור או כל חלק ממנו; הפרת חוזה או חובת אמון או סודיות; תוכן\n                שקרי, מטעה או מסולף; התחזות לאדם אחר ו/או הולכת שולל משתתפים אחרים; זיהוי אישי של אנשים אחרים, מבלי שנתנו\n                את הסכמתם לפרסום זהותם ובפרט של קטין ללא אישור הוריו או האפוטרופוס שלו; תוכן בעל אופי טורדני, פוגע, מעליב,\n                עוין, מאיים, גס רוח, בעל אוריינטציה פורנוגראפית או בעל אופי מיני בוטה; עידוד לאלימות, לאפליה, לשנאה או לגזענות;\n                עידוד להתנהגות פלילית או לשימוש או לפרסום המקים עילה לתביעה או אחריות אזרחית, או העלול לגרום לחברה נזקים;\n                תוכנת מחשב, קוד מחשב או יישום הכוללים נגיף-מחשב (\"וירוס\"), לרבות תוכנות-עוינות הידועות כסוס-טרויאני, תולעים\n                (worms), ונדלים (vandals), יישומים מזיקים (Malicious Applications) וכיו\"ב, וכן תוכנות לא חוקיות ו/או כל תוכן\n                שהינו דואר זבל (spam) או שעלול לשמש לצורך הפצת דואר זבל. החברה שומרת לעצמה את הזכות לפסול בכל עת, ולא לפרסם\n                ו/או למחוק מאתר הפעילות כל תוכן לרבות כל תוכן אשר, לפי שיקול דעתה הבלעדי, קיים חשש כי הוא נופל לגדר תכנים\n                אסורים וכן, כל חומר אשר לפי שיקול דעתה הבלעדי, איננו הולם את מדיניות החברה, בכל שלב, והכל בשל האמור וכן,\n                מכל סיבה אחרת לפי שיקול דעתה הבלעדי של החברה וללא צורך לנמק פעולתה.\n\n        </div>\n        <div class=\"title\">\n                קניין רוחני\n        </div>\n        <div class=\"subtext\">\n                המשתתף מצהיר ומתחייב כלפי החברה, לגבי התכנים שאותם העלה לאתר הפעילות, כדלהלן: התכנים במסגרת פעילות זו, הינם מקוריים ונוצרו\n                על ידי המשתתף בלבד, וכי המשתתף הוא בעל כל זכויות הקניין הרוחני בתכנים, או שלחילופין הוראות סעיף ‎4.1.2 חלים\n                עליהם, וזאת עד להעברתם לבעלות החברה כמפורט בסעיף ‎5.2 להלן. בפרסום התכנים באתר הפעילות מעביר המשתתף לחברה\n                ללא תמורה את כל הזכויות בתכנים, לרבות כל זכויות היוצרים הנובעות מהם, לבעלותה המלאה והבלעדית של החברה, אשר\n                תהא רשאית לעשות בתכנים שימוש בכל דרך שהיא, לרבות להעתיק, לשכפל, להפיץ, לשווק, לשדר, להעמיד לרשות הציבור,\n                לעבד, לערוך, לתרגם ולהשתמש בתכנים בכל דרך אחרת, וכן להעניק רישיון משנה לשימוש בזכויות אלה – כולן או חלקן\n                – לכל צד שלישי, באתרי אינטרנט, בדברי דפוס, לרבות בעיתונים, ובמגזינים, במדיות דיגיטאליות, ברשתות התקשורת,\n                ברשתות החברתיות ובכלל זה גם במקרה שהחברה או צד שלישי כלשהו יפיקו הכנסה בגין השימוש שייעשה בתכנים כאמור. בנוסף,\n                יחולו התנאים הבאים: החברה תהא רשאית, אך לא חייבת, לעשות שימוש בתכנים למטרות מסחריות ופרסומיות כלשהן. המשתתף\n                לא יהא רשאי לדרוש ו/או לתבוע כל תמורה או פיצוי עבור העברת כל הזכויות המרכיבות את התכנים כמפורט לעיל. המשתתף\n                מצהיר ומתחייב כי לא יעלה כל טענה ו/או תביעה ו/או דרישה בקשר עם הזכויות המוסריות בתכנים. המשתתף מוותר על כל\n                טענה ו/או דרישה ו/או תביעה כלפי החברה ו/או מי מטעמה בגין כל שימוש שייעשה בתכנים לרבות כל שינוי בתכנים שיתבצע\n                על ידי החברה ו/או מי מטעמה על פי שיקול דעתן המוחלט והבלעדי והכל מבלי לקבל ממנו הרשאה נוספת ו/או לשלם לו תמורה\n                בגין השימוש כאמור. בנוסף ומבלי לגרוע מכל הוראה אחרת בתקנון זה מובהר בזאת, כי המשתתף יפצה ו/או ישפה את החברה,\n                מיד עם דרישתה הראשונה, בגין כל נזק אשר ייגרם להן כתוצאה מתביעה ו/או דרישה ו/או טענה של המשתתף ו/או כל צד\n                ג' שהוא בקשר עם זכויות היוצרים של החברה בתכנים על כל מרכיביהם.\n        </div>\n        <div class=\"title\">\n                קבלת הפרס\n        </div>\n        <div class=\"subtext\">\n                לאחר תקופת הפעילות ולא יאוחר מיום 1.5.2018 החברה תנסה ליצור קשר עם המועמד לזכייה באמצעות שליחת מייל לכתובת אותה ציין בעת\n                ההרשמה אליו יידרש המשתתף להשיב, עד שש (6) פעמים במהלך שבעה (7) ימי עסקים מיום מסירת הפרטים על ידו לחברה.\n                במועד יצירת הקשר ולאחר וידוא פרטי המועמד לזכייה, החברה ו/או מי מטעמה, תתאם, לפי שיקול דעתה, מועד למסירת הפרס\n                באמצעות הגעה למשרדי החברה ו/או שליח ו/או באמצעות דואר ישראל כמפורט בסעיף 6.5 להלן. ככל שלא אותר המועמד לזכייה\n                ו/או הוא נפסל בגין אי עמידתו בתנאי תקנון זה ו/או קיים חשד כי מועמדותו לזכייה הושגה בדרכים שאינן כשרות (לרבות\n                ביצוע עבירה פלילית ו/או עוולה אזרחית, ובכלל זאת פריצה לאתר הפעילות או מסירת מידע שגוי) ו/או הודיע כי אינו\n                מעוניין לקבל את הפרס, הכל לפי שיקול דעתה הבלעדי של החברה – אזי ייפסל המועמד לזכייה, ותחתיו יבוא משתתף אשר\n                דורג אחריו בהתאם לתנאי תקנון זה, אשר ייחשב כמועמד לזכייה ויחולו לגביו ההוראות הנ\"ל בהתאמה, וחוזר חלילה. מובהר\n                כי מועמד לזכייה שנפסל לא יהיה זכאי לכל פיצוי שהוא מהחברה או מי מטעמה. החברה תהיה רשאית, לפי שיקול דעתה הבלעדי,\n                לשלוח את הפרס באמצעות הזמנת המשתתף למשרדיה ו/או כל מקום אחר לפי שיקול דעתה ו/או באמצעות דואר ישראל ו/או באמצעות\n                שליח ו/או באמצעות כל דרך אחרת בהתאם לשיקול דעתה. החברה תהיה רשאית לדרוש מהמועמד לזכייה כי טופס ההתחייבות\n                המצורף כנספח א' יישלח אליה מבעוד מועד בתוך תקופת זמן שתיקבע על-ידה, זאת כתנאי לקבלת הפרס. החברה ו/או מי מטעמה\n                תהא רשאית לפסול כל מועמד לזכייה, עפ\"י שיקול דעתה הבלעדי, אם המועמד לזכייה לא יעמוד בהוראות סעיף זה. יובהר\n                כי מרגע שנמסר הפרס לדואר ישראל ו/או לשליח ו/או ויצא משליטת החברה באמצעי אחר, החברה איננה אחראית לפרס שלא\n                הגיע למועמד לזכייה, ולא תהיה לו כל דרישה ו/או תביעה מאת החברה ו/או מי מטעמה בשל כך. במעמד מסירת פרס הטיסה\n                יהיה על הזוכה בפרס הטיסה למסור פרטים לגבי המלווה, כהגדרת מונח זה לעיל, שבחר לצרף אליו למימוש פרס הטיסה. על\n                המלווה יהיה להציג את נספח ב' כשהוא חתום וכן דרכון שהינו בתוקף למשך 12 (שניים-עשר) חודשים לפחות ממועד הזכייה.\n                החברה ו/או מי מטעמה תהא רשאית לפסול מועמד לזכייה (ואת המלווה של המועמד לזכיה בפרס הטיסה, ככל שרלוונטי), לפי\n                שיקול דעתה הבלעדי. מועמד לזכייה אשר נפסל כאמור לא יהיה זכאי לממש את הפרס ולא יהיה זכאי לכל פיצוי ו/או סעד\n                כלשהו מהחברה ו/או מי מטעמה. הוראות אלה יחולו בהתאמה גם על המלווה.\n        </div>\n        <div class=\"title\">\n                הפרס\n        </div>\n        <div class=\"subtext\">\n                החברה רשאית לשנות ו/או להחליף את הפרס ו/או את כמותו ו/או להוסיף עליו פרסים נוספים, לפי שיקול דעתה הבלעדי של החברה ו/או העוזרת\n                לחברה ולזוכה לא תעמוד כל טענה ו/או תביעה ו/או דרישה כלפי החברה ו/או העוזרת לחברה בגין האמור, לרבות בשל הפרס\n                ו/או טיבו ו/או התאמתו ו/או איכותו ו/או אופן מימושו ו/או כמותו וכיו\"ב. עדכונים לעניין זה יפורסמו באתר הפעילות,\n                כהגדרתו לעיל. יובהר, כי מועד אספקת הפרס בפועל, ייקבע על-ידי החברה ו/או העוזרת לחברה ו/או מי מטעמן, ולזוכה\n                לא תעמוד כל טענה ו/או תביעה ו/או דרישה כלפי החברה ו/או העוזרת לחברה ו/או מי מטעמן בגין האמור, לרבות בשל כל\n                עיכוב או דחייה במועד קבלת הפרס או כל חלק הימנו. ידוע למשתתפים כי השתתפותם בפעילות זו הינה למטרת השעשוע ולשם\n                ההנאה המושגת מעצם ההשתתפות בפעילות. במידה ויחול שינוי בפרס עליו הוכרז, לא תהיה למשתתפים כל טענה ו/או תביעה\n                ו/או דרישה כלפי החברה ו/או העוזרת לחברה ו/או מי מטעמן בקשר עם האמור. הפרס שיחולק במסגרת פעילות זו אינו ניתן\n                להחלפה, לשינוי או להמרה על ידי הזוכה לא בכסף ולא בשווה כסף ולא בכל פרס ו/או מוצר אחר.\n\n        </div>\n        <div class=\"title\">\n                פטור מאחריות\n        </div>\n        <div class=\"subtext\">\n                המשתתף מצהיר בזאת, כי אין ולא תהיה לו ו/או למי מטעמו, כל טענה ו/או דרישה ו/או תביעה כלפי החברה ו/או העוזרת לחברה, מנהליהן,\n                עובדיהן, ו/או מי מטעמן, בכל הקשור והמתייחס לפעילות, להשתתפות (או אי ההשתתפות) בה ו/או לזכייה בה. המשתתף מצהיר\n                בזאת, כי התחייבותו זו הנה בלתי חוזרת ובלתי ניתנת לביטול או לשינוי. ההשתתפות בפעילות הינה באחריותו הבלעדית\n                של המשתתף, והחברה ו/או העוזרת לחברה ו/או מי מטעמן לא תישאנה באחריות לכל נזק (לרבות נזק גוף), הפסד, אבדן או\n                הוצאה מכל מין וסוג שייגרמו למי מהמשתתפים, והקשור, במישרין או בעקיפין, עם הפעילות. המשתתף מצהיר, מסכים ומאשר\n                כי ידוע לו כי פעילות זו, הנערכת בהתאם לתקנון זה, משלבת מרכיבים של שעשוע והנאה שהוענקו לו עם השתתפותו בפעילות\n                וכי יתכן כי על אף מאמצי החברה, עשויים להתרחש אירועים ו/או שיבושים ו/או הפרעות ו/או תקלות, אשר יש בהם כדי\n                למנוע מהמשתתף ו/או מהמועמד לזכייה מלזכות בפרס ו/או מלקבל את הפרס, והמשתתף מסכים לפטור את החברה ו/או העוזרת\n                לחברה מכל טענה ו/או דרישה ו/או תביעה, ולא יהיה זכאי לכל פיצוי, שיפוי או סעד בגינם. בהשתתפותו בפעילות מסכים\n                המשתתף כי כל תקלה, שיבוש, איחור וכיו\"ב, אשר מקורם בכוח עליון, מלחמה (לרבות בין מדינות או גורמים שאינם ישראל),\n                שביתה, פיגועים, אסונות טבע וכיו\"ב, בין בארץ ובין בכל מקום אחר, או כל אירוע אחר אשר אינו תלוי בחברה, לא ייחשב\n                כלל להפרה של תקנון זה, ולא יזכה את המשתתף ו/או המועמד לזכייה ו/או הזוכה בכל סעד ו/או זכות ו/או תרופה ו/או\n                טענה ו/או דרישה ו/או תביעה כנגד החברה ו/או העוזרת לחברה ו/או מי מטעמן. החברה אינה מתחייבת שהפעילות לא תופרע\n                או תתקיים כסדרה ללא מגבלות או הפסקות, תנוהל ללא טעויות, תהא חסינה מפני נזקים, קלקולים, אי דיוקים, שגיאות\n                ותקלות. מובהר בזאת, כי בכל אחד מהמקרים המפורטים בסעיף זה לעיל, תהא החברה לפי שיקול דעתה הבלעדי רשאית לנקוט\n                כל צעד על מנת למזער ו/או לנטרל את האמור, לרבות להפסיק את הפעילות טרם תום תקופת הפעילות ו/או לבטל את הפעילות\n                כליל ו/או לנקוט בכל צעד אחר, ולמשתתף לא תעמוד כל טענה ו/או תביעה ו/או דרישה כלפי החברה ו/או מי מטעמה בקשר\n                עם האמור. מבלי לגרוע מכלליות האמור לעיל, מובהר כי עיבוד הנתונים במסגרת הפעילות נסמך על אתר הפעילות אשר אינו\n                חסין מכל טעות או תקלה. החברה אינה מתחייבת כי הפעילות תתנהל ללא תקלה, שגיאה, \"נפילה\" או טעות, ולמשתתף לא תהיה\n                כל טענה או תביעה כתוצאה או בקשר לכך. כמו כן, מודגש, כי פעולת אתר הפעילות כפופה לזמינות ולתקינות של רשת האינטרנט,\n                ולפיכך לא תהיה למשתתף כל טענה, דרישה או תביעה בגין כל נזק, אבדן, הפסד, פגיעה בסיכויים או הוצאה שייגרמו לו\n                עקב טעות, נפילה, שיבוש, איחור או תקלה שנבעו מרשת האינטרנט כאמור. בכל מקרה בו יוכח כי תקלה, פגיעה או רשלנות\n                של המשתתף מנעה ממנו מלהשתתף בפעילות ו/או מלזכות בפרס ו/או לממש את הפרס, תהיה החברה ו/או העוזרת לחברה פטורות\n                מאחריות. החברה תהיה רשאית למסור כל מידע אשר יידרש ממנה על פי חוק ו/או על פי הוראה של רשות מוסמכת.\n\n        </div>\n        <div class=\"title\">\n                הצהרות והתחייבויות המשתתף\n        </div>\n        <div class=\"subtext\">\n                מבלי לגרוע מיתר חובותיו והתחייבויותיו על פי תקנון זה ו/או כל דין, המשתתף מצהיר ומתחייב כלפי החברה כי: כל הפרטים שמסר הינם\n                נכונים ומדויקים. מלאו לו 14 שנים וטרם מלאו לו 16 שנים והוא בכיתה ט'-י'. ידוע לו כי דינו של תקנון זה ודינה\n                של הפעילות כדין חוזה למתן ציונים, והוראות סעיף 33 לחוק החוזים (חלק כללי), התשל\"ג- 1973, חלים עליהם, על כן\n                בחירת הזוכה בסיום תקופת הפעילות הנה סופית, חלוטה, בלתי ניתנת לתביעה ו/או לערעור, מחייבת ולא תהיה נושא לדיון\n                בביהמ\"ש ולא תצמיח עילת תביעה מכל מין וסוג שהוא. המשתתף יישא בכל אחריות, מפורשת ומכללא, ויפצה וישפה את החברה\n                ו/או את מנהליה ו/או עובדיה ו/או מי מטעמה, מיד עם דרישתה הראשונה לעשות כן, בגין כל נזק (לרבות נזקים ישירים,\n                עקיפים, נסיבתיים, תוצאתיים, הפסדי רווחים ופגיעה במוניטין), הפסד, אובדן, הוצאות, מכל מין וסוג, וכן הוצאות\n                משפט ושכ\"ט עו\"ד, בגין כל טענה דרישה ו/או תביעה הנובעת ממעשה ו/או מחדל שלא כדין הקשורים בדרך כלשהי להפרה במישרין\n                ו/או בעקיפין של תקנון זה. ידוע לו כי החברה אינה נושאת בכל אחריות באשר לאובדן פרטים של מי מהמשתתפים כתוצאה\n                מכשל טכני, ואשר כתוצאה ממנו נמחקו, הושמדו או שובשו פרטים אישיים אשר נשלחו במסגרת הפעילות.\n        </div>\n        <div class=\"title\">\n                תנאי שימוש באתר הפעילות\n        </div>\n        <div class=\"subtext\">\n                המשתתף מסכים, מאשר ומצהיר כי הוא מאשר את תנאי השימוש באתר הפעילות המפורטים להלן: השימוש של המשתתף באתר הפעילות הוא על אחריותו\n                בלבד. בשום מקרה החברה ו/או מי מטעמה, לא יהיו אחראים לכל נזק, מכל סוג שהוא, לרבות אך מבלי לגרוע מכלליות האמור\n                לעיל, נזקים ישירים, אגביים, תוצאתיים, עקיפים או עונשיים, או נזקים הנובעים מאובדן רווחים, אובדן נתונים או\n                הפרעה למהלך העסקים ואשר נובעים מהגישה או השימוש של המשתתף באתר הפעילות או במידע הכלול בו או חוסר יכולת לגשת\n                לאתר הפעילות או להשתמש בו. הגבלת אחריות זו חלה גם על כל נזק או וירוס אשר עלולים לפגוע בציוד המחשבים של המשתתף.\n                מובהר כי כל התכנים והשירותים המופיעים באתר הפעילות מובאים \"כמות שהם\" ( AS-IS). מבלי לגרוע מהאמור לעיל, החברה\n                ו/או מי מטעמה, אינם נושאים בכל אחריות ביחס לתכנים המופיעים באתר, לרבות כל מידע בכל פורמט שהוא אשר יועמד לרשות\n                המשתתף בכל אמצעי שהוא, הקיים כיום או יהיה קיים בעתיד (להלן – \"תכני האתר\"), בין אם תכנים אלה בבעלות האתר ובין\n                אם הם בבעלות צד שלישי כלשהו, בקשר עם מהימנותם, תוכנם, דיוקם, אמינותם, זמינותם והשפעתם על המשתמשים באתר הפעילות\n                ו/או כל צד שלישי הנחשף לתכני אתר הפעילות בכל דרך אחרת. החברה הינה בעלת מלוא זכויות הקניין הרוחני באתר הפעילות\n                ותכניו, לרבות סימנים מסחריים, עיצוב האתר, תוכנה, יישום, טקסט, תמונות וכל תוכן אחר ו/או בעלת כל הרישיונות\n                לשימוש בהם. חל איסור לעשות שימוש כלשהו בסימנים המסחריים הנמצאים באתר הפעילות ו/או בתמונות ובמידע הכלול בו,\n                לרבות העתקה, שכפול, הפצה פרסום וכיו\"ב. אין לפרש שום דבר מהאמור באתר הפעילות כאילו הוא מהווה מתן רישיון או\n                זכות, מכללא, או מכוח השתק, או בדרך אחרת, בסימני המסחר או בקשר אליהם, ללא רשות מפורשת בכתב מאת החברה ובעל\n                סימני המסחר. חל איסור מוחלט על שימוש לרעה בסימני המסחר שבאתר הפעילות או בתכנים המוצגים בו. החברה מעניקה למשתתף\n                את טובת ההנאה של גישה וצפייה בתכני האתר הפעילות, אך ורק לשימוש אישי שלו ולא לשם שימוש מסחרי. החברה רשאית\n                לבטל טובת הנאה זו בכל זמן, לאחר או ללא מתן הודעה, על יסוד סיבה, או ללא כל סיבה. החברה שומרת על זכותה להגביל\n                את הגישה לאתר הפעילות לכל אדם, אזור גיאוגרפי או רשות ריבונית, וזאת ללא מתן הודעה מראש. מלבד במקרה שבו ניתנה\n                רשות מפורשת על ידי החברה, כל גישה או ניסיון גישה לאזורים אחרים במערכת המחשבים של החברה ו/או מי מטעמה או למידע\n                אחר אשר נכלל במערכת זו, לכל מטרה, אסורים לחלוטין. המשתתף מתחייב לא להשתמש בכל תהליכים או אמצעים אוטומטיים\n                או ידניים אחרים על מנת \"לגרד מסכים\", לנטר, \"לכרות\" או להעתיק עמודי אינטרנט באתר הפעילות, או תכנים אשר נכללים\n                בו ללא רשות מפורשת בכתב מהחברה. המשתתף מתחייב לא להשתמש בשום התקן, תוכנה או שגרה על מנת להפריע או לנסות להפריע\n                לעבודה התקינה של אתר הפעילות. המשתתף מתחייב לא לעשות כל פעולה אשר תטיל עומס רב באופן לא סביר או לא מידתי\n                על התשתיות של החברה או ספקיה.\n\n        </div>\n        <div class=\"title\">\n                שונות\n        </div>\n        <div class=\"subtext\">\n                מבלי לגרוע מיתר חובותיו והתחייבויותיו על פי תקנון זה ו/או כל דין, המשתתף מצהיר ומתחייב כלפי החברה כי: כל הפרטים שמסר הינם\n                נכונים ומדויקים. מלאו לו 14 שנים וטרם מלאו לו 16 שנים והוא בכיתה ט'-י'. ידוע לו כי דינו של תקנון זה ודינה\n                של הפעילות כדין חוזה למתן ציונים, והוראות סעיף 33 לחוק החוזים (חלק כללי), התשל\"ג- 1973, חלים עליהם, על כן\n                בחירת הזוכה בסיום תקופת הפעילות הנה סופית, חלוטה, בלתי ניתנת לתביעה ו/או לערעור, מחייבת ולא תהיה נושא לדיון\n                בביהמ\"ש ולא תצמיח עילת תביעה מכל מין וסוג שהוא. המשתתף יישא בכל אחריות, מפורשת ומכללא, ויפצה וישפה את החברה\n                ו/או את מנהליה ו/או עובדיה ו/או מי מטעמה, מיד עם דרישתה הראשונה לעשות כן, בגין כל נזק (לרבות נזקים ישירים,\n                עקיפים, נסיבתיים, תוצאתיים, הפסדי רווחים ופגיעה במוניטין), הפסד, אובדן, הוצאות, מכל מין וסוג, וכן הוצאות\n                משפט ושכ\"ט עו\"ד, בגין כל טענה דרישה ו/או תביעה הנובעת ממעשה ו/או מחדל שלא כדין הקשורים בדרך כלשהי להפרה במישרין\n                ו/או בעקיפין של תקנון זה. ידוע לו כי החברה אינה נושאת בכל אחריות באשר לאובדן פרטים של מי מהמשתתפים כתוצאה\n                מכשל טכני, ואשר כתוצאה ממנו נמחקו, הושמדו או שובשו פרטים אישיים אשר נשלחו במסגרת הפעילות.\n        </div>\n        <div class=\"title\">\n                הצהרות והתחייבויות המשתתף\n        </div>\n        <div class=\"subtext\">\n                מבלי לגרוע מיתר חובותיו והתחייבויותיו על פי תקנון זה ו/או כל דין, המשתתף מצהיר ומתחייב כלפי החברה כי: כל הפרטים שמסר הינם\n                נכונים ומדויקים. מלאו לו 14 שנים וטרם מלאו לו 16 שנים והוא בכיתה ט'-י'. ידוע לו כי דינו של תקנון זה ודינה\n                של הפעילות כדין חוזה למתן ציונים, והוראות סעיף 33 לחוק החוזים (חלק כללי), התשל\"ג- 1973, חלים עליהם, על כן\n                בחירת הזוכה בסיום תקופת הפעילות הנה סופית, חלוטה, בלתי ניתנת לתביעה ו/או לערעור, מחייבת ולא תהיה נושא לדיון\n                בביהמ\"ש ולא תצמיח עילת תביעה מכל מין וסוג שהוא. המשתתף יישא בכל אחריות, מפורשת ומכללא, ויפצה וישפה את החברה\n                ו/או את מנהליה ו/או עובדיה ו/או מי מטעמה, מיד עם דרישתה הראשונה לעשות כן, בגין כל נזק (לרבות נזקים ישירים,\n                עקיפים, נסיבתיים, תוצאתיים, הפסדי רווחים ופגיעה במוניטין), הפסד, אובדן, הוצאות, מכל מין וסוג, וכן הוצאות\n                משפט ושכ\"ט עו\"ד, בגין כל טענה דרישה ו/או תביעה הנובעת ממעשה ו/או מחדל שלא כדין הקשורים בדרך כלשהי להפרה במישרין\n                ו/או בעקיפין של תקנון זה. ידוע לו כי החברה אינה נושאת בכל אחריות באשר לאובדן פרטים של מי מהמשתתפים כתוצאה\n                מכשל טכני, ואשר כתוצאה ממנו נמחקו, הושמדו או שובשו פרטים אישיים אשר נשלחו במסגרת הפעילות.\n        </div>\n        <div class=\"title\">\n                שונות\n        </div>\n        <div class=\"subtext\">\n                הפעילות ו/או תקנון זה אינם מהווים הצעה מאת החברה לציבור בכלל או למשתתף כלשהו, והם אינם אלא הזמנה מטעם החברה לכל משתתף להציע\n                לחברה את השתתפותו, וזאת באופן ובתנאים המפורטים בתקנון זה. כל אחד מהמשתתפים, מסכים ומאשר כי דבר השתתפותו ו/או\n                זכייתו בפעילות, אפשר שיסוקרו, יצולמו וישודרו, באמצעי תקשורת, לרבות בטלוויזיה, בשילוט, בעיתונות, באתר הפעילות\n                ו/או באתרי אינטרנט אחרים, וכי בעצם ההשתתפות בפעילות מביע המשתתף ו/או המלווה את הסכמתו לפרסום ו/או צילום שמו\n                ותמונותיו במסגרת הסיקורים והפרסומים האמורים, לרבות במסגרת פרסומים וקידום מכירות של החברה. הזוכה בפרס הטיסה\n                והמלווה מתחייבים בזאת לרכוש פוליסות ביטוח מתאימות בקשר עם מימוש הפרס, אשר יעניקו להם כיסוי ביטוחי, בין היתר,\n                לכל נזק גוף או רכוש אשר עלול להיגרם להם בקשר עם הפרס ו/או במהלך הטיסות ו/או השהות ביעד. הפעילות אינה קשורה,\n                ממומנת, נתמכת או מנוהלת על ידי פייסבוק ו/או גוגל. כל המידע אשר יימסר על-ידי המשתתף יימסר לחברה ולעוזרת לחברה\n                ו/או למי מטעמן, ולא לפייסבוק ו/או גוגל. השימוש במידע שיימסר על ידי המשתתף יהיה לצורך קידום מכירותיה של החברה\n                בלבד. למשתתף ו/או למועמד לקבלת הפרס למי מטעמם לא תעמוד כל טענה ו/או תביעה ו/או דרישה כלפי פייסבוק ו/או גוגל\n                ו/או מי מטעמן בקשר עם פעילות זו. בכל מקרה שיוכח, כי רשלנות של החברה ו/או העוזרת לחברה ו/או מי מטעמן מנעה\n                מאדם מלהשתתף בפעילות ו/או מלזכות בפרס ו/או מלקבל את הפרס במסגרת הפעילות, יוגבל הפיצוי לו המשתתף יהיה זכאי\n                לגובה עלות הגלישה באינטרנט על מנת להיכנס לאתר הפעילות. כל מועמד לזכייה יהיה חייב, לפי דרישת החברה, להצהיר\n                בכתב בנוסח המצורף כנספח א' להסכם זה כי, בין היתר, איננו נמנה על אלה אשר אסורה השתתפותם בפעילות לפי תנאי תקנון\n                זה וכי זכותו לא הושגה תוך הפרת תקנון זה או בניגוד לאחד מתנאיו. ההשתתפות בפעילות אסורה על עוזריהם, עובדיהם,\n                מנהליהם, שותפיהם ובני משפחותיהם של החברה והעוזרת לחברה. למען הסר ספק, הפעילות לפי תקנון זה אינה מהווה הגרלה\n                כהגדרתה בסעיף 244 לחוק העונשין, וזאת בשל העובדה כי הזכייה בה תלויה ביכולת ולא בגורל. הדין החל על תקנון זה\n                וכל הנובע ממנו הוא הדין הישראלי בלבד. סמכות השיפוט הייחודית נתונה לבתי המשפט המוסמכים בתל-אביב. תקופת ההתיישנות\n                לכל תביעה נגד החברה ו/או העוזרת לחברה בכל עניין הנובע במישרין ו/או בעקיפין מהשתתפות בפעילות הינה שנה ממועד\n                סיומה.\n        </div>\n\n\n</div>\n\n<main-footer [showPartners]=\"true\"></main-footer>"

/***/ }),

/***/ "../../../../../src/app/Components/Terms/terms.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var TermsComponent = (function () {
    function TermsComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
    }
    TermsComponent.prototype.ngOnInit = function () {
        if (window.location.hostname.indexOf('soccer') != -1) {
            this.dataService.type = '1';
            document.title = "Soccer Challenge";
        }
        if (window.location.hostname.indexOf('social') != -1) {
            this.dataService.type = '4';
            document.title = "Social Challenge";
        }
    };
    return TermsComponent;
}());
TermsComponent = __decorate([
    core_1.Component({
        selector: 'terms',
        template: __webpack_require__("../../../../../src/app/Components/Terms/terms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/Terms/terms.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object])
], TermsComponent);
exports.TermsComponent = TermsComponent;
var _a, _b, _c;
//# sourceMappingURL=terms.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/question-flow/question-flow.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "standalone-pisa-question {\n    margin-top: 150px;\n    display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/question-flow/question-flow.component.html":
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<style>\n  .header-mobile-social {\n    z-index: 501 !important;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    display: none;\n  }\n  \n  .header-mobile-social .disconnect {\n    display: inline-block;\n  }\n  \n  .header-mobile-social .navigation-menup {\n    transform: scaleY(0);\n    transition: 0.3s ease-in-out;\n    width: 100%;\n    background-color: #272d38;\n    display: flex;\n    flex-direction: column;\n    transform-origin: 0 0;\n  }\n  \n  .header-mobile-social .navigation-menup.open {\n    transform: scaleY(1);\n  }\n  \n  @media (max-width: 480px) {\n    .header-mobile-social {\n      display: initial;\n    }\n    .pnavigation-link.pwhite {\n      display: inline-block !important;\n    }\n  }\n</style>\n<div *ngIf=\"!dataService.showPopupSign  && !dataService.showPopupContac\" data-collapse=\"medium\" data-animation=\"default\"\n  data-duration=\"400\" class=\"navigation-barpp darkpp w-nav header-mobile-social\">\n\n  <div (click)=\"toggleMenu()\" id=\"hamburger\" class=\"hamburger-buttonp whitep w-nav-button\">\n    <div class=\"picon w-icon-nav-menu\"></div>\n  </div>\n  <nav role=\"navigation\" class=\"navigation-menup w-nav-menu\">\n    <a *ngIf=\"dataService.user.isEmpty() == false;\" (click)=\"dataService.logOut();analyticsEvent('התנתק')\" class=\"pnavigation-link pwhite w-nav-link\">\n    {{dataService.getText('disConnect')}}\n  </a>\n    <a (click)=\"dataService.showContacPopup();analyticsEvent('צור קשר')\" class=\"pnavigation-link pwhite w-nav-link\">\n      {{dataService.getText('contactUs')}}\n  </a>\n  <a *ngIf=\"dataService.user.isEmpty() == true && !hidesignup\" (click)=\"dataService.showSignupPopup()\" class=\"pnavigation-link pwhite w-nav-link\">\n    {{dataService.getText('enter')}}\n  </a>\n  <a *ngIf=\"dataService.user.isEmpty()==false;\" (click)=\"analyticsEvent('פרופיל')\" [routerLink]=\"['/profile']\" class=\"pnavigation-link pwhite w-nav-link\">\n  {{dataService.getText('private')}}\n  </a>\n  </nav>\n</div>\n\n<progress-bar [type]=\"type\" *ngIf=\"stages && user && user.contest_stages_map\" [stages]=\"stages\" [currentStage]=\"user.contest_stages_map[type]['stage']*1+1\"\n  [contestStages]=\"user.contest_stages\"></progress-bar>\n<stage *ngIf=\"stage && !showCongrats && !showSent && !showFailed && user && user.contest_stages_map && !user.contest_stages_map[type]['onPisa']\"\n  [stage]=\"stage\" (answer)=\"question_answered($event)\" [showSent]=\"showSent\"></stage>\n<standalone-pisa-question *ngIf=\"stages && \nuser &&\n user.contest_stages_map &&\n  user.contest_stages_map[type]['onPisa'] &&\n   !showCongrats &&\n    (stages.length != user.contest_stages_map[type]['stage'])\" [stages]=\"stages\" (answer)=\"question_answered($event)\" (showSent)=\"showSent=true;\"\n  [currentStage]=\"user.contest_stages_map[type]['stage']*1+1\"></standalone-pisa-question>\n<congrats *ngIf=\"showCongrats\" (close)=\"showCongrats = $event;scrollTop()\"></congrats>\n<did-not-pass *ngIf=\"showFailed\"></did-not-pass>\n<answer-sent *ngIf=\"showSent\"></answer-sent>\n<popup-finish-challenge *ngIf=\"stages && !dataService.showGenericPopup && user && user.contest_stages_map && ( (stages.length == user.contest_stages_map[type]['stage']) && user.contest_stages_map[type]['onPisa']) || (user && stages && user.contest_stages_map && stages.length < user.contest_stages_map[type]['stage'] && !dataService.showGenericPopup)\"></popup-finish-challenge>\n<main-footer [showPartners]=\"false\"></main-footer>"

/***/ }),

/***/ "../../../../../src/app/Components/question-flow/question-flow.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var UserDataModel_1 = __webpack_require__("../../../../../src/app/DataModels/UserDataModel.ts");
var QuestionFlowComponent = (function () {
    function QuestionFlowComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.user = new UserDataModel_1.default();
        this.showCongrats = false;
        this.showFailed = false;
        this.showSent = false;
    }
    QuestionFlowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globals = myGlobals;
        if (!this.dataService.type) {
            this.dataService.type = this.route.snapshot.params['type'];
        }
        this.type = this.dataService.type;
        this.loadUserDetails();
        this.subscription = this.dataService.notifyObservable$.subscribe(function (res) {
            if (res.hasOwnProperty('option') && res.option === 'onSubmit' && res.value == 'From Signup') {
                _this.loadUserDetails();
            }
        });
        // Get existing session
        // Handle result same as question answered..
        // 
    };
    QuestionFlowComponent.prototype.toggleMenu = function () {
        $('.navigation-menup').toggleClass('open');
    };
    QuestionFlowComponent.prototype.loadUserDetails = function () {
        var _this = this;
        this.getUserSafe(function (err, user) {
            _this.user = user || _this.dataService.user;
            if (_this.user.email.length == 0 && !_this.dataService.showPopupSign && !_this.dataService.showPopupSign) {
                _this.router.navigate(['']);
            }
            if (_this.user.contest_stages) {
                _this.user.contest_stages[0].stage = 0;
                _this.user.contest_stages[0].onPisa = false;
                _this.user['contest_stages_map'] = _this.toStagesMap(_this.user.contest_stages);
            }
            else {
                return;
            }
            _this.dataService.getContest(_this.type).then(function (res) {
                _this.contest = res;
                if (_this.contest.stages) {
                    _this.stages = _this.contest.stages;
                    _this.stage = _this.stages[0];
                    // if (this.user['contest_stages_map'][this.type]['stage'] <= this.stages.length) {
                    //     this.stage = this.stages[this.user['contest_stages_map'][this.type]['stage']]
                    // }
                    // else {
                    //     this.showSent = true;
                    // }
                }
            }).catch(function (err) { return alert('error: ' + err); });
        });
    };
    QuestionFlowComponent.prototype.stageUp = function () {
        this.user.contest_stages[+this.type - 1].stage = parseInt(this.user.contest_stages[+this.type - 1].stage) + 1;
    };
    QuestionFlowComponent.prototype.scrollTop = function () {
        window.scrollTo(0, 450);
    };
    QuestionFlowComponent.prototype.question_answered = function (resp) {
        window.scrollTo(0, 450);
        var that = this;
        /*if (resp.isOnChallenge) { // pass anyway
            this.showSent = true;

                that.showSent = false;
                that.user['contest_stages_map'][this.type] = String(parseInt(that.user['contest_stages_map'][this.type])+1)
                that.stage = this.stages[this.user['contest_stages_map'][this.type]]
                that.user.contest_stages[+this.type-1].stage = String(parseInt(that.user.contest_stages[+this.type-1].stage) + 1)
        }*/
        switch (resp.continue) {
            case 'any':
                this.user['contest_stages_map'] = this.toStagesMap(resp.user.contest_stages);
                this.stage = this.stages[this.user['contest_stages_map'][this.type]['stage']];
                this.showCongrats = true;
                this.user.contest_stages = resp.user.contest_stages;
                break;
            case 'correct':
                switch (resp.result) {
                    case 'failed':
                        this.showFailed = true;
                        break;
                    case 'passed':
                        this.user = this.user || this.dataService.user;
                        this.user['contest_stages_map'] = this.toStagesMap(resp.user.contest_stages);
                        this.stage = this.stages[this.user['contest_stages_map'][this.type]['stage']];
                        this.showCongrats = true;
                        this.user.contest_stages = resp.user.contest_stages;
                        break;
                    case 'noResult':
                        this.showSent = true;
                        break;
                }
                break;
            case 'date':
                this.showSent = true;
                break;
            case 'correct-date':
                this.showSent = true;
                break;
        }
        // whenever admin has to approve question user is present with tshuvatcha page..
        // Otherwise he pass the stage 
        // Otherwise he waits and present the wait page.
        // switch (this.stage.question_type) {
    };
    QuestionFlowComponent.prototype.toStagesMap = function (objArr) {
        var mappingObject = {};
        objArr.map(function (obj) {
            var mapKey = '';
            var mapVal = {};
            for (var key in obj) {
                if (key === 'contest_index')
                    mapKey = obj[key];
                if (key === 'stage')
                    mapVal = { stage: String(obj[key] - 1) };
                if (key === 'onPisa')
                    mapVal['onPisa'] = obj[key];
            }
            mappingObject[mapKey] = mapVal;
        });
        return mappingObject;
    };
    QuestionFlowComponent.prototype.getUserSafe = function (cb) {
        var user = this.user || this.dataService.user;
        if (user.isEmpty() && this.dataService.getCookieObject('user')) {
            this.dataService
                .getUser(this.dataService.getCookieObject('user'))
                .then(function (u) {
                cb(null, u);
            })
                .catch(function (e) {
                // TODO handle error
                cb(e);
            });
        }
        else {
            cb(null, user);
        }
    };
    return QuestionFlowComponent;
}());
QuestionFlowComponent = __decorate([
    core_1.Component({
        selector: 'question-flow',
        template: __webpack_require__("../../../../../src/app/Components/question-flow/question-flow.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/question-flow/question-flow.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], QuestionFlowComponent);
exports.QuestionFlowComponent = QuestionFlowComponent;
var _a, _b, _c;
//# sourceMappingURL=question-flow.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/question-types/FileUploadQuestion/file-upload-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w-container {\n    padding-top: 4vh;\n}\n\n.w-container .w-row {\n    margin-right: -10vw;\n    padding-right: 0;\n}\n\n.disabled {\n    opacity: 0.5;\n    cursor: default;\n}\n\n.heading-2.dark.title {\n    line-height: 95px;\n}\n\n.upload-btn:before {\n    content: url('/images/upload-button.png')\n}\n\n.upload-btn {\n    color: #272d38;\n    font-family: \"'Almoni dl aaa', sans-serif\";\n    font-size: 32px;\n    font-weight: 400;\n    letter-spacing: 0.8px;\n    cursor: pointer;\n}\n\n.file-upload-form {\n    -ms-flex-item-align: baseline;\n        align-self: baseline;\n}\n\n.heading-2.dark.title {\n    margin-bottom: -30px !important;\n    margin-top: -74px !important;\n    margin-right: 58px !important;\n}\n\n.file-upload-form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    margin: 32px auto;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.file-upload-form .file-name {\n    color: #272d38;\n    font-family: \"'Almoni dl aaa', sans-serif\";\n    font-size: 30px;\n    font-weight: 400;\n    letter-spacing: 0.8px;\n    margin: 10px auto;\n}\n\n.file-upload-form input[disabled=true]+label .upload-btn {\n    opacity: 0.5;\n}\n\n.success-popup ::ng-deep .close-pop-up-button-container[_ngcontent-c25]:first-child {\n    -webkit-box-pack: unset;\n        -ms-flex-pack: unset;\n            justify-content: unset;\n}\n\n.success-popup ::ng-deep .pop-up {\n    max-width: 80vw;\n}\n\n@media (max-width: 479px) {\n    .file-upload-label {\n        margin-top: 50px;\n    }\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/question-types/FileUploadQuestion/file-upload-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w-container\">\n  <div class=\"mission-1st\">\n    <div class=\"title-row w-row\">\n      <div class=\"column-7 w-col w-col-1\"></div>\n      <div class=\"\">\n        <h1 class=\"heading-2 dark title\">\n          {{stage[dataService.getText(dataService.challengesData[dataService.type].stage.question)]}}\n        </h1>\n      </div>\n    </div>\n    <p class=\"paragraph light-copy\" style=\"white-space: pre-wrap;\">{{stage[dataService.getText(dataService.challengesData[dataService.type].stage.stage_details)]}}</p>\n    <div class=\"image-big\">\n      <img src=\"{{stage.image}}\" sizes=\"100vw\">\n    </div>\n\n    <form class=\"file-upload-form\">\n      <input [attr.disabled]=\"uploading ? true : null\" (change)=\"onFileChange($event)\" type=\"file\" hidden id=\"file_answer\" name=\"file_answer\">\n      <label class=\"file-upload-label\" for=\"file_answer\">\n          <span class=\"upload-btn\">\n              \n            {{ answers.name || dataService.getText('uploadFileButtonText') }}\n            </span>\n\n      </label>\n      <div class=\"file-name\" *ngIf=\"file && file.name\">{{file.name}}</div>\n      <div *ngIf=\"uploading\" class=\"lds-css ng-scope\">\n        <div style=\"width:100%;height:100%;\" class=\"lds-disk\">\n          <div>\n            <div></div>\n            <div></div>\n          </div>\n        </div>\n        <style type=\"text/css\">\n          .lds-css {\n            z-index: 9;\n            margin-top: -4px;\n            display: inline-flex;\n            line-height: 51px;\n            margin-right: 20px;\n          }\n          \n          @keyframes lds-disk {\n            0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n            }\n            100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n            }\n          }\n          \n          @-webkit-keyframes lds-disk {\n            0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n            }\n            100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n            }\n          }\n          \n          .lds-disk>div div:nth-child(1) {\n            position: absolute;\n            top: 30px;\n            left: 30px;\n            width: 140px;\n            height: 140px;\n            border-radius: 50%;\n            background: #272d38;\n          }\n          \n          .lds-disk>div div:nth-child(2) {\n            position: absolute;\n            top: 39.800000000000004px;\n            left: 79px;\n            width: 42px;\n            height: 42px;\n            border-radius: 50%;\n            background: #ffffff;\n            -webkit-animation: lds-disk 1s linear infinite;\n            animation: lds-disk 1s linear infinite;\n            -webkit-transform-origin: 21px 60.199999999999996px;\n            transform-origin: 21px 60.199999999999996px;\n          }\n          \n          .lds-disk {\n            width: 51px !important;\n            height: 51px !important;\n            -webkit-transform: translate(-25.5px, -25.5px) scale(0.255) translate(25.5px, 25.5px);\n            transform: translate(-25.5px, -25.5px) scale(0.255) translate(25.5px, 25.5px);\n            margin: 0 auto;\n            top: 350px;\n          }\n        </style>\n\n      </div>\n    </form>\n\n    <div class=\"butleft answer-but\" *ngIf=\"!hideSend\">\n      <a (click)=\"answered()\" class=\"blue-but w-button\" [ngClass]=\"{'disabled' : shouldDisable()}\">\n        {{dataService.getText(dataService.challengesData[dataService.type].stage.sendButton)}}\n      </a>\n    </div>\n  </div>\n</div>\n\n<pop-for-action class=\"success-popup\" *ngIf=\"dataService.showMessagePopup\" [textForPopup]=\"'קובץ הועלה בהצלחה!'\"></pop-for-action>"

/***/ }),

/***/ "../../../../../src/app/Components/question-types/FileUploadQuestion/file-upload-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var S3FileUpload_1 = __webpack_require__("../../../../../src/app/FileUpload/S3FileUpload.ts");
var FileUploadQuestionComponent = (function () {
    // file: any = {name:"lkjahsfasf"};
    function FileUploadQuestionComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.stage = {};
        this.hideSend = false;
        this.answer = new core_1.EventEmitter();
        this.answers = '';
        this.bucketName = 'pisa-answers';
        this.region = 'us-west-2';
        this.id = 'ed40a3cc-83bc-4a77-921a-f93dd7593e82';
        this.uploading = false;
        this.uploader = new S3FileUpload_1.default(this.region, this.id, this.bucketName);
    }
    FileUploadQuestionComponent.prototype.ngOnInit = function () {
        if (this.dataService.type)
            this.type = this.dataService.type;
    };
    FileUploadQuestionComponent.prototype.shouldDisable = function () {
        return this.answers == '';
    };
    FileUploadQuestionComponent.prototype.answered = function () {
        if (this.answers)
            this.answer.emit([this.answers]);
    };
    Object.defineProperty(FileUploadQuestionComponent.prototype, "getAnswers", {
        get: function () {
            return { stage: this.stage, answers: this.answers };
        },
        enumerable: true,
        configurable: true
    });
    FileUploadQuestionComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var files = event.srcElement.files;
        this.file = files[0];
        if (this.file) {
            this.uploading = true;
            this.uploader.UploadFileAsync(files[0], function (result) {
                _this.uploading = false;
                if (result.success) {
                    _this.answers = result.url;
                    _this.answer.emit([_this.answers]);
                    _this.dataService.showMessagePopup = true;
                }
                else {
                    console.log('upload failed', result);
                }
            });
        }
    };
    return FileUploadQuestionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FileUploadQuestionComponent.prototype, "stage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FileUploadQuestionComponent.prototype, "hideSend", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FileUploadQuestionComponent.prototype, "answer", void 0);
FileUploadQuestionComponent = __decorate([
    core_1.Component({
        selector: 'file-upload-question',
        template: __webpack_require__("../../../../../src/app/Components/question-types/FileUploadQuestion/file-upload-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/question-types/FileUploadQuestion/file-upload-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object])
], FileUploadQuestionComponent);
exports.FileUploadQuestionComponent = FileUploadQuestionComponent;
var _a, _b, _c;
//# sourceMappingURL=file-upload-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/question-types/MultiQuestion/multi-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choices {\n    margin: 35px 0 0 35px;\n    line-height: 42px;\n}\n.w-col:nth-child(1), .w-col:nth-child(3) {\n    /* margin-right: -70px !important; */\n    float: right;\n}\n.w-col:nth-child(1) .choices, .w-col:nth-child(3) .choices{\n    margin-left: 77px;\n    margin-right: -42px;\n}\n.w-col[_ngcontent-c18]:nth-child(1) .image-20, .w-col[_ngcontent-c18]:nth-child(3) .image-20 {\n    margin-left: -60px;\n}\n.w-container {\n    margin-top: 30px;\n}\n.image-20 {\n    left: 25px;\n    bottom: -15px;\n}\n.heading-2.dark.title {\n    line-height: 95px;\n}\n.disabled {\n    opacity: 0.5;\n    cursor: default;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/question-types/MultiQuestion/multi-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w-container\">\n  <div class=\"mission-multi\">\n    <div class=\"title-row w-row\">\n      <div class=\"column-7 w-col w-col-1\"></div>\n      <div class=\"\">\n        <h1 class=\"heading-2 dark title\">{{stage[dataService.getText(dataService.challengesData[dataService.type].stage.question)]}}</h1>\n      </div>\n    </div>\n    <div class=\"div-single-choice\">\n      <p class=\"paragraph light-1st\">{{stage[dataService.getText(dataService.challengesData[dataService.type].stage.stage_details)]}}</p>\n      <div class=\"row-but w-row\">\n        <div *ngFor=\"let option of options\" class=\"w-col w-col-6\">\n          <a class=\"groupfield choices w-button\" [ngClass]=\"{'choices-pressed': option.checked}\" (click)=\"option.checked = !option.checked\">{{option.text}}</a>\n          <img src=\"images/check.png\" width=\"54\" class=\"image-20\" *ngIf=\"option.checked\">\n        </div>\n      </div>\n    </div>\n    <div class=\"butleft answer-multi\" *ngIf=\"!hideSend\">\n      <a (click)=\"answered()\" class=\"blue-but w-button\" [ngClass]=\"{'disabled' : shouldDisable()}\">{{dataService.getText('sendButton')}}</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Components/question-types/MultiQuestion/multi-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var MultiQuestionComponent = (function () {
    function MultiQuestionComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.stage = {};
        this.hideSend = false;
        this.answer = new core_1.EventEmitter();
        this.options = [];
    }
    MultiQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.stage[this.dataService.getText(this.dataService.challengesData[this.dataService.type].multi.options)]) {
            this.stage[this.dataService.getText(this.dataService.challengesData[this.dataService.type].multi.options)].forEach(function (option, index) {
                if (!_this.options[index])
                    _this.options.push({ text: option, checked: false });
            });
        }
    };
    MultiQuestionComponent.prototype.shouldDisable = function () {
        return this.options.filter(function (option) { return option.checked == true; })[0] == undefined;
    };
    MultiQuestionComponent.prototype.answered = function () {
        var answers = [];
        this.options.forEach(function (option) {
            if (option.checked)
                answers.push(option.text);
        });
        if (answers)
            this.answer.emit(answers);
    };
    Object.defineProperty(MultiQuestionComponent.prototype, "getAnswers", {
        get: function () {
            var answers = [];
            this.options.forEach(function (option) {
                if (option.checked)
                    answers.push(option.text);
            });
            return { stage: this.stage, answers: answers };
        },
        enumerable: true,
        configurable: true
    });
    return MultiQuestionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MultiQuestionComponent.prototype, "stage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MultiQuestionComponent.prototype, "hideSend", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MultiQuestionComponent.prototype, "answer", void 0);
MultiQuestionComponent = __decorate([
    core_1.Component({
        selector: 'multi-question',
        template: __webpack_require__("../../../../../src/app/Components/question-types/MultiQuestion/multi-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/question-types/MultiQuestion/multi-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], MultiQuestionComponent);
exports.MultiQuestionComponent = MultiQuestionComponent;
var _a, _b;
//# sourceMappingURL=multi-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/question-types/PisaQuestion/pisa-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n.container-5p.w-container .image-18{\n\n    margin: -106px auto;\n}\n.paragraph-6p {\n    margin-top: 62px;\n    font-size: 28px;\n    height: 20%;\n}\n.button-5p.mq-answer.mq-editable-field.mq-math-mode{\n    width: 200px;\n    min-width: 200px;\n}\n.paragraph-7p,\n.pisa-checkbox .option,\n.pisa-radio .option{\n    display: block;\n    direction: rtl;\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #272f38;\n    font-size: 28px;\n    line-height: 31px;\n    text-align: right;\n}\n.button-5p{\n    height: 39px;\n    width: 100px;\n    border-radius: 10px !important;\n    background-color: #dfdbdc !important; \n    margin-right: 20px;\n    margin-top: 15px;\n    position: initial;\n}\n.groupfield.choices.w-button{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    width: 300px;\n    height: 58px;\n    margin-bottom: 10px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-style: none;\n    background-color: #f4e280;\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #fff;\n    font-size: 35px;\n    font-weight: 900;\n    text-align: center;\n    text-shadow: 1px 1px 0 rgba(0, 0, 0, .33);\n}\n.column-9p.w-hidden-tiny.w-col.w-col-6{\n    float: right;\n}\n.w-col-6 .button-4p.sharepp.sendp.bottomp{\n    top: 100px;\n    width: 230px;\n}\n.pisa-checkbox,\n.pisa-radio {\n    direction: rtl;\n    margin-top: 30px;\n    overflow: auto;\n}\n.pisa-checkbox .option .checkbox-image .checked {\n    margin-right: -1.8px;\n    margin-left: -2px;\n}\n.paragraph-7p {\n    margin-top: 20px;\n}\n#web3d .header-open-landscape{\n    display:none;\n}\n.pisa-single-question .numbers {\n    direction: rtl;\n    display: inline-block;\n    float: right;\n    padding-left: 10px;\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #272f38;\n    font-size: 28px;\n    padding-top: 4px;\n}\n@media (max-width: 479px) {\n    .pisa {\n        margin-top: 380px;\n    }\n    \n    .pisa-questions {\n        margin-top: -310px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/question-types/PisaQuestion/pisa-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"column-9p w-col w-col-6 pisa\">\n  <div class=\"container-5p w-container right-side-pisa\">\n    <h1 *ngIf=\"pisaQuestion\" class=\"heading-6p\">{{pisaQuestion.title}}</h1>\n    <p *ngIf=\"pisaQuestion\" class=\"paragraph-6p\" [innerHTML]=\"pisaQuestion.description | image\">\n    </p>\n    <div id=\"ggb-element\"></div> \n  </div>\n</div>\n<div class=\"row-8p w-row\">\n  <div class=\"column-10p w-clearfix w-col w-col-6 pisa-questions\">\n\n    <div *ngIf=\"pisaQuestion\" class=\"column-10 w-clearfix w-col w-col-6p\">\n      <h1 class=\"heading-8p\">{{dataService.getText(dataService.challengesData[dataService.type].titleAnswerPisa)}}</h1>\n      \n      <div class=\"pisa-single-question\" *ngFor=\"let ques of pisaQuestion.questions; let i = index\" [attr.data-id]=\"ques._id\" [class.text]=\"ques.type == 1\" [class.multi]=\"ques.type == 2\" [class.single]=\"ques.type == 3\">\n          <span class=\"numbers\">\n              {{i+1 + '.'}}\n          </span>\n        <!-- Input -->\n        <div *ngIf=\"ques.type == 1\" class=\"paragraph-7p\" [innerHTML]=\"ques.content | input\"></div>\n        <!-- Multi Select -->\n        <div *ngIf=\"ques.type == 2\" class=\"pisa-checkbox paragraph-7p\">\n          <div class=\"paragraph-7p\" [innerHTML]=\"ques.content\"></div>\n          <div *ngFor=\"let ans of ques.multi_options\" class=\"option\">\n            <span (click)=\"ans.checked = !ans.checked;addRemoveCheckboxAnswer($event,ans);\" class=\"checkbox-image\">\n              <img class=\"checked\" *ngIf=\"ans.checked\" src=\"/images/pisa-multi-check.svg\">\n              <img class=\"unchecked\" *ngIf=\"!ans.checked\" src=\"/images/pisa-multi-uncheck.svg\">\n            </span> <span [innerHTML]=\"ans.text\">\n\n              </span>\n          </div>\n        </div>\n        <!-- Single Select -->\n        <div *ngIf=\"ques.type == 3\" class=\"pisa-radio paragraph-7p\">\n          <div class=\"paragraph-7p\" [innerHTML]=\"ques.content\"></div>\n          <div *ngFor=\"let ans of ques.single_options\">\n            <span (click)=\"ques.selected = ans\">\n              <img *ngIf=\"ques.selected == ans\" src=\"/images/pisa-single-check.svg\">\n              <img *ngIf=\"ques.selected != ans\" src=\"/images/pisa-single-uncheck.svg\">\n            </span>\n            <span [innerHTML]=\"ans.text\">\n\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"column-9p w-col w-col-6\">\n      <div class=\"row-9p w-row\">\n        <div class=\"column-11p w-clearfix w-col w-col-6\">\n          <a (click)=\"answered()\" class=\"button-4p sharepp sendp bottomp w-button\">{{dataService.getText('sendButton')}}</a>\n        </div>\n        <div class=\"w-col w-col-6\">\n          <!-- <span #mathAnswer>x= </span> -->\n          <!-- <span #mathAnswers>x=1 </span>\n            <span #mathAnswers>x=3 </span> -->\n            <!-- <span #mathAnswers>x=2 </span> -->\n          \n          <!-- <span class=\"mathAnswer\">x= </span> -->\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/question-types/PisaQuestion/pisa-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var PisaQuestionComponent = (function () {
    function PisaQuestionComponent(dataService, route, router, zone) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.zone = zone;
        this.stage = {};
        this.answer = new core_1.EventEmitter();
        this.answers = {};
        this.mathSolutions = [];
    }
    PisaQuestionComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.params['type']) {
            this.dataService.type = this.route.snapshot.params['type'];
            this.type = this.dataService.type;
        }
        var that = this;
        this.getQuestion()
            .then(function (res) {
            that.renderQuestions(res);
        })
            .catch(function (err) { return console.log(err); });
    };
    PisaQuestionComponent.prototype.getQuestion = function () {
        // Example for soccer pisa question..
        // First - contest > category > id
        // Second - contest > stage > pisas ([]) > level..
        return this.dataService
            .getPisaQuestion(this.dataService.contest['category']['_id'], 'medium');
    };
    /**
     * Draws the questions inside the Pisa
     * Question according to their type
     * @param question PisaQuestion
     */
    PisaQuestionComponent.prototype.renderQuestions = function (question) {
        var _this = this;
        if (question._body) {
            question = question._body;
        }
        this.pisaQuestion = question;
        this.dataService.sendGoogleTagVirtualPage(this.stage.index + 1, this.stage.stage_details, question.title);
        this.pisaQuestion.questions.forEach(function (question) {
            // multi-choice question
            if (question.type == 2) {
                question.options.forEach(function (option) {
                    if (!question.multi_options)
                        question.multi_options = [];
                    question.multi_options.push({ text: option, checked: false });
                });
            }
            else if (question.type == 3) {
                question.options.forEach(function (option) {
                    if (!question.single_options)
                        question.single_options = [];
                    question.single_options.push({ text: option, checked: false });
                });
            }
            _this.answers[question._id] = [];
        });
        this.initMath();
        $("body").onkeyup = function (e) {
            var kCd = e.keyCode || e.which;
            if (kCd == 0 || kCd == 229) {
                kCd = this.getKeyCode(this.value);
            }
            alert(kCd);
        };
    };
    PisaQuestionComponent.prototype.getKeyCode = function (str) {
        return str.charCodeAt(str.length - 1);
    };
    /**
   * Initialize MathQuill on all input fields ({{input}} - see PipeFindInput)
   */
    PisaQuestionComponent.prototype.initMath = function () {
        var that = this;
        setTimeout(function () {
            var spanTags = $('.mq-answer');
            var _loop_1 = function () {
                var self = $(spanTags.get(i));
                self.on('change', function (e) {
                    // this is the question element
                    var parent = self.closest('.pisa-single-question');
                    // each question element has a data-id
                    // attr which representes the question _id
                    var questionId = parent.attr('data-id');
                    // since a free text question can have 
                    // multiple inputs we need to keep track 
                    // of the input's location within the question
                    // so we get the input element index inside 
                    // the parent.
                    var inputIndex = self.index();
                    var enteredValue = self.val();
                    // assign the user's input to the general 
                    // answers dictionary under the question
                    // id and in the input's index
                    var count = 0;
                    var stop = false;
                    $('.pisa-single-question.text').each(function () {
                        if (!stop && $(this).attr('data-id') != questionId) {
                            count += $('.mq-answer', this).length;
                        }
                        else {
                            stop = true;
                        }
                    });
                    self.removeClass('failed');
                    that.answers[questionId][i - count] = [enteredValue];
                });
            };
            for (var i = 0; i < spanTags.length; i++) {
                _loop_1();
            }
            // for (let i = 0; i < spanTags.length; ++i) {
            //     let MQ = MathQuill.getInterface(2);
            //     // this is the question element
            //     let parent = $(spanTags.get(i)).closest('.pisa-single-question');
            //     // each question element has a data-id
            //     // attr which representes the question _id
            //     let questionId = parent.attr('data-id');
            //     // since a free text question can have 
            //     // multiple inputs we need to keep track 
            //     // of the input's location within the question
            //     // so we get the input element index inside 
            //     // the parent.
            //     let inputIndex = $(spanTags.get(i)).index();
            //     let solution = MQ.MathField(spanTags.get(i), {
            //         handlers: {
            //             edit: function () {
            //                 // get the latex value.
            //                 // the correct_answers array will
            //                 // contain latex expressions to match with
            //                 // the user's input
            //                 let enteredValue = solution.latex();
            //                 // assign the user's input to the general 
            //                 // answers dictionary under the question
            //                 // id and in the input's index
            //                 let count = 0;
            //                 let stop = false
            //                 $('.pisa-single-question.text').each(function () {
            //                     if (!stop && $(this).attr('data-id') != questionId) {
            //                         count += $('.mq-answer', this).length;
            //                     } else {
            //                         stop = true;
            //                     }
            //                 });
            //                 $(spanTags.get(i)).removeClass('failed');
            //                 that.answers[questionId][i - count] = [enteredValue];
            //                 // console.log(that.answers);
            //             }
            //         },
            //         // copied from docs, might not 
            //         // be relevant
            //         substituteTextarea: function () {
            //             let a = document.createElement('input');
            //             a.className = 'kkkkk';
            //             a.onkeyup = function (e: any) {
            //                 let self: any = this;
            //                 var kCd = e.keyCode || e.which;
            //                 if (kCd == 0 || kCd == 229) { //for android chrome keycode fix
            //                     kCd = self.value.charCodeAt(0);
            //                 }
            //                 e.keyCode = kCd;
            //             }
            //             a.type = "text";
            //             return a;
            //         },
            //     });
            //     $('.mq-textarea input').keyup(function (e: any) {
            //         let self: any = this;
            //         var kCd = e.keyCode || e.which;
            //         if (kCd == 0 || kCd == 229) { //for android chrome keycode fix
            //             kCd = self.value.charCodeAt(0);
            //         }
            //         // e.keyCode = kCd;
            //         let val = String.fromCharCode(kCd);
            //         if (kCd === 8) {
            //             let chars = solution.el().value.split('');
            //             chars.pop();
            //             val = chars.join('');
            //         }
            //         solution.typedText(val);
            //         return kCd;
            //     })
            // }
        }, 20);
    };
    PisaQuestionComponent.prototype.answered = function () {
        var _this = this;
        var that = this;
        if (this.dataService.currentLanguage.type == 'he') {
            that.dataService.alertMessage = "נראה שפספסת שאלה או שתיים...";
            that.dataService.alertSubMessage = "לפעמים לא קל במדרגות בדרך למטוס, אבל זה משתלם!";
        }
        else {
            that.dataService.alertMessage = "يبدو أنك فاتتك سؤالا أو سؤالين ...";
            that.dataService.alertSubMessage = "في بعض الأحيان الدرج ليست سهلة على الطريق إلى الطائرة، لكنه يدفع!";
        }
        this.pisaQuestion.questions.forEach(function (question) {
            if (question.type == 1) {
                if (that.answers[question._id].length == 0) {
                    that.dataService.genericPopUpIsSuccess = false;
                    that.dataService.showGenericPopup = true;
                    return;
                }
                that.answers[question._id].forEach(function (pisaAnswerArr) {
                    if (pisaAnswerArr) {
                        pisaAnswerArr.forEach(function (pisaAnswer) {
                            if (pisaAnswer.length == 0) {
                                that.dataService.genericPopUpIsSuccess = false;
                                that.dataService.showGenericPopup = true;
                                return;
                            }
                        });
                    }
                });
            }
            if (question.type == 2) {
                var isCheckSomthing = false;
                question.multi_options.forEach(function (multiAnswer) {
                    if (multiAnswer.checked) {
                        isCheckSomthing = true;
                    }
                });
                if (!isCheckSomthing) {
                    that.dataService.genericPopUpIsSuccess = false;
                    that.dataService.showGenericPopup = true;
                    return;
                }
            }
            if (question.type == 3) {
                if (!question.selected) {
                    that.dataService.genericPopUpIsSuccess = false;
                    that.dataService.showGenericPopup = true;
                    return;
                }
            }
        });
        if (that.dataService.showGenericPopup) {
            return;
        }
        for (var i = 0; i < this.answers.length; i++) {
            if (this.answers[i].length == 0) {
            }
        }
        this.answers.user = this.dataService.user;
        this.answers.contest = this.dataService.contest;
        this.dataService
            .checkPisaQuestion(this.pisaQuestion._id, this.answers)
            .then(function (results) {
            var failed = results.failed;
            console.log('failed', failed);
            if (_this.checkFailure(failed) /*&& !this.showSent*/) {
                that.dataService.genericPopUpIsSuccess = false;
                that.dataService.alertMessage = "אחת או יותר מהתשובות שהזנת לא נכונה";
                that.dataService.alertSubMessage = "אנא נסה/י שנית";
                that.dataService.showGenericPopup = true;
                var _loop_2 = function () {
                    failedIndexes = failed[_id];
                    var questionContext = $("[data-id=" + _id + "]");
                    var innerQuestion = _this.pisaQuestion.questions.find(function (q) {
                        return q._id == _id;
                    });
                    if (innerQuestion.type == '1') {
                        var count_1 = 0;
                        var stop_1 = false;
                        $('.pisa-single-question.text').each(function () {
                            if (!stop_1 && $(this).attr('data-id') != innerQuestion._id) {
                                count_1 += $('.mq-answer', this).length;
                            }
                            else {
                                stop_1 = true;
                            }
                        });
                        failedIndexes.forEach(function (index) {
                            $('.mq-answer').eq(index + count_1).addClass('failed');
                        });
                    }
                    else {
                        failedIndexes.forEach(function (index) {
                            questionContext.addClass('failed');
                        });
                    }
                };
                var failedIndexes;
                for (var _id in failed) {
                    _loop_2();
                }
            }
            else {
                /* if (this.showSent) {
                     results.isOnChallenge = true
                     this.answer.emit(results)
                 }
                 else {*/
                //yaron: add googletag
                _this.dataService.sendAnalyticsEvent(_this.dataService.getChallengeName(), _this.pisaQuestion.title, 'סיום משימה', 'auto_event');
                _this.answer.emit(results);
                // }
            }
        })
            .catch(function (err) {
            console.log(err);
        });
        console.log(this.answers);
        this.answer.emit(this.answers);
    };
    PisaQuestionComponent.prototype.checkFailure = function (failedQuestions) {
        if (failedQuestions && Object.keys(failedQuestions).length) {
            var all = [];
            for (var id in failedQuestions) {
                if (failedQuestions.hasOwnProperty(id)) {
                    var element = failedQuestions[id];
                    all = all.concat(element);
                }
            }
            return all.length > 0;
        }
        return false;
    };
    PisaQuestionComponent.prototype.addRemoveCheckboxAnswer = function (event, answer) {
        var target = event.target || event.srcElement || event.currentTarget;
        // this is the question element
        var parent = $(target).closest('.pisa-single-question');
        $(parent).removeClass('failed');
        $(target).removeClass('failed');
        // each question element has a data-id
        // attr which representes the question _id
        var questionId = parent.attr('data-id');
        var checkboxIndex = $(target).attr('index');
        var isMulti = $(parent).hasClass('multi');
        var remove = !answer.checked;
        // remove from array
        if (remove) {
            this.answers[questionId].splice([checkboxIndex], 1);
        }
        else {
            var value = answer.text;
            // if multi simply push,
            // for single - replace
            if (isMulti) {
                this.answers[questionId].push(value);
            }
            else {
                this.answers[questionId] = [value];
            }
        }
    };
    return PisaQuestionComponent;
}());
__decorate([
    core_1.ViewChildren(".mathAnswers"),
    __metadata("design:type", typeof (_a = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _a || Object)
], PisaQuestionComponent.prototype, "mathAnswers", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PisaQuestionComponent.prototype, "stage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PisaQuestionComponent.prototype, "answer", void 0);
PisaQuestionComponent = __decorate([
    core_1.Component({
        selector: 'pisa-question',
        template: __webpack_require__("../../../../../src/app/Components/question-types/PisaQuestion/pisa-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/question-types/PisaQuestion/pisa-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _d || Object, typeof (_e = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _e || Object])
], PisaQuestionComponent);
exports.PisaQuestionComponent = PisaQuestionComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=pisa-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/question-types/QuestionWithCards/question-with-cards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".memphis2,\n.memphis1,\n.memphis3,\n.memphis4,\n.memphis5,\n.memphis6 {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n\n.w-container {\n    margin-top: 30px;\n}\n\n.cards-title {\n    font-size: 80px !important;\n    line-height: 80px !important;\n}\n\n.square-but-column {\n    cursor: pointer;\n    margin-bottom: 50px;\n    float: right;\n}\n\n.disabled {\n    opacity: 0.5;\n    cursor: default;\n}\n\n.done {\n    margin-top: -52px;\n    margin-left: 137px;\n    position: absolute;\n}\n\nh1.mission-title {\n    text-align: center;\n    padding: 0;\n}\n\n.pisa-cards-container .square-but-column[_ngcontent-c21] {\n    float: right;\n}\n\n@media screen and (max-width: 479px) {\n    .cards-title {\n        font-size: 40px !important;\n        line-height: 40px !important;\n        margin-right: -31px;\n    }\n    .video-questions-container-social {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: reverse;\n            -ms-flex-direction: column-reverse;\n                flex-direction: column-reverse;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/question-types/QuestionWithCards/question-with-cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w-container\">\n  <div class=\"mission-1st\">\n    <div class=\"title-row w-row\">\n      <div class=\"column-7 w-col w-col-1\"></div>\n      <div class=\"column-8 w-clearfix w-col w-col-11\">\n        <h1 class=\"heading-6\">{{stage.pass_level_score + \"\"}}/{{earnedPoints + \"\"}} {{dataService.getText('pointsAbbreviation')}}</h1>\n        <h1 class=\"heading-2 dark comp cards-title\">{{stage[dataService.getText(dataService.challengesData[dataService.type].stage.stage_details)]}}</h1>\n      </div>\n    </div>\n    <p class=\"paragraph par-align-to-right\">{{dataService.getText('cardsTextSocial')}}</p>\n\n    <div class=\"video-questions-container-social\">\n      <h1 class=\"mission-title\">{{dataService.getText('social')}}</h1>\n      <div class=\"square-but-column w-col w-col-4\" *ngFor=\"let video of stage.video_question; let i=index\" (click)=\"cardClick(1,i)\">\n        <div [ngClass]=\"{'memphis2': i%3==0, 'memphis3': i%3==1, 'memphis1': i%3==2}\">\n          <h1 class=\"square-but-title\">{{video[dataService.getText('videoQuestionText')]}}\n            <br>\n            <span class=\"text-span-3\">{{dataService.getText('socialSecondCardPoints')}}</span>\n          </h1>\n        </div>\n        <div class=\"card-back\">\n          <h1 class=\"square-but-title-crad-back\">\n            <br>\n            <span class=\"text-span-5\">{{video[dataService.getText('videoQuestionText')]}}\n                  <span xmlns=\"http://www.w3.org/1999/xhtml\">\n                    <span></span>\n            </span>\n            </span>\n          </h1>\n          <h1 class=\"square-but-title-crad-back\">{{dataService.getText('socialSecondCardPoints')}}</h1>\n        </div>\n        <div *ngIf=\"answeredIndexes && answeredIndexes[1][i]\" class=\"done\"><img src=\"/images/approve.png\" /></div>\n      </div>\n    </div>\n    <h1 class=\"mission-title\">{{dataService.getText('socialFirstCardBackTitle')}}</h1>\n    <div class=\"pisa-cards-container\">\n      <div class=\"square-but-column w-col w-col-4\" *ngFor=\"let pisa of stage.pisa_questions_difficulty; let i=index\" (click)=\"cardClick(0,i)\">\n        <div [ngClass]=\"{'memphis1': i%3==0, 'memphis2': i%3==1, 'memphis3': i%3==2}\">\n          <h1 class=\"square-but-title\">{{dataService.getText('socialFirstCardTitle')}}\n            <br>\n            <span class=\"text-span-3\">{{dataService.getText('socialFirstCardPoints')}}</span>\n          </h1>\n        </div>\n        <div class=\"card-back\">\n          <h1 class=\"square-but-title-crad-back\">\n            <br>\n            <span class=\"text-span-5\">{{dataService.getText('socialFirstCardBackTitle')}}\n                  <span xmlns=\"http://www.w3.org/1999/xhtml\">\n                    <span></span>\n            </span>\n            </span>\n          </h1>\n          <h1 class=\"square-but-title-crad-back\">{{dataService.getText('socialFirstCardPoints')}}</h1>\n        </div>\n        <div *ngIf=\"answeredIndexes && answeredIndexes[0][i]\" class=\"done\"><img src=\"/images/approve.png\" /></div>\n      </div>\n    </div>\n    <div class=\"butleft answer-but\">\n      <a [ngClass]=\"{'disabled' : earnedPoints<stage.pass_level_score}\" (click)=\"clickNext()\" class=\"blue-but w-button\">\n        {{dataService.getText('cardsButton')}}\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/question-types/QuestionWithCards/question-with-cards.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var myGlobals = __webpack_require__("../../../../../src/app/globals.ts");
var QuestionWithCardsComponent = (function () {
    function QuestionWithCardsComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.earnedPoints = 0;
        this.answer = new core_1.EventEmitter();
        this.updateChoosenCardIndex = new core_1.EventEmitter();
        this.showCard = new core_1.EventEmitter();
    }
    QuestionWithCardsComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.params['type']) {
            // this.dataService.getchallengesDataByIndex(this.route.snapshot.params['type'])
            // .then(challengesData => {
            this.globals = myGlobals;
            this.type = this.route.snapshot.params['type'];
            this.dataService.type = this.type;
            this.challengesData = this.dataService.challengesData[this.dataService.type];
        }
        // if (!myGlobals.isDesktop) {
        //     if (this.stage.video_question[0] && this.stage.video_question[0].question_text.includes('3')) {
        //         this.stage.video_question = this.stage.video_question.slice().reverse()
        //     }
        // }
    };
    QuestionWithCardsComponent.prototype.clickNext = function () {
        if (this.earnedPoints < this.stage.pass_level_score) {
            this.dataService.alertMessage = "";
            var notEnoughText = void 0;
            if (this.dataService.currentLanguage.type == 'he') {
                notEnoughText = "נראה שעוד לא צברת " + this.stage.pass_level_score + ' נקודות. יאללה קטן עליך!';
            }
            else {
                notEnoughText = 'بعدك ما جمعت ' + this.stage.pass_level_score + ' نقطة؟ يلا، بتقدر!';
            }
            this.dataService.alertSubMessage = notEnoughText;
            this.dataService.genericPopUpIsSuccess = false;
            this.dataService.showGenericPopup = true;
        }
        else {
            this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), this.stage.stage_details, 'סיום משימה', 'auto_event');
            this.answer.emit('showFinish'); // remove after crazyness
        }
    };
    QuestionWithCardsComponent.prototype.choosedCard = function (section, index) {
        this.updateChoosenCardIndex.emit({ section: section, index: index });
    };
    QuestionWithCardsComponent.prototype.cardClick = function (section, index) {
        this.choosedCard(section, index);
        if (this.answeredIndexes[section][index]) {
            if (section == 0) {
                return;
            }
        }
        if (section == 0) {
            this.showCard.emit('pisa');
            this.choosedCard(section, index);
        }
        else if (section == 1) {
            this.showCard.emit('video');
            this.choosedCard(section, index);
        }
    };
    return QuestionWithCardsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], QuestionWithCardsComponent.prototype, "earnedPoints", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], QuestionWithCardsComponent.prototype, "stage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], QuestionWithCardsComponent.prototype, "answeredIndexes", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], QuestionWithCardsComponent.prototype, "answer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], QuestionWithCardsComponent.prototype, "updateChoosenCardIndex", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], QuestionWithCardsComponent.prototype, "showCard", void 0);
QuestionWithCardsComponent = __decorate([
    core_1.Component({
        selector: 'question-with-cards',
        template: __webpack_require__("../../../../../src/app/Components/question-types/QuestionWithCards/question-with-cards.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/question-types/QuestionWithCards/question-with-cards.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], QuestionWithCardsComponent);
exports.QuestionWithCardsComponent = QuestionWithCardsComponent;
var _a, _b;
//# sourceMappingURL=question-with-cards.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/question-types/QuestionWithText/question-with-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w-container {\n    padding-top: 4vh;\n}\n\n\n.w-container .w-row {\n    margin-right: -10vw;\n    padding-right: 0;\n}\n\n\n.disabled {\n    opacity: 0.5;\n    cursor: default;\n}\n\n\n.heading-2.dark.title {\n    line-height: 95px;\n}\n\n\n.heading-2.dark.title {\n    margin-bottom: -30px !important;\n    margin-top: -69px !important;\n    margin-right: 58px !important;\n}\n\n\n.pisa-single-question .numbers {\n    direction: rtl;\n    display: inline-block;\n    float: right;\n    padding-left: 10px;\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #272f38;\n    font-size: 28px;\n    padding-top: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/question-types/QuestionWithText/question-with-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w-container\">\n  <div class=\"mission-1st\">\n    <div class=\"title-row w-row\">\n      <div class=\"column-7 w-col w-col-1\"></div>\n      <div class=\"\">\n        <h1 class=\"heading-2 dark title\">{{stage[dataService.getText(dataService.challengesData[dataService.type].stage.question)]}}</h1>\n      </div>\n    </div>\n    <p class=\"paragraph light-copy\" style=\"white-space: pre-wrap;\">{{stage[dataService.getText(dataService.challengesData[dataService.type].stage.stage_details)]}}</p>\n    <div class=\"image-big\">\n      <img src=\"{{stage.image}}\" sizes=\"100vw\">\n    </div>\n    <textarea [(ngModel)]=\"answers\" type=\"text\" class=\"groupfield answer w-input\" maxlength=\"256\" placeholder=\"{{dataService.getText('textArea')}}\"\n      required=\"\">\n    </textarea>\n    <div class=\"butleft answer-but\" *ngIf=\"!hideSend\">\n      <a (click)=\"answered()\" class=\"blue-but w-button\" [ngClass]=\"{'disabled' : shouldDisable()}\">{{dataService.getText(dataService.challengesData[dataService.type].stage.sendButton)}}</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/question-types/QuestionWithText/question-with-text.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var QuestionWithTextComponent = (function () {
    function QuestionWithTextComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.stage = {};
        this.hideSend = false;
        this.answer = new core_1.EventEmitter();
        this.answers = '';
    }
    QuestionWithTextComponent.prototype.ngOnInit = function () {
        if (this.dataService.type)
            this.type = this.dataService.type;
    };
    QuestionWithTextComponent.prototype.shouldDisable = function () {
        return this.answers == '';
    };
    QuestionWithTextComponent.prototype.answered = function () {
        if (this.answers) {
            this.answer.emit([this.answers]);
            this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), this.stage[this.dataService.getText(this.dataService.challengesData[this.dataService.type].stage.question)], 'סיום משימה', 'auto_event');
        }
    };
    Object.defineProperty(QuestionWithTextComponent.prototype, "getAnswers", {
        get: function () {
            return { stage: this.stage, answers: this.answers };
        },
        enumerable: true,
        configurable: true
    });
    return QuestionWithTextComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], QuestionWithTextComponent.prototype, "stage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], QuestionWithTextComponent.prototype, "hideSend", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], QuestionWithTextComponent.prototype, "answer", void 0);
QuestionWithTextComponent = __decorate([
    core_1.Component({
        selector: 'question-with-text',
        template: __webpack_require__("../../../../../src/app/Components/question-types/QuestionWithText/question-with-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/question-types/QuestionWithText/question-with-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _c || Object])
], QuestionWithTextComponent);
exports.QuestionWithTextComponent = QuestionWithTextComponent;
var _a, _b, _c;
//# sourceMappingURL=question-with-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/question-types/SingleQuestion/single-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choices {\n    margin: 35px 0 0 35px;\n    line-height: 42px;\n}\n.w-col:nth-child(1), .w-col:nth-child(3) {\n    /* margin-right: -70px !important; */\n    float: right;\n}\n.w-col:nth-child(1) .choices, .w-col:nth-child(3) .choices{\n    margin-left: 77px;\n    margin-right: -42px;\n}\n.w-container {\n    margin-top: 30px;\n}\n.disabled {\n    opacity: 0.5;\n    cursor: default;\n}\n.heading-2.dark.title {\n    line-height: 95px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/question-types/SingleQuestion/single-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w-container\">\n  <div class=\"mission-1st\">\n    <div class=\"title-row w-row\">\n      <div class=\"column-7 w-col w-col-1\"></div>\n      <div class=\"column-title w-col w-col-11\">\n        <h1 class=\"heading-2 dark title\">{{stage[dataService.getText(dataService.challengesData[dataService.type].stage.question)]}}</h1>\n      </div>\n    </div>\n    <div class=\"div-single-choice\">\n      <p class=\"paragraph light-1st\">{{stage[dataService.getText(dataService.challengesData[dataService.type].stage.stage_details)]}}</p>\n      <div class=\"row-but w-row\">\n        <div *ngFor=\"let answer of stage[dataService.getText(dataService.challengesData[dataService.type].single.options_single)]\" class=\"w-col w-col-6\">\n          <a (click)=\"selected = answer\" class=\"groupfield choices w-button\" [ngClass]=\"{'choices-pressed': selected == answer}\">{{answer}}</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"butleft answer-multi\" *ngIf=\"!hideSend\">\n      <a (click)=\"answered()\" class=\"blue-but w-button\" [ngClass]=\"{'disabled' : shouldDisable()}\">{{dataService.getText('sendButton')}}</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Components/question-types/SingleQuestion/single-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var SingleQuestionComponent = (function () {
    function SingleQuestionComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.stage = {};
        this.hideSend = false;
        this.answer = new core_1.EventEmitter();
        this.options = [];
    }
    SingleQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.stage[this.dataService.getText(this.dataService.challengesData[this.dataService.type].multi.options)]) {
            this.stage[this.dataService.getText(this.dataService.challengesData[this.dataService.type].multi.options)].forEach(function (option, index) {
                if (!_this.options[index])
                    _this.options.push({ text: option, checked: false });
            });
        }
    };
    SingleQuestionComponent.prototype.shouldDisable = function () {
        return this.selected == undefined;
    };
    SingleQuestionComponent.prototype.answered = function () {
        if (this.selected) {
            this.answer.emit([this.selected]);
            this.dataService.sendAnalyticsEvent(this.dataService.getChallengeName(), this.stage[this.dataService.getText(this.dataService.challengesData[this.dataService.type].stage.question)], 'סיום משימה', 'auto_event');
        }
    };
    Object.defineProperty(SingleQuestionComponent.prototype, "getAnswers", {
        get: function () {
            return { stage: this.stage, answers: this.selected };
        },
        enumerable: true,
        configurable: true
    });
    return SingleQuestionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SingleQuestionComponent.prototype, "stage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SingleQuestionComponent.prototype, "hideSend", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SingleQuestionComponent.prototype, "answer", void 0);
SingleQuestionComponent = __decorate([
    core_1.Component({
        selector: 'single-question',
        template: __webpack_require__("../../../../../src/app/Components/question-types/SingleQuestion/single-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/question-types/SingleQuestion/single-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], SingleQuestionComponent);
exports.SingleQuestionComponent = SingleQuestionComponent;
var _a, _b;
//# sourceMappingURL=single-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/question-types/StandalonePisaQuestion/standalone-pisa-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container-5p.w-container .image-18{\n\n    margin: -106px auto;\n}\n.paragraph-6p {\n    margin-top: 62px;\n    font-size: 28px;\n    height: 100%;\n}\n.button-5p.mq-answer.mq-editable-field.failed .mq-root-block{\n    position: relative;\n}\n.button-5p.mq-answer.mq-editable-field.failed .mq-root-block:before {\n    content: \"\\274C\";\n    position: absolute;\n    left: 0;\n    line-height: 42px;\n    color: red;\n}\n.pisa-single-question .failed, .pisa-single-question.failed{\n\n    border: 1px solid red;\n}\n.paragraph-7p,\n.pisa-checkbox .option,\n.pisa-radio .option{\n    display: block;\n    direction: rtl;\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #272f38;\n    font-size: 28px;\n    line-height: 31px;\n    text-align: right;\n}\n.button-5p{\n    height: 39px;\n    width: 100px;\n    border-radius: 10px !important;\n    background-color: #dfdbdc !important; \n    margin-right: 20px;\n    margin-top: 15px;\n    position: initial;\n}\n.groupfield.choices.w-button{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    width: 300px;\n    height: 58px;\n    margin-bottom: 10px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-style: none;\n    background-color: #f4e280;\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #fff;\n    font-size: 35px;\n    font-weight: 900;\n    text-align: center;\n    text-shadow: 1px 1px 0 rgba(0, 0, 0, .33);\n}\n.column-9p.w-hidden-tiny.w-col.w-col-6{\n    float: right;\n}\n.w-col-6 .button-4p.sharepp.sendp.bottomp{\n    top: 100px;\n    width: 230px;\n}\n.container-5p{\n}\n.pisa-checkbox,\n.pisa-radio {\n    direction: rtl;\n    margin-top: 30px;\n}\n.pisa-checkbox .option .checkbox-image .checked {\n    margin-right: -1.8px;\n    margin-left: -2px;\n}\n.paragraph-7p {\n    margin-top: 20px;\n}\n.pisa-single-question .numbers {\n    direction: rtl;\n    display: inline-block;\n    float: right;\n    padding-left: 10px;\n    font-family: 'Almoni dl aaa', sans-serif;\n    color: #272f38;\n    font-size: 28px;\n    padding-top: 4px;\n}\n::ng-deep .mq-answer{\n  border:1px solid gray !important;\n  border-radius: 4px !important;\n}\n.container-5p.w-container.right-side-pisa{\n    margin-top: 0;\n}\n@media screen and (max-width:480px){\n    \n\n    .butleft.answer-but.backbutton.ng-star-inserted.pisa-send{\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/question-types/StandalonePisaQuestion/standalone-pisa-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"column-9p w-col w-col-6 pisa\">\n  <div class=\"container-5p w-container right-side-pisa\">\n    <h1 *ngIf=\"pisaQuestion\" class=\"heading-6p\">{{pisaQuestion.title}}</h1>\n    <p *ngIf=\"pisaQuestion\" class=\"paragraph-6p\" [innerHTML]=\"pisaQuestion.description | image \"></p>\n\n  </div>\n</div>\n<div class=\"row-8p w-row\">\n  <div class=\"column-10p w-clearfix w-col w-col-6  pisa-questions\">\n\n    <div *ngIf=\"pisaQuestion\" class=\"column-10 w-clearfix w-col w-col-6p\">\n      <h1 class=\"heading-8p\">{{dataService.getText('titleAnswerPisa')}}</h1>\n      <div [class.text]=\"ques.type == 1\" [class.multi]=\"ques.type == 2\" [class.single]=\"ques.type == 3\" class=\"pisa-single-question\"\n        *ngFor=\"let ques of pisaQuestion.questions; let i = index\" [attr.data-id]=\"ques._id\">\n\n        <!--<div>\n          {{ques | json}}\n        </div>-->\n\n        <!-- Input -->\n        <span class=\"numbers\">\n            {{i+1 + '.'}}\n        </span>\n        <div style=\"unicode-bidi: isolate-override;\" *ngIf=\"ques.type == 1\" class=\"paragraph-7p\" [innerHTML]=\"ques.content  | input \"></div>\n        <!-- Multi Select -->\n        <div *ngIf=\"ques.type == 2\" class=\"pisa-checkbox paragraph-7p\">\n          <div style=\"unicode-bidi: isolate-override;\" class=\"paragraph-7p\" [innerHTML]=\"ques.content \"></div>\n          <div *ngFor=\"let ans of ques.multi_options; let i = index;\" class=\"option\">\n            <span [attr.index]=\"i\" (click)=\"ans.checked = !ans.checked;addRemoveCheckboxAnswer($event,ans);\" class=\"checkbox-image\">\n              <img class=\"checked\" *ngIf=\"ans.checked\" src=\"/images/pisa-multi-check.svg\">\n              <img class=\"unchecked\" *ngIf=\"!ans.checked\" src=\"/images/pisa-multi-uncheck.svg\">\n            </span><span [innerHTML]=\"ans.text\"> </span>\n          </div>\n        </div>\n        <!-- Single Select -->\n        <div *ngIf=\"ques.type == 3\" class=\"pisa-radio paragraph-7p\">\n          <div style=\"unicode-bidi: isolate-override;\" class=\"paragraph-7p\" [innerHTML]=\"ques.content \"></div>\n          <div *ngFor=\"let ans of ques.single_options\">\n            <span (click)=\"ques.selected = ans\">\n              <img *ngIf=\"ques.selected == ans\" src=\"/images/pisa-single-check.svg\">\n              <img *ngIf=\"ques.selected != ans\" src=\"/images/pisa-single-uncheck.svg\">\n            </span> <span [innerHTML]=\"ans.text\">\n\n              </span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"column-9p w-col w-col-6\">\n      <div class=\"row-9p w-row\">\n        <!--<div class=\"column-11p w-clearfix w-col w-col-6\">/]-->\n        <div class=\"butleft answer-but backbutton ng-star-inserted pisa-send\">\n          <!--<a (click)=\"questionAnswered()\" class=\"button-4p sharepp sendp bottomp w-button\">{{dataService.getText('sendButton')}}</a>-->\n          <a (click)=\"questionAnswered()\" class=\"blue-but w-button\">{{dataService.getText('sendButton')}}</a>\n        </div>\n        <div class=\"w-col w-col-6\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/question-types/StandalonePisaQuestion/standalone-pisa-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var pisa_question_component_1 = __webpack_require__("../../../../../src/app/Components/question-types/PisaQuestion/pisa-question.component.ts");
var StandalonePisaQuestionComponent = (function (_super) {
    __extends(StandalonePisaQuestionComponent, _super);
    function StandalonePisaQuestionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.answer = new core_1.EventEmitter();
        _this.showSent = new core_1.EventEmitter();
        return _this;
    }
    //  ngOnInit(): void {
    //     this.getQuestion()
    //         .then(super.renderQuestions)
    //         .catch(err => console.log(err));
    // }
    StandalonePisaQuestionComponent.prototype.getQuestion = function () {
        if (this.route.snapshot.queryParams.q) {
            return this.dataService
                .getPisaQuestionById(this.route.snapshot.queryParams.q);
        }
        else {
            if (this.currentStage > 0) {
                this.currentStage = 0;
            }
            return this.dataService
                .getPisaQuestion(this.dataService.contest['category']['_id'], this.currentStage !== undefined ?
                this.stages[this.currentStage].pisa_questions_difficulty[0] :
                (this.stage ? this.stage.pisa_questions_difficulty[0] : '')); // check if can be more than 1 pisa !!!
        }
    };
    StandalonePisaQuestionComponent.prototype.questionAnswered = function (answers) {
        var _this = this;
        // this.answered = true;
        var that = this;
        this.pisaQuestion.questions.forEach(function (question) {
            if (question.type == 1) {
                if (that.answers[question._id].length == 0) {
                    that.dataService.genericPopUpIsSuccess = false;
                    that.dataService.alertMessage = "נראה שפספסת שאלה או שתיים...";
                    that.dataService.alertSubMessage = "לפעמים לא קל במדרגות בדרך למטוס, אבל זה משתלם!";
                    that.dataService.showGenericPopup = true;
                    return;
                }
                that.answers[question._id].forEach(function (pisaAnswerArr) {
                    if (pisaAnswerArr) {
                        pisaAnswerArr.forEach(function (pisaAnswer) {
                            if (pisaAnswer.length == 0) {
                                that.dataService.genericPopUpIsSuccess = false;
                                that.dataService.alertMessage = "נראה שפספסת שאלה או שתיים...";
                                that.dataService.alertSubMessage = "לפעמים לא קל במדרגות בדרך למטוס, אבל זה משתלם!";
                                that.dataService.showGenericPopup = true;
                                return;
                            }
                        });
                    }
                });
            }
            if (question.type == 2) {
                var isCheckSomthing = false;
                question.multi_options.forEach(function (multiAnswer) {
                    if (multiAnswer.checked) {
                        isCheckSomthing = true;
                    }
                });
                if (!isCheckSomthing) {
                    that.dataService.genericPopUpIsSuccess = false;
                    that.dataService.alertMessage = "נראה שפספסת שאלה או שתיים...";
                    that.dataService.alertSubMessage = "לפעמים לא קל במדרגות בדרך למטוס, אבל זה משתלם!";
                    that.dataService.showGenericPopup = true;
                    return;
                }
            }
            if (question.type == 3) {
                if (!question.selected) {
                    that.dataService.genericPopUpIsSuccess = false;
                    that.dataService.alertMessage = "נראה שפספסת שאלה או שתיים...";
                    that.dataService.alertSubMessage = "לפעמים לא קל במדרגות בדרך למטוס, אבל זה משתלם!";
                    that.dataService.showGenericPopup = true;
                    return;
                }
            }
        });
        if (that.dataService.showGenericPopup) {
            return;
        }
        for (var i = 0; i < this.answers.length; i++) {
            if (this.answers[i].length == 0) {
            }
        }
        this.answers.user = this.dataService.user;
        this.answers.contest = this.dataService.contest;
        this.dataService
            .checkPisaQuestion(this.pisaQuestion._id, this.answers)
            .then(function (results) {
            var failed = results.failed;
            console.log('failed', failed);
            if (_this.checkFailure(failed) /*&& !this.showSent*/) {
                that.dataService.genericPopUpIsSuccess = false;
                that.dataService.alertMessage = "אחת או יותר מהתשובות שהזנת לא נכונה";
                that.dataService.alertSubMessage = "אנא נסה/י שנית";
                that.dataService.showGenericPopup = true;
                var _loop_1 = function () {
                    failedIndexes = failed[_id];
                    var questionContext = $("[data-id=" + _id + "]");
                    var innerQuestion = _this.pisaQuestion.questions.find(function (q) {
                        return q._id == _id;
                    });
                    if (innerQuestion.type == '1') {
                        var count_1 = 0;
                        var stop_1 = false;
                        $('.pisa-single-question.text').each(function () {
                            if (!stop_1 && $(this).attr('data-id') != innerQuestion._id) {
                                count_1 += $('.mq-answer', this).length;
                            }
                            else {
                                stop_1 = true;
                            }
                        });
                        failedIndexes.forEach(function (index) {
                            $('.mq-answer').eq(index + count_1).addClass('failed');
                        });
                    }
                    else {
                        failedIndexes.forEach(function (index) {
                            questionContext.addClass('failed');
                        });
                    }
                };
                var failedIndexes;
                for (var _id in failed) {
                    _loop_1();
                }
            }
            else {
                /* if (this.showSent) {
                     results.isOnChallenge = true
                     this.answer.emit(results)
                 }
                 else {*/
                //yaron: add googletag
                _this.dataService.sendAnalyticsEvent(_this.dataService.getChallengeName(), _this.pisaQuestion.title, 'סיום משימה', 'auto_event');
                _this.answer.emit(results);
                // }
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    StandalonePisaQuestionComponent.prototype.checkFailure = function (failedQuestions) {
        if (failedQuestions && Object.keys(failedQuestions).length) {
            var all = [];
            for (var id in failedQuestions) {
                if (failedQuestions.hasOwnProperty(id)) {
                    var element = failedQuestions[id];
                    all = all.concat(element);
                }
            }
            return all.length > 0;
        }
        return false;
    };
    /**
       *
       * @param event the click event
       * @param answer the option object from the question
       */
    StandalonePisaQuestionComponent.prototype.addRemoveCheckboxAnswer = function (event, answer) {
        var target = event.target || event.srcElement || event.currentTarget;
        // this is the question element
        var parent = $(target).closest('.pisa-single-question');
        $(parent).removeClass('failed');
        $(target).removeClass('failed');
        // each question element has a data-id
        // attr which representes the question _id
        var questionId = parent.attr('data-id');
        var checkboxIndex = $(target).attr('index');
        var isMulti = $(parent).hasClass('multi');
        var remove = !answer.checked;
        // remove from array
        if (remove) {
            this.answers[questionId].splice([checkboxIndex], 1);
        }
        else {
            var value = answer.text;
            // if multi simply push,
            // for single - replace
            if (isMulti) {
                this.answers[questionId].push(value);
            }
            else {
                this.answers[questionId] = [value];
            }
        }
    };
    return StandalonePisaQuestionComponent;
}(pisa_question_component_1.PisaQuestionComponent));
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], StandalonePisaQuestionComponent.prototype, "answer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], StandalonePisaQuestionComponent.prototype, "showSent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StandalonePisaQuestionComponent.prototype, "currentStage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StandalonePisaQuestionComponent.prototype, "stages", void 0);
StandalonePisaQuestionComponent = __decorate([
    core_1.Component({
        selector: 'standalone-pisa-question',
        template: __webpack_require__("../../../../../src/app/Components/question-types/StandalonePisaQuestion/standalone-pisa-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/question-types/StandalonePisaQuestion/standalone-pisa-question.component.css")]
    })
], StandalonePisaQuestionComponent);
exports.StandalonePisaQuestionComponent = StandalonePisaQuestionComponent;
//# sourceMappingURL=standalone-pisa-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/question-types/VideoQuestion/video-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w-container {\n    padding-top: 4vh;\n\n}\n\n\n\n.w-container .w-row {\n    margin-right: -10vw;\n    padding-right: 0;\n}\n\n\n\n.disabled {\n    opacity: 0.5;\n    cursor: default;\n}\n\n\n\n.heading-2.dark.title {\n    line-height: 95px;\n    font-size: 30px !important;\n    font-weight: 400;\n    text-shadow: none;\n}\n\n\n\nol{\n    list-style-type: none;\n}\n\n\n\nol li{\n    margin-top: 60px;\n    counter-increment: item;\n    margin-bottom: 5px;\n}\n\n\n\nli .counter {\n    margin-right: 10px;\n    content: counter(item) \". \";\n    color: #272d38;\n    width: 1.2em;\n    text-align: center;\n    display: inline-block;\n    font-family: 'Almoni dl aaa', sans-serif; \n    font-size: 30pt;\n    font-weight: 900;\n}\n\n\n\n.heading-2.dark.title {\n    margin-top: -100px;\n}\n\n\n\n.textForTop {\n    margin-top: 95px;\n}\n\n\n\n.answer-but {\n    margin-top: 50px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/question-types/VideoQuestion/video-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w-container\">\n  <div class=\"mission-1st\">\n    <div class=\"title-row w-row\">\n      <div class=\"column-7 w-col w-col-1\"></div>\n      <div class=\"\">\n        <h1 class=\"heading-2 dark title\">{{stage[dataService.getText(dataService.challengesData[dataService.type].stage.question)]}}</h1>\n        <div *ngIf=\"dataService.currentLanguage.type == 'he'\" class=\"textForTop\">\n\n          <section *ngIf=\"choosenCardIndex ==0\">\n            <p class=\"paragraph par-align-to-right\">שלב 1: מי?</p>\n            <p class=\"paragraph par-align-to-right\">בשלב הזה אתם צריכים לחשוב, למי אתם מכוונים את המסר? מי קהל היעד שלכם? זה יכול להיות העולם כולו, המדינה, התלמידים\n              בתיכון שלכם, המורים, ההורים, חולי הסרטן עצמם… כל קהל יעד אפשרי, כל עוד אתם מסבירים את ההגיון מאחוריו. עד 200\n              מילים או בסרטון של עד 50 שניות!</p>\n          </section>\n\n\n          <section *ngIf=\"choosenCardIndex ==1\">\n            <p class=\"paragraph par-align-to-right\">שלב 2: איך?</p>\n            <p class=\"paragraph par-align-to-right\">בשלב הזה אתם צריכים לחשוב, איך אתם הולכים להוציא את המסר החוצה לקהל היעד שבחרתם? זה יכול להיות בסרט דוקומנטרי,\n              באנימציה, בפוסטר, בקמפיין בסנאפצ׳ט, על שלט חוצות… כל דבר הולך, כל עוד אתם מסבירים למה בחרתם דווקא את הכלים\n              האלו לקהל היעד שלכם. עד 300 מילים או בסרטון של עד דקה וחצי!</p>\n          </section>\n\n\n          <section *ngIf=\"choosenCardIndex ==2\">\n            <p class=\"paragraph par-align-to-right\">שלב 3: מה?</p>\n            <p class=\"paragraph par-align-to-right\">\n\n              בשלב האחרון, אתם צריכים לחשוב - מה המסר שאנחנו רוצים להעביר? אתם כבר יודעים למי זה פונה ואיפה או איך זה יהיה מוצג, אבל מה\n              זה יהיה בדיוק? מה הסלוגן, התסריט, ההאשטאג, הכותרת? הכל אפשרי והשמיים הם הגבול, כל עוד אתם מסבירים למה בחרתם\n              דווקא את המסר הזה. עד 300 מילים או בסרטון של עד דקה וחצי!\n\n            </p>\n          </section>\n\n        </div>\n        <div *ngIf=\"dataService.currentLanguage.type == 'ar'\" class=\"textForTop\">\n          <section *ngIf=\"choosenCardIndex ==0\">\n            <p class=\"paragraph par-align-to-right\">بطاقة 1- مرحلة 1: من؟</p>\n            <p class=\"paragraph par-align-to-right\">\n              في هذه المرحلة عليكم التفكير ب: لمن توجهون الهدف؟ من هو جمهوركم؟ ممكن أن يكون كل العالم، الدولة، الطلاب في مدرستكم، المعلمين،\n              الأهالي، مرضى السرطان أنفسهم... أي جمهور ممكن ان يكون جمهوركم طول ما بتفسروا المنطق من وراء اختياركم. لحد 200\n              كلمة أو بفيديو لحد 50 ثانية!\n            </p>\n          </section>\n\n\n          <section *ngIf=\"choosenCardIndex ==1\">\n            <p class=\"paragraph par-align-to-right\">بطاقة 2- مرحلة 2: كيف؟</p>\n            <p class=\"paragraph par-align-to-right\">\n              في هذه المرحلة عليكم التفكير كيف تصدرون الهدف للجمهور الذي قمتم باختياره. ممكن أن يكون فيلم وثائقي، فيلم كارتون، بوستر، حملة\n              بسناب تشات، أو أي شيء تريدونه طالما تفسرون لماذا اخترتم هذه الأدوات لجمهوركم. لحد 300 كلمة أو فيديو لحد دقيقة\n              ونص!\n            </p>\n          </section>\n\n\n          <section *ngIf=\"choosenCardIndex ==2\">\n            <p class=\"paragraph par-align-to-right\">بطاقة 3- مرحلة 3: ماذا؟</p>\n            <p class=\"paragraph par-align-to-right\">\n\n              في هذه المرحلة عليكم التفكير ما هو الهدف الذي تريدون تمريره؟ نعلم الآن ما هو جمهور الحملة وكيف سيتم تمرير الهدف، لكن ماذا\n              سيكون بالضبط؟ ما هو الشعار؟ السيناريو؟ الهاشتاغ؟ العنوان؟ كل شيء ممكن والسماء هي الحدود طالما تفسرون لماذا\n              اخترتم هذا الهدف. لحد 300 كلمة أو فيديو لحد دقيقة ونص!\n\n            </p>\n          </section>\n        </div>\n      </div>\n    </div>\n    <!--<p class=\"paragraph light-copy\" style=\"white-space: pre-wrap;\">\n      {{stage[dataService.getText(dataService.challengesData[dataService.type].stage.stage_details)]}}\n      </p>-->\n    <!-- <div class=\"image-big\">\n      <iframe [src]=\"videoUrl()\" *ngIf=\"stage && stage.video_url\"></iframe>\n    </div> -->\n\n    <ol dir=\"rtl\">\n\n      <li *ngFor=\"let innerQuestion of stage.video_question; let i=index\">\n        <span class=\"counter\">{{i+1}}.</span>\n        <question-with-text [hideSend]=\"true\" #q (answer)=\"questionAnswered($event,innerQuestion)\" *ngIf=\"innerQuestion.video_type == 'free_text'\"\n          [stage]=\"innerQuestion\">\n        </question-with-text>\n\n        <multi-question [hideSend]=\"true\" #q (answer)=\"questionAnswered($event,innerQuestion)\" *ngIf=\"innerQuestion.video_type == 'multiselect'\"\n          [stage]=\"innerQuestion\">\n\n        </multi-question>\n\n        <single-question [hideSend]=\"true\" #q (answer)=\"questionAnswered($event,innerQuestion)\" *ngIf=\"innerQuestion.video_type == 'select'\"\n          [stage]=\"innerQuestion\">\n        </single-question>\n\n        <file-upload-question [hideSend]=\"true\" #q (answer)=\"questionAnswered($event,innerQuestion)\" *ngIf=\"innerQuestion.video_type == 'file'\"\n          [stage]=\"innerQuestion\">\n        </file-upload-question>\n      </li>\n\n    </ol>\n\n    <div class=\"butleft answer-but\">\n      <a (click)=\"answered()\" class=\"blue-but w-button send-button\" [ngClass]=\"{'disabled' : shouldDisable()}\">{{dataService.getText('sendButton')}}</a>\n    </div>\n  </div>\n</div>\n\n<!--\n<div style=\"color:black;\">\n  {{stage | json}}\n</div>-->"

/***/ }),

/***/ "../../../../../src/app/Components/question-types/VideoQuestion/video-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_2 = __webpack_require__("../../../router/@angular/router.es5.js");
var VideoQuestionComponent = (function () {
    function VideoQuestionComponent(dataService, route, router, sanitizer) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        // @Input() stage: any = {}
        this.stage = {};
        this.answer = new core_1.EventEmitter();
        this.answers = [];
        this.stage = this.getStub();
        console.log('lkajskfj', this.choosenCardIndex);
    }
    VideoQuestionComponent.prototype.ngOnInit = function () {
        if (this.dataService.type) {
            this.type = this.dataService.type;
            this.dataService.sendGoogleTagVirtualPage(this.dataService.user.contest_stages[0].stage + 1, this.stage.stage_details, this.stage.question_text);
        }
    };
    VideoQuestionComponent.prototype.shouldDisable = function (allAnswers) {
        if (allAnswers) {
            return this.answers.length == 0 && (!allAnswers[1] || allAnswers[1].length == 0);
        }
        else {
            return this.answers.length == 0;
        }
    };
    VideoQuestionComponent.prototype.mapAllAnswers = function () {
        var allAnswers;
        if (this.questions) {
            return allAnswers = this.questions.map(function (q) {
                var ans;
                // type free_text
                if (q.answers) {
                    ans = [q.answers];
                }
                else if (q.selected) {
                    ans = [q.selected];
                }
                else if (q.options) {
                    ans = q.options
                        .filter(function (option) { return option.checked; })
                        .map(function (option) { return option.text; });
                }
                return ans;
            });
        }
    };
    VideoQuestionComponent.prototype.answered = function () {
        var allAnswers = this.mapAllAnswers();
        if (this.shouldDisable(allAnswers)) {
            return;
        }
        this.answer.emit(allAnswers);
    };
    VideoQuestionComponent.prototype.videoUrl = function () {
        var url = this.stage.video_url;
        url = this.fixUrl(url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    VideoQuestionComponent.prototype.fixUrl = function (url) {
        if (!url) {
            return '';
        }
        if (/youtube/.test(url)) {
            url = url.replace('watch?v=', 'embed/');
        }
        return url;
    };
    VideoQuestionComponent.prototype.getStub = function () {
        var json = '{"_id":"5a3172f3621bcf600fa81848","updatedAt":"2017-12-14T11:39:10.909Z","createdAt":"2017-12-13T18:35:31.952Z","question_type":"video","video_url":"http://ec2-34-249-91-71.eu-west-1.compute.amazonaws.com/Video/soccer.mp4","times_to_watch":2,"question_text":"אתגר הכדורגל","stage_details":"דקה 90 - מריחים את הסוף","image":"https://presentense-stage-images.s3-us-west-2.amazonaws.com/Screen%20Shot%202017-12-10%20at%2019.56.23.1513190093138.png","from":"2017-12-13T00:00:00.000Z","to":"2017-12-16T00:00:00.000Z","continue_when":"correct","max_participants":3,"max_winners":2,"pass_level_code":"FSHDI","index":4,"video_question":[{"video_type":"file","question_text":"להעלאת הקובץ בכל פורמט שהוא, בלי שאף אחד מציץ חוץ מועדת השיפוט","question_text_arabic":"هل صورت التحدي؟ هيا، نحن ننتظر لنرى","_id":"5a3172f3621bcf600fa8184e","multi_options":[],"correct_answer":[],"select":[]},{"video_type":"free_text","question_text":"העלת את האתגר לאינסטגרם או יו טיוב? אפשר לשים כאן את הלינק ואנחנו נדאג לשגר אותו לועדת השיפוט שלנו","question_text_arabic":"من توفي في إنستوش، على يوتيوب أو في باس؟ الرابط هو أيضا كبيرة!","multi_options":[],"correct_answer":[],"select":[]}],"cases":[],"multi_options":[],"correct_answer":[],"select":[],"pisa_questions_difficulty":["medium"],"status":"active","__v":0}';
        if (this.dataService.type == '4') {
            json = '{"_id":"5a3172f3621bcf600fa81848","updatedAt":"2017-12-14T11:39:10.909Z","createdAt":"2017-12-13T18:35:31.952Z","question_type":"video","video_url":"http://ec2-34-249-91-71.eu-west-1.compute.amazonaws.com/Video/soccer.mp4","times_to_watch":2,"question_text":"האתגר החברתי","stage_details":"השינוי מתחיל כאן","image":"https://presentense-stage-images.s3-us-west-2.amazonaws.com/Screen%20Shot%202017-12-10%20at%2019.56.23.1513190093138.png","from":"2017-12-13T00:00:00.000Z","to":"2017-12-16T00:00:00.000Z","continue_when":"correct","max_participants":3,"max_winners":2,"pass_level_code":"FSHDI","index":4,"video_question":[{"video_type":"file","question_text":"להעלאת הקובץ בכל פורמט שהוא, בלי שאף אחד מציץ חוץ מועדת השיפוט","question_text_arabic":"هل صورت التحدي؟ هيا، نحن ننتظر لنرى","_id":"5a3172f3621bcf600fa8184e","multi_options":[],"correct_answer":[],"select":[]},{"video_type":"free_text","question_text":"העלת את האתגר לאינסטגרם או יו טיוב? אפשר לשים כאן את הלינק ואנחנו נדאג לשגר אותו לועדת השיפוט שלנו","question_text_arabic":"من توفي في إنستوش، على يوتيوب أو في باس؟ الرابط هو أيضا كبيرة!","multi_options":[],"correct_answer":[],"select":[]}],"cases":[],"multi_options":[],"correct_answer":[],"select":[],"pisa_questions_difficulty":["medium"],"status":"active","__v":0}';
        }
        return JSON.parse(json);
    };
    VideoQuestionComponent.prototype.questionAnswered = function (answers) {
        this.answers = answers;
        //this.answer.emit(answers)
    };
    return VideoQuestionComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VideoQuestionComponent.prototype, "answer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VideoQuestionComponent.prototype, "choosenCardIndex", void 0);
__decorate([
    core_1.ViewChildren('q'),
    __metadata("design:type", typeof (_a = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _a || Object)
], VideoQuestionComponent.prototype, "questions", void 0);
VideoQuestionComponent = __decorate([
    core_1.Component({
        selector: 'video-question',
        template: __webpack_require__("../../../../../src/app/Components/question-types/VideoQuestion/video-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/question-types/VideoQuestion/video-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _d || Object, typeof (_e = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _e || Object])
], VideoQuestionComponent);
exports.VideoQuestionComponent = VideoQuestionComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=video-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/DataModels/LanguageDataModel.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LanguageDataModel = (function () {
    function LanguageDataModel() {
    }
    return LanguageDataModel;
}());
exports.default = LanguageDataModel;
//# sourceMappingURL=LanguageDataModel.js.map

/***/ }),

/***/ "../../../../../src/app/DataModels/UserDataModel.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserDataModel = (function () {
    function UserDataModel() {
        this.name = '';
        this.phone = 0;
        this.email = '';
        this.password = '';
        this.imageUrl = '';
        this.city = '';
        this.viralLink = '';
    }
    UserDataModel.prototype.isEmpty = function () {
        if (!this._id) {
            return true;
        }
        for (var prop in this) {
            if (prop != 'viralLink' && (this.hasOwnProperty(prop) && (this['' + prop] != '' || this['' + prop] != 0)))
                return false;
        }
        return true;
    };
    return UserDataModel;
}());
exports.default = UserDataModel;
//# sourceMappingURL=UserDataModel.js.map

/***/ }),

/***/ "../../../../../src/app/FileUpload/S3FileUpload.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var S3FileUpload = (function () {
    function S3FileUpload(region, IdentityID, BucketName, apiVersion) {
        if (apiVersion === void 0) { apiVersion = '2006-03-01'; }
        AWS.config.region = region;
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: region + ':' + IdentityID,
        });
        this.s3 = new AWS.S3({
            apiVersion: apiVersion,
            params: { Bucket: BucketName }
        });
    }
    S3FileUpload.prototype.UploadFileAsync = function (fileToUpload, cb) {
        return __awaiter(this, void 0, void 0, function () {
            var fileName, fileType, photoKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileName = fileToUpload.name;
                        fileType = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length);
                        fileName = fileName.replace(fileType, '');
                        photoKey = fileName + Date.now() + '.' + fileType;
                        return [4 /*yield*/, this.s3.upload({
                                Key: photoKey,
                                Body: fileToUpload,
                                ACL: 'public-read'
                            }, function (err, data) {
                                if (err) {
                                    var ret = { success: false, error: err };
                                    cb(ret);
                                }
                                else {
                                    var ret = { success: true, url: data.Location };
                                    cb(ret);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    S3FileUpload.prototype.uploadMultiple = function (files, cb) {
    };
    return S3FileUpload;
}());
exports.default = S3FileUpload;
//# sourceMappingURL=S3FileUpload.js.map

/***/ }),

/***/ "../../../../../src/app/Translations/translations.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Translations = (function () {
    function Translations() {
        this.langList = ['he', 'ar'];
        this.translationsDic = {
            //  General
            changePassword: ['שנה סיסמא', 'تغيير كلمة السر'],
            forgotPassword: ['שכחתי סיסמא', 'هل نسيت كلمة المرور'],
            forgotPasswordTitle: ['איפוס סיסמא', 'إعادة تعيين كلمة المرور'],
            forgotPasswordSubtitle: ['הזן את כתובת המייל לאיפוס הסיסמא', 'أدخل عنوان البريد الإلكتروني لإعادة تعيين كلمة المرور'],
            forgotTitle: ['איפוס סיסמא', 'إعادة تعيين'],
            profileCreateGroup: ['צור קבוצה', 'كون مجموعة'],
            group_exit_button: ['צא מהקבוצה', ''],
            congratsContinue: ['המשך', 'قدم'],
            accociated: ['בשיתוף', 'بالتعاون'],
            terms: ['תקנון', 'قواعد'],
            uploadFileButtonText: ['העלאת קובץ לתשובה', 'تحميل ملف الإجابة'],
            pointsAbbreviation: ['נק׳', 'نقطة'],
            male: ['זכר', 'الذكر'],
            female: ['נקבה', 'إناثا'],
            otherGender: ['אחר', 'اخر'],
            emailAddress: ['כתובת מייל', 'عنوان البريد الإلكتروني'],
            fullName: ['שם מלא', 'الاسم الكامل'],
            age: ['גיל', 'عمر'],
            phone: ['טלפון', 'رقم الهاتف'],
            contactUsMessage: ['הודעה', 'محتوى الرسالة'],
            chooseGender: ['מין', 'جنس'],
            hometown: ['עיר מגורים', 'مسقط رأس'],
            profileSave: ['שמור', 'إحفظ'],
            save: ['עיר מגורים', 'مسقط رأس'],
            changePassButton: ['שנה סיסמא', 'تغيير كلمة السر'],
            password: ['סיסמא', 'كلمه السر'],
            login: ['התחבר', 'تسجيل الدخول'],
            signup: ['הירשם', 'سجل'],
            existUser: ['משתמש קיים', 'مستخدم بالفعل'],
            didntReadTheTerms: ['היי, נראה ששכחת לקרוא את התקנון', 'يبدو أنك قد نسيت قراءة الشروط'],
            currentPassword: ['סיסמא נוכחית', 'كلمة السر الحالية'],
            newPassword: ['הזן סיסמא חדשה', 'أدخل كلمة مرور جديدة'],
            confirmPassword: ['אישור הסיסמא החדשה', 'تأكيد كلمة المرور الجديدة'],
            // Soccer
            soccer: ['אתגר הכדורגל', 'تحدّي كرة القدم'],
            text: ["אתם בכיתה ט׳ או י׳? חושבים שאתם יודעים הכללל על כדורגל? בואו נראה אתכם מנצחים את האתגר שלנו ולוקחים את הגביע ישר למונדיאל. מה צריך לעשות? לענות על שלוש שאלות טריוויה קלוווות, שתי חידות קצת יותר מאתגרות (אבל קטן עליכם), ולפצח את האתגר הגדול - אתגר שמצריך חישובים שקשורים לכדורגל, ממש כמו במנג׳ר, עם אפשרות להגדיל את הסיכוי לזכות בפרס הגדול - אתגר הכדורגל הענק של שנת 2018. מוכנים לזכות בפרסים שווים?", 'بتفكروا انكم بتعرفوا كلللل اشي عن كرة القدم؟ خلينا نشوفكم تفوزوا بالتحدي وتربحوا الكاس!نفّذوا المهام، اجيبوا عن الألغاز وممكن تفوزوا بجوائز خيالية !'],
            startButton: ['יאללה, למונדיאל!', 'يلا ع المونديال'],
            prasim: ['במה זוכים?', 'بماذا نفوز؟'],
            firstPrizeTitle: ['חבילות אירוח למונדיאל', 'رزم استضافة في'],
            firstPrizeText: ['פרס ראשון – שני שחקנים יזכו בכרטיסים זוגיים למונדיאל כולל טיסה ומלון!', 'الجائزة الأولى – لاعبان يفوزان ببطاقات زوجية للمونديال يشمل تذكرة الطائرة والفندق!'],
            firstPrizeText1: ['שובר למימוש הקמפיין', 'قسيمة لتحقيق الحملة'],
            firstPrizeText2: ['וליווי צמוד של מנטור', 'و معلمه وثيقة'],
            firstPrizeFlippedText: ['חבילות אירוח למונדיאל', 'رزم استضافة في المونديال'],
            secondPrizeTitle: ['אימונים עם נבחרת ישראל', 'تدريبات مع منتخب إسرائيل'],
            secondPrizeText: ['פרס שני - 40 שחקנים יזכו ביום אימונים מיוחד עם נבחרת ישראל!', 'الجائزة الثانية – 40 لاعباً يفوزون بيوم تدريبات خاص ومميز مع منتخب إسرائيل !'],
            secondPrizeFlippedText: ['אימונים עם נבחרת ישראל', 'تدريبات مع منتخب'],
            thirdPrizeTitle: ['כרטיסים למשחקי הנבחרת', 'تذاكر لمباريات المنتخب'],
            thirdPrizeText: ['פרס שלישי - 80 שחקנים יזכו בכרטיסים זוגיים למשחקי הנבחרת!', 'الجائزة الثالثة – 80 لاعباً يفوزون بتذاكر زوجية لمباريات المنتخب !'],
            thirdPrizeFlippedText: ['כרטיסים למשחקי הנבחרת', 'تذاكر لمباريات المنتخب'],
            defaultStageTitle: ['שריקת הפתיחה', 'قبل ما نبدء, هيا نستعد'],
            defaultStageQuestion: ['באיזה מהקבוצות הבאות לא שיחק יוסי בניון?', 'الفريق الذي لم يلعب به يوسي بنيون؟'],
            option1: ['צ׳לסי', 'مكابي حيفا'],
            option2: ['ארסנל', 'ليفربول'],
            option3: ['הפועל קרית שמונה', 'راسينغ سانتاندير'],
            option4: ['מכבי חיפה', 'إيروني كريات شمونة'],
            titleOnTheCompetitionSoccer: ['על התחרות', 'על התחרותكرة قدم'],
            textOnTheCompetitionSoccer: ['קופי מגניב על התחרות הנעה להירשם קופי מגניב על התחרותה נעה להירשם כקבוצה  קופי מגניב על התחרות הנעה להירשם כקבוצה',
                'קופי מגניב על התחרות הנעה להירשם קופי מגניב על התחרותה נעה להירשם כקבוצה  קופי מגניב על התחרות הנעה להירשם כקבוצהكرة قدم'],
            soccerFirstCardTitle: ['אתגר מחשבתי', 'تحدي تفكيري'],
            soccerFirstCardPoints: ['100 נק׳', '100 نقطة'],
            soccerFirstCardBackTitle: ['להיות מנג׳ר ליום אחד', 'أن تكون مدير فني ليوم واحد'],
            soccerSecondCardTitle: ['אתגר פיזי', 'تحدي جسماني'],
            soccerSecondCardPoints: ['200 נק׳', '200 نقطة'],
            soccerSecondCardBackTitle: ['מוכן לעשות את אתגר הכדורגל שמשגע את הארץ?', 'مستعد لتحدي كرة القدم الذي يشغل عقول جميع البلاد'],
            socialFirstCardTitle: ['אתגר מחשבתי', 'تحدي تفكيري'],
            socialFirstCardPoints: ['100 נק׳', '100 نقطة'],
            socialFirstCardBackTitle: ['אתגר מחשבתי לפיצוח', 'أن تكون مدير فني ليوم واحد'],
            socialSecondCardTitle: ['אתגר חברתי', 'تحدي جسماني'],
            socialSecondCardPoints: ['100 נק׳', '100 نقطة'],
            socialSecondCardBackTitle: ['האתגר החברתי, שלושה שלבים בדרך שלך לקמפיין הגדול', 'مستعد لتحدي كرة القدم الذي يشغل عقول جميع البلاد'],
            videoQuestionText: ['question_text', 'question_text_arabic'],
            //  soccerThirdCardTitle: ['', ''],
            //  soccerThirdCardPoints: ['', ''],
            //  soccerThirdCardBackTitle: ['', ''],
            //  soccerFourthCardTitle: ['', ''],
            //  soccerFourthCardPoints: ['', ''],
            //  soccerFourthCardBackTitle: ['', ''],
            playNow: ['שחקו עכשיו', ''],
            makeTeam: ['יצירת קבוצה', ''],
            sentSuc: ['תשובתך נשלחה בהצלחה!', 'تم إرسال إجابتك بنجاح'],
            notPass: ['לצערנו לא עברת לשלב הבא<br>נשמח אם תנסה שוב בתחרות הבאה!', ''],
            congrats: ['סחתיין!<br>ענית על השאלה.<br>עוד קצת ואנחנו על המטוס!', 'أجبت على السؤال.<br>صحتين!<br>بقي القليل وسنكون في الطائرة'],
            groupTitle: ['הקבוצה שלי', ''],
            titleTask: ['כותרת משימה', ''],
            questionTask: ['באיזה מהקבוצות הבאות לא שיחק יוסי בניון? באיזה מהקבוצות הבאות לא שיחק יוסי בניון?באיזה מהקבוצות הבאות לא שיחק יוסי בניון? באיזה מהקבוצות הבאות לא שיחק יוסי בניון?', 'באיזה מהקבוצות הבאות לא שיחק יוסי בניון? באיזה מהקבוצות הבאות לא שיחק יוסי בניון?באיזה מהקבוצות הבאות לא שיחק יוסי בניון? באיזה מהקבוצות הבאות לא שיחק יוסי בניון?كرة قدم'],
            answer1: ['בחירה בודדת', ''],
            answer2: ['בחירה לחוצה', ''],
            answer3: ['בחירה לחוצה', ''],
            answer4: ['בחירה לחוצה', ''],
            sendButton: ['שליחה', 'اتصال'],
            talkwithus: ['דברו איתנו', 'التحدث معنا'],
            signupTitle: ['כמה פרטים לפני שמתחילים', 'التحدث معنا'],
            titlePro: ['פרופיל', 'ملفي'],
            subtitlePro: ['התראות', 'إخطارات'],
            alerts: ['01.05.2018 הגשת את תרגיל מספר 1<br>15.05.2018 עברת את שלב מספר 1 בהצלחה!<br>15.05.2018 הזמנת את אור מלר להצטרך לקבוצה שלך', '01.05.2018 הגשת את תרגיל מספר 1<br>15.05.2018 עברת את שלב מספר 1 בהצלחה!<br>15.05.2018 הזמנת את אור מלר להצטרך לקבוצה שלךكرة قدم'],
            titleCards: ['כותרת משימה', ''],
            cardsText: ['הגיע הזמן להכריע, אתה החלוץ או המנג׳ר? משימת החלוץ - אתגר פיזי ומחשבתי, מצריכה צבירה של 500 נקודות, כשהפרסים הם חבילות אירוח למונדיאל וימי אימון עם הנבחרת! משימת המנג׳ר - אתגר מחשבתי, מצריכה צבירה של 300 נקודות, כשהפרסים הם כרטיסים זוגיים למשחקי הנבחרת, כדורים וחולצות חתומות של שחקני הנבחרת. אז על איזה צד קמת היום?', 'حان وقت الحسم، أنت المهاجم أم المدير الفني؟ مهمة المهاجم - تحدّي جسدي وعقلي  يحتاج لجمع 500 نقطة، الجوائز عبارة عن رزمات ضيافية للمونديال ويوم تدريبي مع المنتخب! مهمة المهاجم - مهمة تفكيرية تحتاج لجمع 300 نقطة، الجوائز عبارة عن بطاقات زوجية للعبة المنتخب، طابات وقمصان مه امضاء لاعيبي المنتخب. ففي أي جانب قمت اليوم ؟ '],
            cardsTextSocial: ['יאללה, התחלנו באתגר. כל כרטיסיה שווה 100 נקודות, ומתחלקת לשתי חפיסות: הראשונה, חמישה אתגרים מחשבתיים לפיצוח, והשנייה, האתגר החברתי, שלושה שלבים בדרך שלך לקמפיין הגדול', 'حان وقت الحسم، أنت المهاجم أم المدير الفني؟ مهمة المهاجم - تحدّي جسدي وعقلي  يحتاج لجمع 500 نقطة، الجوائز عبارة عن رزمات ضيافية للمونديال ويوم تدريبي مع المنتخب! مهمة المهاجم - مهمة تفكيرية تحتاج لجمع 300 نقطة، الجوائز عبارة عن بطاقات زوجية للعبة المنتخب، طابات وقمصان مه امضاء لاعيبي المنتخب. ففي أي جانب قمت اليوم ؟ '],
            score: ['30 נק&#x27;', ''],
            subtitleCards: ['תיאור של משימה', ''],
            cardsInText: ['כותרת כותרת', ''],
            cardsButton: ['שלח', 'استمر'],
            cardsBack: ['חזור', 'الى الخلف'],
            titleTextQuestion: ['כותרת', ''],
            textInTextQuestion: ['תיאור משימה תיאור משימה תיאור משימה', ''],
            textArea: ['הזן טקסט', 'إدراج نص'],
            titlePass: ['איפוס סיסמא', 'إعادة تعيين كلمة المرور'],
            question: ['question_text', 'question_text_arabic'],
            stage_details: ['stage_details', 'stage_details_arabic'],
            options: ['multi_options', 'multi_options_arabic'],
            options_single: ['select', 'select_arabic'],
            design: ['עיצוב', ''],
            textDesign: ['זהו משחק איפור ומשחק הלבשה מדליק, בו אתם משחקים את תפקיד מעצב האופנה הנחשב ומציגים קולקציית בגדים משלכם בעזרת דוגמנית על מסלול. ראשית תצטרכו לאפר את הדוגמנית. עשו זאת ע"י לחיצה עם העכבר על הכפתור המייצג כל קטגוריה של איפור ועברו בין הדוגמאות השונות ע"י לחיצה על החצים. לאחר מכן תצטרכו להכין 4 תלבושות שונות(!) לדוגמנית שלכם    ', 'عن المسابقة شرح المنافسة شرح المنافسة شرح المنافسة شرح المنافسة شرح المنافسةكرة قدم'],
            firstPrizeTitleDesign: ['טיסה לחו"ל', ''],
            firstPrizeTextDesign: ['טסים לברצלונה עם החבר׳ה', ''],
            firstPrizeFlippedTextDesign: ['טסים לברצלונה<br>עם החבר׳ה', ''],
            secondPrizeTitleDesign: ['כרטיסים להופעה', ''],
            secondPrizeTextDesign: ['ביציע עם החבר׳ה במשחק של הנבחרת', ''],
            secondPrizeFlippedTextDesign: ['ביציע עם החבר׳ה<br>במשחק של הנבחרת', ''],
            thirdPrizeTitleDesign: ['מוצר אלקטרוני', ''],
            thirdPrizeTextDesign: ['אימון מהסרטים עם הנבחרת', ''],
            thirdPrizeFlippedTextDesign: ['אימון מהסרטים<br>עם הנבחרת', ''],
            defaultStageTitleDesign: ['כותרת המשימה', ''],
            defaultStageQuestionDesign: ['מהי שאלת חקר? שאלת חקר היא הצהרת כוונות של התלמידים (החוקרים) לגבי. עבודתם. מהי שאלת חקר טובה?', ''],
            optionOneDesign: ['חולצה', ''],
            optionTwoDesign: ['חצאית', ''],
            optionThirdDesign: ['מעיל', ''],
            optionFourDesign: ['גרב', ''],
            subtitle: ['שיטיס אתכם למונדיאל!', 'اللي راح يوصلكم للمونديال'],
            subtitleDesign: ['משחקים עד למילאנו ובחזרה', ''],
            tech: ['טכנולגיה', ''],
            textTech: ['תשלום במערכת ביטקוין נחשב כתקף רק לאחר ששודר לכל המשתתפים. לכן אין דרך להסתיר תשלומים. אולם מקור ויעד התשלום מזוהים רק לפי כתובת הארנק (המקביל במידה מסוימת לחשבון בנק) שלהם, ומערכת ביטקוין עצמה לא מבטיחה דרך לוודא מיהו הבעלים של אותם ארנקים. לכן משתמשים מיומנים המבקשים להשיג חשאיות יכולים להשתמש בביטקוין כדי להעביר כספים ...    ', 'عن المسابقة شرح المنافسة شرح المنافسة شرح المنافسة شرح المنافسة شرح المنافسةكرة قدم'],
            subtitleTech: ['כרטיס הכניסה שלכם למשרת החלומות', ''],
            firstPrizeTitleTech: ['טיסה לחו"ל', ''],
            firstPrizeTextTech: ['טסים לברצלונה עם החבר׳ה', ''],
            firstPrizeFlippedTextTech: ['טסים לברצלונה<br>עם החבר׳ה', ''],
            secondPrizeTitleTech: ['כרטיסים להופעה', ''],
            secondPrizeTextTech: ['ביציע עם החבר׳ה במשחק של הנבחרת', ''],
            secondPrizeFlippedTextTech: ['אימון מהסרטים עם הנבחרת', ''],
            thirdPrizeTitleTech: ['מוצר אלקטרוני', ''],
            thirdPrizeTextTech: ['אימון מהסרטים עם הנבחרת', ''],
            thirdPrizeFlippedTextTech: ['אימון מהסרטים<br>עם הנבחרת', ''],
            defaultStageTitleTech: ['כותרת המשימה', ''],
            defaultStageQuestionTech: ['תיאור המשימה תיאור המשימה תיאור המשימה תיאור המשימה תיאור המשימה תיאור המשימה', ''],
            optionOneTech: ['מחשב', ''],
            optionTwoTech: ['עכבר', ''],
            optionThirdTech: ['כבל', ''],
            optionFourTech: ['רמקול', ''],
            social: ['האתגר החברתי', 'التحدي الإجتماعي'],
            subtitleSocial: ['ההזדמנות שלכם לעצב מציאות חדשה', 'فرصتكم لتصميم واقع جديد'],
            imageSubtitle: '/images/taglineSocial.png',
            firstPrizeTitleSocial: ['20,000 שקלים', ''],
            firstPrizeTextSocial: ['20,000 שקלים למימוש הרעיון וליווי צמוד של מנטור', ''],
            firstPrizeFlippedTextSocial: ['20,000 שקלים למימוש הרעיון וליווי צמוד של מנטור', ''],
            secondPrizeTitleSocial: ['10,000 שקלים', ''],
            secondPrizeTextSocial: ['10,000 שקלים למימוש הרעיון וליווי צמוד של מנטור', ''],
            secondPrizeFlippedTextSocial: ['10,000 שקלים למימוש הרעיון וליווי צמוד של מנטור', ''],
            thirdPrizeTitleSocial: ['5,000 שקלים', ''],
            thirdPrizeTextSocial: ['5,000 שקלים למימוש הרעיון וליווי צמוד של מנטור', ''],
            thirdPrizeFlippedTextSocial: ['5,000 שקלים למימוש הרעיון וליווי צמוד של מנטור', ''],
            defaultStageTitleSocial: ['לפני שמתחילים, בואו נתחמם', 'قبل ما نبدا، تعالوا نتحمى'],
            defaultStageQuestionSocial: ['מה אתם חושבים שהאתגר הכי גדול של בני נוער חולי סרטן לאחר ההחלמה?', 'ما هي أهم حملة توعية شفتها؟'],
            optionOneSocial: ['לחזור למעגל החברים', 'إنهاء ظاهرة التنمر بالانترنت'],
            optionTwoSocial: ['להשלים לימודים', 'النضال ضد العنف بالعائلة'],
            optionThirdSocial: ['לחזק את הביטחון העצמי', 'شيء آخر'],
            optionFourSocial: ['יש לי רעיון אחר', 'السياقة الآمنة للدراجات الهوائية الكهربائية'],
            music: ['מוזיקה', 'موسيقىكرة قدم'],
            textMusic: ['הסברעל התחרות הסבר על התחרות הסבר על התחרות הסבר על התחרות הסבר על התחרות הסבר על התחרות ', 'عن المسابقة شرح المنافسة شرح المنافسة شرح المنافسة شرح المنافسة شرح المنافسةكرة قدم'],
            subtitleMusic: ['נתראה בקהל של הופעת השנה', 'נתראה בקהל של הפועת השנהكرة قدم'],
            firstPrizeTitleMusic: ['טיסה לחו"ל', 'טיסהלكرة قدم'],
            firstPrizeTextMusic: ['טסים לברצלונה עם החבר׳ה', 'טסים לברצלונה עם החבר׳הكرة قدم'],
            firstPrizeFlippedTextMusic: ['כרטיסים להופעה', 'כרטיסים להופעהكرة قدم'],
            secondPrizeTitleMusic: ['מוצר אלקטרוני', 'מוצר אלקטרוניكرة قدم'],
            secondPrizeTextMusic: ['אימון מהסרטים עם הנבחרת', 'אימון מהסרטים עם הנבחרתكرة قدم'],
            secondPrizeFlippedTextMusic: ['אימון מהסרטים<br>עם הנבחרת', 'אימון מהסרטים<br>עם הנבחרתكرة قدم'],
            thirdPrizeTitleMusic: ['אימון מהסרטים עם הנבחרת', 'אימון מהסרטים עם הנבחרתكرة قدم'],
            thirdPrizeTextMusic: ['כרטיסים להופעה', 'כרטיסים להופעהكرة قدم'],
            thirdPrizeFlippedTextMusic: ['אימון מהסרטים<br>עם הנבחרת', 'אימון מהסרטים<br>עם הנבחרתكرة قدم'],
            defaultStageTitleMusic: ['כותרת המשימה', 'כותרת המשימהكرة قدم'],
            defaultStageQuestionMusic: ['תיאור המשימה תיאור המשימה תיאור המשימה תיאור המשימה תיאור המשימה תיאור המשימה', 'תיאור המשימה תיאור המשימה תיאור המשימה בערביתكرة قدم'],
            optionOneMusic: ['מחשב', 'מחשבكرة قدم'],
            optionTwoMusic: ['עכבר', 'עכברكرة قدم'],
            optionThirdMusic: ['כבל', 'כבלكرة قدم'],
            optionFourMusic: ['רמקול', 'רמקולكرة قدم'],
            titleAnswerPisa: ['ענו על השאלות הבאות:', 'أجيبوا على الأسئلة التالية'],
            bigtitleCards: ['דקה 90 - מריחים את הסוף', 'الدقيقة ال 90 - نشم رائحة النهاية'],
            link: ['העתק קישור לחבר׳ה', 'העתק קישור לחבר׳ה'],
            enter: ['התחברות', 'دخول'],
            navPrasim: ['הפרסים', 'الجوائز'],
            private: ['כרטיס שחקן/ית', 'بطاقة لاعب/لاعبة'],
            private_social: ['פרופיל', 'بطاقة لاعب/لاعبة'],
            contactUs: ['תהיו בקשר', 'تواصلوا معنا'],
            disConnect: ['התנתק', 'تسجيل الخروج'],
            comp: ['חזרה למשחק', 'العودة إلى اللعبة'],
            /*** Social ***/
            textSocial: ['בואו לעשות עם הכישרון שלכם משהו טוב. בואו נדמיין שמאבחנים אצלכם את מחלת הסרטן. אבל אתם בשליטה, מוקפים בצוות רפואי, חברים ומשפחה. אתם מצליחים להיאבק - ולנצח את הסרטן. ואז אתם חוזרים לשגרה, ומגלים שדברים לא יחזרו להיות מה שהיו. נשמע מפחיד? זו המציאות של מאות בני נוער היום. <br>\
        <br>זה הזמן שלכם לא להשאיר את החברים מאחור: אתם בכיתה ט׳ או י׳? האתגר החברתי מזמין אתכם להעלות מודעות ציבורית וחברתית, ולתת מענה לקשיים של אלו שניצחו את הסרטן. חוץ מלעשות טוב, הזוכים יזכו להפיק את הרעיון לקמפיין אמיתי! בנוסף, תלמידי כיתה י׳ שיסיימו את האתגר יזכו בשעות למעורבות האישית, לאחר היישום שלו. האתגר יכול להתבצע לבד, או בקבוצה של עד 6 חברים. לחצו על ״הפרופיל שלי״ אחרי ההרשמה כדי להזמין חברים לקבוצה.',
                'تعالوا لعمل شيء جيد بقدراتكم. تعالوا نتخيل انه تم تشخيصكم بمرض السرطان. بس حواليكم طاقم طبي وعائلة وأصحاب. نجحتوا تصارعوا السرطان وتنتصروا عليه، رجعتوا عالروتين واكتشفتوا انه الأمور ما رجعت مثل ما كانت. بخوف صح؟ هذا واقع مئات الشباب والصبايا اليوم.إجا الوقت انه ما تتركوا أصحابكوا بدون دعم: انتوا بصف تاسع أو عاشر؟ يدعوكم التحدي الاجتماعي انه تزيدوا الوعي بالمجتمع وتدعموا اللي انتصروا السرطان. غير انكوا بتعملوا منيح، الفائزين رح يحصلوا على فرصة لإنتاج الفكرة وتحويلها لحملة حقيقية!بالإضافة، طلاب صف عاشر اللي أنهوا التحدي رح يحصلوا على ساعات بالتدخل الاجتماعي .ممكن تنفذوا التحدي لوحدكوا أو بمجموعة عددها حتى 6 أشخاص. اضغطوا على "بروفايلي" بعد التسجيل عشان تدعوا أصدقاء للمجموعة.'],
            startButtonSocial: ['יש לי רעיון!', 'عندي فكرة!'],
            close: ['סגור', 'إغلاق']
        };
    }
    Translations.prototype.translate = function (key, cookie) {
        return this.translationsDic[key][this.langList.indexOf(cookie)];
    };
    return Translations;
}());
exports.Translations = Translations;
exports.default = Translations;
//# sourceMappingURL=translations.js.map

/***/ }),

/***/ "../../../../../src/app/cust-ext-browser-xhr.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var CustExtBrowserXhr = (function (_super) {
    __extends(CustExtBrowserXhr, _super);
    function CustExtBrowserXhr() {
        return _super.call(this) || this;
    }
    CustExtBrowserXhr.prototype.build = function () {
        var xhr = _super.prototype.build.call(this);
        xhr.withCredentials = true; // this is all the magic we need for now
        return (xhr);
    };
    return CustExtBrowserXhr;
}(http_1.BrowserXhr));
CustExtBrowserXhr = __decorate([
    core_1.Injectable()
    /**
     * @author AhsanAyaz
     * We're extending the BrowserXhr to support CORS
     */
    ,
    __metadata("design:paramtypes", [])
], CustExtBrowserXhr);
exports.CustExtBrowserXhr = CustExtBrowserXhr;
//# sourceMappingURL=cust-ext-browser-xhr.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var core_2 = __webpack_require__("../../../../angular2-cookie/core.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var translations_1 = __webpack_require__("../../../../../src/app/Translations/translations.ts");
__webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/// Data Models
var UserDataModel_1 = __webpack_require__("../../../../../src/app/DataModels/UserDataModel.ts");
var LanguageDataModel_1 = __webpack_require__("../../../../../src/app/DataModels/LanguageDataModel.ts");
var DataService = (function () {
    function DataService(http, _cookieService, router) {
        this.http = http;
        this._cookieService = _cookieService;
        this.router = router;
        this.notify = new Subject_1.Subject();
        this.notifyObservable$ = this.notify.asObservable();
        this.liveUrl = '/api/';
        this.localUrl = 'http://localhost:3000/api/';
        this.baseUrl = this.localUrl;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.ChainStore = false;
        this.translations = new translations_1.Translations();
        this.type = "4";
        this.user = new UserDataModel_1.default();
        this.currentLanguage = new LanguageDataModel_1.default();
        this.showPopup = false;
        this.showPopupSign = false;
        this.showPopupContac = false;
        this.showConfirmTerms = false;
        this.showGenericPopup = false;
        this.showMessagePopup = false;
        this.alertMessage = "";
        this.alertSubMessage = "";
        this.genericPopUpIsSuccess = false;
        if (!/localhost/.test(document.location.host)) {
            this.baseUrl = this.liveUrl;
        }
        if (this.getCookieObject('user')) {
            this.getUser(this.getCookieObject('user'));
        }
        this.currentLanguage.type = this.getCookieObject('language');
        if (this.currentLanguage.type === undefined) {
            this.currentLanguage.type = 'he';
            this.setCookieObject('language', this.currentLanguage.type);
        }
        this.challengesData = {
            '1': {
                name: 'soccer',
                cssClassName: 'soccer',
                start_text: 'text',
                color: 'black',
                background: '/images/Hero-BG.png',
                imageSubtitle: '/images/taglineSoccer.png',
                subtitle: 'subtitle',
                waitforchallenge: 'רגע, האתגר הגדול עוד לא יצא לדרך',
                openAt: 'האתר יפתח ב',
                startButton: 'startButton',
                prasim: 'prasim',
                backgroundB: '#f4e280',
                firstPrize: {
                    title: 'firstPrizeTitle',
                    text: 'firstPrizeText',
                    smalltext1: 'firstPrizeText1',
                    smalltext2: 'firstPrizeText2',
                    flippedText: 'firstPrizeFlippedText',
                },
                talkwithus: 'talkwithus',
                sendButton: 'sendButton',
                secondPrize: {
                    title: 'secondPrizeTitle',
                    text: 'secondPrizeText',
                    flippedText: 'secondPrizeFlippedText'
                },
                thirdPrize: {
                    title: 'thirdPrizeTitle',
                    text: 'thirdPrizeText',
                    flippedText: 'thirdPrizeTitle'
                },
                defaultStage: {
                    title: 'defaultStageTitle',
                    question: 'defaultStageQuestion',
                    option1: 'option1',
                    option2: 'option2',
                    option3: 'option3',
                    option4: 'option4'
                },
                logo: 'images/Big-ball-p-500.png',
                about: {
                    title: 'titleOnTheCompetitionSoccer',
                    text: 'textOnTheCompetitionSoccer',
                    buttonRight: 'playNow',
                    buttonLeft: 'makeTeam',
                },
                sentSuc: 'sentSuc',
                notPass: 'notPass',
                congrats: 'congrats',
                titleAnswerPisa: 'titleAnswerPisa',
                group: {
                    title: 'groupTitle',
                    button: 'playNow',
                },
                multi: {
                    options: 'options',
                },
                profile: {
                    title: 'titlePro',
                    subtitle: 'subtitlePro',
                    alerts: 'alerts',
                    link: 'link',
                },
                cards: {
                    title: 'titleCards',
                    score: 'score',
                    text: 'cardsText',
                    subtitle: 'subtitleCards',
                    cardText: 'cardsInText',
                    button: 'cardsButton',
                    back: 'cardsBack',
                    first: {
                        title: 'soccerFirstCardTitle',
                        points: 'soccerFirstCardPoints',
                        backTitle: 'soccerFirstCardBackTitle'
                    },
                    second: {
                        title: 'soccerSecondCardTitle',
                        points: 'soccerSecondCardPoints',
                        backTitle: 'soccerSecondCardBackTitle'
                    }
                },
                textQuestion: {
                    pic: 'images/I.png',
                    textArea: 'textArea',
                },
                single: {
                    options_single: 'options_single',
                },
                passTitle: 'titlePass',
                stage: {
                    question: 'question',
                    stage_details: 'stage_details',
                    sendButton: 'sendButton'
                },
                footer: {
                    accociated: 'accociated',
                    terms: 'terms'
                },
                forgot: {
                    title: 'forgotTitle',
                },
                piza: {
                    question: 'pizaQuestion',
                },
                nav: {
                    enter: 'enter',
                    prasim: 'navPrasim',
                    private: 'private',
                    contact_us: 'contactUs',
                    dis_connect: 'disConnect',
                    comp: 'comp',
                }
            },
            '2': {
                name: 'design',
                cssClassName: 'design',
                start_text: 'textDesign',
                subtitle: 'subtitleDesign',
                sendButton: 'sendButton',
                imageSubtitle: '/images/taglineDesign.png',
                color: '#ffffff',
                background: '/images/backgroundBlue.png',
                startButton: 'startButton',
                backgroundB: '#327869',
                prasim: 'prasim',
                firstPrize: {
                    title: 'firstPrizeTitleDesign',
                    text: 'firstPrizeTextDesign',
                    flippedText: 'firstPrizeFlippedTextDesign',
                },
                secondPrize: {
                    title: 'secondPrizeTitleDesign',
                    text: 'secondPrizeTextDesign',
                    flippedText: 'secondPrizeFlippedTextDesign'
                },
                thirdPrize: {
                    title: 'thirdPrizeTitleDesign',
                    text: 'thirdPrizeTextDesign',
                    flippedText: 'thirdPrizeFlippedTextDesign'
                },
                defaultStage: {
                    title: 'defaultStageTitleDesign',
                    question: 'defaultStageQuestionDesign',
                    option1: 'optionOneDesign',
                    option2: 'optionTwoDesign',
                    option3: 'optionThirdDesign',
                    option4: 'optionFourDesign'
                },
                footer: {
                    accociated: 'accociated',
                    terms: 'terms'
                },
                logo: '/images/clothes.png',
                about: {
                    // title: 'titleOnTheCompetitionSoccer',
                    // text: 'textOnTheCompetitionSoccer',
                    buttonRight: 'playNow',
                    buttonLeft: 'makeTeam',
                },
                sentSuc: 'sentSuc',
                notPass: 'notPass',
                congrats: 'congrats',
                group: {
                    title: 'groupTitle',
                    button: 'playNow',
                },
                multi: {
                    options: 'options',
                },
                profile: {
                    title: 'titlePro',
                    subtitle: 'subtitlePro',
                    alerts: 'alerts',
                    link: 'link',
                },
                cards: {
                    title: 'titleCards',
                    score: 'score',
                    text: 'cardsText',
                    subtitle: 'subtitleCards',
                    cardText: 'cardsInText',
                    button: 'cardsButton',
                    back: 'cardsBack',
                    first: {
                        title: 'soccerFirstCardTitle',
                        points: 'soccerFirstCardPoints',
                        backTitle: 'soccerFirstCardBackTitle'
                    },
                    second: {
                        title: 'soccerSecondCardTitle',
                        points: 'soccerSecondCardPoints',
                        backTitle: 'soccerSecondCardBackTitle'
                    }
                },
                textQuestion: {
                    pic: 'images/I.png',
                    textArea: 'textArea',
                },
                single: {
                    options_single: 'options_single',
                },
                passTitle: 'titlePass',
                stage: {
                    question: 'question',
                    stage_details: 'stage_details'
                },
                nav: {
                    enter: 'enter',
                    prasim: 'navPrasim',
                    private: 'private',
                    contact_us: 'contactUs',
                    dis_connect: 'disConnect',
                    comp: 'comp',
                }
            },
            '3': {
                name: 'tech',
                cssClassName: 'tech',
                sendButton: 'sendButton',
                start_text: 'textTech',
                subtitle: 'subtitleTech',
                imageSubtitle: '/images/taglineTech.png',
                color: '#ffffff',
                background: '/images/backgroundTech.png',
                startButton: 'startButton',
                backgroundB: '#4692d8',
                prasim: 'prasim',
                firstPrize: {
                    title: 'firstPrizeTitleTech',
                    text: 'firstPrizeTextTech',
                    flippedText: 'firstPrizeFlippedTextTech',
                },
                secondPrize: {
                    title: 'secondPrizeTitleTech',
                    text: 'secondPrizeTextTech',
                    flippedText: 'secondPrizeFlippedTextTech'
                },
                thirdPrize: {
                    title: 'thirdPrizeTitleTech',
                    text: 'thirdPrizeTextTech',
                    flippedText: 'thirdPrizeFlippedTextTech',
                },
                defaultStage: {
                    title: 'defaultStageTitleTech',
                    question: 'defaultStageQuestionTech',
                    option1: 'optionOneTech',
                    option2: 'optionTwoTech',
                    option3: 'optionThirdTech',
                    option4: 'optionFourTech',
                },
                logo: '/images/lamp.png',
                nav: {
                    enter: 'enter',
                    prasim: 'navPrasim',
                    private: 'private',
                    contact_us: 'contactUs',
                    dis_connect: 'disConnect',
                    comp: 'comp',
                },
                footer: {
                    accociated: 'accociated',
                    terms: 'terms'
                },
                profile: {
                    title: 'titlePro',
                    subtitle: 'subtitlePro',
                    alerts: 'alerts',
                    link: 'link',
                },
                cards: {
                    title: 'titleCards',
                    score: 'score',
                    text: 'cardsText',
                    subtitle: 'subtitleCards',
                    cardText: 'cardsInText',
                    button: 'cardsButton',
                    back: 'cardsBack',
                    first: {
                        title: 'soccerFirstCardTitle',
                        points: 'soccerFirstCardPoints',
                        backTitle: 'soccerFirstCardBackTitle'
                    },
                    second: {
                        title: 'soccerSecondCardTitle',
                        points: 'soccerSecondCardPoints',
                        backTitle: 'soccerSecondCardBackTitle'
                    }
                },
                passTitle: 'titlePass',
                stage: {
                    question: 'question',
                    stage_details: 'stage_details'
                },
                forgot: {
                    title: 'forgotTitle',
                },
                piza: {
                    question: 'pizaQuestion',
                }
            },
            '4': {
                name: 'social',
                cssClassName: 'social',
                start_text: 'textSocial',
                subtitle: 'subtitleSocial',
                imageSubtitle: '/images/taglineSocial.png',
                background: '/images/backgroungSocial.png',
                startButton: 'startButtonSocial',
                prasim: 'prasim',
                sendButton: 'sendButton',
                firstPrize: {
                    title: 'firstPrizeTitleSocial',
                    text: 'firstPrizeTextSocial',
                    flippedText: 'firstPrizeFlippedTextSocial',
                    smalltext1: 'firstPrizeText1',
                    smalltext2: 'firstPrizeText2',
                },
                secondPrize: {
                    title: 'secondPrizeTitleSocial',
                    text: 'secondPrizeTextSocial',
                    flippedText: 'secondPrizeFlippedTextSocial'
                },
                thirdPrize: {
                    title: 'thirdPrizeTitleSocial',
                    text: 'thirdPrizeTextSocial',
                    flippedText: 'thirdPrizeFlippedTextSocial',
                },
                defaultStage: {
                    title: 'defaultStageTitleSocial',
                    question: 'defaultStageQuestionSocial',
                    option1: 'optionOneSocial',
                    option2: 'optionTwoSocial',
                    option3: 'optionThirdSocial',
                    option4: 'optionFourSocial',
                },
                group: {
                    title: 'groupTitle',
                    button: 'playNow',
                },
                talkwithus: 'talkwithus2',
                logo: '/images/hart.png',
                nav: {
                    enter: 'enter',
                    prasim: 'navPrasim',
                    private: 'private_social',
                    contact_us: 'contactUs',
                    dis_connect: 'disConnect',
                    comp: 'comp',
                },
                footer: {
                    accociated: 'accociated',
                    terms: 'terms'
                },
                passTitle: 'titlePass',
                stage: {
                    question: 'question',
                    stage_details: 'stage_details'
                },
                forgot: {
                    title: 'forgotTitle',
                },
                piza: {
                    question: 'pizaQuestion',
                },
                profile: {
                    title: 'titlePro',
                    subtitle: 'subtitlePro',
                    alerts: 'alerts',
                    link: 'link',
                },
                cards: {
                    title: 'titleCards',
                    score: 'score',
                    text: 'cardsText',
                    subtitle: 'subtitleCards',
                    cardText: 'cardsInText',
                    button: 'cardsButton',
                    back: 'cardsBack',
                    first: {
                        title: 'soccerFirstCardTitle',
                        points: 'soccerFirstCardPoints',
                        backTitle: 'soccerFirstCardBackTitle'
                    },
                    second: {
                        title: 'soccerSecondCardTitle',
                        points: 'soccerSecondCardPoints',
                        backTitle: 'soccerSecondCardBackTitle'
                    }
                }
            },
            '5': {
                name: 'music',
                start_text: 'textMusic',
                subtitle: 'subtitleMusic',
                imageSubtitle: '/images/taglineMusic.png',
                background: '/images/backgroungMusic.png',
                startButton: 'startButton',
                sendButton: 'sendButton',
                prasim: 'prasim',
                firstPrize: {
                    title: 'firstPrizeTitleMusic',
                    text: 'firstPrizeTextMusic',
                    flippedText: 'firstPrizeFlippedTextMusic',
                },
                secondPrize: {
                    title: 'secondPrizeTitleMusic',
                    text: 'secondPrizeTextMusic',
                    flippedText: 'secondPrizeFlippedTextMusic'
                },
                thirdPrize: {
                    title: 'thirdPrizeTitleMusic',
                    text: 'thirdPrizeTextMusic',
                    flippedText: 'thirdPrizeFlippedTextMusic',
                },
                defaultStage: {
                    title: 'defaultStageTitleMusic',
                    question: 'defaultStageQuestionMusic',
                    option1: 'optionOneMusic',
                    option2: 'optionTwoMusic',
                    option3: 'optionThirdMusic',
                    option4: 'optionFourMusic',
                },
                nav: {
                    enter: 'enter',
                    prasim: 'navPrasim',
                    private: 'private',
                    contact_us: 'contactUs',
                    dis_connect: 'disConnect',
                    comp: 'comp',
                },
                footer: {
                    accociated: 'accociated',
                    terms: 'terms'
                },
                passTitle: 'titlePass',
                stage: {
                    question: 'question',
                    stage_details: 'stage_details'
                },
                forgot: {
                    title: 'forgotTitle',
                },
                piza: {
                    question: 'pizaQuestion',
                },
                profile: {
                    title: 'titlePro',
                    subtitle: 'subtitlePro',
                    alerts: 'alerts',
                    link: 'link',
                },
                cards: {
                    title: 'titleCards',
                    score: 'score',
                    text: 'cardsText',
                    subtitle: 'subtitleCards',
                    cardText: 'cardsInText',
                    button: 'cardsButton',
                    back: 'cardsBack',
                    first: {
                        title: 'soccerFirstCardTitle',
                        points: 'soccerFirstCardPoints',
                        backTitle: 'soccerFirstCardBackTitle'
                    },
                    second: {
                        title: 'soccerSecondCardTitle',
                        points: 'soccerSecondCardPoints',
                        backTitle: 'soccerSecondCardBackTitle'
                    }
                }
            }
        };
    }
    DataService.prototype.notifyOther = function (data) {
        if (data) {
            this.notify.next(data);
        }
    };
    DataService.prototype.getText = function (key) {
        if (key == undefined)
            return "";
        return this.translations.translate(key, this.currentLanguage.type);
    };
    // <editor-fold desc="User Requests">
    DataService.prototype.getchallengesDataByIndex = function (challengesDataIndex) {
        return this.http
            .get(this.baseUrl + 'challengesData/' + challengesDataIndex)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DataService.prototype.getPisaQuestion = function (categoryId, level) {
        var queryParams = '?user_id=' + this.getCookieObject("user") + '&category=' + categoryId + '&level=' + level + '&language=' + this.getCookieObject('language');
        return this.http
            .get(this.baseUrl + 'pisa/get/' + queryParams)
            .toPromise()
            .then(function (res) {
            var response = res.json();
            if (response.success) {
                return response.pisaObj;
            }
            else {
                console.log(response.message);
            }
        })
            .catch(this.handleError);
    };
    DataService.prototype.getContest = function (type) {
        var _this = this;
        return this.http.get(this.baseUrl + 'contest/' + type, { headers: this.headers }).toPromise()
            .then(function (res) {
            _this.contest = JSON.parse(res['_body']);
            _this.shouldShowConfirmTermsPopup();
            return JSON.parse(res['_body']);
        }).catch(this.handleError);
    };
    //Joining contest by updating the userDB with the context_index.
    DataService.prototype.joinContest = function () {
        var _this = this;
        return this.http.post(this.baseUrl + 'joinContest', { user_id: this.user._id, contest_index: this.type }, { headers: this.headers }).toPromise()
            .then(function (res) {
            _this.getUser(_this.getCookieObject('user'));
            _this.showConfirmTerms = false;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getUser = function (user_id) {
        var _this = this;
        return this.http.get(this.baseUrl + 'user/' + user_id, { headers: this.headers }).toPromise()
            .then(function (res) {
            _this.user = Object.assign(new UserDataModel_1.default, JSON.parse(res['_body']));
            _this.saveUser();
            return _this.user;
        }).catch(this.handleError);
    };
    DataService.prototype.getContestUserNotification = function (user_id, contest) {
        var queryParams = '?user_id=' + user_id + '&contest_id=' + contest;
        return this.http.get(this.baseUrl + 'contestUserNotifications/' + queryParams, { headers: this.headers }).toPromise()
            .then(function (res) {
            return JSON.parse(res['_body']);
        }).catch(this.handleError);
    };
    DataService.prototype.saveUser = function () {
        this.setCookieObject('user', this.user._id);
    };
    DataService.prototype.createUser = function (user) {
        var _this = this;
        return this.http
            .post(this.baseUrl + 'user', { user: user, contest: this.contest }, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            JSON.parse(res['_body']);
            _this.user = Object.assign(new UserDataModel_1.default, JSON.parse(res['_body']));
            if (!_this.user.isEmpty()) {
                _this.saveUser();
                return _this.user;
            }
        }).catch(this.handleError);
    };
    DataService.prototype.getGroup = function (group_id) {
        var queryParams = '?group_id=' + group_id + '&contest_id=' + this.contest._id;
        return this.http
            .get(this.baseUrl + 'group/' + queryParams, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return JSON.parse(res['_body']);
        }).catch(this.handleError);
    };
    DataService.prototype.createGroup = function () {
        var _this = this;
        return this.http.post(this.baseUrl + 'createGroup', { user: this.user, contest: this.contest }, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return _this.getUser(_this.getCookieObject('user'));
        }).catch(this.handleError);
    };
    DataService.prototype.leaveGroup = function (groupId) {
        var userId = this.user._id;
        var url = this.baseUrl + "user/" + userId + "/group/" + groupId;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return JSON.parse(res['_body']);
        }).catch(this.handleError);
    };
    DataService.prototype.getUserGroups = function () {
        var userId = this.user._id;
        if (!userId) {
            return;
        }
        var url = this.baseUrl + "user/" + userId + "/groups";
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return res.json();
        }).catch(this.handleError);
    };
    DataService.prototype.saveViralLink = function (viralLink) {
        this._cookieService.put('vl', btoa(viralLink));
    };
    DataService.prototype.getViralLink = function () {
        var link = this._cookieService.get('vl');
        if (link) {
            try {
                link = atob(link);
            }
            catch (error) {
                link = '';
            }
        }
        return link;
    };
    DataService.prototype.clearViralLink = function () {
        this._cookieService.remove('vl');
    };
    DataService.prototype.login = function (userLoginDetails) {
        var _this = this;
        //chceks if should show confirm terms popup.
        return this.http
            .post(this.baseUrl + 'user/login', userLoginDetails, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            JSON.parse(res['_body']);
            _this.user = Object.assign(new UserDataModel_1.default, JSON.parse(res['_body']));
            _this.saveUser();
            _this.shouldShowConfirmTermsPopup();
            return _this.user;
        }).catch(this.handleError);
    };
    DataService.prototype.loginFromFacebook = function (user) {
        //chceks if should show confirm terms popup.
        var _this = this;
        return this.http
            .post(this.baseUrl + 'user/loginFacebook', { user: user }, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            JSON.parse(res['_body']);
            _this.user = Object.assign(new UserDataModel_1.default, JSON.parse(res['_body']));
            _this.saveUser();
            _this.shouldShowConfirmTermsPopup();
            return _this.user;
        }).catch(this.handleError);
    };
    DataService.prototype.fbLogoutUser = function (cb) {
        var that = this;
        FB.getLoginStatus(function (response) {
            if (response && response.status === 'connected') {
                FB.logout(function (response) {
                    delete that['facebookUser'];
                    return cb();
                });
            }
        });
    };
    DataService.prototype.getCookieObject = function (key) {
        return this._cookieService.getObject(key);
    };
    DataService.prototype.setCookieObject = function (key, value) {
        return this._cookieService.putObject(key, value);
    };
    DataService.prototype.removeCookieObject = function (key) {
        return this._cookieService.remove(key);
    };
    DataService.prototype.changeLanguage = function () {
        if (this.currentLanguage.type === 'he') {
            this.currentLanguage.type = 'ar';
        }
        else if (this.currentLanguage.type === 'ar') {
            this.currentLanguage.type = 'he';
        }
        this.setCookieObject('language', this.currentLanguage.type);
        this.sendGoogleTagEventLang(this.currentLanguage.type);
    };
    DataService.prototype.showLoginPopup = function () {
        this.showPopupSign = false;
        this.showPopup = true;
    };
    DataService.prototype.showSignupPopup = function () {
        this.showPopup = false;
        this.showPopupSign = true;
    };
    DataService.prototype.showContacPopup = function () {
        this.showPopupContac = true;
        this.showPopupSign = false;
        this.showPopup = false;
    };
    DataService.prototype.copy = function (text) {
        var textArea = $('<textarea></textarea>');
        textArea.css.visibility = 'hidden';
        textArea.val(text);
        $(document.body).append(textArea);
        textArea.select();
        var successful = document.execCommand('copy');
        if (successful === true) {
            this.showMessagePopup = true;
            this.alertMessage = "הלינק הועתק בהצלחה";
            this.alertSubMessage = "";
            textArea.remove();
        }
    };
    /**
     *
     * The function checkes if contest_stages.contest_index is different than  this.type (game).
     * when there is a differnce bewteen the two - it should show the confirm terms popup.
     * @memberof DataService
     */
    DataService.prototype.shouldShowConfirmTermsPopup = function () {
        //checks if the user is logged in.
        if (!this.user.isEmpty() && this.user.contest_stages) {
            var found = false;
            for (var index in this.user.contest_stages) {
                if (this.user.contest_stages[index].contest_index === Number(this.type)) {
                    found = true;
                }
            }
            if (!found) {
                //this will show the confirm terms popup.
                this.showConfirmTerms = true;
            }
        }
    };
    DataService.prototype.forgotPassword = function (user_email) {
        var that = this;
        return this.http
            .post(this.baseUrl + 'user/forgot', { email: user_email }, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return JSON.parse(res['_body']);
        }).catch(this.handleError);
    };
    DataService.prototype.questionAnswered = function (answer) {
        var _this = this;
        return this.http.post(this.baseUrl + 'stage/answer', answer, { headers: this.headers })
            .toPromise().then(function (res) {
            var resp = JSON.parse(res['_body']);
            if (resp.continue == 'any' && JSON.parse(resp.increased)) {
                _this.user = Object.assign(new UserDataModel_1.default, resp.data);
                //this.saveUser();
                return { result: resp.result, user: _this.user, continue: resp.continue, resp: resp };
            }
            else {
                if (JSON.parse(resp.increased)) {
                    _this.user = Object.assign(new UserDataModel_1.default, resp.data);
                    //this.saveUser();
                    return { result: resp.result, user: _this.user, continue: resp.continue, resp: resp };
                }
                return { result: resp.result, data: resp.data, continue: resp.continue, resp: resp };
            }
        }).catch(this.handleError);
    };
    DataService.prototype.changePassword = function (userDetails) {
        var _this = this;
        return this.http.post(this.baseUrl + 'user/changePassword', userDetails, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            JSON.parse(res['_body']);
            _this.user = Object.assign(new UserDataModel_1.default, JSON.parse(res['_body']));
            //this.saveUser();
            return _this.user;
        })
            .catch(this.handleError);
    };
    DataService.prototype.sendContactUsForm = function (formData) {
        return this.http.post(this.baseUrl + 'notification/sendContactUsForm', formData, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var response = res.json();
            return response.success;
        })
            .catch(this.handleError);
    };
    DataService.prototype.logOut = function () {
        if (this.getCookieObject('user'))
            this.removeCookieObject('user');
        this.user = new UserDataModel_1.default();
        this.user.email = '';
        //Re-route to home page
        this.router.navigate(['']);
        // TODO: logout social users..
        //Facebook
        this.fbLogoutUser(function () { });
        //Google+
        // var auth2 = gapi.auth2.getAuthInstance();
        // auth2.signOut().then(function () {
        //   console.log('User signed out.');
        // });
    };
    DataService.prototype.getPisaQuestionsForLevel = function (level) {
        var lang = this.getCookieObject('language');
        var endpoint = "pisa/list?level=" + level + "&lang=" + lang;
        return this.http.get(this.baseUrl + endpoint, { headers: this.headers })
            .toPromise().then(function (res) {
            var response = res.json();
            return response;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getPisaQuestionById = function (id) {
        var endpoint = "pisa/" + id;
        return this.http.get(this.baseUrl + endpoint, { headers: this.headers })
            .toPromise().then(function (res) {
            var response = res.json();
            return response;
        })
            .catch(this.handleError);
    };
    DataService.prototype.updateUserPhoneNumber = function () {
        var _this = this;
        return this.http.post(this.baseUrl + 'user/updatePhone', this.user, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            _this.user = Object.assign(new UserDataModel_1.default, JSON.parse(res['_body']));
            _this.saveUser();
        }).catch(this.handleError);
    };
    DataService.prototype.checkPisaQuestion = function (questionId, answers, card_index) {
        var url = this.baseUrl + "pisa/check/" + questionId;
        var body = {
            user_id: this.getCookieObject('user'),
            answers: answers,
            user: this.user,
            contest: this.contest,
            card_index: card_index ? card_index : ''
        };
        return this.http.post(url, body, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var response = res.json();
            return response;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getChallengeName = function () {
        var categoryName;
        switch (this.type) {
            case '1':
                categoryName = 'אתגר הכדורגל';
                break;
            case '2':
                categoryName = 'אתגר העיצוב';
                break;
            case '3':
                categoryName = 'אתגר הטכנולוגיה';
                break;
            case '4':
                categoryName = 'האתגר החברתי';
                break;
            case '5':
                categoryName = 'אתגר המוזיקה';
                break;
            default:
                categoryName = 'אתגר הכדורגל';
                break;
        }
        return categoryName;
    };
    DataService.prototype.sendAnalyticsEvent = function (category, action, label, value) {
        // ga('send', 'event', {
        //   eventCategory: category,
        //   eventAction: action,
        //   eventLabel: label,
        //   eventValue: value ? value : this.user._id
        // });
        action = action ? this.replaceAllSpaces(action) : '';
        label = label ? this.replaceAllSpaces(label) : '';
        category = category ? this.replaceAllSpaces(category) : '';
        window.dataLayer.push({ 'Category': category, 'Action': action, 'Label': label, 'event': value ? value : this.user._id });
    };
    DataService.prototype.sendGoogleTagEventUID = function (uid, event) {
        window.dataLayer.push({ 'UID': uid, 'event': event });
    };
    DataService.prototype.sendGoogleTagEventLang = function (lang) {
        window.dataLayer.push({ 'LANGUAGE': lang, 'event': 'LANGUAGE' });
    };
    DataService.prototype.sendGoogleTagVirtualPage = function (stagenumber, stagename, stagemininame) {
        stagename = stagename ? this.replaceAllSpaces(stagename) : '';
        stagemininame = stagemininame ? this.replaceAllSpaces(stagemininame) : '';
        window.dataLayer.push({
            'virtual_page': 'virtual/' + stagenumber + (stagename ? ('/' + stagename) : '') + (stagemininame ? ('/' + stagemininame) : ''),
            'event': 'virtual_page'
        });
    };
    DataService.prototype.replaceAllSpaces = function (str) {
        return str.split(' ').join('_');
    };
    DataService.prototype.saveMissionProgress = function (answered, earnedPoints) {
        var userId = this.user._id;
        if (!userId) {
            throw new Error('no user c');
        }
        var url = this.baseUrl + "contest/" + userId + "/mission";
        var body = {
            answered: answered,
            earnedPoints: earnedPoints
        };
        return this.http.post(url, body, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var response = res.json();
            console.log('saved progress');
            return response;
        })
            .catch(function (err) {
            console.error('mission progress save error', err);
        });
    };
    DataService.prototype.getMissionProgress = function () {
        var userId = this.user._id;
        if (!userId) {
            throw new Error('no user c');
        }
        var url = this.baseUrl + "contest/" + userId + "/mission";
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var response = res.json();
            return response;
        })
            .catch(function (err) {
            console.error('mission progress get error', err);
        });
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof core_2.CookieService !== "undefined" && core_2.CookieService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], DataService);
exports.DataService = DataService;
var _a, _b, _c;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { CookieService } from 'angular2-cookie/core';
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
// import { DataService } from './data.service';
var translations_1 = __webpack_require__("../../../../../src/app/Translations/translations.ts");
exports.version = "1.0.0";
exports.isDesktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var GlobalsService = (function () {
    function GlobalsService() {
        this.translations = translations_1.Translations;
    }
    return GlobalsService;
}());
GlobalsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], GlobalsService);
exports.GlobalsService = GlobalsService;
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/Components/General/app.module.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
// Enable production mode unless running locally
// if (!/localhost/.test(document.location.host)) {
core_1.enableProdMode();
// }
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map