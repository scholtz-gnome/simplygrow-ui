import { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';

const theme = createTheme({
  components: {
    // Use `MuiDataGrid` on DataGrid, DataGridPro and DataGridPremium
    MuiDataGrid: {
      styleOverrides: {
        root: {
          // backgroundColor: 'red',
        },
        columnHeader: {
          backgroundColor: 'rgb(115, 135, 195)',
          color: 'white',
        },
        columnHeaderTitle: {
          fontWeight: 'bolder',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: 'rgb(0, 200, 255)',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});

type TableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  selectedRowsIds?: string[];
  pageSize?: number;
  pageSizeOptions?: number[];
  tableHeight?: number;
  onRowClick?: (params: any) => void;
  onRowSelection?: (selectedRowIds: string[]) => void;
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

  return (
    <div style={{ height: tableHeight, width: '100%' }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection={true}
          disableRowSelectionOnClick={true}
          rowSelectionModel={props.selectedRowsIds}
          onRowSelectionModelChange={onRowSelection}
          pageSizeOptions={pageSizeOptions}
          initialState={paginationState}
          sx={styleOverrides}
          onCellClick={onRowClick}
        />
      </ThemeProvider>
    </div>
  );
};

const styleOverrides = {
  '& .MuiDataGrid-cell:hover': {
    cursor: 'pointer',
  },
  borderRadius: '8px',
};

export default Table;
