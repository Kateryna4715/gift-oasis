import BoxImg from "./BoxImg";
import BoxText from "./BoxText";

const links = ["constructor", "bestsellers", "mystery"];

function Box({ img, title, desc, index }) {
    return (
        <a href={`/${links[index]}`}>
            <div className="flex flex-col gap-2 xl:w-96 lg:w-72 sm:w-44 xsm:w-60   phone:w-48">
                <BoxImg img={img} title={title} />
                <BoxText title={title} desc={desc} />
            </div>
        </a>
    );
}

export default Box;
