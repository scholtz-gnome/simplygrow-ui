import { FC, ReactNode } from 'react';
import ThemeContext, { AppTheme } from '../../context';

interface UIProviderProps {
  appTheme?: AppTheme;
  children: ReactNode;
}

const UIProvider: FC<UIProviderProps> = ({ appTheme, children }) => {
  return <ThemeContext.Provider value={appTheme}>{children}</ThemeContext.Provider>;
};

export default UIProvider;
