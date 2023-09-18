'use client'

import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/react'

export default function AbooutUsCard() {
  return (

    <Box p={4}
    width="100%"
    >
       <Stack
        className='about'
        borderWidth="1px"
        borderRadius="lg"
        marginTop={4}
        // w={{ sm: '100%', md: '540px' }}
        w={"full"}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        // eslint-disable-next-line react-hooks/rules-of-hooks
       
        bg={"linear-gradient(139deg, rgba(255,255,255,1) 57%, rgba(184,199,232,1) 58%)"}
        boxShadow={'2xl'}
        padding={4}>

<Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="left"
          p={1}
       >


<h3 className="service-name">ABOUT US</h3>
         
          <Text
          textAlign={'left'}
          flexWrap={'wrap-reverse'}
          >
            <Wrap spacing={4} align={'left'}>
            <p className="desc">
        Cloud 7 Limited, a pioneer in Bangladesh's digital services and mobile
        payments sector, provides a comprehensive suite of solutions. From
        mobile wallets to payment gateways for local and global partners, we
        also offer telecom connectivity for DOB services. Our commitment to
        innovation, security, and convenience makes us the preferred choice for
        both businesses and consumers, simplifying mobile payments and
        transforming digital content and services accessibility.
      </p>
                </Wrap>
           
          
   
           
          </Text>
         

          </Stack>
       
      
         

       
       
        {/* <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            // src={
            //   'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            // }
            alt="#"
          />
        </Flex> */}
        </Stack>
     
    </Box>
  )
}