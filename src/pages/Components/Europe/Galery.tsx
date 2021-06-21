import { Flex,Divider, SimpleGrid,Text,Image,Box} from '@chakra-ui/react';
import Card from './Card'



export default function Galery()
{
    return(
        <Flex h={700} flexWrap="wrap">
            <Card url="/images/london.png" flag="/images/england_flag.png" country="Reino Unido" city="Londres"/>
            <Card url="/images/paris.png" flag="/images/paris_flag.png" country="França" city="Paris"/>
            <Card url="/images/rome.png" flag="/images/rome_flag.png" country="Itália" city="Roma"/>
            <Card url="/images/praga.png"  flag="/images/praga_flag.png" country="República Tcheca" city="Praga"/>
            <Card url="/images/amsterda.png" flag="/images/holande_flag.png" country="Holanda" city="Amsterdã"/>
        </Flex>
    )
}