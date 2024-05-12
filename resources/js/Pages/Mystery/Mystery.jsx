import Footer from "@/Components/Footer";
import Main from "@/Components/Main";
import Section from "@/Components/Section";
import MysteryBox from "./MysteryBox";
import Button from "@/Components/Button";
import Navbar from "../Landing/Navbar";
import Header from "@/Components/Header";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Container from "@/Components/Container";

function Mystery() {
    return (
        <>
            <Header
                style={
                    " border-y-2 border-indigo-light md:py-8 sm:pt-10 sm:pb-6 phone:py-4 "
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
                <Section
                    style={
                        "min-h-[calc(100vh-270px)] bg-gradient-to-tr from-gr-yellow from-20%  via-gr-pink  to-gr-blue to-75% border-b-2 border-indigo-light "
                    }
                >
                    <Container
                        style={
                            "flex flex-col items-center gap-12 py-16 xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl xsm:max-w-md pnone:max-w-80"
                        }
                    >
                        <MysteryBox />
                        <Button
                            style={
                                "xl:py-2.5 xl:px-6 xl:text-base md:text-sm  md:py-1.5 md:px-4 phone:px-3 phone:py-1 phone:text-xs bg-indigo-light border-cream-light"
                            }
                        >
                            Add to cart
                        </Button>
                    </Container>
                </Section>
            </Main>
            <Footer />
        </>
    );
}

export default Mystery;
