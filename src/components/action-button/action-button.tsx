'use client';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './action-button.module.css';

interface ActionButtonProps {
  onClick?: () => void;
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

const ActionButton: FC<ActionButtonProps & Partial<ButtonHTMLAttributes<HTMLButtonElement>>> = ({
  onClick,
  fullWidth,
  loading = false,
  children,
}) => {
  const defaultStyles = styles.defaultStyles;
  const fullWidthStyles = fullWidth ? styles.fullWidth : '';
  const loadingStyles = loading ? styles.loadingStyles : '';

  return (
    <button onClick={onClick} className={`${defaultStyles} ${fullWidthStyles} ${loadingStyles}`} disabled={loading}>
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
};

export default ActionButton;
