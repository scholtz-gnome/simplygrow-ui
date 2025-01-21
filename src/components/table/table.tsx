import { FC, ReactNode, useContext, useState } from 'react';

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
  pageSize?: number; // if undefined, show all rows
  pageSizeOptions?: number[];
};

const Table: FC<TableProps> = (props: TableProps) => {
  const theme = useContext(ThemeContext);

  // const fullWidthStyles = fullWidth ? styles.fullWidth : '';
  // const loadingStyles = loading ? styles.loadingStyles : '';
  // const disabledStyles = disabled ? styles.disabledStyles : '';

  const [pageSize, setPageSize] = useState<number | undefined>(props.pageSize);
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);

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

  const allSelected = selectedRowIds.length === props.data.length;

  const selectAll = () => {
    if (allSelected) {
      setSelectedRowIds([]);
    } else {
      setSelectedRowIds(props.data.map((row) => row.id));
    }
  };

  const selectRow = (rowId: string) => {
    if (selectedRowIds.includes(rowId)) {
      const newSelectedRowIds = selectedRowIds.filter((id) => id !== rowId);
      setSelectedRowIds(newSelectedRowIds);
    } else {
      setSelectedRowIds([...selectedRowIds, rowId]);
    }
  };

  const chunkDataIntoPages = (data: { id: string; value: string | ReactNode; columnId: string }[][]) => {
    if (data.length === 0) {
      return [];
    }

    if (pageSize === undefined) {
      return [data];
    }

    const pages = [];
    for (let i = 0; i < data.length; i += pageSize) {
      pages.push(data.slice(i, i + pageSize));
    }

    return pages;
  };

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
  const dataToDisplay = chunkDataIntoPages(data);
  tableRows = (
    <TableRows
      data={dataToDisplay}
      rowSelectionEnabled={selectionEnabled}
      selectedRowIds={selectedRowIds}
      onSelect={selectRow}
    />
  );
  // }

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.tableContainer} ${themeStyles}`}>
        <table className={styles.table} style={{ backgroundColor: 'white' }}>
          {tableTitle}
          <TableHeader
            columns={columns}
            rowSelectionEnabled={selectionEnabled}
            allSelected={allSelected}
            onAllSelect={selectAll}
          />
          {tableRows}
          {tableFooter}
        </table>
      </div>
    </div>
  );
};

export default Table;
