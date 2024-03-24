import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner6 = () => {
    return (
        <CodeBox text={`Bar Loader with Gradient`}
            stringCode={`<div className="flex space-x-1">
        <div className="w-4 h-12 bg-gradient-to-b from-blue-500 to-purple-500 animate-bounce"></div>
        <div className="w-4 h-12 bg-gradient-to-b from-purple-500 to-blue-500 animate-bounce"></div>
        <div className="w-4 h-12 bg-gradient-to-b from-blue-500 to-purple-500 animate-bounce"></div>
    </div>`}>
            <div className="flex justify-evenly">
                <div className="flex space-x-1">
                    <div className="w-4 h-12 bg-gradient-to-b from-blue-500 to-purple-500 animate-bounce"></div>
                    <div className="w-4 h-12 bg-gradient-to-b from-purple-500 to-blue-500 animate-bounce"></div>
                    <div className="w-4 h-12 bg-gradient-to-b from-blue-500 to-purple-500 animate-bounce"></div>
                </div>

            </div>


        </CodeBox>
    );
};

export default Spinner6;
