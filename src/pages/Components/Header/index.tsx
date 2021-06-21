import { Flex, Link,Icon} from '@chakra-ui/react'
import{ ChevronLeftIcon } from '@chakra-ui/icons'
import Logo from './Logo'
import {useRouter } from 'next/router'




export default function Header(){
    
    const currentRouter = useRouter();

    const isHomeRouter = currentRouter.route  === "/" ? true : false;

    return(
        <Flex
        as="header"
        w="100%"
        // h="100px"
        position="relative"
        left={0}
        top={0}
        // align="center"
        backgroundColor="light.100"
        justify="flex-start"
        flexWrap="wrap"
        mb={2}
        >
            { !isHomeRouter == true && (
            <Link href="/">
                <Icon  as={ChevronLeftIcon} w={25} h={25} ml={140} mt={5} mb={1} />
            </Link>
            )
            }
            <Logo/>
        </Flex>
    )
}