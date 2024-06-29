interface Props {
    children: string;
    width: string;
    height: string;
}

function MyButton({ children, width, height }: Props) {
    const buttonStyle = {
        width: width,
        height: height,
    };

    return (
        <button
            className="m-4 rounded-lg bg-[#21cdc0] p-4 outline-black hover:bg-[#213360] text-white font-bold"
            style={buttonStyle}
        >
            {children}
        </button>
    );
}

export default MyButton;
