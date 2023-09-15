import { ThemeDefinition } from 'vuetify';

export const LIGHT_THEME = 'light';
export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF'
    // primary: twColors.indigo[600],
    // secondary: twColors.purple[600],
    // error: twColors.red[500],
    // info: twColors.blue[500],
    // success: twColors.emerald[500],
    // warning: twColors.amber[500]
  }
};

export const DARK_THEME = 'dark';
export const dark: ThemeDefinition = {
  dark: true,
  colors: {}
};
