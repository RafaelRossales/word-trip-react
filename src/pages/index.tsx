import { Flex,Divider, SimpleGrid,Text} from '@chakra-ui/react';
import Banner from "./Components/Banner";
import Header from "./Components/Header/";
import Slider from './Components/Slider';
import Phrase from './Components/Texts';
import TravelTypes from './Components/TravelTypes';


export default function Home() {
  return (
    <Flex 
    w='100vw'
    maxW='100%'
    // align='center'
    direction='column'
    >
      <Header/>
      <Banner/>
      <TravelTypes/>
      <Phrase/>
      <Slider/>
    </Flex>
  )
}
