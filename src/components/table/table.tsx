import { FC, useContext } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRowClassNameParams,
  // GridFilterItem,
  // GridCallbackDetails,
  // GridFilterModel,
} from '@mui/x-data-grid';

import styles from './table.module.css';
import { styleOverrides } from './table.styleOverrides';
import ThemeContext from '../../context';

type TableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading?: boolean;
  selectedRowIds?: string[];
  pageSize?: number;
  pageSizeOptions?: number[];
  tableHeight?: number;
  minCellWidth?: number;
  // filterItems?: GridFilterItem[];
  onRowClick?: (params: any) => void;
  onRowSelection?: (selectedRowIds: string[]) => void;
  getRowClassName?: (params: GridRowClassNameParams) => string;
  // onFilterChange?: ()
};

const Table: FC<TableProps> = (props: TableProps) => {
  const {
    rows,
    columns,
    loading,
    pageSize = 10,
    pageSizeOptions = [5, 10, 15],
    tableHeight = 400,
    minCellWidth = 120,
    onRowClick,
    onRowSelection,
  } = props;

  const theme = useContext(ThemeContext);
  let sxStyleOverrides = undefined;
  switch (theme) {
    case 'peopleflow':
      sxStyleOverrides = styleOverrides.peopleflow;
      break;
    case 'worklight':
      sxStyleOverrides = styleOverrides.worklight;
      break;
    case 'skillbook':
      sxStyleOverrides = styleOverrides.skillbook;
      break;
    case undefined:
      break;
  }

  const applyMinCellWidth = (columns: GridColDef[]) => {
    columns.forEach((column) => {
      column.minWidth = minCellWidth;
    });
    return columns;
  };

  const paginationState = {
    pagination: {
      paginationModel: {
        pageSize,
      },
    },
  };

  // const filterState = {
  //   items: props.filterItems || [],
  // };

  const tableColumns = applyMinCellWidth(columns);

  return (
    <div className={styles.tableContainer} style={{ height: tableHeight }}>
      <DataGrid
        rows={rows}
        columns={tableColumns}
        checkboxSelection={true}
        disableRowSelectionOnClick={true}
        rowSelectionModel={props.selectedRowIds}
        // filterModel={filterState}
        pageSizeOptions={pageSizeOptions}
        initialState={paginationState}
        loading={loading}
        sx={sxStyleOverrides}
        onCellClick={onRowClick}
        onRowSelectionModelChange={onRowSelection}
        // onFilterModelChange={(model: GridFilterModel, details: GridCallbackDetails<'filter'>) => {
        //   console.debug('MODEL', model);
        //   console.debug('DETAILS', details);
        // }}
        disableColumnResize={true}
      />
    </div>
  );
};

export default Table;
