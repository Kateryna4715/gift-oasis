function Form({ style, children }) {
    return (
        <form
            action=""
            method="post"
            className={"flex " + `${style ? style : ""}`}
        >
            {children}
        </form>
    );
}

export default Form;
