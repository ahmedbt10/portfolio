import {extendTheme} from "@chakra-ui/react"
const theme = extendTheme({
    fonts: {
        body:`'Montserrat', sans-serif`,
    },
    colors:{
        primary:{
            light:"#CD295A"
        },
        secondary:{
            light:"#136780"
        },
        black:{
            100:"#292224",
            90:"rgba(41, 34, 36,0.9)",
            75:"rgba(41, 34, 36,0.75)",
            50:"rgba(41, 34, 36,0.5)",
            25:"rgba(41, 34, 36,0.25)",
            10:"rgba(41, 34, 36,0.1)"
        },
        white:{
            100:"#FBFBFB"
        }
    }
})

export default theme