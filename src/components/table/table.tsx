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
    // MuiButtonBase: {
    //   styleOverrides: {
    //     root: {
    //       color: 'white',
    //     },
    //   },
    // },
  },
});

type TableProps = {};

const Table: FC<TableProps> = () => {
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World', col3: '!' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome', col3: '!!' },
    { id: 3, col1: 'MUI', col2: 'is Amazing', col3: '!!!' },
  ];

  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', flex: 1, minWidth: 80 },
    { field: 'col2', headerName: 'Column 2', flex: 1, minWidth: 80 },
    { field: 'col3', headerName: 'Column 3', flex: 1, minWidth: 80 },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <ThemeProvider theme={theme}>
        <DataGrid rows={rows} columns={columns} checkboxSelection={true} disableRowSelectionOnClick={true} />
      </ThemeProvider>
    </div>
  );
};

export default Table;
