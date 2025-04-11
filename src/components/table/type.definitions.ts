import {
  GridRowsProp,
  GridColDef,
  GridRowClassNameParams,
  GridSlotsComponentsProps,
  GridRowId,
  GridFilterModel,
} from "@mui/x-data-grid";

type TableFilters = GridFilterModel;

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
  toolbar?: GridSlotsComponentsProps["toolbar"];
  footer?: GridSlotsComponentsProps["footer"];
  toolbarProps?: Record<string, any>;
  footerProps?: Record<string, any>;
  noHeader?: boolean;
  // style?: Record<string, any>; // affects wrapped DataGrid component
  // className?: string;
  initialFilterState?: TableFilters; // Optional prop for setting initial filter state
  editableColumns?: (fieldNames: string[]) => void;
  onRowClick?: (params: any) => void;
  onRowSelection?: (selectedRowIds: string[]) => void;
  onCellEditStop?: (rowId: GridRowId, oldValue: string, newValue: string) => void;
  getRowClassName?: (params: GridRowClassNameParams) => string;
  onFilterChange?: (model: GridFilterModel) => void; // Optional callback for filter model changes
};

export { TableProps, TableFilters };
