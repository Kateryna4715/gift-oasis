import { register } from "swiper/element/bundle";
register();

function Gallery() {
    return (
        <div className="lg:w-[1280px] md:w-[600px] sm:w-[400px] xsm:w-[360px] phone:w-[320px] mx-auto">
            <swiper-container
                className={"flex justify-center items-center "}
                space-between="30"
                slides-per-view="3"
                pagination="true"
                navigation="true"
                breakpoints={JSON.stringify({
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },

                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                })}
            >
                <swiper-slide>
                    <img
                        className="lg:w-72 lg:h-72 sm:w-44 sm:h-44 xsm:w-40 xsm:h-40 phone:w-36 phone:h-36 rounded-xl"
                        src="gallery/1.jpg"
                        alt=""
                    />
                </swiper-slide>
                <swiper-slide>
                    {" "}
                    <img
                        className="lg:w-72 lg:h-72 sm:w-44 sm:h-44 xsm:w-40 xsm:h-40 phone:w-36 phone:h-36 rounded-xl"
                        src="gallery/2.jpg"
                        alt=""
                    />
                </swiper-slide>
                <swiper-slide>
                    {" "}
                    <img
                        className="lg:w-72 lg:h-72 sm:w-44 sm:h-44 xsm:w-40 xsm:h-40 phone:w-36 phone:h-36 rounded-xl "
                        src="gallery/3.jpg"
                        alt=""
                    />
                </swiper-slide>
                <swiper-slide>
                    {" "}
                    <img
                        className="lg:w-72 lg:h-72 sm:w-44 sm:h-44 xsm:w-40 xsm:h-40 phone:w-36 phone:h-36 rounded-xl "
                        src="gallery/4.jpg"
                        alt=""
                    />
                </swiper-slide>
                <swiper-slide>
                    {" "}
                    <img
                        className="lg:w-72 lg:h-72 sm:w-44 sm:h-44 xsm:w-40 xsm:h-40 phone:w-36 phone:h-36 rounded-xl "
                        src="gallery/5.jpg"
                        alt=""
                    />
                </swiper-slide>
                <swiper-slide>
                    {" "}
                    <img
                        className="lg:w-72 lg:h-72 sm:w-44 sm:h-44 xsm:w-40 xsm:h-40 phone:w-36 phone:h-36 rounded-xl "
                        src="gallery/6.jpg"
                        alt=""
                    />
                </swiper-slide>
            </swiper-container>
        </div>
    );
}

export default Gallery;
