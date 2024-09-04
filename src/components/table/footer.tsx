import { FC } from 'react';

type TableFooterProps = {
  values: { id: string; label: string }[];
};

export const TableFooter: FC<TableFooterProps> = (props: TableFooterProps) => {
  const footerRow = props.values.map((value) => {
    return <td key={value.id}>{value.label}</td>;
  });
  console.debug('>>>', footerRow);
  return (
    <tfoot>
      <tr>{footerRow}</tr>
    </tfoot>
  );
};
