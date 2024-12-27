import { ReactNode } from "react";
import logo from "../../../public/assets/anonin-logo.png";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <nav className="p-3 bg-base-100 text-base-content sticky top-0 z-30 flex w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
                <div className="flex-1">
                    <img  className="h-16" src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Link</a>
                        </li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li>
                                        <a>Link 1</a>
                                    </li>
                                    <li>
                                        <a>Link 2</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </nav>

            <main>{children}</main>
        </>
    );
}
