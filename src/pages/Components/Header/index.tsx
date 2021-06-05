import { Flex } from '@chakra-ui/react'
import Logo from './Logo'


export default function Header(){
    return(
        <Flex
        as="header"
        w="100%"
        h="100"
        position="relative"
        left={0}
        top={0}
        align="center"
        backgroundColor="gray.50"
        justify="center"
        >
            <Logo/>
        </Flex>
    )
}