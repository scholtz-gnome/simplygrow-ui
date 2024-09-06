import { FC, ReactNode, useContext } from 'react';

import { TableHeader } from './header';
import { TableFooter } from './footer';
import { TableRows } from './rows';

import styles from './table.module.css';
import ThemeContext from '../../context';

type TableProps = {
  title?: string;
  columns: { id: string; label: string }[];
  data: { id: string; value: string | ReactNode; columnId: string }[][];
  footerValues: { id: string; label: string }[];
};

const Table: FC<TableProps> = (props: TableProps) => {
  const theme = useContext(ThemeContext);

  // const fullWidthStyles = fullWidth ? styles.fullWidth : '';
  // const loadingStyles = loading ? styles.loadingStyles : '';
  // const disabledStyles = disabled ? styles.disabledStyles : '';

  let themeStyles = '';

  switch (theme) {
    case 'peopleflow':
      themeStyles = styles.peopleflowThemePrimary;
      break;
    case 'worklight':
      themeStyles = styles.worklightThemePrimary;
      break;
    case 'skillbook':
      themeStyles = styles.skillbookThemePrimary;
      break;
    case undefined:
      themeStyles = styles.defaultThemePrimary;
      break;
  }

  let title = null;
  if (props.title) {
    title = <caption className={styles.tableCaption}>{props.title}</caption>;
  }

  let footer = null;
  if (props.footerValues) {
    footer = <TableFooter values={props.footerValues} />;
  }

  let rows = null;
  // if (props.data.length > 0) {
  rows = <TableRows data={props.data} />;
  // }

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.tableContainer} ${themeStyles}`}>
        <table className={styles.table} style={{ backgroundColor: 'white' }}>
          {title}
          <TableHeader columns={props.columns} />
          {rows}
          {footer}
        </table>
      </div>
    </div>
  );
};

export default Table;
