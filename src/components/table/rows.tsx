import { FC } from 'react';

type TableRowsProps = {
  data: any[];
};

export const TableRows: FC<TableRowsProps> = (props: TableRowsProps) => {
  const rows = (
    <>
      <tr>
        <td>Row 1 Column 1</td>
        <td>Row 1 Column 2</td>
        <td>Row 1 Column 3</td>
      </tr>
      <tr>
        <td>Row 2 Column 1</td>
        <td>Row 2 Column 2</td>
        <td>Row 3 Column 3</td>
      </tr>
    </>
  );

  return <tbody>{rows}</tbody>;
};
