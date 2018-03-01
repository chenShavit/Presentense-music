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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var ClipboardService = (function () {
    function ClipboardService(dom) {
        this.dom = dom;
    }
    ClipboardService.prototype.copy = function (value) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var textarea = null;
            try {
                textarea = _this.dom.createElement("textarea");
                textarea.style.height = "0px";
                textarea.style.left = "-100px";
                textarea.style.opacity = "0";
                textarea.style.position = "fixed";
                textarea.style.top = "-100px";
                textarea.style.width = "0px";
                _this.dom.body.appendChild(textarea);
                // Set and select the value (creating an active Selection range).
                textarea.value = value;
                textarea.select();
                // Ask the browser to copy the current selection to the clipboard.
                _this.dom.execCommand("copy");
                resolve(value);
            }
            finally {
                // Cleanup - remove the Textarea from the DOM if it was injected.
                if (textarea && textarea.parentNode) {
                    textarea.parentNode.removeChild(textarea);
                }
            }
        });
        return (promise);
    };
    return ClipboardService;
}());
ClipboardService = __decorate([
    core_2.Injectable(),
    __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [Document])
], ClipboardService);
exports.ClipboardService = ClipboardService;
//# sourceMappingURL=clip-board.js.map