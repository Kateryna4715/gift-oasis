function Order({ order }) {
    return (
        <div className="bg-white rounded-xl px-6 py-10 lg:max-w-2xl md:max-w-lg  xsm:max-w-xs phone:max-w-72 md:text-base phone:text-sm  flex flex-col gap-6">
            <div className="flex  justify-between">
                <p>
                    <strong>Your Box</strong>
                </p>
                <p>
                    <strong>45$</strong>
                </p>
            </div>
            <hr />
            <div className="flex items-center">
                <img
                    className="w-24 h-24 rounded-xl"
                    src={order?.wrappers?.image}
                    alt=""
                />
                <div className="flex w-full justify-between ml-4 gap-8">
                    <p>Wrapper: {order?.wrappers?.color}</p>
                    <p>
                        <strong>{order?.wrappers?.price}.00$</strong>
                    </p>
                </div>
            </div>
            <div className="flex items-center ">
                <img
                    className="w-24 h-32 rounded-xl"
                    src={order?.comics?.image}
                    alt=""
                />
                <div className="flex w-full justify-between ml-4 gap-8">
                    <p>Comic: {order?.comics?.name}</p>
                    <p>
                        {" "}
                        <strong>{order?.comics?.price}.00$</strong>
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <img
                    className="w-24 h-24 rounded-xl"
                    src={order?.sweets?.image}
                    alt=""
                />
                <div className="flex w-full justify-between ml-4 gap-8">
                    <p>Sweets: {order?.sweets?.name}</p>
                    <p>
                        <strong>{order?.sweets?.price}$</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Order;
