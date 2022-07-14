import { Flex, Text, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const Projects = () => {
    const [newProjectName, setNewProjectName] = useState("");

    const createProject = async () => {
        if (newProjectName === "") return;
        try {
            const body = { name: newProjectName };
            await fetch("/api/project", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            }).then((res) => console.log(res));
        } catch (error) {
            console.error(error);
        }
        setNewProjectName("");
    };
    return (
        <>
            <Text textAlign={"center"} pt={"10px"}>
                Add new project
            </Text>
            <Flex p={"10px"}>
                <Input
                    value={newProjectName}
                    onChange={(evt) =>
                        setNewProjectName(evt.currentTarget.value)
                    }
                ></Input>
                <Button onClick={createProject}>Add</Button>
            </Flex>
            <Text textAlign={"center"}>Projects</Text>
        </>
    );
};

export default Projects;
