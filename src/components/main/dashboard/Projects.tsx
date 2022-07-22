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
import React, { useEffect, useState } from "react";
import { useProjectContext } from "../../../context/ProjectContext";

interface IProjects {
    name: string;
    id: string;
    authorId: string;
}

const Projects = ({
    selectedProject,
    setSelectedProject,
}: {
    selectedProject: string;
    setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const { allProjects } = useProjectContext();
    const [newProjectName, setNewProjectName] = useState("");


    const createProject = async () => {
        if (newProjectName === "") return;
        try {
            const body = { name: newProjectName };
            await fetch("/api/project", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            }).then(() => setNewProjectName(""));
        } catch (error) {
            console.error(error);
        }
    };

    const handleSelect = (project: string) => {
        setSelectedProject(project);
    };

    return (
        <>
            <Text
                textAlign={"center"}
                pt={"10px"}
                fontWeight="bold"
                textDecoration="underline"
            >
                Create a new project
            </Text>
            <Flex p={"20px"}>
                <Input
                    size="sm"
                    value={newProjectName}
                    onChange={(evt) =>
                        setNewProjectName(evt.currentTarget.value)
                    }
                ></Input>
                <Button onClick={createProject} size="sm">Add</Button>
            </Flex>
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
                    onClick={() => handleSelect("AllProjects")}
                    size="sm"
                    color={
                        selectedProject === "AllProjects"
                            ? "blue.500"
                            : undefined
                    }
                >
                    <Icon as={HamburgerIcon} mr={3} />
                    All projects
                </Button>

                {allProjects.map((data: any, index: any) => {
                    return (
                        <Button
                            key={index}
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
