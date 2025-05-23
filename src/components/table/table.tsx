import {
  DataGrid,
  GridCellEditStopParams,
  GridColDef,
  GridEventListener,
  GridSlotsComponentsProps,
  MuiEvent,
} from "@mui/x-data-grid";
import { FC, useCallback, useContext, useState } from "react";

import { ThemeProvider } from "@mui/material";
import ThemeContext from "../../context";
import styles from "./table.module.css";
import { buildTheme, getColumnHeaderHeight, getRowHeight } from "./table.style.provider";
import { TableFilters, TableProps } from "./type.definitions";

const Table: FC<TableProps> = (props: TableProps) => {
  const {
    rows,
    columns,
    loading,
    pageSize = 50,
    pageSizeOptions = [5, 10, 15, 30, 50],
    tableHeight = 400,
    minCellWidth = 120,
    rowSelection = false,
    selectedRowIds,
    toolbar,
    toolbarProps,
    footer,
    footerProps,
    noHeader,
    // style,
    // className,
    initialFilterState,
    getRowClassName,
    editableColumns,
    onRowClick,
    onRowSelection,
    onCellEditStop,
    onFilterChange = () => {},
  } = props;

  const [filterState, setFilterState] = useState(initialFilterState);

  const themeName = useContext(ThemeContext);
  const themeObject = buildTheme(themeName);

  const applyMinCellWidth = useCallback(
    (columns: GridColDef[]) => {
      return Array.from(columns).map((column) => {
        column.minWidth = minCellWidth;
        return column;
      });
    },
    [columns],
  );

  const applyEditableColumns = useCallback(
    (columns: GridColDef[]) => {
      return Array.from(columns).map((column) => {
        column.editable = true;
        return column;
      });
    },
    [columns],
  );

  const handleRowClick: GridEventListener<"cellClick"> = (params) => {
    if (!onRowClick) {
      return;
    }
    const CHECKBOX_FIELD = "__check__";
    if (params.field === CHECKBOX_FIELD) {
      return;
    }
    onRowClick(params);
  };

  const handleCellEditStop = (params: GridCellEditStopParams, event: MuiEvent) => {
    if (onCellEditStop) {
      const oldValue = params.value;
      // @ts-expect-error
      const newValue = event?.target?.value;
      onCellEditStop(params.id, oldValue, newValue);
    }
  };

  const handleRowSelectionModelChange = (selectedRowIds: string[]) => {
    if (onRowSelection) {
      onRowSelection(selectedRowIds);
    }
  };

  const onFilterModelChange = (model: TableFilters) => {
    setFilterState(model);
    onFilterChange(model);
  };

  const buildInitialState = () => {
    const state: any = {
      pagination: {
        paginationModel: {
          pageSize,
        },
      },
    };
    return state;
  };

  const buildColumnDef = (columns: GridColDef[]) => {
    let columnsDef = applyMinCellWidth(columns);
    if (!rowSelection && columnsDef && columnsDef.length > 0) {
      // adds a little extra space when table rows don't have leading checkboxes
      columnsDef[0].cellClassName = styles.noSelectionCheckbox;
      columnsDef[0].headerClassName = styles.noSelectionCheckbox;
    }
    if (editableColumns && editableColumns.length > 0) {
      columnsDef = applyEditableColumns(columnsDef);
    }
    return columnsDef;
  };

  const shouldDisableRowSelectionOnClick = (rowSelection: boolean, onRowClick?: (params: any) => void) => {
    return !rowSelection || (rowSelection && Boolean(onRowClick));
  };

  const buildSlots = (toolbar?: GridSlotsComponentsProps["toolbar"], footer?: GridSlotsComponentsProps["footer"]) => {
    let slots = {};
    if (toolbar || footer) {
      slots = {
        toolbar,
        footer,
      };
    }
    return slots;
  };

  const buildSlotProps = (
    toolbar?: GridSlotsComponentsProps["toolbar"],
    footer?: GridSlotsComponentsProps["footer"],
    toolbarProps?: Record<string, any>,
    footerProps?: Record<string, any>,
  ) => {
    let slotProps = {};
    if (toolbar && toolbarProps) {
      slotProps = {
        toolbar: toolbarProps,
      };
    }
    if (footer && footerProps) {
      slotProps = {
        ...slotProps,
        footer: footerProps,
      };
    }
    return slotProps;
  };

  return (
    <ThemeProvider theme={themeObject}>
      <div className={styles.tableContainer} style={{ height: tableHeight }}>
        <DataGrid
          rows={rows}
          columns={buildColumnDef(columns)}
          checkboxSelection={rowSelection}
          disableRowSelectionOnClick={shouldDisableRowSelectionOnClick(rowSelection, onRowClick)}
          rowSelectionModel={selectedRowIds}
          pageSizeOptions={pageSizeOptions}
          initialState={buildInitialState()}
          loading={loading}
          disableColumnResize={true}
          columnHeaderHeight={noHeader ? 0 : getColumnHeaderHeight(themeName)}
          rowHeight={getRowHeight(themeName)}
          slots={buildSlots(toolbar, footer)}
          slotProps={buildSlotProps(toolbar, footer, toolbarProps, footerProps)}
          getRowClassName={getRowClassName}
          onCellClick={handleRowClick}
          onRowSelectionModelChange={handleRowSelectionModelChange}
          onCellEditStop={handleCellEditStop}
          filterModel={filterState}
          onFilterModelChange={(model: TableFilters) => onFilterModelChange(model)}
          style={{ height: props.dynamicHeight ? "auto" : "100%" }}
          // style={style}
          // className={className}
        />
      </div>
    </ThemeProvider>
  );
};

export default Table;
