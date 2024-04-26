import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Hero1 = () => {
    return (
        <CodeBox stringCode={` <div className="w-full  h-full mt-12 text-center" style={{ backgroundImage: 'url("https://i.ibb.co/QjPBymx/a-red-orange-column-of-smoke-in-darkness.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="w-full h-full p-4 text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)' }}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h1 className=" text-6xl my-4">Lorem ipsum dolor sit amet.</h1>
            <button className="text-sm border bg-white text-black px-4 py-2">
                btn text
            </button>
        </div>
    </div>`}>
            <div className="w-full  h-full mt-12 text-center" style={{ backgroundImage: 'url("https://i.ibb.co/QjPBymx/a-red-orange-column-of-smoke-in-darkness.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full h-full p-4 text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)' }}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h1 className=" text-6xl my-4">Lorem ipsum dolor sit amet.</h1>
                    <button className="text-sm border bg-white text-black px-4 py-2">
                        btn text
                    </button>
                </div>
            </div>

        </CodeBox>
    );
};

export default Hero1;
