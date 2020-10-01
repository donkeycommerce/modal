import Modal from '../Modal'

interface ModalAdapterInterface {
    /**
     * Close current modal.
     * 
     * @param instance
     */
    close(instance: Modal): void

    /**
     * Show new modal.
     * 
     * @param instance 
     */
    show(instance: Modal, extraConfig: any): void
}

export default ModalAdapterInterface