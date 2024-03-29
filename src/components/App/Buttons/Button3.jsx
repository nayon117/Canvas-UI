import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Button3 = () => {
    const [disabled, setDisabled] = useState(false);

    return (
        <CodeBox
        text={`Enable and Disable button `}
         stringCode={`
            const [disabled, setDisabled] = useState(false);

            return (
                <div className="flex flex-col justify-center">
                    <button
                        className={\`bg-gray-300 py-2 px-4 my-4 rounded-md \${disabled ? 'pointer-events-none opacity-50' : 'border border-black text-black'}\`}
                        disabled={disabled}
                        onClick={() => setDisabled(!disabled)}
                    >
                        {disabled ? 'Enable' : 'Disable'} My Button
                    </button>

                    <div className="flex justify-center space-x-4">
                        <button
                            className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md"
                            onClick={() => setDisabled(true)}
                        >
                            Disable
                        </button>
                        <button
                            className="bg-green-500 text-white py-2 px-4 rounded-md"
                            onClick={() => setDisabled(false)}
                        >
                            Enable
                        </button>
                    </div>
                </div>
            );
        `}
        >
            <div className="flex flex-col justify-center">
                <button
                    className={`bg-gray-300 py-2 px-4 my-4 rounded-md ${disabled ? 'pointer-events-none opacity-50' : 'border border-black text-black'}`}
                    disabled={disabled}
                    onClick={() => setDisabled(!disabled)}
                >
                    {disabled ? 'Enable' : 'Disable'} My Button
                </button>

                <div className="flex justify-center space-x-4">
                    <button
                        className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md"
                        onClick={() => setDisabled(true)}
                    >
                        Disable
                    </button>
                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded-md"
                        onClick={() => setDisabled(false)}
                    >
                        Enable
                    </button>
                </div>
            </div>
        </CodeBox>
    );
};

export default Button3;
