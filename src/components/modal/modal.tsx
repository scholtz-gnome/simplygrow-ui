import { FC, ReactNode } from 'react';
import ModalHeader from './modal-header';
import styles from './modal.module.css';

interface ModalProps {
  headerText?: string;
  header?: boolean;
  open?: boolean;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ headerText, header = false, open = false, children }) => {
  return (
    <dialog open={open} className={styles.modal}>
      <div className={styles.content}>
        {(header || headerText) && <ModalHeader headerText={headerText} />}

        <div className={styles.children}>{children}</div>
      </div>
    </dialog>
  );
};

export default Modal;
