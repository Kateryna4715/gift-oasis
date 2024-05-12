import { useState } from "react";
import Order from "./Order";
import UserForm from "./UserForm";
import Button from "@/Components/Button";

function Preview({ order }) {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [payment, setPayment] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    async function unAuthOrder() {
        const unAuthOrder = {
            fullname,
            email,
            phone,
            payment: payment.type,
            city,
            wrapper: order.wrappers?.color,
            comic: order.comics?.name,
            sweet: order.sweets?.name,
        };
    }
    return (
        <div className="flex justify-between md:flex-row phone:flex-col-reverse md:items-start phone:items-center gap-12 ">
            <UserForm
                fullname={fullname}
                email={email}
                payment={payment}
                phone={phone}
                city={city}
                setFullname={setFullname}
                setEmail={setEmail}
                setPayment={setPayment}
                setPhone={setPhone}
                setCity={setCity}
                order={order}
            />
            <Order order={order} />
            {/* <button
                onClick={unAuthOrder}
                className="xl:py-2.5 xl:px-6 xl:text-base md:text-sm  md:py-1.5 md:px-4 phone:px-3 phone:py-1 phone:text-xs bg-cream-light w-fit mx-auto border-indigo-light py-2.5 px-6 rounded-full uppercase text-base font-bold border-4 shadow-basic-sh hover:bg-cream transition-all duration-500"
            >
                Confirm
            </button>
            <input
                type="submit"
                onClick={unAuthOrder}
                className="xl:py-2.5 xl:px-6 xl:text-base md:text-sm  md:py-1.5 md:px-4 phone:px-3 phone:py-1 phone:text-xs bg-cream-light w-fit mx-auto border-indigo-light py-2.5 px-6 rounded-full uppercase text-base font-bold border-4 shadow-basic-sh hover:bg-cream transition-all duration-500"
            ></input> */}
        </div>
    );
}

export default Preview;
