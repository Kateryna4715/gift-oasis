function Input({ type, name, id, required, placeholder, style, onChange }) {
    return (
        <input
            onChange={(e) => onChange(e.target.value)}
            type={type}
            name={name}
            id={id ? id : ""}
            placeholder={placeholder ? placeholder : ""}
            required={required === false ? false : true}
            className={
                "rounded-xl h-10 border-0 px-4 text-light-gray placeholder:text-light-gray md:text-base phone:text-xs " +
                `${style ? style : ""}`
            }
        ></input>
    );
}

export default Input;
