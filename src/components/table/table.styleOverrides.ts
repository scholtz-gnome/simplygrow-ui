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
      fontWeight: 550,
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
    // '.MuiDataGrid-columnsManagementRow': {
    //   '& .MuiSvgIcon-root': {
    //     color: 'red !important',
    //     fill: 'pink',
    //   },
    // },
    '.MuiDataGrid-columnSeparator .MuiDataGrid-columnSeparator--sideRight': {
      display: 'none',
    },
    '.MuiDataGrid-virtualScrollerContent': {
      color: 'rgb(150,150,175)',
      fontWeight: 500,
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
  worklight: {
    '.MuiDataGrid-columnHeader': {
      backgroundColor: 'rgb(49, 60, 90)',
      color: 'white',
    },
    '.MuiDataGrid-columnHeaderTitle': {
      fontWeight: 550,
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
      fill: 'rgb(49, 60, 90)',
    },
    '.MuiDataGrid-columnSeparator .MuiDataGrid-columnSeparator--sideRight': {
      display: 'none',
    },
    '.MuiDataGrid-virtualScrollerContent': {
      color: 'rgb(150,150,175)',
      fontWeight: 500,
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
  quicktask: {
    '.MuiDataGrid-columnHeader': {
      backgroundColor: '#EE6C4D',
      color: 'white',
    },
    '.MuiDataGrid-columnHeaderTitle': {
      fontWeight: 550,
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
      fill: '#EE6C4D',
    },
    '.MuiDataGrid-columnSeparator .MuiDataGrid-columnSeparator--sideRight': {
      display: 'none',
    },
    '.MuiDataGrid-virtualScrollerContent': {
      color: 'rgb(150,150,175)',
      fontWeight: 500,
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
};
