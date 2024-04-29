import CodeBox from "../../../Shared/CodeBox/CodeBox";
import { FcApproval } from "react-icons/fc";

const Form7 = () => {
  return (
    <CodeBox stringCode={`<div className="w-72 h-96 flex flex-col items-center justify-center bg-white rounded-lg shadow-md transition duration-400 ease-in-out hover:shadow-sm">
    <p className="text-center text-black font-bold mb-6">Verify</p>

    <FcApproval className="w-10 h-10 mb-6" />

    <div className="flex items-center justify-center">
      <input
        className="w-12 h-12 mx-1 bg-gray-200 rounded-lg outline-none text-center"
        type="password"
        maxLength="1"
      />
      <input
        className="w-12 h-12 mx-1 bg-gray-200 rounded-lg outline-none text-center"
        type="password"
        maxLength="1"
      />
      <input
        className="w-12 h-12 mx-1 bg-gray-200 rounded-lg outline-none text-center"
        type="password"
        maxLength="1"
      />
      <input
        className="w-12 h-12 mx-1 bg-gray-200 rounded-lg outline-none text-center"
        type="password"
        maxLength="1"
      />
    </div>
    <button className="mt-8 w-48 h-12 bg-gray-200 rounded-lg shadow-md outline-none transition duration-400 ease-in-out hover:shadow-sm hover:bg-gray-300">
      Submit
    </button>
    <button className="mt-2 w-48 h-12 bg-gray-200 rounded-lg shadow-md outline-none transition duration-400 ease-in-out hover:shadow-sm hover:bg-gray-300">
      Back
    </button>
  </div>`} text={`verify from`} >
      <div className="flex justify-center">
      <div className="w-72 h-96 flex flex-col items-center justify-center bg-white rounded-lg shadow-md transition duration-400 ease-in-out hover:shadow-sm">
        <p className="text-center text-black font-bold mb-6">Verify</p>

        <FcApproval className="w-10 h-10 mb-6" />

        <div className="flex items-center justify-center">
          <input
            className="w-12 h-12 mx-1 bg-gray-200 rounded-lg outline-none text-center"
            type="password"
            maxLength="1"
          />
          <input
            className="w-12 h-12 mx-1 bg-gray-200 rounded-lg outline-none text-center"
            type="password"
            maxLength="1"
          />
          <input
            className="w-12 h-12 mx-1 bg-gray-200 rounded-lg outline-none text-center"
            type="password"
            maxLength="1"
          />
          <input
            className="w-12 h-12 mx-1 bg-gray-200 rounded-lg outline-none text-center"
            type="password"
            maxLength="1"
          />
        </div>
        <button className="mt-8 w-48 h-12 bg-gray-200 rounded-lg shadow-md outline-none transition duration-400 ease-in-out hover:shadow-sm hover:bg-gray-300">
          Submit
        </button>
        <button className="mt-2 w-48 h-12 bg-gray-200 rounded-lg shadow-md outline-none transition duration-400 ease-in-out hover:shadow-sm hover:bg-gray-300">
          Back
        </button>
      </div>
      </div>
    </CodeBox>
  );
};
export default Form7;
