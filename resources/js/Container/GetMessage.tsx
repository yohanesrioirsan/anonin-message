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
        <div className="container grid grid-cols-1 h-[87vh] mt-6">
            <div className="flex items-center flex-col">
                <div className="text-3xl lg:text-6xl text-black">
                    <h1>
                        Cek <span className="text-blue-500">Pesan</span>
                    </h1>
                </div>
                <div className="text-md text-black/50 text-center flex justify-center mt-3">
                    <p className="w-full lg:w-[70%]">
                        Masukkan nama kamu dan temukan pesan-pesan spesial yang
                        dikirimkan untuk kamu oleh teman, pengagum rahasia, atau
                        siapa saja!
                    </p>
                </div>
                <div className="flex flex-col gap-2 mt-6">
                    <div>
                        <label className="text-blue-500">Nama : </label>
                        <div className="flex gap-2 items-center">
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                placeholder="Cari nama disini..."
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            {loading ? (
                                <button
                                    className="btn bg-blue-500 text-white hover:bg-blue-500/50 transform transition duration-500 hover:scale-105 flex justify-center items-center"
                                    onClick={getData}
                                    disabled
                                >
                                    <span className="loading loading-spinner"></span>
                                    Lagi Nyari...
                                </button>
                            ) : (
                                <button
                                    className="btn bg-blue-500 text-white hover:bg-blue-500/50 transform transition duration-500 hover:scale-105 flex justify-center items-center"
                                    onClick={getData}
                                >
                                    Cek Pesan 📬
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                {search.code === 404 && (
                    <div className="text-center mt-10 opacity-85">
                        Yah😔 Belum ada pesan buat{" "}
                        <span className="font-bold">{search.message_to}</span>{" "}
                        nih.
                    </div>
                )}

                {search.data?.data && (
                    <div className="my-3">
                        Ada {search.data.total} Pesan buat{" "}
                        <span className="font-bold">{search.message_to}</span>{" "}
                        nih
                    </div>
                )}

                {search.data?.data?.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="w-full lg:w-[527px] p-3 border border-gray-500 rounded-lg mb-3"
                    >
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                            <p>Surat untuk <span className="font-bold">{item.to}</span></p>
                            <p>Dari <span className="font-bold italic">{item.from}</span></p>
                            <hr className="my-3" />
                            <p className="font-bold">"{item.message}"</p>
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
            </div>
        </div>
    );
}
