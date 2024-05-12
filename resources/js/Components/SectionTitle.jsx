function SectionTitle({ children }) {
    return (
        <h2 className="text-golden xl:text-section-font md:text-xl phone:text-base text-center font-bold uppercase mb-8 ">
            {children}
        </h2>
    );
}

export default SectionTitle;
