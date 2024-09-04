import { FC } from 'react';

import styles from './select.module.css';

type TableFooterProps = {
  values: { id: string; label: string }[];
};

export const TableFooter: FC<TableFooterProps> = (props: TableFooterProps) => {
  const footerRow = props.values.map((value) => {
    return (
      <td className={styles.tableTd} key={value.id}>
        {value.label}
      </td>
    );
  });
  console.debug('>>>', footerRow);
  return (
    <tfoot>
      <tr className={styles.tableTr}>{footerRow}</tr>
    </tfoot>
  );
};
