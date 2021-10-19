import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            100: '#171923',
            200: '#000000',
            300: '#3d3f4b',
            400: '#ed8936',
            500: '#b55b00',
            600: '#B2AFAF',
            700: '#f5f5f5',
            800: '#161616',
            900: '#e7e4e4',
        },
    },
    fonts: {
        heading: 'Helvetica',
        body: 'Aileron',
    },
});

export default theme;
