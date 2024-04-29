import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Hero1 = () => {
    return (
        <CodeBox stringCode={` <div className="flex justify-between text-center ">
        <div className="w-1/2 flex justify-center items-center">
            <img className="h-96" src="https://i.ibb.co/pn48FQv/4e71ddea-67fb-4d12-b6a3-85e3b4c6424c.png" alt="" />
        </div>
        <div className="w-1/2 flex justify-center items-center text-black" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)' }}>
            <div className="p-4 space-y-5">
               
                <h1 className="text-4xl">Box Office News!</h1>
                <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="text-sm  bg-white border border-black text-black px-4 py-2">
                    button 
                </button>
            </div>
        </div>
    </div>`}>
            <div className="flex justify-between text-center ">
                <div className="w-1/2 flex justify-center items-center">
                    <img className="h-96" src="https://i.ibb.co/pn48FQv/4e71ddea-67fb-4d12-b6a3-85e3b4c6424c.png" alt="" />
                </div>
                <div className="w-1/2 flex justify-center items-center text-black" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)' }}>
                    <div className="p-4 space-y-5">
                       
                        <h1 className="text-4xl">Box Office News!</h1>
                        <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="text-sm  bg-white border border-black text-black px-4 py-2">
                            button 
                        </button>
                    </div>
                </div>
            </div>


        </CodeBox>
    );
};

export default Hero1;
