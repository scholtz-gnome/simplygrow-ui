import { Dispatch, FC, SetStateAction } from 'react';
import styles from './select-chevron.icon.module.css';

interface SelectChevronIconProps {
  focused: boolean;
  setFocused: Dispatch<SetStateAction<boolean>>;
}

const SelectChevronIcon: FC<SelectChevronIconProps> = ({ focused, setFocused }) => {
  const handleClick = () => {
    console.log('SelectChevronIcon()', focused);
    setFocused(!focused);
  };

  return (
    <svg
      onClick={handleClick}
      className={`${styles.selectChevron} ${focused ? styles.selectChevronFocused : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M8.99995 12.8254C8.8312 12.8254 8.69058 12.7691 8.54995 12.6566L2.0812 6.30039C1.82808 6.04727 1.82808 5.65352 2.0812 5.40039C2.33433 5.14727 2.72808 5.14727 2.9812 5.40039L8.99995 11.2785L15.0187 5.34414C15.2718 5.09102 15.6656 5.09102 15.9187 5.34414C16.1718 5.59727 16.1718 5.99102 15.9187 6.24414L9.44995 12.6004C9.30933 12.741 9.1687 12.8254 8.99995 12.8254Z"
        fill="#64748B"
      />
    </svg>
  );
};

export default SelectChevronIcon;
