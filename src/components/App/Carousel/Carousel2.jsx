import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaRegCirclePause } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";


import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Carousel2 = () => {
    const items = [
        'https://i.ibb.co/7SRBQ4Y/working-at-night.jpg',
        'https://i.ibb.co/f0M2HjR/marvin-meyer-SYTO3xs06f-U-unsplash.jpg',
        'https://i.ibb.co/dKzjMCC/book-1052014-1280.jpg'
    ]; 
    const [currentItem, setCurrentItem] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            if (autoplay) {
                setCurrentItem((currentItem + 1) % items.length);
            }
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer);
    }, [autoplay, currentItem, items.length]);

    const toggleAutoplay = () => {
        setAutoplay(!autoplay);
    };

    const nextItem = () => {
        setCurrentItem((currentItem + 1) % items.length);
    };

    const prevItem = () => {
        setCurrentItem((currentItem - 1 + items.length) % items.length);
    };

    return (
        <>
            <CodeBox stringCode={`<div className="relative w-full h-full">
                    <div className="relative">
                        <Transition
                            show={true}
                            enter="transition-opacity duration-1000"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-1000"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <img src={items[currentItem]} alt={"Slide ${currentItem + 1}"} className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg" />
                        </Transition>
                        <button
                            className="absolute top-1/2 left-4 text-white bg-black rounded-full p-2 shadow-lg hover:bg-gray-800"
                            onClick={prevItem}
                        >
                            <MdArrowBackIosNew/>
                        </button>
                        <button
                            className="absolute top-1/2 right-4 text-white bg-black rounded-full p-2 shadow-lg hover:bg-gray-800"
                            onClick={nextItem}
                        >
                            <MdArrowForwardIos/>
                        </button>
                        <button
                            className={"absolute bottom-4 right-4 text-white bg-black rounded-full p-2 shadow-lg hover:bg-gray-800 ${autoplay ? 'opacity-50' : 'opacity-100'}"}
                            onClick={toggleAutoplay}
                        >
                            {autoplay ? <FaRegCirclePause/> : <IoMdPlay/>}
                        </button>
                    </div>
                </div>`}>
                <div className="relative w-full h-full">
                    <div className="relative">
                        <Transition
                            show={true}
                            enter="transition-opacity duration-1000"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-1000"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <img src={items[currentItem]} alt={`Slide ${currentItem + 1}`} className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg" />
                        </Transition>
                        <button
                            className="absolute top-1/2 left-4 text-white bg-black rounded-full p-2 shadow-lg hover:bg-gray-800"
                            onClick={prevItem}
                        >
                            <MdArrowBackIosNew/>
                        </button>
                        <button
                            className="absolute top-1/2 right-4 text-white bg-black rounded-full p-2 shadow-lg hover:bg-gray-800"
                            onClick={nextItem}
                        >
                            <MdArrowForwardIos/>
                        </button>
                        <button
                            className={`absolute bottom-4 right-4 text-white bg-black rounded-full p-2 shadow-lg hover:bg-gray-800 ${autoplay ? 'opacity-50' : 'opacity-100'}`}
                            onClick={toggleAutoplay}
                        >
                            {autoplay ? <FaRegCirclePause/> : <IoMdPlay/>}
                        </button>
                    </div>
                </div>
            </CodeBox>
        </>
    );
};

export default Carousel2;
