import { FC } from 'react';

import styles from './table.module.css';

type TableHeaderProps = {
  columns: { id: string; label: string }[];
  rowSelectionEnabled?: boolean;
  allSelected?: boolean;
  onAllSelect?: () => void;
};

export const TableHeader: FC<TableHeaderProps> = (props: TableHeaderProps) => {
  const handleAllSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onAllSelect) {
      props.onAllSelect();
    }
  };

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
        <input type="checkbox" checked={props.allSelected} onChange={handleAllSelection} />
      </th>,
    );
  }

  return (
    <thead>
      <tr className={styles.tableTr}>{headerRow}</tr>
    </thead>
  );
};
