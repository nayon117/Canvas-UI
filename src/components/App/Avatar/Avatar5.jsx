import CodeBox from "../../../Shared/CodeBox/CodeBox";
import { FaCamera } from "react-icons/fa6";

const Avatar5 = () => {
    return (
        <CodeBox
        text={`Avatar with icon`} stringCode={`
        {/* Avatar with svg icon  */}
        <div className="relative w-12 h-12">
              <img src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt="Avatar" className="w-full h-full rounded-full" />
              <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full text-white flex items-center justify-center w-6 h-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
              </div>
          </div>

          {/* avatar with react icon  */}

        <div className="relative w-16 h-16">
              <img src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt="Avatar" className="w-full h-full rounded-full" />
              <div className="absolute bottom-0 right-0 bg-black rounded-full text-white flex items-center justify-center w-6 h-6">
                  <FaCamera/>
              </div>
          </div>`}>
          <div className="flex justify-evenly">
            {/* Avatar with svg icon  */}
          <div className="relative w-12 h-12">
                <img src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt="Avatar" className="w-full h-full rounded-full" />
                <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full text-white flex items-center justify-center w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            {/* avatar with react icon  */}

          <div className="relative w-16 h-16">
                <img src="https://i.ibb.co/XXGgLLm/77a2642b-2e0b-481f-8e0c-6062e81791ed.jpg" alt="Avatar" className="w-full h-full rounded-full" />
                <div className="absolute bottom-0 right-0 bg-black rounded-full text-white flex items-center justify-center w-6 h-6">
                    <FaCamera/>
                </div>
            </div>
          </div>
        </CodeBox>
    );
};

export default Avatar5;
