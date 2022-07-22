import React, { useState } from "react";
import Sidebar from "../components/nav/Sidebar";
import { Flex } from "@chakra-ui/react";
import Dashboard from "../components/main/dashboard/Dashboard";
import Tasks from "../components/main/Tasks";
import Discussion from "../components/main/Discussion";
import { ProjectProvider } from "../context/ProjectContext";

const Home = () => {
    const [selectedPage, setSelectedPage] = useState("Dashboard");

    return (
        <ProjectProvider>
            <Flex h={"100%"}>
                <Sidebar
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                {(selectedPage === "Dashboard") && <Dashboard />}
                {(selectedPage === "Tickets") && <Tasks />}
                {(selectedPage === "Discussion") && <Discussion />}
            </Flex>
        </ProjectProvider>
    );
};

export default Home;
