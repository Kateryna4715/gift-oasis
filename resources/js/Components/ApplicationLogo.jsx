export default function ApplicationLogo({ style }) {
    return (
        <div>
            <a href="/">
                <img
                    className={style ? style : ""}
                    src="gift_logo.jpg"
                    alt="Gift oasis logo"
                />
            </a>
        </div>
    );
}
