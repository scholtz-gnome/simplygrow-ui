import { FC, ReactNode, useContext } from 'react';
import Header from '../header';
import styles from './flex-container.module.css';
import ThemeContext from '../../context';

interface FlexContainerProps {
  flexDirection?: 'column';
  justify?: 'space-between' | 'flex-end' | 'center' | 'flex-start';
  align?: 'center' | 'flex-end' | 'space-between';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  wrap?: boolean;
  headerText?: string;
  styledContainer?: boolean;
  className?: string;
  children: ReactNode;
  heading?: string;
}

/**
 * gap | default `xs`
 *  - `xs` = `6px`
 *  - `sm` = `8px`
 *  - `md` = `12px`
 *  - `lg` = `18px`
 *  - `xl` = `24px`
 */
const FlexContainer: FC<FlexContainerProps> = ({
  flexDirection,
  justify,
  align,
  gap,
  children,
  headerText,
  wrap = false,
  styledContainer,
  heading,
  className,
}) => {
  const theme = useContext(ThemeContext) as string;

  let headingBackground = styles.default;
  if (heading && styles[`${theme}Heading`] !== undefined) {
    headingBackground = styles[`${theme}Heading`];
  }

  const containerStyles = styledContainer ? styles.containerStyles : undefined;
  const wrapStyles = wrap ? styles.flexWrap : undefined;
  const flexDirectionStyles = flexDirection === 'column' ? styles.flexDirectionColumn : undefined;
  const headingStyles = heading ? styles.withHeading : '';
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
    case 'flex-start':
      justifyStyles = styles.justifyFlexStart;
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
    <div>
      {heading && <div className={`${styles.heading} ${headingBackground}`}>{heading}</div>}

      <div
        // NOTE: consider using classnames (https://www.npmjs.com/package/classnames) - see how simple appyling conditional classes become
        className={`${styles.flexContainer} ${wrapStyles} ${flexDirectionStyles} ${justifyStyles} ${alignStyles} ${gapStyles} ${containerStyles} ${headingStyles} ${className}`}
      >
        {!!headerText && <Header>{headerText}</Header>}
        {styledContainer && <div className={styles.children}>{children}</div>}

        {!styledContainer && children}
      </div>
    </div>
  );
};

export default FlexContainer;
