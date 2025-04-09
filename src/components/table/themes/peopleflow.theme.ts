import { gridClasses } from "@mui/x-data-grid";
import colorPalette from "../../../providers/colors/peopleflow.colors";

const peopleflowTheme = {
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "0.8rem",
        },
        secondary: {
          fontSize: "0.8rem",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.8rem",
          color: colorPalette.PRIMARY_TEXT,
        },
      },
    },
    MuiDataGrid: {
      defaultProps: {
        slotProps: {
          columnMenu: {
            sx: {
              "& .MuiMenuItem-root": {
                fontSize: "0.8rem",
                color: colorPalette.PRIMARY_TEXT,
              },
              "& .MuiSvgIcon-root": {
                color: colorPalette.PRIMARY_BLUE,
              },
            },
          },
          panel: {
            sx: {
              "& .MuiInputBase-input": {
                fontSize: "0.8rem",
                color: colorPalette.PRIMARY_TEXT,
              },
              "& .MuiInputBase-input::placeholder": {
                color: colorPalette.SECONDARY_TEXT,
                opacity: 0.7,
              },
              "& .MuiInputBase-root.Mui-focused:before, & .MuiInputBase-root.Mui-focused:after": {
                borderBottomColor: colorPalette.PRIMARY_BLUE + " !important",
              },
              "& .MuiFormLabel-root": {
                fontSize: "0.8rem",
                color: colorPalette.SECONDARY_TEXT,
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: colorPalette.PRIMARY_BLUE,
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: colorPalette.PRIMARY_BLUE,
              },
            },
          },
        },
      },
      styleOverrides: {
        root: {
          ".MuiDataGrid-columnHeader": {
            backgroundColor: colorPalette.DARK_GREY,
            color: "white",
            fontSize: "0.8rem",
          },
          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight: 550,
          },
          ".MuiIconButton": {
            color: "white",
          },
          ".MuiDataGrid-columnHeaderTitleContainerContent .MuiCheckbox-root": {
            color: colorPalette.WHITE,
          },
          ".MuiDataGrid-columnHeader .MuiSvgIcon-root": {
            color: "white",
            height: "164px", // Set your custom height here
            lineHeight: "164px", // Often helpful to set line-height too
          },
          ".MuiDataGrid-cell .MuiSvgIcon-root": {
            fill: colorPalette.DARK_GREY,
          },
          "& .MuiDataGrid-cellCheckbox .MuiCheckbox-root, & .MuiDataGrid-cellCheckbox .MuiSvgIcon-root": {
            color: colorPalette.PRIMARY_BLUE,
            fill: colorPalette.PRIMARY_BLUE,
          },
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          ".MuiDataGrid-columnSeparator .MuiDataGrid-columnSeparator--sideRight": {
            display: "none",
          },
          ".MuiDataGrid-virtualScrollerContent": {
            color: colorPalette.SECONDARY_TEXT,
            fontWeight: 500,
            fontSize: "0.8rem",
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

export { peopleflowTheme };
