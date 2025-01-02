import { useState } from "react";
import axios from "axios";

export default function SendMessage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>([]);
    const [anonMessage, setAnonMessage] = useState<string>("");
    const [sender, setSender] = useState<string>("");
    const [receiver, setReceiver] = useState<string>("");
    const [toast, setToast] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const postSuccess = () => {
        setLoading(false);
        setToast(true);
        setAnonMessage("");
        setSender("");
        setReceiver("");
        setTimeout(() => {
            setToast(false);
        }, 3000);
    };

    const postData = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                route("message.store", {
                    message: anonMessage,
                    from: sender ? sender : "Anonin",
                    to: receiver,
                })
            );
            postSuccess();
            setData(response.data);
        } catch (error: string | any) {
            setLoading(false);
            if(error.status === 422) {
                setError("Masih ada yang kosong tuh! 😖");
                setTimeout(() => {
                    setError("");
                }, 3000);
            } else { 
                return null;
            }
        }
    };

    return (
        <div className="container grid grid-cols-1 h-[87vh] mt-6">
            <div className="flex items-center flex-col">
                <div className="text-3xl lg:text-6xl text-black">
                    <h1>
                        Kirim <span className="text-blue-500">Pesan</span>
                    </h1>
                </div>
                <div className="text-md text-black/50 text-center flex justify-center mt-3">
                    <p className="w-full lg:w-[70%]">
                        Tulis pesan apapun yang ada di pikiranmu dan kirimkan
                        secara anonim tanpa ada yang tahu siapa pengirimnya!
                    </p>
                </div>
                <div className="w-fit flex justify-center mt-6">
                    <div className="flex flex-col gap-3">
                        <div className="w-full">
                            <label className="text-blue-500">Dari <span className="text-[10px] opacity-70">(Opsional / Boleh kosong)</span> :</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Dari siapa nih?"
                                value={sender}
                                onChange={(e) => setSender(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-blue-500">Untuk* <span className="text-[10px] opacity-70">(Ga boleh kosong)</span> : </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Untuk siapa nih?"
                                value={receiver}
                                onChange={(e) => setReceiver(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-blue-500">Pesan* <span className="text-[10px] opacity-70">(Ga boleh kosong)</span>: </label>
                            <textarea
                                className="textarea textarea-bordered textarea-sm w-full"
                                placeholder="Isi suratnya disini ya."
                                value={anonMessage}
                                onChange={(e) => setAnonMessage(e.target.value)}
                            />
                        </div>

                        {loading ? (
                            <button
                                className="btn bg-blue-500 text-white hover:bg-blue-500/50 transform transition duration-500 hover:scale-105 flex justify-center items-center"
                                onClick={postData}
                                disabled
                            >
                                <span className="loading loading-spinner"></span>
                                Mengirim Pesan...
                            </button>
                        ) : (
                            <button
                                className="btn bg-blue-500 text-white hover:bg-blue-500/50 transform transition duration-500 hover:scale-105 flex justify-center items-center"
                                onClick={postData}
                            >
                                Kirim Pesan️ ✈️
                            </button>
                        )}
                    </div>
                    {toast && (
                        <div className="toast">
                            <div className="alert alert-success text-white">
                                <span>Pesan Terkirim! 🎉</span>
                            </div>
                        </div>
                    )}
                    {error && (
                        <div className="toast">
                            <div className="alert alert-error text-white">
                                <span>{error}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
