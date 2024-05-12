import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Main from "@/Components/Main";
import Navbar from "../Landing/Navbar";
import Section from "@/Components/Section";
import Container from "@/Components/Container";
import BestBoxes from "./BestBoxes";
import SectionTitle from "@/Components/SectionTitle";

function Bestsellers() {
    return (
        <>
            <Header
                style={
                    " border-y-2 border-indigo-light md:py-8 sm:pt-10 sm:pb-6 phone:py-4"
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
                <Section
                    style={
                        "bg-cream-light-50 border-b-2 border-indigo-light py-12"
                    }
                >
                    <Container
                        style={
                            "xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl xsm:max-w-md phone:max-w-xs"
                        }
                    >
                        <SectionTitle>Our bestsellers</SectionTitle>
                        <BestBoxes />
                    </Container>
                </Section>
            </Main>
            <Footer />
        </>
    );
}

export default Bestsellers;
