import BadgeLink from "@/Components/BadgeLink";

export default function Hero() {
    return (
        <div className="container grid grid-cols-1 h-[87vh] max-h-[87vh]">
            <div className="flex justify-center items-center flex-col">
                <div className="text-6xl lg:text-9xl text-black">
                    <h1>
                        Anon<span className="text-blue-500">in</span>
                    </h1>
                </div>
                <div className="text-md text-black text-center flex justify-center mt-3">
                    <p className="w-full lg:w-[70%]">Berbagi momen lucu, curahan hati, atau sekadar iseng mengirim pesan misterius. 
                    Privasi Anda terjaga, keseruannya dijamin!</p>
                </div>
                <div className="flex gap-3 mt-3">
                    <BadgeLink link="/kirim-pesan" text="Kirim Pesan ✈️" />
                    <BadgeLink link="/cek-pesan" text="Cek Pesan 📬" />
                </div>
            </div>
        </div>
    );
}
