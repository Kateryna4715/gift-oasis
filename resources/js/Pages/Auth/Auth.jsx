import ApplicationLogo from "@/Components/ApplicationLogo";
import Header from "@/Components/Header";
import Navbar from "../Landing/Navbar";
import Main from "@/Components/Main";
import Footer from "@/Components/Footer";
import Section from "@/Components/Section";
import Container from "@/Components/Container";

function Auth() {
    return (
        <>
            <Header
                style={
                    "mb-12 border-y-2 border-indigo-light md:py-8 sm:pt-10 sm:pb-6 phone:py-4"
                }
            >
                <ApplicationLogo
                    style={
                        "lg:w-20 sm:w-16 phone:w-11 mb-0 mx-auto absolute lg:top-2.5 md:top-3.5 sm:top-4  phone:top-5 inset-x-1/2 -translate-x-2/4"
                    }
                />
                <Navbar />
            </Header>
            <Main>
                <Section style={"border-b-2 border-indigo-light"}>
                    <Container
                        style={
                            "min-h-[calc(100vh-320px)] xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl xsm:max-w-md phone:max-w-xs mx-auto pt-10 pb-12 flex flex-col"
                        }
                    >
                        <div className="flex gap-8 items-center justify-center mx-auto my-auto  w-96 h-44 bg-indigo-light-50 rounded-xl shadow-main-shadow ">
                            <div className="py-2 px-3 bg-white rounded-xl border-4 border-indigo-light hover:bg-indigo-light hover:text-white font-bold text-light-gray">
                                <a href="/register">Register</a>
                            </div>
                            <div className="py-2 px-3 bg-white rounded-xl border-4 border-indigo-light hover:bg-indigo-light hover:text-white font-bold text-light-gray">
                                <a href="/login">Log in</a>
                            </div>
                        </div>
                    </Container>
                </Section>
            </Main>
            <Footer />
        </>
    );
}

export default Auth;
