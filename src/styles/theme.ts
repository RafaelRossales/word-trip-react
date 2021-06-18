import { extendTheme} from '@chakra-ui/react'


export const theme = extendTheme({
    colors:{
        yellow:{
            "100":"#FFBA08"
        },
        white:{
            "80":"#F5F8FA"
        },
        gray:{
            "100":"#47585B",
            "50":"#C4C4C4"
        },
        light:{
            "100":"#F5F8FA"
        },
        black:{
            "100":"#1D1D1D"
        }
    },
    // fonts:{
    //     heading:'Poppins',
    //     body:'Poppins'
    // },
    styles:{
        global:{
            body:{
                bg:'light.100',
                color:'black.100'
            }
        }
    }
})