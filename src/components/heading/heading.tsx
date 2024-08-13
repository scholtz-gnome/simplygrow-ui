import { FC, ReactNode } from 'react';
import styles from './heading.module.css';

interface HeadingProps {
  /**
   * `order` represents which of the following HTML tags to be used:
   *  - 1 = `<h1>`
   *  - 2 = `<h2>`
   *  - etc.
   */
  order?: 1 | 2 | 3;
  textAlign?: 'center';
  className?: string;
  children: ReactNode;
}

const Heading: FC<HeadingProps> = ({ order = 1, textAlign, className, children }) => {
  const textAlignStyles = textAlign === 'center' ? styles.textAlign : undefined;

  let headingElement: JSX.Element = (
    <h1 className={`${styles.headingOne} ${textAlignStyles} ${className}`}>{children}</h1>
  );

  switch (order) {
    case 2:
      headingElement = <h2 className={`${styles.headingTwo} ${textAlignStyles} ${className}`}>{children}</h2>;
      break;
    case 3:
      headingElement = <h3 className={`${styles.headingThree} ${textAlignStyles} ${className}`}>{children}</h3>;
      break;
  }

  return headingElement;
};

export default Heading;
