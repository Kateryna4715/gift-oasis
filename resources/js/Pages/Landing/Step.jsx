import ButtonCTA from "@/Components/ButtonCTA";
import BoxText from "./BoxText";
import StepImg from "./StepImg";

function Step({ img, title, desc, cur }) {
    return (
        <div className="relative">
            <div
                className={
                    "flex  phone:gap-8 items-center justify-between " +
                    `${cur % 2 !== 0 ? "flex-row-reverse" : ""} `
                }
            >
                <StepImg img={img} title={title} />
                <div>
                    <BoxText
                        style={
                            " lg:max-w-72 md:max-w-64 sm:max-w-52 phone:max-w-48"
                        }
                        title={title}
                        desc={desc}
                    />
                    {cur === 5 && (
                        <ButtonCTA
                            style={
                                "block max-w-fit mt-6 bg-indigo-light border-cream-light shadow-cream-sh hover:bg-cream"
                            }
                        >
                            Let's try
                        </ButtonCTA>
                    )}
                </div>
            </div>

            {cur % 2 !== 0 && cur < 5 && (
                <svg
                    className="mx-auto absolute xl:-bottom-44 lg:-bottom-40 md:-bottom-30 sm:-bottom-24 xsm:-bottom-16 phone:-bottom-10 phone:left-12 translate-x-1/2 xl:w-452 xl:h-240  lg:w-400 lg:h-200 md:w-350 md:h-175 sm:w-56 sm:h-150 xsm:w-36 xsm:h-120 phone:w-28 xsm:block"
                    width="464"
                    height="249"
                    viewBox="0 0 464 249"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMax meet"
                >
                    <path
                        d="M2 0C2 104 67.8801 125.5 238.5 125.5C409.12 125.5 461.62 165.526 461.62 248.526"
                        stroke="#DEB471"
                        stroke-width="4"
                        stroke-dasharray="8 8"
                    />
                </svg>
            )}

            {cur % 2 === 0 && (
                <svg
                    className="mx-auto absolute xl:-bottom-44 lg:-bottom-40 md:-bottom-28 sm:-bottom-32 xsm:-bottom-24 phone:-bottom-10 phone:left-12 translate-x-1/2 xl:w-452 xl:h-240 lg:w-400 lg:h-200 md:w-350 md:h-175 sm:w-56 sm:h-150 xsm:w-36 xsm:h-120 phone:w-28 xsm:block"
                    viewBox="0 0 464 248"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 248C2 144.22 67.9346 122.765 238.696 122.765C409.457 122.765 462 82.8244 462 0"
                        stroke="#DEB471"
                        stroke-width="4"
                        stroke-dasharray="8 8"
                    />
                </svg>
            )}
        </div>
    );
}

export default Step;
