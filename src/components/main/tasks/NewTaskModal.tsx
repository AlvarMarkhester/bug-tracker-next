import { Button, Flex, Modal } from "@chakra-ui/react";
import { ModalContent } from "@chakra-ui/react";
import { ModalHeader } from "@chakra-ui/react";
import { ModalCloseButton } from "@chakra-ui/react";
import { ModalBody } from "@chakra-ui/react";
import { ModalOverlay } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { FormLabel, Textarea, Text, VStack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

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
                                <Flex align={"center"}>
                                    {data?.user?.image && data.user.name ? (
                                        <>
                                            <Image
                                                src={data.user.image}
                                                alt={data.user.name}
                                                width={40}
                                                height={40}
                                                style={{ borderRadius: "50%" }}
                                            />
                                            <Text pl={2}>{data.user.name}</Text>
                                        </>
                                    ) : null}
                                </Flex>

                                <Button type="submit">Submit</Button>
                            </VStack>
                        </FormControl>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );

}
export default NewTaskModal;