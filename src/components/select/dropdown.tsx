import { FC, ReactNode } from 'react';
import styles from './dropdown.module.css';

interface DropdownProps {
  children: ReactNode;
  focused: boolean;
  isValid: boolean;
}

const Dropdown: FC<DropdownProps> = ({ focused, children, isValid }) => {
  const validStyles = isValid ? styles.focused : styles.invalid;

  return <div className={`${styles.dropdown} ${focused ? validStyles : ''}`}>{children}</div>;
};

export default Dropdown;
