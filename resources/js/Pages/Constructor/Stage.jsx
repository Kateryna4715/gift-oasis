function Stage({ step, stage }) {
    return (
        <div
            className={
                "flex items-center justify-center xl:h-20 xl:w-20 sm:h-16 sm:w-16 phone:w-12 phone:h-12 border-4 rounded-xl bg-white z-50 " +
                `${step === stage ? "border-golden" : "border-golden-light"}`
            }
        >
            <p
                className={
                    "md:text-3xl phone:text-xl " +
                    `${step === stage ? "text-dark-gray" : "text-light-gray"}`
                }
            >
                {step}
            </p>
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                />
            </svg> */}
        </div>
    );
}

export default Stage;
