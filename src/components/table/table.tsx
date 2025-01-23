import { FC } from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  // GridFilterItem,
  // GridCallbackDetails,
  // GridFilterModel,
} from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';

type TableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  selectedRowsIds?: string[];
  pageSize?: number;
  pageSizeOptions?: number[];
  tableHeight?: number;
  // filterItems?: GridFilterItem[];
  onRowClick?: (params: any) => void;
  onRowSelection?: (selectedRowIds: string[]) => void;
  // onFilterChange?: ()
};

const Table: FC<TableProps> = (props: TableProps) => {
  const {
    rows,
    columns,
    pageSize = 10,
    pageSizeOptions = [5, 10, 15],
    tableHeight = 300,
    onRowClick,
    onRowSelection,
  } = props;

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

  return (
    <div style={{ height: tableHeight, width: '100%' }}>
      {/* <ThemeProvider theme={theme}> */}
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={true}
        disableRowSelectionOnClick={true}
        rowSelectionModel={props.selectedRowsIds}
        // filterModel={filterState}
        pageSizeOptions={pageSizeOptions}
        initialState={paginationState}
        sx={styleOverrides}
        onCellClick={onRowClick}
        onRowSelectionModelChange={onRowSelection}
        // onFilterModelChange={(model: GridFilterModel, details: GridCallbackDetails<'filter'>) => {
        //   console.debug('MODEL', model);
        //   console.debug('DETAILS', details);
        // }}
      />
      {/* </ThemeProvider> */}
    </div>
  );
};

const styleOverrides = {
  borderRadius: '8px',
  '& .MuiDataGrid-cell:hover': {
    cursor: 'pointer',
  },
  '.MuiDataGrid-columnHeader': {
    backgroundColor: 'rgb(115, 135, 195)',
    color: 'white',
  },
  '.MuiDataGrid-columnHeaderTitle': {
    fontWeight: 'bolder',
  },
  '.MuiIconButton': {
    color: 'white',
  },
  '.MuiDataGrid-columnHeaderTitleContainerContent .MuiCheckbox-root': {
    color: 'white',
  },
  '.MuiDataGrid-columnHeader .MuiSvgIcon-root': {
    color: 'white',
  },
  '.MuiDataGrid-cell .MuiSvgIcon-root': {
    fill: 'rgb(115, 135, 195)',
  },
};

export default Table;
