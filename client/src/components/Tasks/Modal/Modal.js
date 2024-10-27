import React from "react";
import { VscClose } from "react-icons/vsc";
import { Dialog } from "@headlessui/react";

import styles from "./modal.module.css";

function Modal({ title, description, isOpen, handleDismiss, children }) {
  return (
    <Dialog className={styles.wrapper} open={isOpen} onClose={handleDismiss}>
      <div className={styles.backdrop} onClick={handleDismiss} />
      <Dialog.Panel className={styles.dialog}>
        <button className={styles.closeBtn} onClick={handleDismiss}>
          <VscClose />
        </button>

        <Dialog.Title>{title}</Dialog.Title>
        {description && <Dialog.Description>{description}</Dialog.Description>}
        {children}
      </Dialog.Panel>
    </Dialog>
  );
}

export default Modal;
