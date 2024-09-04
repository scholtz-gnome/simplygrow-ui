import { FC } from 'react';

import styles from './table.module.css';

type TableHeaderProps = {
  columns: { id: string; label: string }[];
};

export const TableHeader: FC<TableHeaderProps> = (props: TableHeaderProps) => {
  const headerRow = props.columns.map((column) => {
    return <th className={styles.tableTh} key={column.id}>{column.label}</th>;
  });

  return (
    <thead>
      <tr className={styles.tableTr}>{headerRow}</tr>
    </thead>
  );
};
