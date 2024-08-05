import { FC, ReactNode } from 'react';
import styles from './link-button.module.css';

interface LinkButtonProps {
  href: string;
  buttonWidth?: 'default' | 'big' | 'full-width';
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

const LinkButton: FC<LinkButtonProps> = ({ href, variant, buttonWidth = 'default', children }) => {
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

  return (
    <button className={`${defaultVariantStyles} ${buttonWidthStyles}`}>
      <a className={styles.link} href={href}>
        {children}
      </a>
    </button>
  );
};

export default LinkButton;
