import { createTheme, Theme } from "@mui/material";
import { ThemesEnum } from "../../context";
import { defaultTheme, peopleflowTheme, worklightTheme, quicktaskTheme, skillbookTheme } from "./themes";
import { defaultProps, peopleflowProps, worklightProps, quicktaskProps, skillbookProps } from "./config";
import deepmerge from "deepmerge";

const { peopleflow, worklight, quicktask, skillbook } = ThemesEnum;

const themeMap = {
  [peopleflow]: peopleflowTheme,
  [worklight]: worklightTheme,
  [quicktask]: quicktaskTheme,
  [skillbook]: skillbookTheme,
};

const combineThemes = (theme1: any, theme2: any): any => {
  if (!theme2) {
    return theme1;
  }

  return deepmerge(theme1, theme2, {
    arrayMerge: (_target, source) => source,
  });
};

const buildTheme = (themeName: ThemesEnum): Theme => {
  const combinedTheme = combineThemes(defaultTheme, themeMap[themeName]);
  return createTheme(combinedTheme);
};

const getRowHeight = (themeName: ThemesEnum) => {
  const propsMap = {
    [peopleflow]: peopleflowProps,
    [worklight]: worklightProps,
    [quicktask]: quicktaskProps,
    [skillbook]: skillbookProps,
  } as Record<ThemesEnum, any>;

  return propsMap[themeName]?.rowHeight || defaultProps.rowHeight;
};

const getColumnHeaderHeight = (themeName: ThemesEnum) => {
  const propsMap = {
    [peopleflow]: peopleflowProps,
    [worklight]: worklightProps,
    [quicktask]: quicktaskProps,
    [skillbook]: skillbookProps,
  } as Record<ThemesEnum, any>;

  return propsMap[themeName]?.columnHeaderHeight || defaultProps.columnHeaderHeight;
};

export { buildTheme, getRowHeight, getColumnHeaderHeight };
