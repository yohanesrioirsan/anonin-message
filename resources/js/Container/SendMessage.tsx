import { useState } from "react";
import axios from "axios";

export default function SendMessage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>([]);
    const [anonMessage, setAnonMessage] = useState<string>("");
    const [sender, setSender] = useState<string>("");
    const [receiver, setReceiver] = useState<string>("");
    const [toast, setToast] = useState<boolean>(false);

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
        } catch (error) {
            setLoading(false);
            console.log(error);
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
                        <div>
                            <label className="text-blue-500">Dari : </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-md"
                                placeholder="Dari siapa nih? (Opsional)"
                                value={sender}
                                onChange={(e) => setSender(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="text-blue-500">Untuk : </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                placeholder="Untuk siapa nih? Nama lengkap ato panggilan"
                                value={receiver}
                                onChange={(e) => setReceiver(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-blue-500">Pesan : </label>
                            <textarea
                                className="textarea textarea-bordered textarea-sm w-full max-w-xs"
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
                </div>
            </div>
        </div>
    );
}
