import { BaseSyntheticEvent, Dispatch, FC, SetStateAction, useContext } from 'react';
import ThemeContext from '../../context';
import styles from './textarea.module.css';

interface TextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;

  /**
   * Default to `false`.
   */
  required?: boolean;

  /** Default to `255`. */
  maxLength?: number;
}

const Textarea: FC<TextareaProps> = ({
  id,
  label,
  placeholder,
  value,
  setValue,
  required = false,
  maxLength = 255,
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
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        required={required}
        className={`${styles.textarea} ${themeStyles}`}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={handleInput}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Textarea;
