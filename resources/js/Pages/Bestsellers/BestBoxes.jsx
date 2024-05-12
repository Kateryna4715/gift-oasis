import { useEffect, useState } from "react";
import BestBox from "./BestBox";

function BestBoxes() {
    const [bestsellers, setBestsellers] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/bestsellers")
            .then((res) => res.json())
            .then((data) => {
                setBestsellers(data.bestsellers);
            });
    });

    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 phone:grid-cols-2 auto-rows-fr justify-items-center lg:gap-14  md:gap-10 phone:gap-4">
            {bestsellers.map((best, i) => (
                <BestBox bb={best} key={i} />
            ))}
        </div>
    );
}

export default BestBoxes;
