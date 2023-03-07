import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { ApiRigster, APP_ROUTES } from '../../Api';
import { Link as Linker, useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
	Link,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';



export default function Rigster () {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [isLoading, setIsLoading] = useState(false);
const [showPassword, setShowPassword] = useState(false);


  const signUp = async () => {
    try {
      setIsLoading(true);
      const response = await ApiRigster(name, password, gender, age)
      if (!response?.data?.token) {
        console.log('Something went wrong during signing up: ', response);
        return;
      }
      navigate(APP_ROUTES.SIGN_IN);
    }
    catch (err) {
      console.log('Some error occured during signing up: ', err);
    }
    finally {
      setIsLoading(false);
    }
  };



return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
     bgGradient={"linear(to-b, white.200, pink.500)"}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bgGradient={"linear(to-t, white.200, pink.500)"}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="age" isRequired>
                  <FormLabel>Age </FormLabel>
                  <Input type="number"             value={age}
            onChange={(e) => { setAge(e.target.value); }}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="gender">
                  <FormLabel>Gender </FormLabel>
                  <Input type="text" 
            value={gender}
            onChange={(e) => { setGender(e.target.value); }}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="name" isRequired>
              <FormLabel>User Name</FormLabel>
              <Input type="text"             value={name}
            onChange={(e) => { setName(e.target.value); }}
/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}  value={password}
            onChange={(e) => { setPassword(e.target.value); }}
									/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} 
								onClick={signUp}
								>
								
            {
              isLoading ?
                <div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" /> : null
						}
								<span>
                Sign up
									</span>
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Linker to="/signin">
									<Link  
	href= "#"
																		 p= "2"
		rounded={'lg'}
bgGradient="linear(to-r, green.200, pink.500)" color={'aqua'}
										>
									Login
								</Link>
								</Linker>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
