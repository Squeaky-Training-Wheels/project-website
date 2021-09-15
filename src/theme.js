import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
    colors: {
        brand: {
            100: "#171923",
            200: "#000000",
            300: "#3d3f4b",
            400: "#ed8936",
            500: "#b55b00",
            600: "#ffba65",
            700: "#f5f5f5",
            800: "#161616"

        }
    },
    fonts: {
        heading: "Russo One",
        body: "Aileron"
    }
})
export default theme