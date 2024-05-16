import * as React from "react";
import { Modal } from "react-bootstrap";
import HubSpotForm from "./HubSpotForm";

interface FormModalProp {
  formId: string;
  showModal: boolean;
  hideModal: () => void;
}

const FormModal = ({ showModal, hideModal, formId }: FormModalProp) => {

    return (
        <Modal
            show={showModal}
            onHide={() => hideModal() }
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Get A Free Estimate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <HubSpotForm formId={formId} />
            </Modal.Body>
        </Modal>
    );
}

export default FormModal;
