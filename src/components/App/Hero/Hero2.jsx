import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Hero2 = () => {
    return (
     <CodeBox stringCode={`  <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(https://i.ibb.co/QjPBymx/a-red-orange-column-of-smoke-in-darkness.jpg)' }}>
     <div className="absolute inset-0 bg-black opacity-60"></div>
     <div className="absolute inset-0 flex justify-center items-center text-center text-white">
         <div className="max-w-md px-4">
             <h1 className="mb-5 text-5xl font-bold text-shadow">Hello there</h1>
             <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
             <button className="bg-white text-black py-2 px-4 rounded-md shadow-md">Get Started</button>
         </div>
     </div>
 </div>S`}>
           <div>
            <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(https://i.ibb.co/QjPBymx/a-red-orange-column-of-smoke-in-darkness.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute inset-0 flex justify-center items-center text-center text-white">
                    <div className="max-w-md px-4">
                        <h1 className="mb-5 text-5xl font-bold text-shadow">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="bg-white text-black py-2 px-4 rounded-md shadow-md">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
     </CodeBox>
    );
};

export default Hero2;
