import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import Biko from './utils/fonts/Biko_Regular.woff2';

const biko = {
    fontFamily: 'Biko',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Biko'),
    local('Biko-Regular'),
    url(${Biko}) format('woff2')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

let theme = createMuiTheme({
    palette: {
        common: {
            black: "#000",
            white: "#fff"
        },
        primary: {
            main: "#3f51b5"
        },
        secondary: {
            main: "#f50057"
        },
        error: {
            main: "#f44336"
        },
        warning: {
            main: "#ff9800"
        },
        info: {
            main: "#2196f3"
        },
        success: {
            main: "#4caf50"
        }
    },
    background: {
        default: "#fff"
    },
    text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "rgba(0, 0, 0, 0.38)"
    },
    typography: {
        fontFamily: 'Biko, Arial',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightBold: 700,
        h1: {
            fontWeight: 300,
            fontSize: "6rem",
            lineHeight: 1.167,
        },
        h2: {
            fontWeight: 300,
            fontSize: "3.75rem",
            lineHeight: 1.2,
        },
        h3: {
            fontWeight: 300,
            fontSize: "3rem",
            lineHeight: 1.167,
        },
        h4: {
            fontWeight: 300,
            fontSize: "2.125rem",
            lineHeight: 1.235,
        },
        h5: {
            fontWeight: 300,
            fontSize: "1.5rem",
            lineHeight: 1.334,
        },
        h6: {
            fontWeight: 300,
            fontSize: "1.25rem",
            lineHeight: 1.6,
        },
        body1: {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.5,
        },
        body2: {
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.43,
        },
        button: {

        }
    },
    props: {
        MuiContainer: {
            style: {
                marginTop: '40px',
            },
        },
        MuiButtonBase: {
            style: {
                marginTop: '20px',
            },
        },
        MuiAppBar: {
            style: {
                height: '6rem',
                backgroundColor: '#fae45e'
            }
        },
        MuiListItemText: {
            style: {
                color: "#000",
            }
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [biko],
            }
        },
    }
});

theme = responsiveFontSizes(theme);

export default theme;