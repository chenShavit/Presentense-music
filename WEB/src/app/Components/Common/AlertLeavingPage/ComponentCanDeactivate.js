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