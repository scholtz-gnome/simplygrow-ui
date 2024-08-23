import { FC, ReactNode, useContext } from 'react';
import ThemeContext from '../../context';
import styles from './dropdown.module.css';

interface DropdownProps {
  children: ReactNode;
  focused: boolean;
  isValid: boolean;
}

const Dropdown: FC<DropdownProps> = ({ focused, children }) => {
  const theme = useContext(ThemeContext);

  const focusedStyles = focused ? styles.focused : '';

  let focusThemeStyles = '';

  switch (theme) {
    case 'peopleflow':
      focusThemeStyles = styles.peopleflowThemeFocused;
      break;
    case 'worklight':
      focusThemeStyles = styles.worklightThemeFocused;
      break;
    case 'skillbook':
      focusThemeStyles = styles.skillbookThemeFocused;
      break;
    case undefined:
      focusThemeStyles = styles.defaultThemeFocused;
      break;
  }

  return <div className={`${styles.dropdown} ${focusedStyles} ${focused ? focusThemeStyles : ''}`}>{children}</div>;
};

export default Dropdown;
