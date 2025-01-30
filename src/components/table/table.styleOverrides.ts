import { gridClasses } from '@mui/x-data-grid';

export const styleOverrides = {
  overflowX: 'auto',
  borderRadius: '8px',
  peopleflow: {
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
    '.MuiDataGrid-columnSeparator .MuiDataGrid-columnSeparator--sideRight': {
      display: 'none',
    },
    '& .MuiDataGrid-cell:hover': {
      cursor: 'pointer',
    },
    [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
      outline: 'none',
    },
    [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]: {
      outline: 'none',
    },
  },
  skillbook: {},
  worklight: {},
};
