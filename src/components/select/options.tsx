import { FC } from 'react';
import styles from './options.module.css';

interface OptionsProps {
  options: string[];
  selectOption: (data: string) => void;
  selectedValue: string;
}

const Options: FC<OptionsProps> = ({ options, selectOption, selectedValue }) => {
  const scrollStyles = options.length > 4 ? styles.scrollOptions : '';

  return (
    <div className={`${styles.options} ${scrollStyles}`}>
      {options.map((data, i) => (
        <p
          key={i}
          className={`${selectedValue === data ? styles.selectedOption : styles.notSelected} ${styles.option}`}
          onClick={() => selectOption(data)}
        >
          {data}
        </p>
      ))}
    </div>
  );
};

export default Options;
