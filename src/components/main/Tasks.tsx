import { Flex, Grid, GridItem, useColorModeValue, Text, Button, VStack, useDisclosure, ModalFooter, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { Modal } from "@chakra-ui/react";
import { ModalContent } from "@chakra-ui/react";
import { ModalHeader } from "@chakra-ui/react";
import { ModalCloseButton } from "@chakra-ui/react";
import { ModalBody } from "@chakra-ui/react";
import { ModalOverlay } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";


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

const NewTaskModal = ({ isOpen, onClose, type }: { isOpen: boolean, onClose: () => void, type: string }) => {
    const { data } = useSession();

    const newTicketSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        console.log("submitted")
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent padding="20px">
                <ModalHeader>New ticket</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={newTicketSubmit}>
                        <FormControl isRequired>
                            <VStack spacing={2} align="start">
                                <FormLabel>Task name:</FormLabel>
                                <Input type="name" />
                                <FormLabel>Description:</FormLabel>
                                <Textarea></Textarea>
                                <FormLabel>Priority:</FormLabel>
                                <Select>
                                    <option defaultValue=""></option>
                                    <option>Low</option>
                                    <option>Mid</option>
                                    <option>High</option>
                                    <option>Critical</option>
                                </Select>
                                <FormLabel>Deadline:</FormLabel>
                                <Input
                                    placeholder="Deadline Date and Time"
                                    size="md"
                                    type="datetime-local"
                                />
                                <FormLabel>Asignee:</FormLabel>
                                {data?.user?.image && data.user.name ? (
                                    <>
                                        <Image
                                            src={data.user.image}
                                            alt={data.user.name}
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: "50%" }}
                                        />
                                        <Text>{data.user.name}</Text>
                                    </>
                                ) : null}
                                <Button type="submit">Submit</Button>
                            </VStack>
                        </FormControl>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );

}

export default Tasks;
