import { Flex,Divider, SimpleGrid,Text,Image,Box} from '@chakra-ui/react';

export default function Banner(){
    return(
        <Flex>
            <SimpleGrid>
                <Image
                src="/images/europe_banner.png"
                alt="europe banner"
                // maxWidth={2000}
                h={500}
                w={2000}
                />
            </SimpleGrid>

        </Flex>
    )
}