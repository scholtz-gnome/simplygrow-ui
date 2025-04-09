import { gridClasses } from "@mui/x-data-grid";

const quicktaskTheme = {
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          ".MuiDataGrid-columnHeader": {
            backgroundColor: "#EE6C4D",
            color: "white",
          },
          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight: 550,
          },
          ".MuiIconButton": {
            color: "white",
          },
          ".MuiDataGrid-columnHeaderTitleContainerContent .MuiCheckbox-root": {
            color: "white",
          },
          ".MuiDataGrid-columnHeader .MuiSvgIcon-root": {
            color: "white",
          },
          ".MuiDataGrid-cell .MuiSvgIcon-root": {
            fill: "#EE6C4D",
          },
          ".MuiDataGrid-columnSeparator .MuiDataGrid-columnSeparator--sideRight": {
            display: "none",
          },
          ".MuiDataGrid-virtualScrollerContent": {
            color: "rgb(150,150,175)",
            fontWeight: 500,
          },
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-cell:hover": {
            cursor: "pointer",
          },
          [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
            outline: "none",
          },
          [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]: {
            outline: "none",
          },
        },
      },
    },
  },
};

export { quicktaskTheme };
