import Link from "next/link";
import Image from "next/image";
import { Bars3BottomLeftIcon, HomeIcon } from "@heroicons/react/24/outline";
import { menuData } from "@/data/menuData";
import { NavDropdown } from "./NavDropdown";
import biancaffeDark from "../public/biancaffe-dark.webp";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-circle btn-ghost"
                    >
                        <Bars3BottomLeftIcon className="size-6" />
                    </div>
                    <ul className="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-200 p-2 shadow">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        {Object.entries(menuData).map(([key, section]) => (
                            <NavDropdown
                                key={section.slug}
                                title={section.name}
                                items={Object.values(section.categories)}
                                sectionSlug={section.slug}
                            />
                        ))}
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="navbar-center">
                <Link href="/" className="btn btn-link">
                    <Image
                        src={biancaffeDark}
                        alt="Biancaffe Logo"
                        width={120}
                        priority
                    />
                </Link>
            </div>

            <div className="navbar-end">
                <Link href="/" className="btn btn-circle btn-ghost">
                    <HomeIcon className="size-5" />
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
