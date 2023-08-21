import { Avatar, Box, Card, CardBody, CardFooter, Center, Flex, Heading, Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import image from '../../assets/image1.png'

const CardOne = () => {
  return (
<Center p={4}>
    <Card maxW='sm'>
        <CardBody>
            <Image src={image} objectFit='cover' borderRadius='lg'/>
            <Stack mt={6} spacing={0}>
                <Heading size='md' fontFamily={'Poppins'} fontWeight={'lighter 300'} color={'#18181B'}>Coffee a Brain Freshener</Heading>
                <Text fontFamily={'Poppins'} fontWeight={'Extralight 200'} color={'#71717A'}> It is inhumane, in my opinion, to force people who have a genuine medical need for coffee to wait in line behind people who apparently view it as some kind of recreational activity.</Text>
            </Stack>
        </CardBody>
        <CardFooter py={4}>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar src={image} size='md'/>
                <Box >
                    <Heading size='sm' p='0' m={0} fontFamily={'Poppins'} color={'#18181B'}>Dave Barry</Heading>
                    <Text size='xs' p='0' m='0' color={'#A1A1AA'} fontWeight={'bold'}>Last updated 3 min ago</Text>
                </Box>
            </Flex>
        </CardFooter>
    </Card>
</Center>
  )
}

export default CardOne