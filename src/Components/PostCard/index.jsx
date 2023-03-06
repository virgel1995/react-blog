



import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
	Stack,
	Badge,
	Flex,Spacer


} from '@chakra-ui/react';

export function PostCard() {
  return (
    <div>
      <Box maxW= "250px" borderRadius='xl' color= "red" bg='white'>
        <Image
          src='/assets/developer.gif'
          alt='post imge'
          borderRadius='xl'
          objectFit='cover'
          mx='auto'
        />
        <HStack mt='5' spacing='3'>
          {['Waterfall', 'Nature'].map((item) => (
            <Tag key={item} variant='outline'>
              {item}
            </Tag>
          ))}
        </HStack>
        <Heading my='4' size='lg'>
          Svartifoss Waterfall
        </Heading>
        <Text>
          Svartifoss is a waterfall in Skaftafell in Vatnajökull National Park in Iceland, and is one of the most popular sights in the park. It is surrounded by dark lava columns, which gave rise to its name. The base of this waterfall is noteworthy for its sharp rocks.
        </Text>
        <Center my='6'>
          <Button colorScheme='blue'>Learn more</Button>
        </Center>
      </Box>
    </div>
  );
		 }



export function PostCard2(){



	return (
		<>
		<Box w="300px" rounded="20px" 
           overflow="hidden" bg="aqua" mt="10">
        <Image src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210727094649/img1.jpg"
               alt="Card Image" boxSize="300px">
        </Image>
        <Box p={5}>
          <Stack align="center">
            <Badge variant="solid" colorScheme="green" 
              rounded="full" px={2}>
            GeeksForGeeks
            </Badge>
          </Stack>
          <Stack align="center">
            <Text as="h2" fontWeight="normal" my={2} >
              A Computer Science Portal for Geeks
            </Text>
            <Text fontWeight="light">
              A platform for students to study CSE concepts.
            </Text>
          </Stack>
          <Flex>  
            <Spacer />
            <Button variant="solid" 
              colorScheme="green" size="sm">
                Learn More
            </Button>
          </Flex>
        </Box>
      </Box>
		</>
	)
}