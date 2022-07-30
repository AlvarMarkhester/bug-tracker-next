import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NewProjectModal = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Flex p={"20px"} justify="center">
            <Button onClick={onOpen} size="md" colorScheme={"blue"}>
                Create new project...
            </Button>
            <NewProjectForm isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
};

const NewProjectForm = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const queryClient = useQueryClient();
    const [newProjectName, setNewProjectName] = useState("");
    const mutation = useMutation(
        (newProject: { name: string }) => {
            return axios.post("api/project", newProject);
        },
        {
            onMutate: () => {
                setNewProjectName("");
            },
            onSuccess: () => {
                // ✅ refetch the comments list for our blog post
                queryClient.invalidateQueries(["projects"]);
                onClose();
            },
        }
    );

    const newProjectSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        mutation.mutate({ name: newProjectName });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="md">
            <ModalOverlay />
            <ModalContent paddingY="20px">
                <ModalHeader>Create new project</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={newProjectSubmit}>
                        <FormControl isRequired>
                            <VStack align="start">
                                <FormLabel>Enter the project name:</FormLabel>
                                <Input
                                    type="name"
                                    onChange={(e) =>
                                        setNewProjectName(e.currentTarget.value)
                                    }
                                    value={newProjectName}
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

export default NewProjectModal;
