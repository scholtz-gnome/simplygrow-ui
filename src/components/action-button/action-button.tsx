import { ButtonHTMLAttributes, FC, ReactNode, useContext } from 'react';
import ThemeContext from '../../context/theme.context';
import styles from './action-button.module.css';

interface ActionButtonProps {
  onClick?: () => void;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children: ReactNode;
  disabled?: boolean;
}

const ActionButton: FC<ActionButtonProps & Partial<ButtonHTMLAttributes<HTMLButtonElement>>> = ({
  onClick,
  fullWidth = false,
  loading = false,
  variant = 'primary',
  disabled = false,
  type,
  children,
}) => {
  const theme = useContext(ThemeContext);

  const variantStyles = variant === 'primary' ? styles.primaryVariant : styles.secondaryVariant;
  const fullWidthStyles = fullWidth ? styles.fullWidth : '';
  const loadingStyles = loading ? styles.loadingStyles : '';
  const disabledStyles = disabled ? styles.disabledStyles : '';

  let themeStyles = '';

  switch (theme) {
    case 'peopleflow':
      if (variant === 'primary') {
        themeStyles = styles.peopleflowThemePrimary;
      } else {
        themeStyles = styles.peopleflowThemeSecondary;
      }
      break;
    case 'worklight':
      if (variant === 'primary') {
        themeStyles = styles.worklightThemePrimary;
      } else {
        themeStyles = styles.worklightThemeSecondary;
      }
      break;
    case 'skillbook':
      if (variant === 'primary') {
        themeStyles = styles.skillbookThemePrimary;
      } else {
        themeStyles = styles.skillbookThemeSecondary;
      }
      break;
    case undefined:
      if (variant === 'primary') {
        themeStyles = styles.defaultThemePrimary;
      } else {
        themeStyles = styles.defaultThemeSecondary;
      }
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.commonStyles} ${variantStyles} ${fullWidthStyles} ${loadingStyles} ${disabledStyles} ${themeStyles}`}
      disabled={loading || disabled}
      type={type}
    >
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
};

export default ActionButton;
