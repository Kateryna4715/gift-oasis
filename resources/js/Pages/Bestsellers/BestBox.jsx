import Button from "@/Components/Button";

function BestBox({ bb }) {
    return (
        <a href="">
            <div className="max-w-60 flex flex-col  items-center justify-between">
                <div className="">
                    <div className="overflow-hidden lg:w-56 lg:h-56 sm:w-40 sm:h-40 xsm:w-36 xsm:h-36 phone:w-32 phone:h-32 mb-4 rounded-xl shadow-best-shadow">
                        <img
                            className=" lg:w-56 lg:h-56 sm:w-40 sm:h-40 xsm:w-36 xsm:h-36 phone:w-32 phone:h-32   hover:scale-110 transition-all duration-500 "
                            src={bb.image}
                            alt={`${bb.name}` + "box"}
                        />
                    </div>
                    <h3 className="text-center lg:text-xl sm:text-base phone:text-sm font-bold mb-2 ">
                        {bb.name}
                    </h3>
                </div>

                <div className="lg:min-h-244 md:min-h-196 sm:min-h-232 xsm:min-h-168  phone:min-h-208 flex flex-col justify-between">
                    <div className="flex flex-col gap-2 lg:text-base  sm:text-sm phone:text-xs">
                        <p>
                            <strong>Wrapping:</strong> {bb.wrapping}
                        </p>
                        <p>
                            <strong>Comic:</strong> {bb.comic}
                        </p>
                        <p>
                            <strong>Sweets:</strong> {bb.sweets}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-center font-bold">{bb.price}.00$</p>
                        <Button
                            style={
                                "w-fit xl:py-2.5 xl:px-6 xl:text-base md:text-sm  md:py-1.5 md:px-4 phone:px-3 phone:py-1 phone:text-xs border-cream-light bg-indigo-light w-44 mx-auto self-end"
                            }
                        >
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default BestBox;
