import {
  GridRowsProp,
  GridColDef,
  GridRowClassNameParams,
  GridSlotsComponentsProps,
  GridRowId,
} from '@mui/x-data-grid';

type TableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading?: boolean;
  rowSelection?: boolean;
  selectedRowIds?: string[];
  pageSize?: number;
  pageSizeOptions?: number[];
  tableHeight?: number;
  rowHeight?: number;
  minCellWidth?: number;
  toolbar?: GridSlotsComponentsProps['toolbar'];
  footer?: GridSlotsComponentsProps['footer'];
  toolbarProps?: Record<string, any>;
  footerProps?: Record<string, any>;
  noHeader?: boolean;
  style?: Record<string, any>; // affects wrapped DataGrid component
  className?: string;
  editableColumns?: (fieldNames: string[]) => void;
  onRowClick?: (params: any) => void;
  onRowSelection?: (selectedRowIds: string[]) => void;
  onCellEditStop?: (rowId: GridRowId, oldValue: string, newValue: string) => void;
  getRowClassName?: (params: GridRowClassNameParams) => string;
};

export { TableProps };
