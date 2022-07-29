import { Button, Flex, Modal, ModalFooter } from "@chakra-ui/react";
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
import { useState } from "react";

const NewTaskModal = ({ isOpen, onClose, type }: { isOpen: boolean, onClose: () => void, type: string }) => {
    const { data } = useSession();
    const [taskName, setTaskName] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [taskPrio, setTaskPrio] = useState("");
    const [taskDeadline, setTaskDeadline] = useState("")



    const newTicketSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        console.log({taskName, taskDesc, taskPrio, taskDeadline})
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent paddingY="20px">
                <ModalHeader>New ticket</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={newTicketSubmit}>
                        <FormControl isRequired>
                            <VStack align="start">
                                <FormLabel>Task name:</FormLabel>
                                <Input onChange={evt => setTaskName(evt.target.value)} value={taskName} type="name" />
                                <FormLabel>Description:</FormLabel>
                                <Textarea onChange={evt => setTaskDesc(evt.target.value)} value={taskDesc}></Textarea>
                                <FormLabel>Priority:</FormLabel>
                                <Select onChange={evt => setTaskPrio(evt.target.value)} value={taskPrio}>
                                    <option value=""></option>
                                    <option value="low">Low</option>
                                    <option value="mid">Mid</option>
                                    <option value="high">High</option>
                                    <option value="critical">Critical</option>
                                </Select>
                                <FormLabel>Deadline:</FormLabel>
                                <Input
                                    onChange={(evt) => setTaskDeadline(evt.target.value)}
                                    value={taskDeadline}
                                    placeholder="Deadline Date and Time"
                                    size="md"
                                    type="datetime-local"
                                />
                                <FormLabel>Author:</FormLabel>
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


                            </VStack>
                            <ModalFooter>
                                <Button type="submit">Submit</Button>

                            </ModalFooter>
                        </FormControl>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );

}
export default NewTaskModal;