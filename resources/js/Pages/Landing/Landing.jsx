import Header from "@/Components/Header";
import Navbar from "./Navbar";
import Main from "@/Components/Main";
import Hero from "./Hero";
import SectionTitle from "@/Components/SectionTitle";
import BoxTypes from "./BoxTypes";
import Steps from "./Steps";
import Section from "@/Components/Section";
import Footer from "@/Components/Footer";
import { useEffect } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Container from "@/Components/Container";

function Landing() {
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
                <Section>
                    <Hero />
                </Section>

                <Section
                    style={
                        "xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl xsm:max-w-md pnone:max-w-80 mt-0 mx-auto mb-12"
                    }
                >
                    <SectionTitle>Find the perfect gift</SectionTitle>
                    <BoxTypes />
                </Section>

                <Section
                    style={
                        "bg-cream-light-50 py-12 border-b-2 border-indigo-light"
                    }
                >
                    <Container
                        style={
                            "lg:max-w-3xl md:max-w-lg sm:max-w-md  phone:max-w-xs  mx-auto"
                        }
                    >
                        <SectionTitle>How it works</SectionTitle>
                        <Steps />
                    </Container>
                </Section>
            </Main>
            <Footer />
        </>
    );
}

export default Landing;
