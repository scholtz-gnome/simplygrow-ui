import { FC } from 'react';

import styles from './table.module.css';

type TableHeaderProps = {
  columns: { id: string; label: string }[];
  rowSelectionEnabled?: boolean;
  onSelectionChange?: (selected: boolean) => void;
};

export const TableHeader: FC<TableHeaderProps> = (props: TableHeaderProps) => {
  const headerRow = props.columns.map((column) => {
    return (
      <th className={styles.tableTh} key={column.id}>
        {column.label}
      </th>
    );
  });

  if (props.rowSelectionEnabled) {
    headerRow.unshift(
      <th key="selection" className={styles.tableTh}>
        <input
          type="checkbox"
          onChange={(event) => {
            if (props.onSelectionChange) {
              props.onSelectionChange(event.target.checked);
            }
          }}
        />
      </th>,
    );
  }

  return (
    <thead>
      <tr className={styles.tableTr}>{headerRow}</tr>
    </thead>
  );
};
