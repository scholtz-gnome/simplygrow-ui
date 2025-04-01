import { BaseSyntheticEvent, Dispatch, FC, SetStateAction, useContext, useState } from 'react';
import ThemeContext from '../../context';
import { formatIDNumber } from '../../utils/format-id-number.util';
import { formatMobile } from '../../utils/format-mobile.util';
import styles from './input.module.css';

interface InputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  id: string;
  type?: 'text' | 'email' | 'radio' | 'password' | 'id' | 'mobile';
  placeholder?: string;
  required?: boolean;
  label?: string;
  minLength?: number;
  customValidator?: (input: string) => boolean;
}

const Input: FC<InputProps> = ({
  value,
  setValue,
  id,
  placeholder,
  type = 'text',
  label,
  required = false,
  minLength = 10,
  customValidator,
}) => {
  const [valid, setValid] = useState(false);
  const theme = useContext(ThemeContext);

  let themeStyles = '';
  let invalidStyles = '';

  switch (theme) {
    case 'peopleflow':
      invalidStyles = valid ? styles.peopleflowThemeValid : styles.invalid;
      themeStyles = styles.peopleflowTheme;
      break;
    case 'worklight':
      invalidStyles = valid ? styles.worklightThemeValid : styles.invalid;
      themeStyles = styles.worklightTheme;
      break;
    case 'skillbook':
      invalidStyles = valid ? styles.skillbookThemeValid : styles.invalid;
      themeStyles = styles.skillbookTheme;
      break;
    case undefined:
      invalidStyles = valid ? styles.defaultThemeValid : styles.invalid;
      themeStyles = styles.defaultTheme;
      break;
  }

  const handleInput = (e: BaseSyntheticEvent) => {
    const providedValue = e.target.value;

    if (customValidator) {
      const isValid = customValidator(providedValue);
      setValid(isValid);
    } else {
      setValid(e.target.validity.valid);
    }

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
        className={`${styles.input} ${invalidStyles} ${themeStyles}`}
        required={required}
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
