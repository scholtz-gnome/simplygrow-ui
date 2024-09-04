import { FC } from 'react';

import styles from './table.module.css';

type TableRowsProps = {
  data: any[];
};

export const TableRows: FC<TableRowsProps> = (props: TableRowsProps) => {
  const rows = (
    <>
      <tr className={styles.tableTr}>
        <td data-cell="" className={styles.tableTd}>
          Row 1 Column 1
        </td>
        <td data-cell="" className={styles.tableTd}>
          Row 1 Column 2
        </td>
        <td data-cell="" className={styles.tableTd}>
          Row 1 Column 3
        </td>
      </tr>
      <tr className={styles.tableTr}>
        <td data-cell="" className={styles.tableTd}>
          Row 2 Column 1
        </td>
        <td data-cell="" className={styles.tableTd}>
          Row 2 Column 2
        </td>
        <td data-cell="" className={styles.tableTd}>
          Row 3 Column 3
        </td>
      </tr>
    </>
  );

  return <tbody>{rows}</tbody>;
};
