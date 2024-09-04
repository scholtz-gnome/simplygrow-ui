import { FC } from 'react';

type TableHeaderProps = {
  columns: { id: string; label: string }[];
};

export const TableHeader: FC<TableHeaderProps> = (props: TableHeaderProps) => {
  const headerRow = props.columns.map((column) => {
    return <th key={column.id}>{column.label}</th>;
  });

  return (
    <thead>
      <tr>{headerRow}</tr>
    </thead>
  );
};
