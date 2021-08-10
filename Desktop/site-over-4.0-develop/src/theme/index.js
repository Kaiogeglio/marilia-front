import { typographyVariants } from './typographyVariants';

const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
    dark: {
      color: '#011017',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
    green: {
      color: '#c6ff00',
    },
  },
  primary: {
    main: {
      color: '#9687ff',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#bf00b5',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  // Feedback colors
  error: {
    main: {
      color: '#dc3545',
      contrastText: '#fff',
    },
  },
  success: {
    main: {
      color: '#28a745',
      contrastText: '#fff',
    },
  },
  modes: {
    light: {},
  },
};

export default {
  colors,
  typographyVariants,
  breakpoints: {
    xs: 0, // extra small
    sm: 480, // small
    md: 768, // medium
    lg: 992, // large
    xl: 1200, // extra large
  },
  borderRadius: '22px',
  fontFamily: '\'Nunito\', sans-serif',
  transition: '200ms ease-in-out',
};
