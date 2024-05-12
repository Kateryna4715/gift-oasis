function BoxText({ title, desc, style }) {
    return (
        <div className={`${style ? style : ""}` + " flex flex-col gap-2"}>
            <h3 className="font-bold xl:text-xl lg:text-lg sm:text-base phone:text-sm ">
                {title}
            </h3>
            <p className="lg:text-base sm:text-sm phone:text-xs font-medium">
                {desc}
            </p>
        </div>
    );
}

export default BoxText;
