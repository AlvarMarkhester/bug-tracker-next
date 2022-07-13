import React from "react";
import Sidebar from "../components/nav/Sidebar";
import { Box, Flex, Grid } from "@chakra-ui/react";

const Dashboard = () => {
    return (
      <Flex h={'100%'}>
        <Sidebar/>
      </Flex>
        
    );
};

export default Dashboard;
