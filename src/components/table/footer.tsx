import { FC } from 'react';

import styles from './table.module.css';

type TableFooterProps = {
  values: { id: string; label: string }[];
  rowSelectionEnabled?: boolean;
};

export const TableFooter: FC<TableFooterProps> = (props: TableFooterProps) => {
  const footerRow = props.values.map((value) => {
    return <td key={value.id}>{value.label}</td>;
  });

  if (props.rowSelectionEnabled) {
    footerRow.unshift(<td key="selection" />);
  }

  return (
    <tfoot className={styles.tableFooter}>
      <tr className={styles.tableTr}>{footerRow}</tr>
    </tfoot>
  );
};
