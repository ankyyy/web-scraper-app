import React from 'react';
import { Modal } from 'react-bootstrap';

function Dialog({ show, onClose, message }) {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{message}</Modal.Title>
            </Modal.Header>
            {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        </Modal>
    );
}

export default Dialog;
