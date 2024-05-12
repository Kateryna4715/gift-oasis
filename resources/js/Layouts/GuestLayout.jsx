import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Pages/Landing/Navbar";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <>
            <Header
                style={
                    " border-y-2 border-indigo-light md:py-8 sm:pt-10 sm:pb-6 phone:py-4 "
                }
            >
                <ApplicationLogo
                    style={
                        "w-20 mb-0 mx-auto absolute top-2.5 inset-x-1/2 -translate-x-2/4 lg:w-20 sm:w-16 phone:w-11 lg:top-2.5 md:top-3.5 sm:top-4 phone:top-5"
                    }
                />
                <Navbar />
            </Header>
            <div className="min-h-[calc(100vh-280px)] py-16 flex flex-col sm:justify-center items-center  sm:pt-0 bg-cream-light-50 border-b-2 border-indigo-light ">
                <div className="w-full sm:max-w-md mt-16 px-6 py-4 bg-white shadow-main-shadow overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}
