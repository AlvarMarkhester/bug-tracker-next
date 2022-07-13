import {
    Box,
    Flex,
    VStack,
    useColorModeValue,
    Icon,
    Text,
    Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, ChatIcon, WarningIcon } from "@chakra-ui/icons";
import React from "react";

const Sidebar = ({selectedPage, setSelectedPage}: {selectedPage: string, setSelectedPage: React.Dispatch<React.SetStateAction<string>>}) => {
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
            <VStack align={"start"} spacing={"5"}>
                {NavItems.map((item, index) => (
                    <>
                    {item.text === "Dashboard" ? <Divider/> : null}
                    <SideNavItem key={index} text={item.text} icon={item.icon} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Divider colorScheme={'blue'}/>
                    </>
                ))}
            </VStack>
        </Flex>
    );
};

const SideNavItem = ({
    text,
    icon,
    selectedPage,
    setSelectedPage
}: {
    text: string;
    icon: import("@chakra-ui/system").ComponentWithAs<"svg", import("@chakra-ui/icon").IconProps>;
    selectedPage: string;
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>
}) => {
    return(
    <Box minH={"25px"} pl={'25px'} onClick={() => setSelectedPage(text)}>
        <Text fontWeight={"bold"} color={(selectedPage === text) ? "blue.500" : undefined}>
            <Icon as={icon} mr={3}/>
            {text}
        </Text>
    </Box>
)};

interface NavItem {
    icon: import("@chakra-ui/system").ComponentWithAs<"svg", import("@chakra-ui/icon").IconProps>
    text: string;
}

const NavItems: Array<NavItem> = [
    {
        icon: HamburgerIcon,
        text: "Dashboard",
    },
    {
        icon: WarningIcon,
        text: "Tasks",
    },
    {
        icon: ChatIcon,
        text: "Discussion",
    },
];

export default Sidebar;
