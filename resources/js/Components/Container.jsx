function Container({ children, style }) {
    return (
        <div className={"mx-auto " + `${style ? style : ""}`}>{children}</div>
    );
}

export default Container;
