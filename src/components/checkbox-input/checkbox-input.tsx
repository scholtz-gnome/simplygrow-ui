import { FC, ReactNode } from 'react';
import styles from './checkbox-input.module.css';

interface CheckboxInputProps {
  id: string;
  children: ReactNode;
}

const CheckboxInput: FC<CheckboxInputProps> = ({ id, children }) => {
  return (
    <label htmlFor={id} className={styles.checkboxRadio}>
      <input type={'checkbox'} id={id} name={id} />

      {children}
    </label>
  );
};

export default CheckboxInput;
