import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner1 = () => {
    return (
        <CodeBox
            text={`Loading Spinner`}
            stringCode={` {/* 1 */}
        <svg
            className={'animate-spin h-8 w-8 text-blue-800'}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12c0 3.042-1.135 5.824-3 7.938l3-2.647A7.962 7.962 0 0120 12h-4zm-2-5.291a7.962 7.962 0 01-3-2.647l-3 2.647A7.962 7.962 0 0112 4v4zm-2 0V4a7.962 7.962 0 01-2.647 3l2.647 3zM12 20a8 8 0 008-8h-4c0 2.838-1.16 5.411-3.04 7.26l-2.647-3A7.962 7.962 0 0012 20zm-7.938-3A7.962 7.962 0 004 12H0a8 8 0 008 8v-4zm19.875-3h4a8 8 0 00-8-8v4c2.838 0 5.411 1.16 7.26 3.04l-3 2.647zM4.065 15.04A7.962 7.962 0 004 12H0a8 8 0 008 8v-4c-2.838 0-5.411-1.16-7.26-3.04l3-2.647z"
            ></path>
        </svg>

        {/* 2 */}
        <svg
            className={'animate-spin h-12 w-12 text-orange-800'}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <g fill="currentColor">
                <circle cx="12" cy="4" r="2" />
                <circle cx="12" cy="20" r="2" />
                <circle cx="4.93" cy="7.07" r="2" />
                <circle cx="19.07" cy="16.93" r="2" />
                <circle cx="7.07" cy="4.93" r="2" />
                <circle cx="16.93" cy="19.07" r="2" />
                <circle cx="4" cy="12" r="2" />
                <circle cx="20" cy="12" r="2" />
            </g>
        </svg>
        {/* 3 */}
        <div className='w-12 h-12 relative '>
            <div className={'absolute top-0 left-0 w-full h-full border-blue-500 border-4 rounded-full'}></div>
            <div className={'absolute top-0 left-0 w-full h-full border-t-blue-500 border-4 rounded-full animate-spin'}></div>
        </div>`}>
            <div className="flex justify-evenly items-center gap-5">
                {/* 1 */}
                <svg
                    className={`animate-spin h-8 w-8 text-blue-800`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12c0 3.042-1.135 5.824-3 7.938l3-2.647A7.962 7.962 0 0120 12h-4zm-2-5.291a7.962 7.962 0 01-3-2.647l-3 2.647A7.962 7.962 0 0112 4v4zm-2 0V4a7.962 7.962 0 01-2.647 3l2.647 3zM12 20a8 8 0 008-8h-4c0 2.838-1.16 5.411-3.04 7.26l-2.647-3A7.962 7.962 0 0012 20zm-7.938-3A7.962 7.962 0 004 12H0a8 8 0 008 8v-4zm19.875-3h4a8 8 0 00-8-8v4c2.838 0 5.411 1.16 7.26 3.04l-3 2.647zM4.065 15.04A7.962 7.962 0 004 12H0a8 8 0 008 8v-4c-2.838 0-5.411-1.16-7.26-3.04l3-2.647z"
                    ></path>
                </svg>

                {/* 2 */}
                <svg
                    className={`animate-spin h-12 w-12 text-orange-800`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <g fill="currentColor">
                        <circle cx="12" cy="4" r="2" />
                        <circle cx="12" cy="20" r="2" />
                        <circle cx="4.93" cy="7.07" r="2" />
                        <circle cx="19.07" cy="16.93" r="2" />
                        <circle cx="7.07" cy="4.93" r="2" />
                        <circle cx="16.93" cy="19.07" r="2" />
                        <circle cx="4" cy="12" r="2" />
                        <circle cx="20" cy="12" r="2" />
                    </g>
                </svg>
                {/* 3 */}
                <div className='w-12 h-12 relative '>
                    <div className={`absolute top-0 left-0 w-full h-full border-blue-500 border-4 rounded-full`}></div>
                    <div className={`absolute top-0 left-0 w-full h-full border-t-blue-500 border-4 rounded-full animate-spin`}></div>
                </div>
            </div>
        </CodeBox>
    );
}
export default Spinner1;