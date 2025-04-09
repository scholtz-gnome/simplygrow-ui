import { ThemesEnum } from '../../context';
import { ReactNode } from 'react';

type UIProviderProps = {
  appTheme: ThemesEnum;
  children: ReactNode;
};

export { UIProviderProps };
