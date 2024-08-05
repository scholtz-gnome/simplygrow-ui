import { FC, FormEvent, ReactNode } from 'react';
import styles from './form-container.module.css';

interface FormContainerProps {
  flexDirection?: 'column';
  justify?: 'space-between' | 'flex-end';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: ReactNode;
}

const FormContainer: FC<FormContainerProps> = ({ flexDirection, justify, gap = 'xs', className, children }) => {
  const flexDirectionStyles = flexDirection === 'column' ? styles.flexDirectionColumn : undefined;
  let justifyStyles = undefined;
  let gapStyles;

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  switch (gap) {
    case 'xs':
      gapStyles = styles.xsGap;
      break;
    case 'sm':
      gapStyles = styles.smGap;
      break;
    case 'md':
      gapStyles = styles.mdGap;
      break;
    case 'lg':
      gapStyles = styles.lgGap;
      break;
    case 'xl':
      gapStyles = styles.xlGap;
      break;
  }

  switch (justify) {
    case 'space-between':
      justifyStyles = styles.justifySpaceBetween;
      break;
    case 'flex-end':
      justifyStyles = styles.justifyFlexEnd;
      break;
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`${styles.formContainer} ${flexDirectionStyles} ${justifyStyles} ${gapStyles} ${className}`}
    >
      {children}
    </form>
  );
};

export default FormContainer;
