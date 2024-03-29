/* eslint-disable no-unused-vars */
import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Avatar8 = () => {
    // eslint-disable-next-line no-unused-vars
    const [mainColor, setMainColor] = useState('#000');
    const [subMainColor, setSubMainColor] = useState('#78858F');
    const [bgColor, setBgColor] = useState('#fff');

    return (
        <CodeBox text={`Profile avatar with button`} stringCode={` <div className="card relative w-72 pb-12 flex flex-col items-center bg-white rounded-xl shadow-lg">
        <div className="card__img w-full h-48 rounded-t-xl overflow-hidden">
            <img src="https://i.ibb.co/LzXmwF2/learning-3245793-1280.jpg" alt="" />

        </div>
        <div className="card__avatar absolute w-28 h-28 bg-white rounded-full flex justify-center items-center top-1/2 transform -translate-y-1/2">
            <img className="rounded-full w-24" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt="" />
        </div>
        <div className="card__title mt-12 font-semibold text-lg" style={{ color: mainColor }}>Cameron Williamson</div>
        <div className="card__subtitle mt-2 font-normal text-base" style={{ color: subMainColor }}>Web Development</div>
        <div className="card__wrapper flex mt-auto">
            <button className="card__btn mr-2 border-2 border-solid border-black rounded-md text-xs font-bold text-black bg-white px-2 py-1 transition duration-300 hover:bg-black hover:text-white focus:outline-none">Button</button>
            <button className="card__btn card__btn-solid border-2 border-solid border-black rounded-md text-xs font-bold text-white bg-black px-2 py-1 transition duration-300 hover:bg-white hover:text-black focus:outline-none">Button</button>
        </div>
    </div>`}>
            <div className="flex justify-evenly">
                <div className="card relative w-72 pb-12 flex flex-col items-center bg-white rounded-xl shadow-lg">
                    <div className="card__img w-full h-48 rounded-t-xl overflow-hidden">
                        <img src="https://i.ibb.co/LzXmwF2/learning-3245793-1280.jpg" alt="" />

                    </div>
                    <div className="card__avatar absolute w-28 h-28 bg-white rounded-full flex justify-center items-center top-1/2 transform -translate-y-1/2">
                        <img className="rounded-full w-24" src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt="" />
                    </div>
                    <div className="card__title mt-12 font-semibold text-lg" style={{ color: mainColor }}>Cameron Williamson</div>
                    <div className="card__subtitle mt-2 font-normal text-base" style={{ color: subMainColor }}>Web Development</div>
                    <div className="card__wrapper flex mt-auto">
                        <button className="card__btn mr-2 border-2 border-solid border-black rounded-md text-xs font-bold text-black bg-white px-2 py-1 transition duration-300 hover:bg-black hover:text-white focus:outline-none">Button</button>
                        <button className="card__btn card__btn-solid border-2 border-solid border-black rounded-md text-xs font-bold text-white bg-black px-2 py-1 transition duration-300 hover:bg-white hover:text-black focus:outline-none">Button</button>
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

export default Avatar8;