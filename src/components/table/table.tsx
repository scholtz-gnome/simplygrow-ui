import { FC } from 'react';

import { TableHeader } from './header';
import { TableFooter } from './footer';
import { TableRows } from './rows';

type TableProps = {
  name?: string;
  columns: { id: string; label: string }[];
  data: any[];
  footerValues: { id: string; label: string }[];
};

const Table: FC<TableProps> = (props: TableProps) => {
  let name = null;
  if (props.name) {
    name = <caption>{props.name}</caption>;
  }

  let footer = null;
  if (props.footerValues) {
    footer = <TableFooter values={props.footerValues} />;
  }

  let rows = null;
  // if (props.data.length > 0) {
  rows = <TableRows data={props.data} />;
  // }

  return (
    <table>
      {name}
      <TableHeader columns={props.columns} />
      {rows}
      {footer}
    </table>
  );
};

export default Table;
