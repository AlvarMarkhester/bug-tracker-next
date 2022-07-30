import React, { useState } from "react";
import Sidebar from "../components/nav/Sidebar";
import { Flex } from "@chakra-ui/react";
import Dashboard from "../components/main/dashboard/Dashboard";
import Tasks from "../components/main/tasks/Tasks";
import Discussion from "../components/main/discussion/Discussion";
import { SelectedProjectProvider } from "../context/SelectedProjectContext";

const Home = () => {
    const [selectedPage, setSelectedPage] = useState("Dashboard");

    return (
        <Flex h={"100%"}>
            <SelectedProjectProvider>
                <Sidebar
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                {selectedPage === "Dashboard" && <Dashboard />}
                {selectedPage === "Tickets" && <Tasks />}
                {selectedPage === "Discussion" && <Discussion />}
            </SelectedProjectProvider>
        </Flex>
    );
};

export default Home;
