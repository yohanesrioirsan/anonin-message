interface BadgeLinkProps {
    link: string;
    text: string;
}

export default function BadgeLink({ link, text}: BadgeLinkProps) {
    return (
        <a
            href={link}
            className="bg-blue-500 text-white p-3 rounded-xl text-sm hover:cursor-pointer btn hover:bg-blue-500/50 transform transition duration-500 hover:scale-105 flex justify-center items-center"
        >
            {text}
        </a>
    );
}
