import { alpha, createTheme } from '@mui/material';

const ODD_OPACITY = 0.1;
const HOVER_OPACITY = 0.7;

export const stripedTheme = createTheme({
  components: {
    // @ts-ignore
    MuiDataGrid: {
      defaultProps: {
        getRowClassName: (params: any) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'),
      },
      styleOverrides: {
        // @ts-ignore
        row: ({ theme }) => ({
          [`&.odd`]: {
            backgroundColor: '#FDFDFF',
            '&:hover': {
              filter: 'brightness(95%)',
              '@media (hover: none)': {
                backgroundColor: 'transparent',
              },
            },
          },
          [`&.even`]: {
            backgroundColor: '#F8F8F8',
            '&:hover': {
              filter: 'brightness(92%)',
              '@media (hover: none)': {
                backgroundColor: 'transparent',
              },
            },
          },
        }),
      },
    },
  },
});
