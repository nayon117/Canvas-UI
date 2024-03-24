import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Avatar4 = () => {
    return (
        <CodeBox
        text={`Avatar with number`}
        stringCode={`
        <div className="relative w-16 h-16">
        <img src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt="Avatar" className="w-full h-full rounded-full" />
        <div className="absolute bottom-0 right-0 bg-black rounded-full text-white flex items-center justify-center w-6 h-6">
            1+
        </div>
    </div>
        `}>
            <div className="flex justify-evenly">
                <div className="relative w-16 h-16">
                    <img src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt="Avatar" className="w-full h-full rounded-full" />
                    <div className="absolute bottom-0 right-0 bg-black rounded-full text-white flex items-center justify-center w-6 h-6">
                        1+
                    </div>
                </div>
            </div>

        </CodeBox>
    );
};

export default Avatar4;