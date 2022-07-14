import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Flex,
    Text,
    Input,
    Button,
    Box,
    Icon,
    Divider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

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
    const [newProjectName, setNewProjectName] = useState("");
    const [projects, setProjects] = useState<IProjects[]>([]);

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

    useEffect(() => {
        const getUserProjects = async () => {
            try {
                await fetch("/api/projects", {
                    method: "GET",
                })
                    .then((res) => res.json())
                    .then((data) => setProjects(data.projects));
            } catch (error) {
                console.log(error);
            }
        };
        getUserProjects();
    }, []);

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
                Add new project
            </Text>
            <Flex p={"20px"}>
                <Input
                    value={newProjectName}
                    onChange={(evt) =>
                        setNewProjectName(evt.currentTarget.value)
                    }
                ></Input>
                <Button onClick={createProject}>Add</Button>
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

            <Flex p="10px">
                <Button
                    w="300px"
                    fontWeight="bold"
                    bg="transparent"
                    onClick={() => handleSelect("AllProjects")}
                    color={
                        selectedProject === "AllProjects"
                            ? "blue.500"
                            : undefined
                    }
                >
                    <Icon as={HamburgerIcon} mr={3} />
                    All projects
                </Button>
            </Flex>

            {projects.map((data, index) => {
                return (
                    <Flex key={index} p="5px">
                        <Button
                            w="300px"
                            bg="transparent"
                            onClick={() => handleSelect(data.id)}
                            color={
                                selectedProject === data.id
                                    ? "blue.500"
                                    : undefined
                            }
                        >
                            {data.name}
                        </Button>
                    </Flex>
                );
            })}
        </>
    );
};

export default Projects;
