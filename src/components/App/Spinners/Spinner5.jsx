import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Spinner5 = () => {
    return (
        <CodeBox text={`Gradient circle & Wave loader`}
            stringCode={`
            {/* Circle Gradient  */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>

            {/* wave loader  */}

            <div className="flex flex-wrap justify-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce mx-1"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce mx-1"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce mx-1"></div>
            </div>
        `}>
            <div className="flex justify-evenly items-center">
                {/* Circle Gradient  */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>

                {/* wave loader  */}

                <div className="flex flex-wrap justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce mx-1"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce mx-1"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce mx-1"></div>
                </div>
            </div>



        </CodeBox>
    );
};

export default Spinner5;