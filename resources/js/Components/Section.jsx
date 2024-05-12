function Section({ children, style }) {
    return <section className={style ? style : ""}>{children}</section>;
}

export default Section;
