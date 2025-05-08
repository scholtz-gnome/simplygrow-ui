import { defaultTheme, peopleflowTheme, quicktaskTheme, skillbookTheme, worklightTheme } from "@/table/themes";
import { createTheme, Theme } from "@mui/material";
import deepmerge from "deepmerge";
import { ThemesEnum } from "../../context";

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

export { buildTheme };
