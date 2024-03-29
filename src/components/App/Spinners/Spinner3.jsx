import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Spinner3 = () => {
    const interval = 0.2;
    return (
        <>
            <CodeBox
                text={`Dots Loading`}
                stringCode={`
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '${interval}s' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '${2 * interval}s' }}></div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '${4 * interval}s' }}></div>
        `}>
                <div className={'flex justify-center items-center space-x-1'}>
                    <div className={`w-2 h-2 bg-blue-500 rounded-full animate-bounce`} style={{ animationDelay: '0s' }}></div>
                    <div className={`w-2 h-2 bg-orange-500 rounded-full animate-bounce`} style={{ animationDelay: `${interval}s` }}></div>
                    <div className={`w-2 h-2 bg-green-500 rounded-full animate-bounce`} style={{ animationDelay: `${2 * interval}s` }}></div>
                    <div className={`w-2 h-2 bg-red-500 rounded-full animate-bounce`} style={{ animationDelay: `${4 * interval}s` }}></div>
                </div>
            </CodeBox>
        </>
    );
};

export default Spinner3;