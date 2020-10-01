import ModalAdapterInterface   from './Adapters/ModalAdapterInterface'
import {ModalScope, ModalType} from './types'
import SwalAdapter             from './Adapters/SwalAdapter'

class Modal
{
    /*------------------------ from a -> z
    |       PROPERTIES       | 
    -------------------------*/

    private adapter: ModalAdapterInterface

    /**
     * The action to execute after click on modal danger button.
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private cancelCallback: Function|null = null

    /**
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private cancelButtonText: string|null = null

    /**
     * The instance. Modal is a singleton.
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private static instance: Modal

    /**
     * The message of modal, typically the description of the title.
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private message: string|null = null

    /**
     * The mode of model. Indicates the scope of modal.
     * Success, warnign, danger.
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private scope: ModalScope = ModalScope.SUCCESS

    /** 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private successButtonText: string|null = null

    /**
     * The action to execute after click on modal success button
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private successCallback: Function = (): void => {}

    /**
     * The title to show at the top of modal.
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private title: string|null = null

    /**
     * The type of modal. If is a toast or simple modal
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private type: ModalType = ModalType.MESSAGE

    /*--------------------- from built-in(a) to user-defined(z)
    |       METHODS       |
    ----------------------*/

    /**
     * Singleton, constructor set to private.
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    private constructor(adapter: ModalAdapterInterface) {
        this.adapter = adapter
    }

    /**
     * Create a new instance of Modal, reset previous instance
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    public static create(adapter: ModalAdapterInterface = new SwalAdapter) {
        this.instance = new this(adapter)

        return this.instance
    }

    /**
     * Show modal.
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    public show(moreConfig = {}): this {
        let instance = this.getInstance()

        this.adapter.show(instance, moreConfig)

        return this
    }

    public static showNoSaveData(callback: Function): void {
        Modal.create()
             .setScope(ModalScope.WARNING)
             .setTitle('Dati non salvati')
             .setMessage('Sicuro di voler continuare?')
             .setOnSuccess(callback)
             .setOnCancel()
             .show()
    }

    public static showSuccess(
        title: string, 
        callback: Function = () => {}
    ) {
        Modal.create()
             .setScope(ModalScope.SUCCESS)
             .setTitle(title)
             .setOnSuccess(callback, 'Chiudi')
             .show()
    }

    public static showError(
        title: string, 
        message: string = '',
        callback: Function = () => {}
    ) {
        Modal.create()
             .setScope(ModalScope.ERROR)
             .setTitle(title)
             .setMessage(message)
             .setOnSuccess(callback, 'Chiudi')
             .show()
    }

    /*--------------------- from get(A) -> get(Z)
    |       GETTERS       |
    ----------------------*/

    /**
     * Get the instance to use.
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     */
    public getInstance(): Modal {
        return Modal.instance || (Modal.instance = Modal.create())
    }

    public getCancelCallback(): Function {
        return this.cancelCallback;
    }

    public getCancelButtonText(): string {
        return this.cancelButtonText;
    }

    public getMessage(): string {
        return this.message;
    }

    public getScope(): ModalScope {
        return this.scope;
    }

    public getSuccessButtonText(): string {
        return this.successButtonText;
    }

    public getSuccessCallback(): Function {
        return this.successCallback;
    }

    public getTitle(): string {
        return this.title
    }

    public getType(): ModalType {
        return this.type;
    }

    /*--------------------- from set(A) -> set(Z)
    |       SETTERS       |
    ----------------------*/

    /**
     * Set the message.
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     * @param message
     */
    public setMessage(message: string): this {
        this.getInstance().message = message

        return this
    }

    public setOnCancel(
        callback: Function = () => {}, 
        buttonText: string = 'No'
    ): this {
        this.getInstance().cancelCallback = callback
        this.getInstance().cancelButtonText = buttonText

        return this
    }

    public setOnSuccess(
        callback: Function, 
        buttonText: string = 'Si'
    ): this {
        this.getInstance().successCallback = callback
        this.getInstance().successButtonText = buttonText

        return this
    }

    /**
     * Set the scope. Success, warning, etc.
     * If setted at the top of title modal will be an icon.
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     * @param mode 
     */
    public setScope(scope: ModalScope): this {
        this.getInstance().scope = scope
        
        return this
    }

    /**
     * Set the title.
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     * @param title
     */
    public setTitle(title: string): this {
        this.getInstance().title = title

        return this
    }

    /**
     * Set the type of modal. Toast, model, etc.
     * 
     * @author Daniele Tulone <danieletulone.work@gmail.com>
     * @param type 
     */
    public setType(type: ModalType): this {
        this.getInstance().type = type
        
        return this
    }    
}

export default Modal