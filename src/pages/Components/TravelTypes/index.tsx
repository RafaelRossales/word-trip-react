import { Flex, SimpleGrid,Box,VStack,Divider,Text,Image } from '@chakra-ui/react';


export default function TravelTypes(){
    return(
        <Flex>
            <SimpleGrid mt={40} w={1160} h={145} pos="absolute" ml={70} mr={140} >
                <Flex display="flex" justifyContent="space-around" flexDirection="row">
                    <Box>
                        <Image src='/images/Nightlife.png' alt="Picture of the author" w={158} h={145}/>
                    </Box>
                    <Box>
                        <Image src="/images/Beach.png" w={85} h={145}/>
                    </Box>
                    <Box>
                        <Image src="/images/Modern.png" w={113} h={145}/>
                    </Box>
                    <Box>
                        <Image src="/images/Classic.png" w={100} h={145}/>
                    </Box>
                    <Box>
                        <Image src="/images/More.png" w={101} h={145}/>
                    </Box>
                </Flex>
                <SimpleGrid mt={35} ml={550}>
                    <Divider 
                        my="6" 
                        borderColor="black.100"
                        border="2px"
                        w="90px"
                    />
                </SimpleGrid>
            </SimpleGrid>
        </Flex>
    )
}