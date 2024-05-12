import Stage from "./Stage";

function Stages({ stage }) {
    return (
        <div className="relative">
            <div className="mb-12 xl:max-w-6xl md:max-w-3xl sm:max-w-xl xsm:max-w-md phone:max-w-xs mx-auto  mt-12 flex justify-between ">
                {Array.from({ length: 4 }, (step, i) => (
                    <Stage step={i + 1} stage={stage} key={i} />
                ))}
            </div>
            <div className=" border-b-4 border-golden-light absolute  w-full xl:bottom-10  xsm:bottom-7 phone:bottom-6"></div>
        </div>
    );
}

export default Stages;
