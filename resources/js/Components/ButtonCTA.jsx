function ButtonCTA({ children, style }) {
    return (
        <a
            className={
                "w-fit xl:py-2.5 xl:px-6 xl:text-base md:text-sm phone:text-xs md:py-1.5 md:px-4   phone:px-3 phone:py-1 font-bold uppercase rounded-full border-4 shadow-basic-sh transition-all duration-500 " +
                `${style ? style : ""} `
            }
            href="/"
        >
            {children}
        </a>
    );
}

export default ButtonCTA;
