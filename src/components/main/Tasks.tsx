import { Flex, Grid, GridItem, useColorModeValue, Text } from "@chakra-ui/react";
import React from "react";

const Tasks = () => {
    return (
        <Flex p={'10px'} w={'100%'}>
            <Grid
                w="100%"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                    <Text align={"center"} bg="red.300" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>Backlog</Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                    <Text align={"center"} bg="yellow.300" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>Todo</Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                    <Text align={"center"} bg="teal.400" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>In progress</Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                    <Text align={"center"} bg="green.200" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>Code Review</Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                    <Text align={"center"} bg="green.400" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>Finished</Text>
                </GridItem>

            </Grid>
        </Flex>
    );
};

export default Tasks;
