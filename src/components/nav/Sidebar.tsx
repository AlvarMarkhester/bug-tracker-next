import {
    Flex,
    VStack,
    useColorModeValue,
    Icon,
    Button,
    Select,
    Text,
    Divider
} from "@chakra-ui/react";
import { HamburgerIcon, ChatIcon, WarningIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const Sidebar = ({
    selectedPage,
    setSelectedPage,
}: {
    selectedPage: string;
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <Flex
            bg={useColorModeValue("white", "gray.900")}
            color={useColorModeValue("gray.600", "white")}
            minW={"250px"}
            maxW={"250px"}
            flex={1}
            h={"100%"}
            direction={"column"}
        >
            <VStack align={"start"} spacing={"5"} p="20px">
                {NavItems.map((item) => (
                    <>
                        <SideNavItem
                            key={item.text}
                            text={item.text}
                            icon={item.icon}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </>
                ))}
                {(selectedPage === "Tickets") && <Divider />}
                {(selectedPage === "Tickets") && <SideNavSelectProject />}
            </VStack>
        </Flex>
    );
};



const SideNavSelectProject = () => {
 const [currentProject, setCurrentProject] = useState("")
    return (
        <Flex direction={"column"} width="100%">
            <Text align="center">Selected project:</Text>
            <Select
                onChange={(evt) => setCurrentProject(evt.currentTarget.value)}
                value={currentProject}
            >
                <option disabled value="">Select a project</option>
                {allProjects.map((data: any) => {
                    return (
                        <option key={data.id} value={data.name}>
                            {data.name}
                        </option>
                    );
                })}
            </Select>
        </Flex>
    );
};



const SideNavItem = ({
    text,
    icon,
    selectedPage,
    setSelectedPage,
}: {
    text: string;
    icon: import("@chakra-ui/system").ComponentWithAs<
    "svg",
    import("@chakra-ui/icon").IconProps
    >;
    selectedPage: string;
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <Button
            onClick={() => setSelectedPage(text)}
            width="100%"
            fontWeight={"bold"}
            color={selectedPage === text ? "blue.500" : undefined}
        >
            <Icon as={icon} mr={3} />
            {text}
        </Button>
    );
};

interface NavItem {
    icon: import("@chakra-ui/system").ComponentWithAs<
    "svg",
    import("@chakra-ui/icon").IconProps
    >;
    text: string;
}

const NavItems: Array<NavItem> = [
    {
        icon: HamburgerIcon,
        text: "Dashboard",
    },
    {
        icon: WarningIcon,
        text: "Tickets",
    },
    {
        icon: ChatIcon,
        text: "Discussion",
    },
];

export default Sidebar;
