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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
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
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], GGBInit);
exports.GGBInit = GGBInit;
//# sourceMappingURL=pipe-init-ggb.js.map