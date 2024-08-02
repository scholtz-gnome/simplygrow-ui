import React, { FC, ReactNode } from 'react';
import Header from '../header';
import styles from './flex-container.module.css';

interface FlexContainerProps {
  flexDirection?: 'column';
  justify?: 'space-between' | 'flex-end' | 'center';
  align?: 'center' | 'flex-end' | 'space-between';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  headerText?: string;
  styledContainer?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * gap | default `xs`
 *  - `xs` = `6px`
 *  - `sm` = `8px`
 *  - `md` = `12px`
 *  - `lg` = `18px`
 *  - `xl` = `24px`
 */
export const FlexContainer: FC<FlexContainerProps> = ({
  flexDirection,
  justify,
  align,
  gap,
  children,
  headerText,
  styledContainer,
  className,
}) => {
  const containerStyles = styledContainer ? styles.containerStyles : undefined;
  const flexDirectionStyles = flexDirection === 'column' ? styles.flexDirectionColumn : undefined;
  let justifyStyles;
  let alignStyles;
  let gapStyles;

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
    case 'center':
      justifyStyles = styles.justifyCenter;
      break;
  }

  switch (align) {
    case 'space-between':
      alignStyles = styles.alignSpaceBetween;
      break;
    case 'flex-end':
      alignStyles = styles.alignFlexEnd;
      break;
    case 'center':
      alignStyles = styles.alignCenter;
      break;
  }

  return (
    <div
      className={`${styles.flexContainer} ${flexDirectionStyles} ${justifyStyles} ${alignStyles} ${gapStyles} ${containerStyles} ${className}`}
    >
      {!!headerText && <Header>{headerText}</Header>}

      {styledContainer && <div className={styles.children}>{children}</div>}

      {!styledContainer && children}
    </div>
  );
};
