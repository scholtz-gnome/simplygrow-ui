import { FC } from 'react';

import { TableColumn } from './table';
import styles from './table.module.css';

type TableHeaderProps = {
  columns: TableColumn[];
  rowSelectionEnabled?: boolean;
  allSelected?: boolean;
  onAllSelect?: () => void;
  onColumnSortClick?: (columnId: string) => void;
};

export const TableHeader: FC<TableHeaderProps> = (props: TableHeaderProps) => {
  const handleAllSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onAllSelect) {
      props.onAllSelect();
    }
  };

  const headerRow = props.columns.map((column) => {
    let handleColumnSortClick = undefined;
    if (props.onColumnSortClick) {
      handleColumnSortClick = () => props.onColumnSortClick(column.id);
    }

    let sortIcon = null;
    if (column.sort) {
      sortIcon = column.sort === 'asc' ? <span>&#x25B2;</span> : <span>&#x25BC;</span>;
    }

    return (
      <th className={styles.tableTh} key={column.id}>
        {column.label}
        <div style={{ display: 'inline', marginLeft: 8, fontSize: 'smaller' }} onClick={handleColumnSortClick}>
          {sortIcon}
        </div>
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
