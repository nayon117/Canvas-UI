import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Button7 = () => {
    return (
        <CodeBox text={` Outlined Button`} stringCode={` <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
        Outlined Button
    </button>`}>
            <div className="flex justify-evenly">
                <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                    Outlined Button
                </button>
            </div>
        </CodeBox>
    );
};

export default Button7;