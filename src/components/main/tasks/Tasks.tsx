import {
    Flex,
    Grid,
    GridItem,
    useColorModeValue,
    Text,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelectedProjectContext } from "../../../context/SelectedProjectContext";
import NewTaskModal from "./NewTaskModal";

const Tasks = () => {
    const background = useColorModeValue("white", "gray.700");
    const bordervalue = useColorModeValue("10px", undefined);
    const { selectedProject } = useSelectedProjectContext();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [taskStatus, setTaskStatus] = useState("")
    const openModal = (type: string) => {
        setTaskStatus(type)
        onOpen();
    };

    if (selectedProject === "")
        return (
            <Flex justify="center" w="100%" p="5rem" fontSize="4xl">
                Please select a project..
            </Flex>
        );

    return (
        <>
            {}
            <Flex p={"10px"} w={"100%"}>
                <Grid
                    w="100%"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                >
                    <GridItem
                        rowSpan={2}
                        colSpan={1}
                        bg={background}
                        borderRadius={"10px"}
                    >
                        <Text
                            align={"center"}
                            bg="red.300"
                            color={"black"}
                            borderTopRadius={"10px"}
                            fontWeight="bold"
                            borderBottomRadius={bordervalue}
                        >
                            Backlog
                        </Text>
                        <Button
                            width="100%"
                            height="20px"
                            onClick={() => openModal("backlog")}
                        >
                            +
                        </Button>
                    </GridItem>
                    <GridItem
                        rowSpan={2}
                        colSpan={1}
                        bg={background}
                        borderRadius={"10px"}
                    >
                        <Text
                            color={"black"}
                            align={"center"}
                            bg="yellow.300"
                            fontWeight="bold"
                            borderTopRadius={"10px"}
                            borderBottomRadius={bordervalue}
                        >
                            Todo
                        </Text>
                        <Button
                            width="100%"
                            height="20px"
                            onClick={() => openModal("todo")}
                        >
                            +
                        </Button>
                    </GridItem>
                    <GridItem
                        rowSpan={2}
                        colSpan={1}
                        bg={background}
                        borderRadius={"10px"}
                    >
                        <Text
                            color={"black"}
                            align={"center"}
                            fontWeight="bold"
                            bg="teal.400"
                            borderTopRadius={"10px"}
                            borderBottomRadius={bordervalue}
                        >
                            In progress
                        </Text>
                        <Button
                            width="100%"
                            height="20px"
                            onClick={() => openModal("inprogress")}
                        >
                            +
                        </Button>
                    </GridItem>
                    <GridItem
                        rowSpan={2}
                        colSpan={1}
                        bg={background}
                        borderRadius={"10px"}
                    >
                        <Text
                            align={"center"}
                            bg="green.200"
                            color={"black"}
                            borderTopRadius={"10px"}
                            fontWeight="bold"
                            borderBottomRadius={bordervalue}
                        >
                            Code Review
                        </Text>
                        <Button
                            width="100%"
                            height="20px"
                            onClick={() => openModal("codereview")}
                        >
                            +
                        </Button>
                    </GridItem>
                    <GridItem
                        rowSpan={2}
                        colSpan={1}
                        bg={background}
                        borderRadius={"10px"}
                    >
                        <Text
                            align={"center"}
                            bg="green.400"
                            color={"black"}
                            fontWeight="bold"
                            borderTopRadius={"10px"}
                            borderBottomRadius={bordervalue}
                        >
                            Finished
                        </Text>
                        <Button
                            width="100%"
                            height="20px"
                            onClick={() => openModal("finished")}
                        >
                            +
                        </Button>
                    </GridItem>
                </Grid>
            </Flex>
            {isOpen ? (
                <NewTaskModal
                    isOpen={isOpen}
                    onClose={onClose}
                    taskStatus={taskStatus}
                />
            ) : null}
        </>
    );
};

export default Tasks;
