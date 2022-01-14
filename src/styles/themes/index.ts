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
    primary100: '#F2F2FD',
    primary200: '#CCCAF6',
    primary300: '#8682D9',
    primary400: '#413CC3',
    primary500: '#0A0759',
    primary600: '#07054C',
    primary700: '#02012A',
    secondary100: '#FEE2DA',
    secondary200: '#F9757F',
    secondary300: '#F54966',
    secondary400: '#D2355E',
    offGreen: '#E3F7F2',
    downy: '#60D2B5',
    derby: '#FFEDE1',
    pumpkin: '#FC7A1E',
    lavender: '#FFE5EB',
    salmon: '#FF99AF',
    selago: '#E8F2FC',
    deepCove: '#070548',
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
