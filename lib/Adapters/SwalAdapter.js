"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var sweetalert2_1 = require("sweetalert2");
var SwalAdapter = /** @class */ (function () {
    function SwalAdapter() {
    }
    SwalAdapter.prototype.close = function (instance) {
        sweetalert2_1.default.close();
    };
    SwalAdapter.prototype.show = function (instance, extraConfig) {
        if (extraConfig === void 0) { extraConfig = {}; }
        var config = {
            title: instance.getTitle(),
            html: instance.getMessage()
        };
        if (instance.getType() == types_1.ModalType.TOAST) {
            config.toast = true;
        }
        if (instance.getScope() != undefined) {
            config.icon = instance.getScope();
        }
        if (instance.getCancelButtonText() != undefined) {
            config.cancelButtonColor = '#d33';
            config.showCancelButton = true;
            config.cancelButtonText = instance.getCancelButtonText();
        }
        if (instance.getSuccessButtonText() != undefined) {
            config.confirmButtonText = instance.getSuccessButtonText();
        }
        sweetalert2_1.default.fire(Object.assign(config, extraConfig)).then(function (res) {
            if (res.value && instance.getSuccessCallback() != undefined) {
                instance.getSuccessCallback()();
            }
            else {
                if (instance.getCancelCallback() != undefined) {
                    instance.getCancelCallback()();
                }
            }
        });
    };
    return SwalAdapter;
}());
exports.default = SwalAdapter;
