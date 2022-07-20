import React, { useState } from "react";
import Sidebar from "../components/nav/Sidebar";
import { Flex } from "@chakra-ui/react";
import Dashboard from "../components/main/dashboard/Dashboard";
import Tasks from "../components/main/Tasks";
import Discussion from "../components/main/Discussion";
import { ProjectProvider } from "../context/ProjectContext";

const Home = () => {
    const [selectedPage, setSelectedPage] = useState("Dashboard");
    

    const pageSelector = (page: string) => {
        switch (page) {
            case "Dashboard":
                return <Dashboard />;
            case "Tickets":
                return <Tasks />;
            case "Discussion":
                return <Discussion />;
        }
    };

    return (
        <ProjectProvider>
            <Flex h={"100%"}>
                <Sidebar
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                {pageSelector(selectedPage)}
            </Flex>
        </ProjectProvider>
    );
};

export default Home;
