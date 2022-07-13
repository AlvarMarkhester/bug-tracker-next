import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
    useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useModalContext } from "../../context/ModalContext";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { onOpen } = useModalContext();
    const { status, data } = useSession();

    const handleLogout = async () => {
        await signOut({
            callbackUrl: "/",
        });
    };

    return (
        <Flex
            bg={useColorModeValue("white", "gray.900")}
            color={useColorModeValue("gray.600", "white")}
            minH={'70'}
            py={{ base: 2 }}
            px={{ base: 6 }}
            borderBottom={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.900")}
            align={"center"}
        >
            <Flex flex={{ base: 1 }} justify={"start"}>
                <Text
                    textAlign={useBreakpointValue({
                        base: "left",
                        md: "left",
                    })}
                    fontFamily={"heading"}
                    bgGradient={"linear(to-l, #2f21eb, #00b7ff)"}
                    fontWeight="extrabold"
                    bgClip="text"
                >
                    Bug tracker
                </Text>
            </Flex>

            <Stack
                flex={{ base: 1 }}
                justify={"flex-end"}
                align={"center"}
                direction={"row"}
                spacing={6}
            >
                <IconButton
                    aria-label={"Darkmode"}
                    size={"xs"}
                    colorScheme={"blue"}
                    padding={1}
                    marginRight={6}
                    as={colorMode === "light" ? MoonIcon : SunIcon}
                    onClick={toggleColorMode}
                />
                {status === "authenticated" ? (
                    <>
                        {data.user?.image && data.user.name ? (
                            <>
                                <Image
                                    src={data.user.image}
                                    alt={data.user.name}
                                    width={40}
                                    height={40}
                                    style={{ borderRadius: "50%" }}
                                />
                                <Text>{data.user.name}</Text>
                            </>
                        ) : null}
                        <Button
                            onClick={() => handleLogout()}
                            fontSize={"sm"}
                            fontWeight={600}
                            color={"white"}
                            bg={"blue.500"}
                            _hover={{
                                bg: "blue.300",
                            }}
                        >
                            Logout
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            as={"a"}
                            fontSize={"sm"}
                            fontWeight={400}
                            variant={"link"}
                            onClick={() => onOpen("login")}
                        >
                            Sign In
                        </Button>
                        <Button
                            onClick={() => onOpen("register")}
                            fontSize={"sm"}
                            fontWeight={600}
                            color={"white"}
                            bg={"blue.500"}
                            _hover={{
                                bg: "blue.300",
                            }}
                        >
                            Sign Up
                        </Button>
                    </>
                )}
            </Stack>
        </Flex>
    );
}
