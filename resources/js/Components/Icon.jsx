function Icon({ children, link }) {
    return (
        <div>
            <a href={link}>{children}</a>
        </div>
    );
}

export default Icon;
