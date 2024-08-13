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
  variant,
  buttonWidth = 'default',
  children,
}) => {
  const theme = useContext(ThemeContext);

  const defaultVariantStyles = variant === 'secondary' ? styles.secondaryVariant : styles.defaultVariant;
  let buttonWidthStyles;

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
    <button className={`${defaultVariantStyles} ${buttonWidthStyles} ${themeStyles}`}>
      <a target={target} className={styles.link} href={href}>
        {children}
      </a>
    </button>
  );
};

export default LinkButton;
