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
var core_2 = require("@angular/core");
// Import the application components and services.
var clip_board_1 = require("../ClipboardService/clip-board");
// This directive acts as a simple glue layer between the given [clipboard] property
// and the underlying ClipboardService. Upon the (click) event, the [clipboard] value
// will be copied to the ClipboardService and a (clipboardCopy) event will be emitted.
var ClipboardDirective = (function () {
    // I initialize the clipboard directive.
    function ClipboardDirective(clipboardService) {
        this.clipboardService = clipboardService;
        this.copyEvent = new core_2.EventEmitter();
        this.errorEvent = new core_2.EventEmitter();
        this.value = "";
    }
    // ---
    // PUBLIC METODS.
    // ---
    // I copy the value-input to the Clipboard. Emits success or error event.
    ClipboardDirective.prototype.copyToClipboard = function () {
        var _this = this;
        this.clipboardService
            .copy(this.value)
            .then(function (value) {
            _this.copyEvent.emit(value);
        })
            .catch(function (error) {
            _this.errorEvent.emit(error);
        });
    };
    return ClipboardDirective;
}());
ClipboardDirective = __decorate([
    core_1.Directive({
        selector: "[clipboard]",
        inputs: ["value: clipboard"],
        outputs: [
            "copyEvent: clipboardCopy",
            "errorEvent: clipboardError"
        ],
        host: {
            "(click)": "copyToClipboard()"
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof clip_board_1.ClipboardService !== "undefined" && clip_board_1.ClipboardService) === "function" && _a || Object])
], ClipboardDirective);
exports.ClipboardDirective = ClipboardDirective;
var _a;
//# sourceMappingURL=clip-board-directive.js.map