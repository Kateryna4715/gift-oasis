import Form from "@/Components/Form";
import Input from "@/Components/Input";

function UserForm({
    fullname,
    email,
    phone,
    city,
    payment,
    setFullname,
    setEmail,
    setPayment,
    setPhone,
    setCity,
    order,
}) {
    return (
        <div>
            <div>
                <Form
                    action="/unauthorder"
                    method="POST"
                    style={
                        "lg:gap-14  phone:gap-4 xl:max-w-2xl lg:max-w-lg md:max-w-sm lg:flex-row md:flex-col  xsm:flex-row phone:flex-col"
                    }
                >
                    <div className="flex flex-col lg:w-1/2 phone:w-full gap-4">
                        <Input
                            onChange={setFullname}
                            value={fullname}
                            type={"text"}
                            name={"fullname"}
                            placeholder={"Full Name"}
                        />
                        <Input
                            onChange={setEmail}
                            value={email}
                            type={"email"}
                            name={"email"}
                            placeholder={"Email"}
                        />

                        <select
                            onChange={setPayment}
                            value={payment}
                            name="payment"
                            className="rounded-xl h-10 border-0 px-4 text-light-gray md:text-base phone:text-xs"
                        >
                            <option value="">Payment*</option>
                            <option value="card">Card</option>
                            <option value="cash">Cash</option>
                            <option value="bankTransfer">Bank transfer</option>
                        </select>
                    </div>
                    <div className="flex flex-col lg:w-1/2 phone:w-full gap-4">
                        <Input
                            onChange={setPhone}
                            value={phone}
                            type={"text"}
                            name={"phone"}
                            placeholder={"Phone"}
                        />
                        <Input
                            type={"text"}
                            name={"city"}
                            placeholder={"City"}
                            onChange={setCity}
                            value={city}
                        />

                        <div className="flex items-center gap-4">
                            <Input
                                type={"checkbox"}
                                name={"confirmation"}
                                id={"confirmation"}
                                required={false}
                                style={"appearance-auto "}
                            />

                            <label
                                for={"confirmation"}
                                className="md:text-base phone:text-xs"
                            >
                                I don't want to receive a confirmation call.
                            </label>
                        </div>

                        <button
                            type="submit"
                            // onClick={unAuthOrder}
                            className="xl:py-2.5 xl:px-6 xl:text-base md:text-sm  md:py-1.5 md:px-4 phone:px-3 phone:py-1 phone:text-xs bg-cream-light w-fit mx-auto border-indigo-light py-2.5 px-6 rounded-full uppercase text-base font-bold border-4 shadow-basic-sh hover:bg-cream transition-all duration-500"
                        >
                            Confirm order
                        </button>
                    </div>
                </Form>
            </div>
            {/* <div>
                <p>
                    <strong>Your Box</strong>
                </p>
                <Input
                    disabled={true}
                    value={order.wrappers?.color}
                    type={"text"}
                    name={"wrapper"}
                    placeholder={`${order.wrappers?.color}`}
                />
                <Input
                    disabled={true}
                    value={order.comics?.name}
                    type={"text"}
                    name={"comic"}
                    placeholder={`${order.comics?.name}`}
                />
                <Input
                    disabled={true}
                    value={order.sweets?.name}
                    type={"text"}
                    name={"sweet"}
                    placeholder={`${order.sweets?.name}`}
                />
            </div> */}
        </div>
    );
}

export default UserForm;
