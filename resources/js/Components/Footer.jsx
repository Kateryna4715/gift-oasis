import ApplicationLogo from "./ApplicationLogo";
import Container from "./Container";
import FooterColumn from "./FooterColumn";
import Icon from "./Icon";
import Icons from "./Icons";
import ListLinks from "./ListLinks";

function Footer() {
    return (
        <footer>
            <Container
                style={
                    "xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl xsm:max-w-md phone:max-w-xs mx-auto py-6 flex flex-wrap md:gap-40 sm:gap-16 xsm:gap-12 phone:gap-8 items-end"
                }
            >
                <FooterColumn style={"xl:gap-4 md:gap-2"}>
                    <ApplicationLogo
                        style={"xl:w-20 md:w-16 sm:w-16 phone:w-11"}
                    />
                    <a className="md:text-sm phone:text-xs" href="/">
                        giftoasis@gmail.com
                    </a>
                </FooterColumn>

                <ListLinks
                    style={
                        "font-normal capitalize flex flex-col sm:gap-3 phone:gap-1 "
                    }
                />

                <FooterColumn
                    style={
                        "xl:h-24 lg:h-20 md:h-18 sm:h-16 phone:h-10 justify-between  "
                    }
                >
                    <Icons>
                        <Icon link="">
                            <svg
                                className="lg:w-5 lg:h-5 md:w-4 md:h-4 phone:w-3 phone:h-3"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
                                    fill="#5A5A5A"
                                />
                            </svg>
                        </Icon>

                        <Icon link="">
                            <svg
                                className="lg:w-5 lg:h-5 md:w-4 md:h-4 phone:w-3 phone:h-3"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                                    fill="#5A5A5A"
                                />
                            </svg>
                        </Icon>
                    </Icons>

                    <div>
                        <p className="md:text-sm phone:text-xs">
                            © 2024 GiftOasis
                        </p>
                    </div>
                </FooterColumn>
            </Container>
        </footer>
    );
}

export default Footer;
