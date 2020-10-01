import { ModalType } from '../types'
import Modal from "../Modal"
import ModalAdapterInterface from "./ModalAdapterInterface"
import Swal, { SweetAlertOptions, SweetAlertResult }  from 'sweetalert2'

class SwalAdapter implements ModalAdapterInterface {
    public close(instance: Modal) {
        Swal.close()
    }

    public show(instance: Modal, extraConfig: any = {}) {
        let config: SweetAlertOptions = {
            title: instance.getTitle(),
            html: instance.getMessage()
        }

        if (instance.getType() == ModalType.TOAST) {
            config.toast = true
        }

        if (instance.getScope() != undefined) {
            config.icon = instance.getScope()
        }

        if (instance.getCancelButtonText() != undefined) {
            config.cancelButtonColor = '#d33'
            config.showCancelButton = true
            config.cancelButtonText = instance.getCancelButtonText()        
        }

        if (instance.getSuccessButtonText() != undefined) {
            config.confirmButtonText = instance.getSuccessButtonText()
        }

        Swal.fire(Object.assign(config, extraConfig)).then((res: SweetAlertResult) => {
            if (res.value && instance.getSuccessCallback() != undefined) {
                instance.getSuccessCallback()()
            } else {
                if (instance.getCancelCallback() != undefined) {
                    instance.getCancelCallback()()
                }
            }
        })
    }
}

export default SwalAdapter
