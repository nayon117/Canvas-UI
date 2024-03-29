import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Avatar6 = () => {
    return (
        <CodeBox text={`Avatar with active dot`} stringCode={` <div className="relative flex justify-evenly">
        <div className="absolute top-0 left-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full"></div>
        <img src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt="Avatar" className="w-12 h-12 rounded-full" />
    </div>`}>
            <div className="flex justify-evenly">
                <div className="relative flex justify-evenly">
                    <div className="absolute top-0 left-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full"></div>
                    <img src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt="Avatar" className="w-12 h-12 rounded-full" />
                </div>
            </div>
        </CodeBox>
    );
};

export default Avatar6;
