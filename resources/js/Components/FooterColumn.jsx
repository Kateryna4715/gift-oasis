function FooterColumn({ children, style }) {
    return (
        <div className={"flex flex-col " + `${style ? style : ""}`}>
            {children}
        </div>
    );
}

export default FooterColumn;
