export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    black: '#333333',
    dark: '#000000',
    black_btn: '#303030',
    red: '#f44336',
    blue: '#D9DBE9',
    primaryText: '#404040',
    secondaryText: '#757575',
    body_bg: '#FAFAFA',
    tomato: 'tomato',
    footer_bg: '#464648',
    link: '#007aff',
    input_bg: '#f1f1f5',
    placeholder: '#6E7191',
    privacy_bg: '#E3E3EB',
    primary: '#7058FF',
    body_svg: '#f9f9f9',
    orange: '#FFAA00',
    grey_off: '#C9CAD4',
    grey_purple: '#A0A3BD',
  },
  size: {
    mobile: '375px',
    tablet: '768px',
    default: '960px',
    desktop: '1306px',
  },
  device: {
    mobile: `@media screen and (min-width:375px)`,
    mobileMax: `@media screen and (max-width:767px)`,
    tablet: `@media screen and (min-width: 768px)`,
    default: `@media screen and (min-width: 960px)`,
    desktop: `@media screen and (min-width: 1306px)`,
  },
  fonts: {
    title: {
      semiBold: 'Jost_SemiBold',
      bold: 'Jost_Bold',
    },
    descr: {
      regular: 'OpenSans_Regular',
      semiBold: 'OpenSans_SemiBold',
      bold: 'OpenSans_Bold',
    },
  },
  spacing: value => `${4 * value}px`,
});