// ==============================|| THEME CONSTANT ||============================== //

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

export const APP_DEFAULT_PATH = '/dashboard';
export const HORIZONTAL_MAX_ITEM = 6;
export const DRAWER_WIDTH = 260;

export const ThemeMode = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const MenuOrientation = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal'
};

export const ThemeDirection = {
  LTR: 'ltr',
  RTL: 'rtl'
};

// ==============================|| THEME CONFIG  ||============================== //

const config = {
  /**
   * The props used for the theme font-style.
   * We provide static below options -
   * `'Inter', sans-serif`
   * `'Poppins', sans-serif`
   * `'Roboto', sans-serif`
   * `'Public Sans', sans-serif`
   * `'Open Sans', sans-serif` (default)
   */
  fontFamily: `'Open Sans', sans-serif`,

  /**
   * The props used for display menu-items with multi-language.
   * We provide static below languages according to 'react-intl' options - https://www.npmjs.com/package/react-intl
   * 'pt' (default) - Portuguese (Brazil)
   * 'en' - English
   */
  i18n: 'pt',

  /**
   * the props used for menu orientation (diffrent theme layout).
   * we provide static below options -
   * 'vertical' (default) - MenuOrientation.VERTICAL
   * 'horizontal' - MenuOrientation.HORIZONTAL
   */
  menuOrientation: MenuOrientation.VERTICAL,

  /**
   * the props used for show mini variant drawer
   * the mini variant is recommended for apps sections that need quick selection access alongside content.
   * default - false
   */
  miniDrawer: false,

  /**
   * the props used for theme container.
   * the container centers your content horizontally. It's the most basic layout element.
   * default - true which show container
   * false - will show fluid
   */
  container: true,

  /**
   * the props used for default theme palette mode
   * explore the default theme
   * below theme options -
   * 'light' (default) - ThemeMode.LIGHT
   * 'dark' - ThemeMode.DARK
   */
  mode: ThemeMode.LIGHT,

  /**
   * the props used for theme primary color variants
   * we provide static below options thoe s are already defaine in src/themes/theme -
   * 'default'
   * 'colonymon
   */
  presetColor: 'colonymon',

  /**
   * the props used for default theme direction
   * explore the default theme
   * below theme options -
   * 'ltr' (default) - ThemeDirection.LTR
   * 'rtl' - ThemeDirection.RTL
   */
  themeDirection: ThemeDirection.LTR,

  /**
   * Weather default location
   * Fonte: https://geocoding-api.open-meteo.com/v1/search?name=fortaleza
   */
  location: {
    id: 3399415,
    name: 'Fortaleza',
    latitude: -3.71722,
    longitude: -38.54306,
    elevation: 18,
    feature_code: 'PPLA',
    country_code: 'BR',
    timezone: 'America/Fortaleza',
    population: 2400000,
    country_id: 3469034,
    country: 'Brazil'
  }
};

export default config;
