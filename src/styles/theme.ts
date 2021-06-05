import { extendTheme} from '@chakra-ui/react'


export const theme = extendTheme({
    colors:{
        yellow:{
            "100":"#FFBA08"
        },
        gray:{
            "100":"#47585B",
            "50":"#C4C4C4"
        },
        black:{
            "100":"#1D1D1D"
        }
    },

    styles:{
        global:{
            body:{
                bg:'gray.50',
                color:'black.100'
            }
        }
    }
})