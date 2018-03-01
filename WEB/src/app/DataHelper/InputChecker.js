/**
 * Created by nicom on 9/3/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InputChecker = (function () {
    function InputChecker() {
    }
    InputChecker.EmailCheck = function (email) {
        if (email === '') {
            return false;
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return InputChecker;
}());
exports.default = InputChecker;
//# sourceMappingURL=InputChecker.js.map