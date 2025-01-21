import { FC } from 'react';

import styles from './table.module.css';

type TableRowsProps = {
  data: { id: string; [key: string]: string }[];
  rowSelectionEnabled?: boolean;
};

export const TableRows: FC<TableRowsProps> = (props: TableRowsProps) => {
  const rows = props.data.map((row) => {
    const cells = Object.keys(row).map((key) => {
      if (key === 'id') {
        return null;
      }
      return (
        <td className={styles.tableTd} key={key}>
          {row[key]}
        </td>
      );
    });

    if (props.rowSelectionEnabled) {
      cells.unshift(
        <td key="selection" className={styles.tableTd}>
          <input type="checkbox" />
        </td>,
      );
    }

    return (
      <tr className={styles.tableTr} key={row.id}>
        {cells}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};
