

import { Link } from "react-router-dom"

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

export function PostCard({
	post
}) {
  return (
    <div>
    <Box key= {post.id} p={5} bg="cyan.400"  borderRadius={20} as="article">
    <Image h="350px" objectFit='fill' w="100%" src="/assets/developer.gif" alt="stock image" rounded= {"xl"}/>
   <Heading size="xl" fontWeight="bold"> Blog Title </Heading> 
   <Text noOfLines={2}> {post.text}</Text>
    </Box>
    </div>
  );
		 }


