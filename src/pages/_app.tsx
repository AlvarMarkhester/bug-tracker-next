import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import AuthWrapper from "../components/auth/AuthWrapper";
import Navbar from "../components/nav/Navbar";
import { ModalProvider } from "../context/ModalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <SessionProvider session={session}>
                    <AuthWrapper>
                        <ModalProvider>
                            <Flex h={'100vh'} direction={'column'}>
                                <Navbar />
                                <Component {...pageProps} />
                            </Flex>
                        </ModalProvider>
                    </AuthWrapper>
                </SessionProvider>
            </ChakraProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

    );
}

export default MyApp;
