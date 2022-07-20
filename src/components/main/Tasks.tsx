import { Flex, Grid, GridItem, useColorModeValue, Text, Button, VStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Modal } from "@chakra-ui/react";
import { ModalContent } from "@chakra-ui/react";
import { ModalHeader } from "@chakra-ui/react";
import { ModalCloseButton } from "@chakra-ui/react";
import { ModalBody } from "@chakra-ui/react";
import { ModalOverlay } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const Tasks = () => {
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
                        <AddNewTask />
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                        <Text align={"center"} bg="yellow.300" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>Todo</Text>
                        <AddNewTask />
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                        <Text align={"center"} bg="teal.400" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>In progress</Text>
                        <AddNewTask />
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                        <Text align={"center"} bg="green.200" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>Code Review</Text>
                        <AddNewTask />
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1} bg={useColorModeValue("white", "gray.700")} borderRadius={"10px"}>
                        <Text align={"center"} bg="green.400" borderTopRadius={"10px"} borderBottomRadius={useColorModeValue("10px", undefined)}>Finished</Text>
                        <AddNewTask />
                    </GridItem>
                </Grid>
            </Flex>
        </>
    );
};

const AddNewTask = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Button width="100%" height="20px" onClick={onOpen}>+</Button>
        <NewTaskModal isOpen={isOpen} onClose={onClose} />
        </>
    )
}

const NewTaskModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent padding="20px">
                <ModalHeader>Add a new ticket</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Enter your new task name:</FormLabel>
                        <Input type="name" />
                        <FormLabel>Describe type of task:</FormLabel>
                        <Input type="description"></Input>

                    </FormControl>

                </ModalBody>

            </ModalContent>
        </Modal>
    );

}

export default Tasks;
