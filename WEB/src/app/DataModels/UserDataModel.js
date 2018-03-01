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