import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Avatar1 = () => {
    return (
        <CodeBox 
        text={" Avatar in custom sizes"}
        stringCode={`  <div className="flex justify-center items-center gap-2 bg-white">
        <div className="w-24">
            <img
                className="rounded-full"
                src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" />
        </div>
        <div className="w-24 border border-black rounded-full p-2 shadow-gray-500">
            <img
                className="rounded-full"
                src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" />
        </div>
        <div className="w-24">
            <img
                className=""
                src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" />
        </div>
        <div className="w-24 border border-black p-2">
            <img
                className=""
                src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" />
        </div>
</div>`}>
            <div className="flex justify-center items-center gap-2 bg-white">
                    <div className="w-24">
                        <img
                            className="rounded-full"
                            src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" />
                    </div>
                    <div className="w-24 border border-black rounded-full p-2 shadow-gray-500">
                        <img
                            className="rounded-full"
                            src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" />
                    </div>
                    <div className="w-24">
                        <img
                            className=""
                            src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" />
                    </div>
                    <div className="w-24 border border-black p-2">
                        <img
                            className=""
                            src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" />
                    </div>
            </div>
        </CodeBox>
    );
};

export default Avatar1;