import ApplicationLogo from "@/Components/ApplicationLogo";
import Header from "@/Components/Header";
import Navbar from "../Landing/Navbar";
import SectionTitle from "@/Components/SectionTitle";
import Section from "@/Components/Section";
import Container from "@/Components/Container";
import Main from "@/Components/Main";
import AboutContent from "./AboutContent";
import Footer from "@/Components/Footer";
import Gallery from "./Gallery";

function About() {
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
            <Main>
                <Section>
                    <Container
                        style={
                            "xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl xsm:max-w-md phone:max-w-xs md:py-12 xsm:py-8 phone:py-6"
                        }
                    >
                        <SectionTitle>About</SectionTitle>
                        <AboutContent />
                    </Container>
                </Section>
                <Section
                    style={
                        "border-b-2 border-indigo-light min-h-[calc(100vh-600px)] bg-cream-light-50"
                    }
                >
                    <Container
                        style={
                            "xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl xsm:max-w-md phone:max-w-xs md:py-12 xsm:py-8 phone:py-6"
                        }
                    >
                        <SectionTitle>Gallery</SectionTitle>
                        <Gallery />
                    </Container>
                </Section>
            </Main>
            <Footer />
        </>
    );
}

export default About;
