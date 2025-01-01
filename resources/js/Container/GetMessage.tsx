import { useEffect, useState } from "react";
import axios from "axios";

export default function GetMessage() {
    const [search, setSearch] = useState<any>([]);
    const [name, setName] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [toast, setToast] = useState<boolean>(false);

    const getData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                route("message.search", {
                    receiver_name: name,
                })
            );
            setSearch(response.data);

            setLoading(false);
            console.log(search);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        if (search.code === 400 || search.code === 404) {
            setToast(true);
            setTimeout(() => {
                setToast(false);
            }, 2000); // Show toast for 3 seconds
        }
    }, [search]);

    return (
        <>
            <div className="w-fit flex justify-center p-3 border border-gray-500 rounded-lg mt-3">
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Search your name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    {loading ? (
                        <button
                            className="btn btn-active btn-primary"
                            onClick={getData}
                            disabled
                        >
                            <span className="loading loading-spinner"></span>
                            Searching...
                        </button>
                    ) : (
                        <button
                            className="btn btn-active btn-primary"
                            onClick={getData}
                        >
                            Search
                        </button>
                    )}
                </div>
            </div>
            {search.code === 404 && toast && (
                <div className="toast">
                    <div className="alert bg-orange-500 text-white">
                        Oops, there is no message for
                        <span className="font-bold">
                            {search.message_to} 😔
                        </span>
                    </div>
                </div>
            )}

            {search.data?.data?.map((item: any, index: number) => (
                <div
                    key={index}
                    className="w-fit flex justify-center p-3 border border-gray-500 rounded-lg mt-3"
                >
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">From: {item.from}</span>
                            <span className="font-bold">To: {item.to}</span>
                            <span className="font-bold">
                                Message: {item.message}
                            </span>
                        </div>
                    </div>
                </div>
            ))}

            {search.code === 400 && toast && (
                <div className="toast">
                    <div className="alert bg-red-500 text-white text-center">
                        <span>{search.message}</span>
                    </div>
                </div>
            )}
        </>
    );
}
