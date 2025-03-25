import { BaseSyntheticEvent, Dispatch, FC, SetStateAction, useContext, useState } from 'react';
import Fuse, { FuseOptionKey } from 'fuse.js';

import styles from './search-filter.module.css';
import ThemeContext from '../../context';
import SearchIcon from './search.icon';
import ClearIcon from './clear.icon';

interface SearchFilterProps {
  /**
   * Unfiltered data that will not change upon having the `setData` function called.
   */
  data: any[];
  setData: Dispatch<SetStateAction<any[]>>;
  id: string;
  placeholder?: string;

  /**
   *  - Can be used to search objects by passing in the object property/properties as strings.
   *
   *  - Can be used to search nested objects by using dot notation within the string:
   * Eg. `'book.author'`
   */
  keys?: FuseOptionKey<any>[];
}

/**
 * Takes in initial data and runs a setter function to update that data on search.
 */
const SearchFilter: FC<SearchFilterProps> = ({ data, setData, id, placeholder = 'Search', keys }) => {
  const [value, setValue] = useState('');

  const theme = useContext(ThemeContext);
  let iconFillColour = undefined;
  switch (theme) {
    case 'peopleflow':
      iconFillColour = styles.peopleflowIconColour;
      break;
    case 'worklight':
      break;
    case 'skillbook':
      break;
    case 'quicktask':
      iconFillColour = styles.quicktaskIconColour;
      break;
    case undefined:
      break;
  }

  const handleChange = (e: BaseSyntheticEvent) => {
    const searchInput = e.target.value;
    setValue(searchInput);

    const fuse = new Fuse(data, { keys, threshold: 0.1 });

    if (searchInput.trim() === '') {
      setData(data);
    } else {
      const output = fuse.search(searchInput);
      setData(output.map((result) => result.item));
    }
  };

  let icon = null;
  if (value === '') {
    icon = <SearchIcon fillColour={iconFillColour} />;
  } else {
    icon = <ClearIcon fillColour={iconFillColour} onClick={() => setValue('')} />;
  }

  return (
    <div className={styles.searchFilter}>
      <input
        className={styles.searchFilterInput}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={handleChange}
      />
      {icon}
    </div>
  );
};

export default SearchFilter;
