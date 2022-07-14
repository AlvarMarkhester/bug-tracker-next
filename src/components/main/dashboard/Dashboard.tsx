import {
    Flex,
    Text,
    Grid,
    GridItem,
    Stack,
    Button,
    Input,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Projects from "./Projects";

const Dashboard = () => {
    return (
        <Flex p={"10px"} w={"100%"}>
            <Grid
                w={"100%"}
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={3} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={'10px'}>
                    <Projects/>
                </GridItem>
                <GridItem colSpan={4} bg={useColorModeValue("white", "gray.700")} borderRadius={'10px'}>
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
                            width={"100px"}
                            height={"100px"}
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
                                Open bugs
                            </Text>
                        </Flex>
                        <Flex
                            bg={"teal.400"}
                            width={"100px"}
                            height={"100px"}
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
                                Closed bugs
                            </Text>
                        </Flex>
                        <Flex
                            bg={"red.400"}
                            width={"100px"}
                            height={"100px"}
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
                            width={"100px"}
                            height={"100px"}
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
                            width={"100px"}
                            height={"100px"}
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
                </GridItem>
                <GridItem colSpan={1} rowSpan={2} bg={useColorModeValue("white", "gray.700")} borderRadius={'10px'}>
                    <Text align={"center"}>Tickets by priority</Text>
                </GridItem>
                <GridItem colSpan={1} rowSpan={2} bg={useColorModeValue("white", "gray.700")} borderRadius={'10px'}>
                    <Text align={"center"}>Tickets by owner</Text>
                </GridItem>
                <GridItem colSpan={1} rowSpan={2} bg={useColorModeValue("white", "gray.700")} borderRadius={'10px'}>
                    <Text align={"center"}>Tickets by status</Text>
                </GridItem>
                <GridItem colSpan={1} rowSpan={2} bg={useColorModeValue("white", "gray.700")} borderRadius={'10px'}>
                    <Text align={"center"}>Note board</Text>
                </GridItem>
            </Grid>
        </Flex>
    );
};

export default Dashboard;
