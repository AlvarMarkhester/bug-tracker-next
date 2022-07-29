import { Flex, Grid, GridItem, useColorModeValue, Text, Button, VStack, useDisclosure, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import NewTaskModal from "./NewTaskModal";

const Tasks = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalType, setModalType] = useState("")
    const openModal = (type: string) => {
        setModalType(type)
        onOpen()
    }
    return (
        <>
            <Flex p={'10px'} w={'100%'}>
                <Grid
                    w="100%"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                        <Text align={"center"} bg="red.300" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>Backlog</Text>
                        <Button width="100%" height="20px" onClick={() => openModal("Backlog")}>+</Button>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                        <Text align={"center"} bg="yellow.300" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>Todo</Text>
                        <Button width="100%" height="20px" onClick={() => openModal("Todo")}>+</Button>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                        <Text align={"center"} bg="teal.400" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>In progress</Text>
                        <Button width="100%" height="20px" onClick={() => openModal("Progress")}>+</Button>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                        <Text align={"center"} bg="green.200" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>Code Review</Text>
                        <Button width="100%" height="20px" onClick={() => openModal("Review")}>+</Button>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                        <Text align={"center"} bg="green.400" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>Finished</Text>
                        <Button width="100%" height="20px" onClick={() => openModal("Finished")}>+</Button>
                    </GridItem>
                </Grid>
            </Flex>
            <NewTaskModal isOpen={isOpen} onClose={onClose} type={modalType} />
        </>
    );
};



export default Tasks;
