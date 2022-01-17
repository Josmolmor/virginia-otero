const theme = {
  colors: {
    white: '#ffffff',
    grey100: '#F7F7F8',
    grey200: '#E4E3E8',
    grey300: '#C8C8D0',
    grey400: '#ADACB9',
    grey500: '#9191A1',
    grey600: '#76758A',
    grey700: '#18171C',
    light: '#FFF1E2',
    primary100: '#FF707E',
    primary200: '#B83E4B',
    primary300: '#9E3640',
    primary400: '#782931',
    primary500: '#6B1A22',
    primary900: '#382426',
    blue100: '#2C89B8',
    blue200: '#1F526B',
    green100: '#3EB85A',
    green200: '#0F6B24',
  },
  weights: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
    light: 300,
    thin: 100,
  },
};

export type Theme = typeof theme;

export default theme;
