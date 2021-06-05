import { Flex } from '@chakra-ui/react';
import Banner from "./Components/Banner";
import Header from "./Components/Header/";


export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header/>
      <Banner/>
    </Flex>
  )
}
