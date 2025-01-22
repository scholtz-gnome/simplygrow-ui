import { FC, ReactNode, useContext, useEffect, useState } from 'react';

import { TableHeader } from './header';
import { TableFooter } from './footer';
import { TableRows } from './rows';

import styles from './table.module.css';
import ThemeContext from '../../context';
import { TablePageNav } from './pageNav';

type TableData = {
  id: string;
  [key: string]: string;
};

type TableProps = {
  title?: string;
  columns: { id: string; label: string }[];
  data: TableData[];
  footerValues: { id: string; label: string }[];
  rowSelectionEnabled?: boolean;
  rowsPerPageSelectionEnabled?: boolean;
  rowsPerPageOptions?: number[];
  pageSize?: number; // if undefined, show all rows
  pageSizeOptions?: number[];
  tableHeight?: number;
};

const chunkDataIntoPages = (data: TableData[], pageSize: number) => {
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

const Table: FC<TableProps> = (props: TableProps) => {
  const theme = useContext(ThemeContext);

  // const fullWidthStyles = fullWidth ? styles.fullWidth : '';
  // const loadingStyles = loading ? styles.loadingStyles : '';
  // const disabledStyles = disabled ? styles.disabledStyles : '';

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number | undefined>();
  const [pages, setPages] = useState<TableData[][]>();
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);

  useEffect(() => {
    if (props.pageSize === undefined) {
      return;
    }
    refreshPages(props.data, props.pageSize);
  }, []);

  const refreshPages = (data: TableData[], pageSize: number) => {
    const pages = chunkDataIntoPages(data, pageSize);
    setPages(pages);
    setPageSize(props.pageSize);
  };

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

  const handleRowPerPageChange = (rowsPerPage: number) => {
    refreshPages(props.data, rowsPerPage);
  };

  const { title, columns, data, footerValues, rowSelectionEnabled } = props;

  let tableTitle = null;
  if (title) {
    tableTitle = <caption className={styles.tableCaption}>{title}</caption>;
  }

  let tableFooter = null;
  if (footerValues) {
    tableFooter = <TableFooter values={footerValues} rowSelectionEnabled={rowSelectionEnabled} />;
  }

  let tablePageNav = null;
  if (props.pageSize) {
    tablePageNav = (
      <TablePageNav
        currentPage={currentPage}
        numberOfPages={pages?.length || 0}
        rowsPerPageSelectionEnabled={props.rowsPerPageSelectionEnabled}
        rowsPerPageOptions={props.rowsPerPageOptions}
        onPrevClick={() => setCurrentPage((currentPage) => currentPage - 1)}
        onNextClick={() => setCurrentPage((currentPage) => currentPage + 1)}
        onRowsPerPageChange={handleRowPerPageChange}
      />
    );
  }

  let tableRows = null;
  if (props.data.length > 0 && pages) {
    const currentPageIndex = currentPage - 1;
    tableRows = (
      <TableRows
        data={pages[currentPageIndex]}
        rowSelectionEnabled={rowSelectionEnabled}
        selectedRowIds={selectedRowIds}
        onSelect={selectRow}
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.tableContainer} ${themeStyles}`} style={{ height: props.tableHeight }}>
        <table className={styles.table} style={{ backgroundColor: 'white' }}>
          {tableTitle}
          <TableHeader
            columns={columns}
            rowSelectionEnabled={rowSelectionEnabled}
            allSelected={allSelected}
            onAllSelect={selectAll}
          />
          {tableRows}
          {tableFooter}
        </table>
      </div>
      {tablePageNav}
    </div>
  );
};

export default Table;
