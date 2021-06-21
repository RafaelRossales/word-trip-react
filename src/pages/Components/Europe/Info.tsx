import { Flex,Divider, SimpleGrid,Text,Image,Box} from '@chakra-ui/react';

export default function Info()
{
    return (
        <Flex 
        direction="row" 
        justifyContent="space-around"
        w={490}
        h={99}
        mt={115}
        ml={95}
        >
            {/* fontFamily="Poppins" */}
            <Box align="center" fontWeight={600}>
                <Text
                fontSize={85}
                color="yellow.100"
                >
                    50
                </Text>
                <p>países</p>
            </Box>
            <Box align="center" fontWeight={600}>
                <Text
                fontSize={85}
                color="yellow.100"
                >
                    60
                </Text>
                <p>línguas</p>
            </Box>
            <Box align="center" fontWeight={600}>
                <Text
                fontSize={85}
                color="yellow.100"
                >
                    27
                </Text>
                <p>cidades +100</p>
            </Box>
        </Flex>
    )
}