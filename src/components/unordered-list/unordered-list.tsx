import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import styles from './unordered-list.module.css';

interface UnorderedListProps {
  bullets?: boolean;
  className?: string;
  children: ReactNode;
}

const UnorderedList: FC<
  UnorderedListProps & Partial<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>>
> = ({ bullets = false, className, style, children }) => {
  const bulletStyles = bullets ? styles.bulletList : styles.noBullets;

  return (
    <ul className={`${bulletStyles} ${className}`} style={style}>
      {children}
    </ul>
  );
};

export default UnorderedList;
