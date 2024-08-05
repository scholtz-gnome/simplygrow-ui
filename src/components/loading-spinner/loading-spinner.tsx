import { FC } from 'react';
import styles from './loading-spinner.module.css';

interface LoadingSpinnerProps {}

const LoadingSpinner: FC<LoadingSpinnerProps> = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default LoadingSpinner;
