import ModalAdapterInterface from './Adapters/ModalAdapterInterface';
import { ModalScope, ModalType } from './types';
declare class Modal {
    private adapter;
    /**
     * The action to execute after click on modal danger button.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private cancelCallback;
    /**
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private cancelButtonText;
    /**
     * The instance. Modal is a singleton.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private static instance;
    /**
     * The message of modal, typically the description of the title.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private message;
    /**
     * The mode of model. Indicates the scope of modal.
     * Success, warnign, danger.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private scope;
    /**
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private successButtonText;
    /**
     * The action to execute after click on modal success button
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private successCallback;
    /**
     * The title to show at the top of modal.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private title;
    /**
     * The type of modal. If is a toast or simple modal
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private type;
    /**
     * Singleton, constructor set to private.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private constructor();
    /**
     * Create a new instance of Modal, reset previous instance
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    static create(adapter?: ModalAdapterInterface): Modal;
    /**
     * Show modal.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    show(moreConfig?: {}): this;
    static showNoSaveData(callback: Function): void;
    static showSuccess(title: string, callback?: Function): void;
    static showError(title: string, message?: string, callback?: Function): void;
    /**
     * Get the instance to use.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    getInstance(): Modal;
    getCancelCallback(): Function;
    getCancelButtonText(): string;
    getMessage(): string;
    getScope(): ModalScope;
    getSuccessButtonText(): string;
    getSuccessCallback(): Function;
    getTitle(): string;
    getType(): ModalType;
    /**
     * Set the message.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     * @param message
     */
    setMessage(message: string): this;
    setOnCancel(callback?: Function, buttonText?: string): this;
    setOnSuccess(callback: Function, buttonText?: string): this;
    /**
     * Set the scope. Success, warning, etc.
     * If setted at the top of title modal will be an icon.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     * @param mode
     */
    setScope(scope: ModalScope): this;
    /**
     * Set the title.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     * @param title
     */
    setTitle(title: string): this;
    /**
     * Set the type of modal. Toast, model, etc.
     *
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     * @param type
     */
    setType(type: ModalType): this;
}
export default Modal;
