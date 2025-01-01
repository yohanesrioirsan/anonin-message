import { ReactNode } from "react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Container/Footer";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
