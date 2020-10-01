"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var SwalAdapter_1 = require("./Adapters/SwalAdapter");
var Modal = /** @class */ (function () {
    /*--------------------- from built-in(a) to user-defined(z)
    |       METHODS       |
    ----------------------*/
    /**
     * Singleton, constructor set to private.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    function Modal(adapter) {
        /**
         * The action to execute after click on modal danger button.
         *
         * @author Daniele Tulone <danieletulone.work@gmail.com>
         */
        this.cancelCallback = function () { };
        /**
         * @author Daniele Tulone <danieletulone.work@gmail.com>
         */
        this.cancelButtonText = undefined;
        /**
         * The message of modal, typically the description of the title.
         *
         * @author Daniele Tulone <danieletulone.work@gmail.com>
         */
        this.message = undefined;
        /**
         * @author Daniele Tulone <danieletulone.work@gmail.com>
         */
        this.successButtonText = undefined;
        /**
         * The action to execute after click on modal success button
         *
         * @author Daniele Tulone <danieletulone.work@gmail.com>
         */
        this.successCallback = function () { };
        /**
         * The title to show at the top of modal.
         *
         * @author Daniele Tulone <danieletulone.work@gmail.com>
         */
        this.title = undefined;
        this.adapter = adapter;
    }
    Modal.close = function () {
        Modal.instance.adapter.close(Modal.instance);
    };
    /**
     * Create a new instance of Modal, reset previous instance
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    Modal.create = function (adapter) {
        if (adapter === void 0) { adapter = new SwalAdapter_1.default; }
        this.instance = new this(adapter);
        return this.instance;
    };
    /**
     * Show modal.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    Modal.prototype.show = function (moreConfig) {
        if (moreConfig === void 0) { moreConfig = {}; }
        var instance = this.getInstance();
        this.adapter.show(instance, moreConfig);
        return this;
    };
    Modal.showNoSaveData = function (callback) {
        Modal.create()
            .setScope(types_1.ModalScope.WARNING)
            .setTitle('Dati non salvati')
            .setMessage('Sicuro di voler continuare?')
            .setOnSuccess(callback)
            .setOnCancel()
            .show();
    };
    Modal.showSuccess = function (title, callback) {
        if (callback === void 0) { callback = function () { }; }
        Modal.create()
            .setScope(types_1.ModalScope.SUCCESS)
            .setTitle(title)
            .setOnSuccess(callback, 'Chiudi')
            .show();
    };
    Modal.showError = function (title, message, callback) {
        if (message === void 0) { message = ''; }
        if (callback === void 0) { callback = function () { }; }
        Modal.create()
            .setScope(types_1.ModalScope.ERROR)
            .setTitle(title)
            .setMessage(message)
            .setOnSuccess(callback, 'Chiudi')
            .show();
    };
    /*--------------------- from get(A) -> get(Z)
    |       GETTERS       |
    ----------------------*/
    /**
     * Get the instance to use.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    Modal.prototype.getInstance = function () {
        return Modal.instance || (Modal.instance = Modal.create());
    };
    Modal.prototype.getCancelCallback = function () {
        return this.cancelCallback;
    };
    Modal.prototype.getCancelButtonText = function () {
        return this.cancelButtonText;
    };
    Modal.prototype.getMessage = function () {
        return this.message;
    };
    Modal.prototype.getScope = function () {
        return this.scope;
    };
    Modal.prototype.getSuccessButtonText = function () {
        return this.successButtonText;
    };
    Modal.prototype.getSuccessCallback = function () {
        return this.successCallback;
    };
    Modal.prototype.getTitle = function () {
        return this.title;
    };
    Modal.prototype.getType = function () {
        return this.type;
    };
    /*--------------------- from set(A) -> set(Z)
    |       SETTERS       |
    ----------------------*/
    /**
     * Set the message.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     * @param message
     */
    Modal.prototype.setMessage = function (message) {
        this.getInstance().message = message;
        return this;
    };
    Modal.prototype.setOnCancel = function (callback, buttonText) {
        if (callback === void 0) { callback = function () { }; }
        if (buttonText === void 0) { buttonText = 'No'; }
        this.getInstance().cancelCallback = callback;
        this.getInstance().cancelButtonText = buttonText;
        return this;
    };
    Modal.prototype.setOnSuccess = function (callback, buttonText) {
        if (buttonText === void 0) { buttonText = 'Si'; }
        this.getInstance().successCallback = callback;
        this.getInstance().successButtonText = buttonText;
        return this;
    };
    /**
     * Set the scope. Success, warning, etc.
     * If setted at the top of title modal will be an icon.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     * @param mode
     */
    Modal.prototype.setScope = function (scope) {
        this.getInstance().scope = scope;
        return this;
    };
    /**
     * Set the title.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     * @param title
     */
    Modal.prototype.setTitle = function (title) {
        this.getInstance().title = title;
        return this;
    };
    /**
     * Set the type of modal. Toast, model, etc.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     * @param type
     */
    Modal.prototype.setType = function (type) {
        this.getInstance().type = type;
        return this;
    };
    return Modal;
}());
exports.default = Modal;
