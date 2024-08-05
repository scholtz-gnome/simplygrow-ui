import { FC } from 'react';
import Heading from '../heading';
import styles from './modal-header.module.css';

interface ModalHeaderProps {
  headerText?: string;
}

const ModalHeader: FC<ModalHeaderProps> = ({ headerText }) => {
  return <header className={styles.modalHeader}>{!!headerText && <Heading order={2}>{headerText}</Heading>}</header>;
};

export default ModalHeader;
