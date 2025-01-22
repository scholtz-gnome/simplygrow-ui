import ActionButton from '@/action-button';
import styles from './table.module.css';

type TablePageNav = {
  currentPage: number;
  numberOfPages: number;
  rowsPerPageSelectionEnabled?: boolean;
  rowsPerPageOptions?: number[];
  onPrevClick: () => void;
  onNextClick: () => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
};

export const TablePageNav = (props: TablePageNav) => {
  const handleRowsPerPageSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rowsPerPage = parseInt(event.target.value, 10);
    props.onRowsPerPageChange(rowsPerPage);
  };

  let rowsPerPageSelector = null;
  if (props.rowsPerPageSelectionEnabled) {
    const defaultOptions = [5, 10, 20];
    const rowsPerPageOptions = props.rowsPerPageOptions || defaultOptions;

    const selectorOptions = rowsPerPageOptions.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));

    rowsPerPageSelector = (
      <div className={styles.tablePageNavSelectContainer}>
        Rows per page:
        <select className={styles.tablePageNavSelect} onChange={handleRowsPerPageSelection}>
          {selectorOptions}
        </select>
      </div>
    );
  }

  const { currentPage, numberOfPages, onPrevClick, onNextClick } = props;
  const onFirstPage = currentPage === 1;
  const onLastPage = currentPage === numberOfPages;
  return (
    <div className={styles.tablePageNavContainer}>
      <div className={styles.tablePageNavText}>
        {rowsPerPageSelector}
        <div>
          Page {currentPage} of {numberOfPages}
        </div>
        <div className={styles.tablePageNavButtons}>
          <ActionButton disabled={onFirstPage} onClick={onPrevClick}>
            Previous
          </ActionButton>
          <ActionButton disabled={onLastPage} onClick={onNextClick}>
            Next
          </ActionButton>
        </div>
      </div>
    </div>
  );
};
