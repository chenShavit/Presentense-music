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
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], InputSearch);
exports.InputSearch = InputSearch;
//  <span #mathAnswers>x=1 </span>
// <span #mathAnswers>x=2 </span>
// <span #mathAnswers>x=3 </span> 
//# sourceMappingURL=pipe-find-input.js.map