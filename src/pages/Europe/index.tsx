import { Flex,Divider, SimpleGrid,Text} from '@chakra-ui/react';
import Header from '../Components/Header'
import Banner from '../Components/Europe/Banner'
import Description from '../Components/Europe/Description';
import Info from '../Components/Europe/Info';
import Galery from '../Components/Europe/Galery';

export default function Index()
{
    return (
        <Flex 
        display="flex"
        direction="column"
        >
            <Header/>
            <Banner/>
            <Flex>
                <Description/>
                <Info/>
            </Flex>

            <Flex ml={139} mt={55} w="auto" direction="column">
                <Text
                mb={19}
                fontSize={36}
                fontWeight={500}
                color="gray.100"
                >
                    Cidades +100
                </Text>
                <Galery/>
            </Flex>
            
        </Flex>

    )
}