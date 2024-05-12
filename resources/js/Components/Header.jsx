function Header({ children, style }) {
    return (
        <header className={"flex-col mt-8  " + `${style ? style : ""}`}>
            {children}
        </header>
    );
}

export default Header;
