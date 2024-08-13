import { ButtonHTMLAttributes, FC, ReactNode, useContext } from 'react';
import ThemeContext from '../../context/theme.context';
import styles from './action-button.module.css';

interface ActionButtonProps {
  onClick?: () => void;
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
  disabled?: boolean;
}

const ActionButton: FC<ActionButtonProps & Partial<ButtonHTMLAttributes<HTMLButtonElement>>> = ({
  onClick,
  fullWidth = false,
  loading = false,
  disabled = false,
  children,
}) => {
  const theme = useContext(ThemeContext);

  const defaultStyles = styles.defaultStyles;
  const fullWidthStyles = fullWidth ? styles.fullWidth : '';
  const loadingStyles = loading ? styles.loadingStyles : '';
  const disabledStyles = disabled ? styles.disabledStyles : '';
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

  return (
    <button
      onClick={onClick}
      className={`${defaultStyles} ${fullWidthStyles} ${loadingStyles} ${disabledStyles} ${themeStyles}`}
      disabled={loading || disabled}
    >
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
};

export default ActionButton;
