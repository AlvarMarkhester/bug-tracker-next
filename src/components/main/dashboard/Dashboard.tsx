import {
    Flex,
    Text,
    Grid,
    GridItem,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ProjectOverview from "./ProjectOverview";
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
                <GridItem
                    rowSpan={3}
                    colSpan={1}
                    bg={useColorModeValue("white", "gray.700")}
                    borderRadius={"10px"}
                >
                    <Projects />
                </GridItem>
                <GridItem
                    colSpan={4}
                    bg={useColorModeValue("white", "gray.700")}
                    borderRadius={"10px"}
                >
                    <ProjectOverview />
                </GridItem>
                <GridItem
                    colSpan={1}
                    rowSpan={2}
                    bg={useColorModeValue("white", "gray.700")}
                    borderRadius={"10px"}
                >
                    <Text align={"center"}>Tickets by priority</Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    rowSpan={2}
                    bg={useColorModeValue("white", "gray.700")}
                    borderRadius={"10px"}
                >
                    <Text align={"center"}>Tickets by owner</Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    rowSpan={2}
                    bg={useColorModeValue("white", "gray.700")}
                    borderRadius={"10px"}
                >
                    <Text align={"center"}>Tickets by status</Text>
                </GridItem>
                <GridItem
                    colSpan={1}
                    rowSpan={2}
                    bg={useColorModeValue("white", "gray.700")}
                    borderRadius={"10px"}
                >
                    <Text align={"center"}>Note board</Text>
                </GridItem>
            </Grid>
        </Flex>
    );
};

export default Dashboard;
