function BoxImg({ img, title }) {
    return (
        <figure className="rounded-xl overflow-hidden">
            <img
                className="xl:w-96 xl:h-96 lg:w-72 lg:h-72 sm:w-44 sm:h-44 xsm:h-60  xsm:w-60 phone:w-48 mb-3 rounded-xl shadow-main-shadow hover:scale-110 transition-all duration-500"
                src={img}
                alt={title}
            />
        </figure>
    );
}

export default BoxImg;
