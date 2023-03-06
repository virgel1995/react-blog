import { Box, Show, Text } from "@chakra-ui/react";

export function Name (){
  return (
    <Text
      as="b"
      fontSize={{ base: "18px", md: "24px", lg: "30px" }}
      style={{ textShadow: "#FC0 1px 0 10px" }}
    >
     Blog
    </Text>

    // <Show breakpoint='(max-width: 1000px)'>
    // <Text as="b" fontSize='3xl' style={{ textShadow:"#FC0 1px 0 10px"}}>
    //   Blog</Text>

    // </Show>
  );
};