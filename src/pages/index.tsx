import type { NextPage } from "next";
import Hero from "../components/landing/Hero";
import AuthModal from "../components/auth/AuthModal";
import InfoPanel from "../components/landing/InfoPanel";

const Home: NextPage = () => {
    return (
        <>
            <AuthModal />
            <Hero />
            <InfoPanel />
        </>
    );
};

export default Home;
