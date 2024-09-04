import { FC } from 'react';

import { TableHeader } from './header';
import { TableFooter } from './footer';
import { TableRows } from './rows';

import styles from './table.module.css';

type TableProps = {
  title?: string;
  columns: { id: string; label: string }[];
  data: any[];
  footerValues: { id: string; label: string }[];
};

const Table: FC<TableProps> = (props: TableProps) => {
  let title = null;
  if (props.title) {
    title = <caption>{props.title}</caption>;
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
      <div className={styles.tableContainer}>
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
