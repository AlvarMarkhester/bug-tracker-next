import { Flex, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
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
                <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")}>
Backlog
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")}>
Todo
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")}>
Doing
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")}>
Code review
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")}>
Done
                </GridItem>

            </Grid>
        </Flex>
    );
};

export default Tasks;
