import { Box, Flex, VStack, useColorModeValue, Icon } from "@chakra-ui/react";
import { HamburgerIcon, ChatIcon, WarningIcon } from "@chakra-ui/icons";
import React from "react";

const Sidebar = () => {
    return (
        <Flex
            bg={useColorModeValue("white", "gray.900")}
            color={useColorModeValue("gray.600", "white")}
            padding={3}
            width={'15%'}
            maxWidth={'10%'}
            flex={1}
            m={2}
            borderRadius={10}
            h={'98%'}
            direction={"column"}
        >
        <VStack
        align={'start'}
        spacing={'5'}>
            <Box>
                <Icon as={HamburgerIcon} mr={2}/>
                Dashboard
            </Box>
            <Box>
                <Icon as={WarningIcon} mr={2}/>
                Bugs and issues</Box>
            <Box>
                <Icon as={ChatIcon} mr={2}/>
                Discuss</Box>
        </VStack>


        </Flex>
    );
};

export default Sidebar;
