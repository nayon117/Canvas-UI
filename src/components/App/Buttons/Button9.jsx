import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Button9 = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <CodeBox stringCode={`
        const [isChecked, setIsChecked] = useState(false);

        const handleToggle = () => {
            setIsChecked(!isChecked);
        };
       return(
        <div className="toggle-border mb-10 last:mb-0">
        <input
            id="toggle"
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="hidden"
        />
        <label
            htmlFor="toggle"
            className="relative inline-block w-24 h-5 bg-red-500 rounded-full cursor-pointer transition duration-500"
        >
            <div
                className={\`handle absolute top-0 left-0 w-5 h-5 bg-black rounded-full shadow-md transition duration-400 ${isChecked ? 'left-20' : 'left-0'
            }\`}
            ></div>
        </label>
    </div>
       )
    `}>
            <div className='flex justify-evenly'>
                <div className="toggle-border mb-10 last:mb-0">
                    <input
                        id="toggle"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleToggle}
                        className="hidden"
                    />
                    <label
                        htmlFor="toggle"
                        className="relative inline-block w-24 h-5 bg-red-500 rounded-full cursor-pointer transition duration-500"
                    >
                        <div
                            className={`handle absolute top-0 left-0 w-5 h-5 bg-black rounded-full shadow-md transition duration-400 ${isChecked ? 'left-20' : 'left-0'
                                }`}
                        ></div>
                    </label>
                </div>
            </div>
        </CodeBox>
    );
};

export default Button9;
