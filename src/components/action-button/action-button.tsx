import { ButtonHTMLAttributes, FC, ReactNode, useContext } from 'react';
import ThemeContext from '../../context/theme.context';
import styles from './action-button.module.css';

interface ActionButtonProps {
  onClick?: () => void;
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

const ActionButton: FC<ActionButtonProps & Partial<ButtonHTMLAttributes<HTMLButtonElement>>> = ({
  onClick,
  fullWidth = false,
  loading = false,
  children,
}) => {
  const theme = useContext(ThemeContext);

  const defaultStyles = styles.defaultStyles;
  const fullWidthStyles = fullWidth ? styles.fullWidth : '';
  const loadingStyles = loading ? styles.loadingStyles : '';
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
      className={`${defaultStyles} ${fullWidthStyles} ${loadingStyles} ${themeStyles}`}
      disabled={loading}
    >
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
};

export default ActionButton;
