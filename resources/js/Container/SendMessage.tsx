import { useState } from "react";
import axios from "axios";

export default function SendMessage(){
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

    return(
        <div className="w-fit flex justify-center p-3 border border-gray-500 rounded-lg">
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="From"
                        value={sender}
                        onChange={(e) => setSender(e.target.value)}
                    />
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="To"
                        value={receiver}
                        onChange={(e) => setReceiver(e.target.value)}
                    />
                    <textarea
                        className="textarea textarea-bordered"
                        placeholder="Bio"
                        value={anonMessage}
                        onChange={(e) => setAnonMessage(e.target.value)}
                    />

                    {loading ? (
                        <button
                            className="btn btn-active btn-primary"
                            onClick={postData}
                            disabled
                        >
                            <span className="loading loading-spinner"></span>
                            Sending...
                        </button>
                    ) : (
                        <button
                            className="btn btn-active btn-primary"
                            onClick={postData}
                        >
                            Send
                        </button>
                    )}
                </div>
                {toast && (
                    <div className="toast">
                        <div className="alert alert-success">
                            <span>Message Sent!</span>
                        </div>
                    </div>
                )}
            </div>
    )

}