function Button({ children, style, onClickButton, selectedItem }) {
    return (
        <button
            onClick={() => onClickButton(selectedItem)}
            className={
                "py-2.5 px-6 rounded-full uppercase text-base font-bold border-4 shadow-basic-sh hover:bg-cream transition-all duration-500 " +
                `${style ? style : ""} `
            }
        >
            {children}
        </button>
    );
}

export default Button;
