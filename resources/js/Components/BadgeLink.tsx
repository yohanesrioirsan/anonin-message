interface BadgeLinkProps {
    link: string;
    text: string;
}

export default function BadgeLink({ link, text}: BadgeLinkProps) {
    return (
        <a
            href={link}
            target="_blank"
            className="bg-blue-500 text-white p-3 rounded-xl text-sm hover:cursor-pointer shadow-md hover:bg-primary/50"
        >
            {text}
        </a>
    );
}
