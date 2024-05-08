import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Hero3 = () => {
    return (
        <CodeBox>
            <div className="relative h-[430px] w-full bg-black" style={{ backgroundImage: `url(https://i.ibb.co/wN13Ct6/dot.jpg')`, backgroundRepeat: 'repeat', backgroundSize: '15px 15px' }}>

                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 text-white">
                    <div className="">
                        <p>start here</p>
                        <p>email@gmail.com</p>
                    </div>
                    <div className="">
                        <h1>Welcome to synaps ui</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores modi at expedita cumque quos enim explicabo, veritatis sequi velit eaque placeat ipsum mollitia, atque minima labore, et optio accusantium nostrum.</p>
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

export default Hero3;
