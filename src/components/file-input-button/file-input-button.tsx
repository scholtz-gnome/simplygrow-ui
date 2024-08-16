import { ChangeEvent, Dispatch, FC, ReactNode, SetStateAction, useContext } from 'react';
import ThemeContext from '../../context';
import styles from './file-input-button.module.css';

interface FileSelectButtonProps {
  id?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  setFile: Dispatch<SetStateAction<File | undefined>>;
  disabled?: boolean;
}

const FileInputButton: FC<FileSelectButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  setFile,
  id = 'file-upload',
  disabled,
}) => {
  const theme = useContext(ThemeContext);

  const variantStyles = variant === 'primary' ? styles.primaryVariant : styles.secondaryVariant;
  const fullWidthStyles = fullWidth ? styles.fullWidth : '';
  let labelThemeStyles = '';
  const disabledStyles = disabled ? styles.disabledCommon : undefined;

  switch (theme) {
    case 'peopleflow':
      if (variant === 'primary') {
        labelThemeStyles = disabled ? styles.peopleflowThemePrimaryLabelDisabled : styles.peopleflowThemePrimaryLabel;
      } else {
        labelThemeStyles = disabled
          ? styles.peopleflowThemeSecondaryLabelDisabled
          : styles.peopleflowThemeSecondaryLabel;
      }
      break;
    case 'worklight':
      if (variant === 'primary') {
        labelThemeStyles = disabled ? styles.worklightThemePrimaryLabelDisabled : styles.worklightThemePrimaryLabel;
      } else {
        labelThemeStyles = disabled ? styles.worklightThemeSecondaryLabelDisabled : styles.worklightThemeSecondaryLabel;
      }
      break;
    case 'skillbook':
      if (variant === 'primary') {
        labelThemeStyles = disabled ? styles.skillbookThemePrimaryLabelDisabled : styles.skillbookThemePrimaryLabel;
      } else {
        labelThemeStyles = disabled ? styles.skillbookThemeSecondaryLabelDisabled : styles.skillbookThemeSecondaryLabel;
      }
      break;
    case undefined:
      if (variant === 'primary') {
        labelThemeStyles = disabled ? styles.defaultThemePrimaryLabelDisabled : styles.defaultThemePrimaryLabel;
      } else {
        labelThemeStyles = disabled ? styles.defaultThemeSecondaryLabelDisabled : styles.defaultThemeSecondaryLabel;
      }
      break;
  }

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!!e.target.files?.length) {
      const file = e.target.files[0];
      setFile(file);
    }
  };

  return (
    <div className={styles.fileSelectButton}>
      <input
        disabled={disabled}
        className={styles.fileSelectInput}
        onChange={(e) => handleFileChange(e)}
        type={'file'}
        id={id}
      />

      <label
        htmlFor={id}
        className={`${styles.commonStyles} ${labelThemeStyles} ${variantStyles} ${fullWidthStyles} ${styles.labelCommon} ${disabledStyles}`}
      >
        {children}
      </label>
    </div>
  );
};

export default FileInputButton;
