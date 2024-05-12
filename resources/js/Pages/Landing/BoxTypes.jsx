import { boxTypes } from "../../../staticData";
import Box from "./Box";

function BoxTypes() {
    return (
        <div className="flex sm:flex-row phone:flex-col sm:items-start phone:items-center justify-between  phone:gap-6 sm:gap-0">
            {boxTypes.map((box, i) => (
                <Box
                    img={box.img}
                    title={box.title}
                    desc={box.description}
                    key={i}
                    index={i}
                />
            ))}
        </div>
    );
}

export default BoxTypes;
