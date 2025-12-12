import React, {
  createContext,
  ReactNode,

  useContext,
  useEffect,
  useState,
} from "react";
import defaultConfig, {
  defaultTheme,
  backgroundDark,
  backgroundLight,
  textDark,
  textLight,
  appThemeFont, 
  LightSidebar,
  DarkSidebar
} from "@crema/constants/defaultConfig";
import { LayoutDirection } from "@crema/constants/AppEnums";
import { ThemeProvider } from "styled-components";
import {GlobalStyles} from '@crema/core/theme/GlobalStyle';

  export interface Palette {
    mode: string;
    background: typeof backgroundLight | typeof backgroundDark;
    text: typeof textLight | typeof textDark;
    primary: any;
    secondary: any;
    [key: string]: any;
  }
  
  export interface AppTheme {
    spacing: number;
    cardRadius: number | string;
    cardRadius30: number | string;
    cardShadow: string;
    direction: LayoutDirection;
    palette: Palette;
    font: typeof appThemeFont;
    sidebar: {
      light: typeof LightSidebar;
      dark: typeof DarkSidebar;
    };
    breakpoints: typeof defaultTheme.theme.breakpoints;
    sizes: typeof defaultTheme.theme.sizes;
    [key: string]: any;
  }

  
export interface ThemeData {
  theme: AppTheme;
  themeMode: string;
  themeStyle: string;
}

export interface ThemeActions {
  updateTheme: (theme: AppTheme) => void;
  updateThemeMode: (themeMode: string) => void;
  updateThemeStyle: (themeStyle: string) => void;
}

export const ThemeContext = createContext<ThemeData>({
  theme: defaultTheme.theme,
  themeMode: defaultConfig.themeMode,
  themeStyle: defaultConfig.themeStyle,
});

const ThemeActionsContext = createContext<ThemeActions>({
  updateTheme: () => {},
  updateThemeMode: () => {},
  updateThemeStyle: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const useThemeActionsContext = () => useContext(ThemeActionsContext);
type ThemeContextProviderProps = {
  children: ReactNode;
};

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [themeMode, updateThemeMode] = useState<string>(
    defaultConfig.themeMode,
  );
  const [themeStyle, updateThemeStyle] = useState<string>(
    defaultConfig.themeStyle,
  );



const [theme, setTheme] = useState<AppTheme>(defaultTheme.theme);

  const updateTheme = (theme: AppTheme) => {
    console.log("updateTheme th", theme);
    setTheme(theme);
  };



  const buildTheme = (mode: string) => ({
    ...defaultTheme.theme,
    palette: {
      ...defaultTheme.theme.palette,
      mode: mode,
      background: {
        ...(mode === "dark" ? backgroundDark : backgroundLight), 
        hover:
          mode === "dark"
            ? defaultTheme.theme.palette.gray[700] 
            : defaultTheme.theme.palette.gray[100], 
      },
      text: mode === "dark" ? textDark : textLight,
      success: defaultTheme.theme.palette.success || { light: '#d9f7be', main: '#52c41a' },
      error: defaultTheme.theme.palette?.error ?? { light: '#ffa39e', main: '#ff4d4f' },
    },
    font: appThemeFont,
  });
  
  useEffect(() => {
    setTheme(buildTheme(themeMode));
  }, [themeMode]);
  
  
  // useEffect(() => {
  //   theme.palette = {
  //     ...theme.palette,
  //     mode: themeMode === ThemeMode.DARK ? ThemeMode.DARK : ThemeMode.LIGHT,
  //     background:
  //       themeMode === ThemeMode.DARK ? backgroundDark : backgroundLight,
  //     text: themeMode === ThemeMode.DARK ? textDark : textLight,
  //   };
  //
  //   updateTheme(theme);
  // }, [themeMode, theme, updateTheme]);

  useEffect(() => {
    if (theme.direction === LayoutDirection.RTL) {
      document.body.setAttribute("dir", LayoutDirection.RTL);
    } else {
      document.body.setAttribute("dir", LayoutDirection.LTR);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeStyle,
        themeMode,
      }}
    >
      <ThemeActionsContext.Provider
        value={{
          updateTheme,
          updateThemeStyle,
          updateThemeMode,
        }}
      >
        <ThemeProvider theme={theme}>
        <GlobalStyles/>
          {children}
          </ThemeProvider>
        
      </ThemeActionsContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
