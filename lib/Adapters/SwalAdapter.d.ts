import Modal from "../Modal";
import ModalAdapterInterface from "./ModalAdapterInterface";
declare class SwalAdapter implements ModalAdapterInterface {
    close(instance: Modal): void;
    show(instance: Modal, extraConfig?: any): void;
}
export default SwalAdapter;
