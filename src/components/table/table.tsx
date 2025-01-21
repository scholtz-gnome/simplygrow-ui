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
  selectionEnabled?: boolean;
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

  const { title, columns, data, footerValues, selectionEnabled } = props;

  let tableTitle = null;
  if (title) {
    tableTitle = <caption className={styles.tableCaption}>{title}</caption>;
  }

  let tableFooter = null;
  if (footerValues) {
    tableFooter = <TableFooter values={footerValues} rowSelectionEnabled={selectionEnabled} />;
  }

  let tableRows = null;
  // if (data.length > 0) {
  tableRows = <TableRows data={data} rowSelectionEnabled={selectionEnabled} />;
  // }

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.tableContainer} ${themeStyles}`}>
        <table className={styles.table} style={{ backgroundColor: 'white' }}>
          {tableTitle}
          <TableHeader columns={columns} rowSelectionEnabled={selectionEnabled} />
          {tableRows}
          {tableFooter}
        </table>
      </div>
    </div>
  );
};

export default Table;
