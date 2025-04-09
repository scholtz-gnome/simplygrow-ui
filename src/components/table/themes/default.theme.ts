const defaultTheme = {
  components: {
    MuiDataGrid: {
      defaultProps: {
        getRowClassName: (params: any) => (params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"),
      },
      styleOverrides: {
        root: {
          overflowX: "auto",
          borderRadius: "8px",
        },
        row: () => ({
          // TODO: Applying row overrides inside the businessUnit-specific theme doesn't seem to have any effect. Find a way to do that.
          [`&.odd`]: {
            backgroundColor: "rgba(253, 253, 255, 1)",
            "&:hover": {
              filter: "brightness(95%)",
              "@media (hover: none)": {
                backgroundColor: "transparent",
              },
            },
          },
          [`&.even`]: {
            backgroundColor: "rgba(245, 245, 248, 1)",
            "&:hover": {
              filter: "brightness(92%)",
              "@media (hover: none)": {
                backgroundColor: "transparent",
              },
            },
          },
        }),
      },
    },
  },
};

export { defaultTheme };
