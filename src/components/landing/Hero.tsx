import React, { Dispatch, SetStateAction } from "react";
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
} from "@chakra-ui/react";
import { useModalContext } from "../../context/ModalContext";

export default function Hero() {
    const { onOpen } = useModalContext();
    return (
        <Container maxW={"7xl"}>
            <Stack
                align={"center"}
                justify={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: "column", md: "row" }}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    >
                        <Text
                            as={"span"}
                            position={"relative"}
                            bgGradient="linear(to-l, #3328ca, #00ccff)"
                            bgClip="text"
                        >
                            Bug tracker
                        </Text>
                        <br />
                        <Text as={"span"}>for every project!</Text>
                    </Heading>
                    <Text color={"gray.500"}>
                        Bug tracker for every projects development journey.{" "}
                        <br />
                        Simply sign in with github or register with a email and
                        password.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Button
                            rounded={"full"}
                            size={"lg"}
                            fontWeight={"normal"}
                            px={6}
                            onClick={() => onOpen("register")}
                            colorScheme={"red"}
                            bg={"blue.500"}
                            _hover={{ bg: "blue.300" }}
                        >
                            Register
                        </Button>
                        <Button
                            rounded={"full"}
                            size={"lg"}
                            fontWeight={"normal"}
                            onClick={() => onOpen("login")}
                            px={6}
                        >
                            Login
                        </Button>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={"center"}
                    align={"center"}
                    position={"relative"}
                    w={"full"}
                >
                    <Box
                        position={"relative"}
                        height={"300px"}
                        rounded={"2xl"}
                        boxShadow={"2xl"}
                        width={"500px"}
                        overflow={"hidden"}
                    >
                        <Image
                            alt={"Hero Image"}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={"100%"}
                            src={"bug.png"}
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}
