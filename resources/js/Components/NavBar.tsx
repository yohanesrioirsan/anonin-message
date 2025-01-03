import BadgeLink from "./BadgeLink";

export default function NavBar() {
    return (
        <nav className="container">
            <div className="flex justify-between pt-6 items-center">
                <div className="flex items-center gap-3">
                    <a href="/" className="text-2xl lg:text-4xl font-bold text-black hover:drop-shadow-lg  transform transition duration-500 hover:scale-105">
                        Anon<span className="text-blue-500">in</span>🤫
                    </a>
                </div>
                <div className="flex items-center gap-3">
                       <BadgeLink link="https://saweria.co/yohanesrioirsan" text="Buy me a coffee 🍵" />
                </div>
            </div>
        </nav>
    );
}
