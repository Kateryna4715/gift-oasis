import { steps } from "../../../staticData";
import Step from "./Step";

function Steps() {
    return (
        <div className="flex flex-col lg:gap-28 md:gap-20  xsm:gap-16 phone:gap-6 ">
            {steps.map((step, i) => (
                <Step
                    img={step.img}
                    title={step.title}
                    desc={step.desc}
                    cur={i + 1}
                    key={i}
                />
            ))}
        </div>
    );
}

export default Steps;
