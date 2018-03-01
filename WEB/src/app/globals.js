'use strict';
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
var core_1 = require("@angular/core");
// import { DataService } from './data.service';
var translations_1 = require("./Translations/translations");
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