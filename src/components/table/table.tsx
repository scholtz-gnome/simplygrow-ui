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
      },
    },
  },
});

type TableProps = {};

const Table: FC<TableProps> = () => {
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <ThemeProvider theme={theme}>
        <DataGrid rows={rows} columns={columns} checkboxSelection />
      </ThemeProvider>
    </div>
  );
};

export default Table;
