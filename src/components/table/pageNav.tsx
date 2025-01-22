import ActionButton from '@/action-button';
import styles from './table.module.css';

type TablePageNav = {
  currentPage: number;
  numberOfPages: number;
  onPrevClick: () => void;
  onNextClick: () => void;
};

export const TablePageNav = (props: TablePageNav) => {
  return (
    <div className={styles.tablePageNavContainer}>
      <div className={styles.tablePageNavText}>
        <div>
          Page {props.currentPage} of {props.numberOfPages}
        </div>
        <div className={styles.tablePageNavButtons}>
          <ActionButton onClick={props.onPrevClick}>Previous</ActionButton>
          <ActionButton onClick={props.onNextClick}>Next</ActionButton>
        </div>
      </div>
    </div>
  );
};
