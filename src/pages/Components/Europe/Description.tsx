import { Flex,Divider, SimpleGrid,Text,Image,Box} from '@chakra-ui/react';

export default function Description()
{
    return(
        <Flex
        w={600}
        h={211}
        mt={20}
        ml={140}
        
        >
            <Text
            fontSize={24}
            fontFamily="Poppins"
            align="justify"
            >
                A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
            </Text>
        </Flex>

    )
}