import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Flex,
    Text,
    Input,
    Button,
    Icon,
    Divider,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { useSelectedProjectContext } from "../../../context/SelectedProjectContext";
import { useProjects } from "../../../hooks/useProjects";
import NewProjectModal from "./NewProjectModal";

const Projects = () => {
    const { selectedProject, setSelectedProject } = useSelectedProjectContext();
    const { status, data, error, isFetching } = useProjects();

    const handleSelect = (project: string) => {
        setSelectedProject(project);
    };

    return (
        <>
            <NewProjectModal />
            <Divider />
            <Flex justifyContent="center" py="20px">
                <Text
                    textAlign={"center"}
                    fontWeight="bold"
                    fontSize="l"
                    textDecoration="underline"
                >
                    Select your project(s)
                </Text>
            </Flex>

            <VStack>
                <Button
                    w="80%"
                    fontWeight="bold"
                    onClick={() => handleSelect("")}
                    size="sm"
                    color={
                        selectedProject === ""
                            ? "blue.500"
                            : undefined
                    }
                >
                    <Icon as={HamburgerIcon} mr={3} />
                    All projects
                </Button>
                {data?.projects?.map((data: any, index: any) => {
                    return (
                        <Button
                            key={data.id}
                            size="sm"
                            w="80%"
                            onClick={() => handleSelect(data.id)}
                            color={
                                selectedProject === data.id
                                    ? "blue.500"
                                    : undefined
                            }
                        >
                            {data.name}
                        </Button>
                    );
                })}
            </VStack>
        </>
    );
};

export default Projects;
