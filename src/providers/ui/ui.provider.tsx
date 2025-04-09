import { FC } from 'react';
import ThemeContext from '../../context';
import { UIProviderProps } from './type.definitions';

const UIProvider: FC<UIProviderProps> = ({ appTheme, children }) => {
  return <ThemeContext.Provider value={appTheme}>{children}</ThemeContext.Provider>;
};

export default UIProvider;
