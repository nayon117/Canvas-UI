import CodeBox from "../../../Shared/CodeBox/CodeBox"


const Spinner4 = () => {
    return (
        <CodeBox text={`Loading bar`}
        stringCode={`{/* Simple Loading Bar */}
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 animate-pulse"></div>
        </div>
        {/* Loading Bar with Gradient */}
        <div className="w-full h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full overflow-hidden">
            <div className="h-full bg-white animate-pulse"></div>
        </div>
        {/* Loading Bar with Stripes */}
        <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" style={{ backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: '0 0' }}></div>
        </div>`}>
            <div className="flex  justify-evenly gap-4">
                {/* Simple Loading Bar */}
                <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 animate-pulse"></div>
                </div>
                {/* Loading Bar with Gradient */}
                <div className="w-full h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full overflow-hidden">
                    <div className="h-full bg-white animate-pulse"></div>
                </div>
                {/* Loading Bar with Stripes */}
                <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" style={{ backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: '0 0' }}></div>
                </div>
            </div>

        </CodeBox>
    );
};

export default Spinner4;