import  { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Carousel1 = () => {
const images=[
   ' https://i.ibb.co/gtm3f4p/istockphoto-1205061931-612x612.jpg',
   'https://i.ibb.co/f0M2HjR/marvin-meyer-SYTO3xs06f-U-unsplash.jpg',
   'https://i.ibb.co/dKzjMCC/book-1052014-1280.jpg'
]
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    return (
        <>
            <CodeBox>
                <div className="relative">
                    <div className="flex justify-center items-center">
                        <img
                            src={images[currentImage]}
                            alt="Carousel Image"
                            className="rounded-lg shadow-lg h-64 object-cover"
                        />
                        <button
                            className="absolute top-1/2 left-4 text-white bg-black rounded-full p-2 shadow-lg hover:bg-gray-800"
                            onClick={prevImage}
                        >
                            <MdArrowBackIosNew/>
                        </button>
                        <button
                            className="absolute top-1/2 right-4 text-white bg-black rounded-full p-2 shadow-lg hover:bg-gray-800"
                            onClick={nextImage}
                        >
                           <MdArrowForwardIos/>
                        </button>
                    </div>
                </div>
            </CodeBox>
        </>
    );
};

export default Carousel1;
