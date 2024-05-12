function ListLinks({ style }) {
    return (
        <ul className={style}>
            <li className=" xl:text-base lg:text-sm phone:text-xs  hover:underline underline-offset-4 decoration-indigo-light decoration-2">
                <a href="/constructor">Constructor</a>
            </li>
            <li className=" xl:text-base lg:text-sm phone:text-xs hover:underline underline-offset-4 decoration-indigo-light decoration-2">
                <a href="/bestsellers">Best Sellers</a>
            </li>
            <li className=" xl:text-base lg:text-sm phone:text-xs hover:underline underline-offset-4 decoration-indigo-light decoration-2	">
                <a href="/about">About</a>
            </li>
        </ul>
    );
}

export default ListLinks;
