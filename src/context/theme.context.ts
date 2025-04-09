import { createContext } from 'react';
import { ThemesEnum } from './type.definitions';

const ThemeContext = createContext<ThemesEnum>(ThemesEnum.peopleflow);

export default ThemeContext;
