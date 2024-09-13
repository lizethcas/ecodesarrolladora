

interface iconProps {
    iconName: string
}

const IconAtom = ({ iconName }: iconProps) => {
    // Suponiendo que icons.svg está en la misma carpeta
    return (
        <svg className="w-6 h-6 fill-black">
            <use xlinkHref={`/assets/icons.svg#${iconName}`} />
        </svg>
    );
};

export default IconAtom