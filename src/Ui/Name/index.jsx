import { Box, Show, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export default function Name (){
  return (
    <Link to= "/"
      fontSize={{ base: "18px", md: "24px", lg: "30px" }}
      style={{ textShadow: "#FC0 1px 0 10px" }}
    >
     Blog
    </Link>

    // <Show breakpoint='(max-width: 1000px)'>
    // <Text as="b" fontSize='3xl' style={{ textShadow:"#FC0 1px 0 10px"}}>
    //   Blog</Text>

    // </Show>
  );
};