import { FC, useCallback, useContext } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRowClassNameParams,
  GridEventListener,
  GridSlotsComponentsProps,
  GridCellEditStopParams,
  MuiEvent,
  GridRowId,
  // GridFilterItem,
  // GridCallbackDetails,
  // GridFilterModel,
} from '@mui/x-data-grid';

import styles from './table.module.css';
import { themes } from './table.themes';
import ThemeContext from '../../context';
import { ThemeProvider } from '@mui/material';
import { stripedTheme } from './table.theme-striped';

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
  noHeader?: boolean;
  style?: Record<string, any>; // affects wrapped DataGrid component
  customStyleClasses?: Record<string, Record<string, any>>;
  className?: string;
  editableColumns?: (fieldNames: string[]) => void;
  onRowClick?: (params: any) => void;
  onRowSelection?: (selectedRowIds: string[]) => void;
  onCellEditStop?: (rowId: GridRowId, oldValue: string, newValue: string) => void;
  getRowClassName?: (params: GridRowClassNameParams) => string;
  // onFilterChange?: ()
};

const Table: FC<TableProps> = (props: TableProps) => {
  const {
    rows,
    columns,
    loading,
    pageSize = 15,
    pageSizeOptions = [5, 10, 15, 30, 50],
    tableHeight = 400,
    minCellWidth = 120,
    rowSelection = false,
    selectedRowIds,
    toolbar,
    toolbarProps,
    footer,
    footerProps,
    noHeader,
    style,
    customStyleClasses,
    className,
    getRowClassName,
    editableColumns,
    onRowClick,
    onRowSelection,
    onCellEditStop,
  } = props;

  const theme = useContext(ThemeContext);
  let themeStyle = undefined;
  if (theme && themes[theme] !== undefined) {
    themeStyle = themes[theme];
  }

  if (customStyleClasses) {
    themeStyle = { ...themeStyle, ...customStyleClasses };
  }

  const applyMinCellWidth = useCallback(
    (columns: GridColDef[]) => {
      const cols = Array.from(columns);
      cols.forEach((column) => {
        column.minWidth = minCellWidth;
      });
      return cols;
    },
    [columns],
  );

  const applyEditableColumns = useCallback(
    (columns: GridColDef[]) => {
      const cols = Array.from(columns);
      cols.forEach((column) => {
        column.editable = true;
      });
      return cols;
    },
    [columns],
  );

  const handleRowClick: GridEventListener<'cellClick'> = (params) => {
    if (!onRowClick) {
      return;
    }
    if (params.field === '__check__') {
      return;
    }
    onRowClick(params);
  };

  const handleCellEditStop = (params: GridCellEditStopParams, event: MuiEvent) => {
    if (onCellEditStop) {
      const oldValue = params.value;
      // @ts-expect-error
      const newValue = event?.target?.value;
      onCellEditStop(params.id, oldValue, newValue);
    }
  };

  const handleRowSelectionModelChange = (selectedRowIds: string[]) => {
    if (onRowSelection) {
      onRowSelection(selectedRowIds);
    }
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

  let columnsDef = applyMinCellWidth(columns);
  const disableRowSelectionOnClick = !rowSelection || (rowSelection && Boolean(onRowClick));

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

  if (!rowSelection && columnsDef && columnsDef.length > 0) {
    // adds a little extra space when table rows don't have leading checkboxes
    columnsDef[0].cellClassName = styles.noSelectionCheckbox;
    columnsDef[0].headerClassName = styles.noSelectionCheckbox;
  }
  if (editableColumns && editableColumns.length > 0) {
    columnsDef = applyEditableColumns(columnsDef);
  }

  return (
    <div style={{ height: tableHeight }}>
      <ThemeProvider theme={stripedTheme}>
        <DataGrid
          rows={rows}
          columns={columnsDef}
          checkboxSelection={rowSelection}
          disableRowSelectionOnClick={disableRowSelectionOnClick}
          rowSelectionModel={selectedRowIds}
          // filterModel={filterState}
          pageSizeOptions={pageSizeOptions}
          initialState={paginationState}
          loading={loading}
          sx={themeStyle}
          disableColumnResize={true}
          columnHeaderHeight={noHeader ? 0 : undefined}
          slots={slots}
          slotProps={slotProps}
          getRowClassName={getRowClassName}
          onCellClick={handleRowClick}
          onRowSelectionModelChange={handleRowSelectionModelChange}
          onCellEditStop={handleCellEditStop}
          // onFilterModelChange={(model: GridFilterModel, details: GridCallbackDetails<'filter'>) => {
          //   console.debug('MODEL', model);
          //   console.debug('DETAILS', details);
          // }}
          style={style}
          className={className}
        />
      </ThemeProvider>
    </div>
  );
};

export default Table;
