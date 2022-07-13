import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute";

const authRoutes = ["/dashboard"];

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const session = useSession();
    const router = useRouter();

    if (session.status === "loading") return null;
    if (router.pathname === '/' && session.status === 'authenticated') {
        router.push('/dashboard')
        return null
    }
    return (
        <>
            {authRoutes.includes(router.pathname) ? (
                <ProtectedRoute>{children}</ProtectedRoute>
            ) : (
                children
            )}
        </>
    );
};

export default AuthWrapper;
