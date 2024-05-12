import { useEffect, useState } from "react";
import Header from "@/Components/Header";
import Items from "./Items";
import SectionTitle from "@/Components/SectionTitle";
import Main from "@/Components/Main";
import ConstructorTitle from "./ConstructorTitle";

import Footer from "@/Components/Footer";
import Stages from "./Stages";
import Container from "@/Components/Container";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Section from "@/Components/Section";
import Button from "@/Components/Button";
import Preview from "./Preview";

const stages = [null, "wrappers", "comics", "sweets"];

const titles = [
    null,
    "Select your wrapper",
    "Add a comic book",
    "Add some sweetness",
    "Review your order",
];

function Constructor() {
    const [stage, setStage] = useState(1);
    const [wrappers, setWrappers] = useState([]);
    const [comics, setComics] = useState([]);
    const [sweets, setSweets] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [order, setOrder] = useState({});
    const [selectedSweets, setSelectedSweets] = useState([]);

    const items = stages.at(stage);

    function handleSelection(item) {
        setSelectedItem(item);
    }
    function handleAdd(selected) {
        setOrder({ ...order, [items]: selected });
        setStage(stage + 1);
        setSelectedItem(null);
        console.log(order);
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/${items}`)
            .then((res) => res.json())
            .then((data) => {
                stage === 1 && setWrappers(data.wrappers);
                stage === 2 && setComics(data.comics);
                stage === 3 && setSweets(data.sweets);
            });
    }, [stage]);

    return (
        <>
            <Header style={"mb-8 border-t-2 border-indigo-light"}>
                <ApplicationLogo
                    style={
                        "w-20 mx-auto absolute top-2.5 inset-x-1/2 -translate-x-2/4 lg:w-20 sm:w-16 phone:w-11 lg:top-2.5 md:top-3.5 sm:top-4 phone:top-5"
                    }
                />
                <Stages stage={stage} />
                <SectionTitle>Constructor</SectionTitle>
            </Header>

            <Main>
                <Section
                    style={
                        "bg-gradient-to-br from-indigo-light to-cream-light border-b-2 border-indigo-light"
                    }
                >
                    <Container
                        style={
                            "min-h-[calc(100vh-420px)] xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl xsm:max-w-md phone:max-w-xs mx-auto pt-10 pb-12 flex flex-col"
                        }
                    >
                        <ConstructorTitle>{`${stage}. ${titles.at(
                            stage
                        )}`}</ConstructorTitle>
                        {stage < 4 && (
                            <>
                                <Items
                                    items={items}
                                    stage={stage}
                                    onSelection={handleSelection}
                                    selectedItem={selectedItem}
                                    wrappers={wrappers}
                                    comics={comics}
                                    sweets={sweets}
                                />

                                <Button
                                    selectedItem={selectedItem}
                                    onClickButton={handleAdd}
                                    style={
                                        "mx-auto mt-12 border-indigo-light bg-cream-light xl:py-2.5 xl:px-6 xl:text-base md:text-sm  md:py-1.5 md:px-4 phone:px-3 phone:py-1 phone:text-xs "
                                    }
                                >
                                    Add to cart
                                </Button>
                            </>
                        )}
                        {stage === 4 && <Preview order={order} />}
                    </Container>
                </Section>
            </Main>
            <Footer />
        </>
    );
}

export default Constructor;
