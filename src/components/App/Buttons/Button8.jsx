import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Button8 = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <CodeBox stringCode={` const [isHovered, setIsHovered] = useState(false);
        return(  <button
        className="relative btn flex justify-center items-center w-52 h-12 overflow-hidden backdrop-filter backdrop-blur-lg rounded-full transition duration-500 transform border-double border-4 border-transparent hover:bg-black hover:text-white hover:scale-110 focus:outline-none bg-cover"
        type="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        style={{ backgroundImage: \`url(${'https://i.ibb.co/9g72MMf/partner.jpg'})\` }} // Apply background image
    >
        <strong className="z-10  text-white text-xs tracking-wide">Button</strong>
        <div id="container-stars" className={\`absolute z-0 w-full h-full transition duration-500 ${isHovered ? 'bg-black' : ''} rounded-full\`}>
            <div id="stars" className="relative w-200rem h-200rem">
                <div className="absolute top--10rem left--100rem w-full h-full animate-star-rotate after:content after:absolute after:top--10rem after:left--100rem after:w-full after:h-full bg-radial-gradient"></div>
                <div className="absolute top-0 left--50% w-170% h-500% animate-star before:content before:absolute before:top-0 before:left--50% before:w-170% before:h-500% bg-radial-gradient opacity-50"></div>
            </div>
        </div>
        <div id="glow" className="absolute flex w-48">
            <div className="w-full h-30px filter blur-2 animate-pulse bg-pink-400"></div>
            <div className="w-full h-30px filter blur-2 animate-pulse bg-purple-400"></div>
        </div>
    </button>)`}>
            <div className='flex justify-evenly'>
                <button
                    className="relative btn flex justify-center items-center w-52 h-12 overflow-hidden backdrop-filter backdrop-blur-lg rounded-full transition duration-500 transform border-double border-4 border-transparent hover:bg-black hover:text-white hover:scale-110 focus:outline-none bg-cover"
                    type="button"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                    style={{ backgroundImage: `url(${'https://i.ibb.co/9g72MMf/partner.jpg'})` }} // Apply background image
                >
                    <strong className="z-10 text-white text-xs tracking-wide">Button</strong>
                    <div id="container-stars" className={`absolute z-0 w-full h-full transition duration-500 ${isHovered ? 'bg-black' : ''} rounded-full`}>
                        <div id="stars" className="relative w-200rem h-200rem">
                            <div className="absolute top--10rem left--100rem w-full h-full animate-star-rotate after:content after:absolute after:top--10rem after:left--100rem after:w-full after:h-full bg-radial-gradient"></div>
                            <div className="absolute top-0 left--50% w-170% h-500% animate-star before:content before:absolute before:top-0 before:left--50% before:w-170% before:h-500% bg-radial-gradient opacity-50"></div>
                        </div>
                    </div>
                    <div id="glow" className="absolute flex w-48">
                        <div className="w-full h-30px filter blur-2 animate-pulse bg-pink-400"></div>
                        <div className="w-full h-30px filter blur-2 animate-pulse bg-purple-400"></div>
                    </div>
                </button>
            </div>
        </CodeBox>
    );
};

export default Button8;
