import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // ou 'dark'
        primary: {
            main: '#1976d2', // azul
        },
        secondary: {
            main: '#kfc27b0', // roxo
        },
        background: {
            default: '#000000',
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    transition: '0.3s',
                    '&:hover': {
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                        transform: 'translateY(-2px)',
                    },
                },
            },
        },
    },
});

export default theme;
