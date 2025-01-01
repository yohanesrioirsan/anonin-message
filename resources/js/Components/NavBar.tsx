import BadgeLink from "./BadgeLink";

export default function NavBar() {
    return (
        <nav className="container">
            <div className="flex justify-between pt-6 items-center">
                <div className="flex items-center gap-3">
                    <a href="/" className="text-4xl font-bold text-black hover:drop-shadow-lg">
                        Anon<span className="text-blue-500">in</span>
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <div className="hover:animate-bounce">
                       <BadgeLink link="https://www.saweria.com/yohanesrioirsan" text="Buy me a coffee 🍵" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
