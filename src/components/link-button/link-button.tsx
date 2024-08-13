import { AnchorHTMLAttributes, FC, ReactNode, useContext } from 'react';
import ThemeContext from '../../context';
import styles from './link-button.module.css';

interface LinkButtonProps {
  href: string;
  buttonWidth?: 'default' | 'big' | 'full-width';
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

const LinkButton: FC<LinkButtonProps & Partial<AnchorHTMLAttributes<HTMLAnchorElement>>> = ({
  href,
  target,
  variant = 'primary',
  buttonWidth = 'default',
  children,
}) => {
  const theme = useContext(ThemeContext);

  const variantStyles = variant === 'primary' ? styles.primaryVariant : styles.secondaryVariant;
  let buttonWidthStyles;
  let themeStyles = '';

  switch (buttonWidth) {
    case 'default':
      buttonWidthStyles = styles.defaultWidth;
      break;
    case 'big':
      buttonWidthStyles = styles.bigWidth;
      break;
    case 'full-width':
      buttonWidthStyles = styles.fullWidth;
      break;
  }

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
      className={`${styles.commonStyles} ${variantStyles} ${buttonWidthStyles} ${themeStyles} ${styles.commonStyles}`}
    >
      <a target={target} className={styles.link} href={href}>
        {children}
      </a>
    </button>
  );
};

export default LinkButton;
