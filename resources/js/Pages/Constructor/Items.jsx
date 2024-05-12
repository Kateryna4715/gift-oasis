import { useEffect, useState } from "react";
import Item from "./Item";
import Button from "@/Components/Button";

function Items({
    stage,
    onSelection,
    selectedItem,
    items,
    wrappers,
    sweets,
    comics,
}) {
    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 phone:grid-cols-2 auto-rows-fr justify-items-center  md:gap-10 phone:gap-8">
            {eval(items).map((item, i) => (
                <Item
                    wrappers={wrappers}
                    comics={comics}
                    sweets={sweets}
                    onSelection={onSelection}
                    selectedItem={selectedItem}
                    item={item}
                    key={i}
                    stage={stage}
                />
            ))}
        </div>
    );
}

export default Items;
