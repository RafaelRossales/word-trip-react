import { Flex, Image, SimpleGrid, Box, Text} from '@chakra-ui/react'

export default function Banner(){
    return(
        <Flex
        >
            <SimpleGrid 
            
            >
                <Image 
                src="https://wallpaperaccess.com/full/2370208.jpg" 
                alt="banner"
                w={1480}
                h={335}
                pos="absolute"
                />
                
                <Flex 
                pos="relative"
                w={410}
                h={108}
                color="gray.50"
                fontSize="36px"
                ml={180}
                mt={140}
                >
                    <Text>
                        <p>
                            5 Continentes,
                        </p>
                        <p>
                            infinitas possibilidades.
                        </p>
                    </Text>
                </Flex>

                <Flex 
                pos="relative"
                w={524}
                h={57}
                ml={180}
                color="gray.50"
                fontSize="20px"
                >
                    <Text>
                        <p>Chegou a hora de tirar do papel a viagem que você</p>
                        <p>sempre sonhou.</p>
                    </Text>
                </Flex>
            </SimpleGrid>

            <SimpleGrid>
            <Flex 
                pos="absolute"
                color="gray.50"
                fontSize="20px"
                mt={100}
                >
                    <Image 
                    w={417.15}
                    h={270.74}
                    transform="rotate(-3deg)"
                    src="https://wallpaperaccess.com/full/2370208.jpg"
                    border="2px"
                    borderColor="gray.100"
                    />
                </Flex>


            </SimpleGrid>
        </Flex>
    )
}