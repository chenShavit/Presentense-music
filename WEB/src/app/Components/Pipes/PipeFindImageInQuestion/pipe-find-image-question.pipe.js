"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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