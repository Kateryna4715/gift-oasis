function StepImg({ img, title }) {
    return (
        <div className="shrink-0  grow-0 lg:w-60 lg:h-60  md:w-48 md:h-48 sm:w-40 sm:h-40 xsm:w-28 xsm-h-28 phone:w-24 phone:h-24 border-4 border-indigo-light rounded-2xl flex justify-center items-center shadow-cream-sh">
            <img className=" w-full h-full rounded-xl" src={img} alt={title} />
        </div>
    );
}

export default StepImg;
