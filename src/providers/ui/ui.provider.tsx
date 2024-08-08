'use client';
import { FC, ReactNode } from 'react';
import '../../../dist/index.css';
import ThemeContext, { AppTheme } from '../../context';
import './ui.provider.css';

interface UIProviderProps {
  appTheme: AppTheme;
  children: ReactNode;
}

const UIProvider: FC<UIProviderProps> = ({ appTheme, children }) => {
  return <ThemeContext.Provider value={appTheme}>{children}</ThemeContext.Provider>;
};

export default UIProvider;
