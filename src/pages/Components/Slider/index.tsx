// import Swiper core and required modules
import{Flex,Image,Box,Link,Text} from '@chakra-ui/react'
import SwiperCore, { Navigation,Pagination,Mousewheel,Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

export default function Slider(){
    return (
        <Flex 
        w={1240}
        h={400}
        // maxW='1240px'
        mx='auto'
        mt='10'
        display="flex"
        justifyContent="center"
        p={7}
        >
        <Swiper pagination={true} className="mySwiper">
            <SwiperSlide>
            <Flex 
            backgroundImage="url('/images/europe.png')"
            bgGradient="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/images/europe.png)"
            pos="absolute"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize='cover'
            w="100%"
            h="100%"
            >
            </Flex>
            <Box pos="relative">
            <Link href="../../Europe/"
            fontSize={48}
            fontWeight={700}
            color="white.80"
            >
                <p>Europa </p>
            </Link>
            <Text
            color="white.80"
            fontWeight="bold"
            fontSize={24}
            fontFamily="Poppins"
            >
            <p>O continente mais antigo.</p>
            </Text>
            </Box>
            </SwiperSlide>

            <SwiperSlide>
            <Flex 
            backgroundImage="url('/images/south_america.jpg')"
            bgGradient="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/images/south_america.jpg)"
            pos="absolute"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize='cover'
            w="100%"
            h="100%"
            >
            </Flex>
            <Box pos="relative">
            <Link href="#"
            fontSize={48}
            fontWeight={700}
            color="white.80"
            >
                <p>America do Sul</p>
            </Link>
            <Text
            color="white.80"
            fontWeight="bold"
            fontSize={24}
            fontFamily="Poppins"
            >
            <p>O continente mais antigo.</p>
            </Text>
            </Box>
            </SwiperSlide>

            <SwiperSlide>
            <Flex 
            backgroundImage="url('https://i1.wp.com/wallur.com/wp-content/uploads/2016/12/china-background-11.jpg?resize=1366%2C768')"
            bgGradient="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(https://i1.wp.com/wallur.com/wp-content/uploads/2016/12/china-background-11.jpg?resize=1366%2C768)"
            pos="absolute"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize='cover'
            w="100%"
            h="100%"
            >
            </Flex>
            <Box pos="relative">
            <Link href="#"
            fontSize={48}
            fontWeight={700}
            color="white.80"
            >
                <p>Asia</p>
            </Link>
            <Text
            color="white.80"
            fontWeight="bold"
            fontSize={24}
            fontFamily="Poppins"
            >
            <p>O continente mais antigo.</p>
            </Text>
            </Box>
            </SwiperSlide>

            <SwiperSlide>
            <Flex 
            backgroundImage="url('https://i1.wp.com/wallur.com/wp-content/uploads/2016/12/china-background-11.jpg?resize=1366%2C768')"
            bgGradient="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(https://i1.wp.com/wallur.com/wp-content/uploads/2016/12/china-background-11.jpg?resize=1366%2C768)"
            pos="absolute"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize='cover'
            w="100%"
            h="100%"
            >
            </Flex>
            <Box pos="relative">
            <Link href="#"
            fontSize={48}
            fontWeight={700}
            color="white.80"
            >
                <p>Asia</p>
            </Link>
            <Text
            color="white.80"
            fontWeight="bold"
            fontSize={24}
            fontFamily="Poppins"
            >
            <p>O continente mais antigo.</p>
            </Text>
            </Box>
            </SwiperSlide>
            
        </Swiper>
        </Flex>

      );
}