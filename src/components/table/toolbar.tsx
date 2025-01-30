import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';

export const TableToolbar = () => (
  <GridToolbarContainer>
    <div>CUSTOM FILTERS APPLIED</div>
    <div style={{ flexGrow: 1 }} />
    <GridToolbarExport
      slotProps={{
        tooltip: { title: 'Export data' },
        button: { variant: 'outlined' },
      }}
    />
  </GridToolbarContainer>
);
