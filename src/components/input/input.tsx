'use client';
import { BaseSyntheticEvent, Dispatch, FC, SetStateAction } from 'react';
import { formatIDNumber } from '../../utils/format-id-number.util';
import { formatMobile } from '../../utils/format-mobile.util';
import styles from './input.module.css';

interface InputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  id: string;
  type?: 'text' | 'email' | 'radio' | 'password' | 'id' | 'mobile';
  placeholder?: string;
  label?: string;
}

const Input: FC<InputProps> = ({ value, setValue, id, placeholder, type = 'text', label }) => {
  const handleInput = (e: BaseSyntheticEvent) => {
    const providedValue = e.target.value;

    let formattedValue = providedValue.trim();

    if (type === 'id') {
      formattedValue = formatIDNumber(providedValue);
    } else if (type === 'mobile') {
      formattedValue = formatMobile(providedValue);
    } else {
      formattedValue = providedValue;
    }

    setValue(formattedValue);
  };

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className={styles.input}
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        onChange={handleInput}
        value={value}
      />
    </div>
  );
};

export default Input;
