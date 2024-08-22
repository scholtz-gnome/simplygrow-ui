import { BaseSyntheticEvent, Dispatch, FC, SetStateAction, useContext } from 'react';
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
}) => {
  const theme = useContext(ThemeContext);

  let themeStyles = '';

  switch (theme) {
    case 'peopleflow':
      themeStyles = styles.peopleflowTheme;
      break;
    case 'worklight':
      themeStyles = styles.worklightTheme;
      break;
    case 'skillbook':
      themeStyles = styles.skillbookTheme;
      break;
    case undefined:
      themeStyles = styles.defaultTheme;
      break;
  }

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
        className={`${styles.input} ${themeStyles}`}
        required={required}
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        onChange={handleInput}
        value={value}
        minLength={type === 'password' ? minLength : undefined}
        maxLength={type === 'password' ? undefined : 64}
      />
    </div>
  );
};

export default Input;
