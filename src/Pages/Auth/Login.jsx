import React from 'react';
import { useState } from 'react';
import { Link as Linker, useNavigate } from 'react-router-dom';
import { 
	storeTokenInLocalStorage,
				ApiLogin,
	useUser,
	APP_ROUTES
			 } from '../../Api';
//import { SignIn } from "../../Components"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,

  Button,
  Heading,
  Text,
  useColorModeValue,
	Spinner
} from '@chakra-ui/react';

export default function Login (){
	const navigate = useNavigate();
  const { user, authenticated } = useUser();
  if (user || authenticated) {
    navigate(APP_ROUTES.HOME)
  }

  const [ name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    try {
      setIsLoading(true);
      const response = await ApiLogin(name, password);
     /*if (!response?.data?.token) {
        console.log('Something went wrong during signing in: ', response);
        return;
      }*/
			storeTokenInLocalStorage(response.data.token);
      navigate(APP_ROUTES.HOME)
    }
    catch (err) {
      console.log('Some error occured during signing in: ', err);
    }
    finally {
      setIsLoading(false);
    }
  };

	
	return (
		<>
		    <Flex
      minH={'70vh'}
      align={'center'}
      justify={'center'}
     bgGradient={"linear(to-t, white.200, pink.500)"}	>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading 
						p= "2"
						rounded={'lg'}
bgGradient="linear(to-r, green.200, pink.500)"		
						fontSize={'2xl'}>Sign in to your account</Heading>
          <Text 
					p= "2"
						rounded={'lg'}
bgGradient="linear(to-l, green.200, pink.500)"	
		fontSize={'lg'} color={'gray.600'}>
            Not a User ?  Enjoy Us <Linker to="/signup" ><Link 													 p= "2"
		rounded={'lg'}
bgGradient="linear(to-r, green.200, pink.500)" color={'aqua'}>SignUp</Link> </Linker>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
         
					
bgGradient={"linear(to-t, green.200, pink.500)"}		
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>User Name</FormLabel>
              <Input type="text" 
								            value={name}
            onChange={(e) => { setName(e.target.value); }}
								/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password}
            onChange={(e) => { setPassword(e.target.value); }} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link  color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
								            onClick={signIn}
								mr= "6"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                bg: 'blue.500',
                }}>
                Sign in
								{
              isLoading ?
                <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='green.200'
  color='red.500'
  size='md'
/> : null
								}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
		</>
	)
}
