import { Flex } from '@chakra-ui/react'
import Logo from './Logo'


export default function Header(){
    return(
        <Flex
        as="header"
        w="100%"
        // h="100px"
        position="relative"
        left={0}
        top={0}
        align="center"
        backgroundColor="light.100"
        justify="center"
        mb={2}
        >
            <Logo/>
        </Flex>
    )
}