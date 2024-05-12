import ButtonCTA from "../../Components/ButtonCTA";

function Hero() {
    return (
        <div className="flex sm:flex-row phone:flex-col-reverse items-center justify-between md:p-16 sm:p-12 xsm:p-16 phone:p-12 xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl xsm:max-w-md phone:max-w-xs mx-auto mt-0 mb-12 rounded-xl bg-gradient-to-br from-indigo-light to-cream-light shadow-main-shadow ">
            <div className="flex flex-col md:gap-6  phone:gap-4 max-w-3xl ">
                <h1 className="xl:text-3xl md:text-2xl sm:text-xl xsm:text-lg phone:text-base text-dark-gray font-bold sm:text-left phone:w-72 sm:w-fit phone:text-center">
                    Simple gift-giving with unforgettable emotions
                </h1>
                <div className=" flex md:gap-4  phone:gap-2 md:flex-row phone:flex-col phone:items-center sm:items-start">
                    <ButtonCTA
                        style={
                            "bg-cream-light border-indigo-light hover:bg-cream hover:border-cream-light "
                        }
                    >
                        Build a box
                    </ButtonCTA>
                    <ButtonCTA
                        style={
                            "bg-indigo-light  border-cream-light hover:bg-cream"
                        }
                    >
                        Learn more
                    </ButtonCTA>
                </div>
            </div>
            <img
                className="xl:max-w-96 md:max-w-72 sm:max-w-52  xsm:max-w-72 phone:max-w-52 phone:mb-4 sm:mb-0 rounded-xl"
                src="land_box.png"
            />
        </div>
    );
}

export default Hero;
