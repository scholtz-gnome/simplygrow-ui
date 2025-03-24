import { createContext } from 'react';

export type AppTheme = undefined | 'worklight' | 'peopleflow' | 'skillbook' | 'quicktask';

const ThemeContext = createContext<AppTheme>(undefined);

export default ThemeContext;
