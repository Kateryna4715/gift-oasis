import Button from "@/Components/Button";
import { useState } from "react";

function Item({ item, stage, onSelection, selectedItem }) {
    const isSelected = item.id === selectedItem?.id;

    return (
        stage < 4 && (
            <button
                id={item.id}
                onClick={() => onSelection(item)}
                className={`${
                    isSelected
                        ? "border-8 border-cream-light rounded-2xl"
                        : "" +
                          "hover:shadow-main-shadow rounded-2xl transition-all duration-300"
                }`}
            >
                <div className="min-h-244 lg:max-w-52 md:max-w-48 xsm:max-w-40 phone:max-w-36 flex flex-col justify-s items-center lg:gap-2 phone:gap-1  ">
                    <div className="rounded-xl bg-white p-10  flex justify-center items-center shadow-main-shadow ">
                        <div
                            className={
                                "lg:w-28 md:w-24  phone:w-20 rounded-xl overflow-hidden max-h-136"
                            }
                        >
                            <img
                                className={
                                    stage === 1
                                        ? "scale-185 -translate-y-2"
                                        : ""
                                }
                                src={item.image}
                                alt={`item`}
                            />
                        </div>
                    </div>
                    <p className="md:text-base phone:text-sm mt-3">
                        {item.color || item.name}
                    </p>
                    <p className="md:text-base phone:test-sm">
                        <strong>
                            {(item.price + "").includes(".")
                                ? item.price + "0"
                                : item.price + ".00"}
                            $
                        </strong>
                    </p>
                </div>
            </button>
        )
    );
}

export default Item;
