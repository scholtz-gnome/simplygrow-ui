import { FC } from 'react';

import styles from './table.module.css';

type TableRowsProps = {
  data: { id: string; [key: string]: string }[];
  rowSelectionEnabled?: boolean;
  selectedRowIds?: string[];
  onSelect?: (id: string) => void;
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
      const checked = props.selectedRowIds?.includes(row.id);

      let handleChange = undefined;
      if (props.onSelect !== undefined) {
        handleChange = () => {
          props.onSelect(row.id);
        };
      }

      cells.unshift(
        <td key="selection" className={styles.tableTd}>
          <input type="checkbox" checked={checked} onChange={handleChange} />
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
