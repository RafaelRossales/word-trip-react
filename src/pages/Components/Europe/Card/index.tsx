import { Flex,Divider, SimpleGrid,Text,Image,Box, Avatar} from '@chakra-ui/react';

interface CardProps{
    url:string
    flag:string
    country:string,
    city:string
}

export default function Card({url,flag,country,city,}:CardProps)
{
    return(
        <Flex
        w={256}
        h={279}
        backgroundColor="white"
        display="flex"
        direction="column"
        borderRadius="5px"
        mr={50}
        border="1px solid"
        borderColor="yellow.100"
        >
        <Image 
            src={url}
            h={190}
            borderRadius="5px 5px 0px 0px"
        />
        <Box
        mt={5}
        display="flex"
        direction="column"
        justifyContent="space-around"
        >
            <Text fontWeight={25}>
                {city} <p>{country}</p>
            </Text>
            <Avatar 
            alignContent="flex-end"
            src={flag}
            />
        </Box>
        </Flex>
    )
}