import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Button6 = () => {
    return (
        <CodeBox text={`Styled Button`} stringCode={` <button className="border-b-4 border-blue-500 py-2 px-4 bg-blue-200 hover:bg-blue-300 transition-colors duration-300 ease-in-out">
        Click me
    </button>
    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        Gradient Button
    </button>
   
    <button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
        Pill Button
    </button>`}>
           <div className="flex justify-evenly">
           <button className="border-b-4 border-blue-500 py-2 px-4 bg-blue-200 hover:bg-blue-300 transition-colors duration-300 ease-in-out">
                Click me
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                Gradient Button
            </button>
           
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                Pill Button
            </button>
           </div>
        </CodeBox>
    );
};

export default Button6;