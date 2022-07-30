import { Button, Modal, ModalFooter } from "@chakra-ui/react";
import { ModalContent } from "@chakra-ui/react";
import { ModalHeader } from "@chakra-ui/react";
import { ModalCloseButton } from "@chakra-ui/react";
import { ModalBody } from "@chakra-ui/react";
import { ModalOverlay } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { FormLabel, Textarea, VStack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useSelectedProjectContext } from "../../../context/SelectedProjectContext";
import { ITicket } from "../../../ts/ticket";

const NewTaskModal = ({
    isOpen,
    onClose,
    taskStatus,
}: {
    isOpen: boolean;
    onClose: () => void;
    taskStatus: string;
}) => {
    const [taskName, setTaskName] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [taskPrio, setTaskPrio] = useState("");
    const [taskDeadline, setTaskDeadline] = useState("");
    const {selectedProject} = useSelectedProjectContext();

    const mutation = useMutation(
        (newTicket: ITicket) => {
            return axios.post("api/ticket", newTicket);
        },
        {
            onMutate: () => {
                setTaskName("");
                setTaskDesc("");
                setTaskPrio("");
                setTaskDeadline("");
            },
            onSuccess: () => {
                onClose();
            },
        }
    );
    const newTicketSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        mutation.mutate({
            taskName: taskName,
            taskDesc: taskDesc,
            taskPrio: taskPrio,
            taskDeadline: taskDeadline,
            taskStatus: taskStatus,
            selectedProject: selectedProject
        });
    };

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
                                <Input
                                    onChange={(evt) =>
                                        setTaskName(evt.target.value)
                                    }
                                    value={taskName}
                                    type="name"
                                />
                                <FormLabel>Description:</FormLabel>
                                <Textarea
                                    onChange={(evt) =>
                                        setTaskDesc(evt.target.value)
                                    }
                                    value={taskDesc}
                                ></Textarea>
                                <FormLabel>Priority:</FormLabel>
                                <Select
                                    onChange={(evt) =>
                                        setTaskPrio(evt.target.value)
                                    }
                                    value={taskPrio}
                                >
                                    <option value="">
                                        Select priority of ticket...
                                    </option>
                                    <option value="low">Low</option>
                                    <option value="mid">Mid</option>
                                    <option value="high">High</option>
                                    <option value="critical">Critical</option>
                                </Select>
                                <FormLabel>Deadline:</FormLabel>
                                <Input
                                    onChange={(evt) =>
                                        setTaskDeadline(evt.target.value)
                                    }
                                    value={taskDeadline}
                                    placeholder="Deadline Date and Time"
                                    size="md"
                                    type="datetime-local"
                                />
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
};
export default NewTaskModal;
