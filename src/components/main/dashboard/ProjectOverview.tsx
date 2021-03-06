import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ProjectOverview = () => {
    return (
        <Stack
            spacing={"20"}
            direction={"row"}
            justify={"center"}
            h={"100%"}
            w={"100%"}
            align={"center"}
        >
            <Flex
                bg={"green.400"}
                width={"120px"}
                height={"120px"}
                borderRadius={"15px"}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Text
                    textAlign={"center"}
                    color={"blackAlpha.700"}
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    1
                </Text>
                <Text
                    textAlign={"center"}
                    color={"blackAlpha.700"}
                    fontWeight={"bold"}
                >
                    Open tickets
                </Text>
            </Flex>
            <Flex
                bg={"teal.400"}
                width={"120px"}
                height={"120px"}
                borderRadius={"15px"}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Text
                    textAlign={"center"}
                    color={"blackAlpha.700"}
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    1
                </Text>
                <Text
                    textAlign={"center"}
                    color={"blackAlpha.700"}
                    fontWeight={"bold"}
                >
                    Closed tickets
                </Text>
            </Flex>
            <Flex
                bg={"red.400"}
                width={"120px"}
                height={"120px"}
                borderRadius={"15px"}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Text
                    textAlign={"center"}
                    color={"blackAlpha.700"}
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    1
                </Text>
                <Text
                    textAlign={"center"}
                    color={"blackAlpha.700"}
                    fontWeight={"bold"}
                >
                    Overdue
                </Text>
            </Flex>
            <Flex
                bg={"yellow.200"}
                width={"120px"}
                height={"120px"}
                borderRadius={"15px"}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Text
                    textAlign={"center"}
                    color={"blackAlpha.700"}
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    1
                </Text>
                <Text
                    textAlign={"center"}
                    color={"blackAlpha.700"}
                    fontWeight={"bold"}
                >
                    Due today
                </Text>
            </Flex>
            <Flex
                bg={"green.200"}
                width={"120px"}
                height={"120px"}
                borderRadius={"15px"}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Text
                    textAlign={"center"}
                    color={"blackAlpha.700"}
                    fontWeight={"bold"}
                    fontSize={"2xl"}
                >
                    1
                </Text>
                <Text
                    textAlign={"center"}
                    color={"blackAlpha.700"}
                    fontWeight={"bold"}
                >
                    Due 7 days
                </Text>
            </Flex>
        </Stack>
    );
};

export default ProjectOverview;
