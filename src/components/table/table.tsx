import { FC, useContext } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRowClassNameParams,
  GridEventListener,
  GridSlotsComponentsProps,
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
  rowSelection?: boolean;
  selectedRowIds?: string[];
  pageSize?: number;
  pageSizeOptions?: number[];
  tableHeight?: number;
  minCellWidth?: number;
  // filterItems?: GridFilterItem[];
  toolbar?: GridSlotsComponentsProps['toolbar'];
  footer?: GridSlotsComponentsProps['footer'];
  toolbarProps?: Record<string, any>;
  footerProps?: Record<string, any>;
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
    rowSelection = false,
    toolbar,
    toolbarProps,
    footer,
    footerProps,
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

  const handleRowClick: GridEventListener<'cellClick'> = (params) => {
    if (!onRowClick) {
      return;
    }
    if (params.field === '__check__') {
      return;
    }
    onRowClick(params);
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
  const disableRowSelectionOnClick = rowSelection && Boolean(onRowClick);

  let slots = {};
  if (toolbar || footer) {
    slots = {
      toolbar,
      footer,
    };
  }

  let slotProps = {};
  if (toolbar && toolbarProps) {
    slotProps = {
      toolbar: toolbarProps,
    };
  }
  if (footer && footerProps) {
    slotProps = {
      ...slotProps,
      footer: footerProps,
    };
  }

  return (
    <div className={styles.tableContainer} style={{ height: tableHeight }}>
      <DataGrid
        rows={rows}
        columns={tableColumns}
        checkboxSelection={rowSelection}
        disableRowSelectionOnClick={disableRowSelectionOnClick}
        rowSelectionModel={props.selectedRowIds}
        // filterModel={filterState}
        pageSizeOptions={pageSizeOptions}
        initialState={paginationState}
        loading={loading}
        sx={sxStyleOverrides}
        onCellClick={handleRowClick}
        onRowSelectionModelChange={onRowSelection}
        // onFilterModelChange={(model: GridFilterModel, details: GridCallbackDetails<'filter'>) => {
        //   console.debug('MODEL', model);
        //   console.debug('DETAILS', details);
        // }}
        disableColumnResize={true}
        slots={slots}
        slotProps={slotProps}
      />
    </div>
  );
};

export default Table;
