import ApplicationLogo from "@/Components/ApplicationLogo";
import Icon from "@/Components/Icon";
import Icons from "@/Components/Icons";
import ListLinks from "@/Components/ListLinks";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleNav() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl xsm:max-w-md phone:max-w-xs mb-0 mx-auto flex-col">
            <div className="flex justify-between">
                <ListLinks
                    style={
                        "font-bold uppercase  xl:gap-x-20 lg:gap-x-14 md:gap-x-8 sm:gap-6 xsm:gap-4 sm:flex phone:hidden"
                    }
                />
                <Icons>
                    <Icon link={"/"}>
                        <svg
                            className="xl:w-6 xl:h-6 phone:w-5 phone:h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    </Icon>

                    <Icon link={"/auth"}>
                        <svg
                            className="xl:w-6 xl:h-6 phone:w-5 phone:h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                    </Icon>
                </Icons>
                {isOpen ? (
                    <div className="bg-mobile-nav h-full w-full flex flex-col absolute left-0 top-0 p-12 ">
                        <button className="sm:hidden " onClick={handleNav}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <ListLinks
                            style={
                                "flex flex-col self-center justify-self-center  gap-6 font-bold "
                            }
                        />
                    </div>
                ) : (
                    <button className="sm:hidden " onClick={handleNav}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
