"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalScope = exports.ModalType = void 0;
var ModalType;
(function (ModalType) {
    ModalType["MESSAGE"] = "message";
    ModalType["TOAST"] = "toast";
})(ModalType = exports.ModalType || (exports.ModalType = {}));
var ModalScope;
(function (ModalScope) {
    ModalScope["WARNING"] = "warning";
    ModalScope["SUCCESS"] = "success";
    ModalScope["ERROR"] = "error";
})(ModalScope = exports.ModalScope || (exports.ModalScope = {}));
exports.default = {
    ModalScope: ModalScope,
    ModalType: ModalType
};
