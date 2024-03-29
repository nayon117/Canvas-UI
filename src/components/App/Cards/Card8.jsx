import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Card8 = () => {
  return (
    <CodeBox stringCode={` <div className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-6 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
    <h3 className="text-xl font-bold text-[#333]">Newsletter</h3>
    <p className="mt-4 text-sm text-gray-500">
      Subscribe to our newsletter to receive the latest updates and news.
    </p>
    <div className="relative flex items-center px-1 bg-gray-50 border-2 focus-within:border-[#007bff] focus-within:bg-white rounded mt-6">
      <input
        type="email"
        placeholder="Enter email"
        className="px-2 py-3 text-black w-full text-sm bg-transparent outline-none"
      />
      <button
        type="button"
        className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
      >
        Send
      </button>
    </div>
  </div>`} text={`Newsletter Card`}>
      <div className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-6 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <h3 className="text-xl font-bold text-[#333]">Newsletter</h3>
        <p className="mt-4 text-sm text-gray-500">
          Subscribe to our newsletter to receive the latest updates and news.
        </p>
        <div className="relative flex items-center px-1 bg-gray-50 border-2 focus-within:border-[#007bff] focus-within:bg-white rounded mt-6">
          <input
            type="email"
            placeholder="Enter email"
            className="px-2 py-3 text-black w-full text-sm bg-transparent outline-none"
          />
          <button
            type="button"
            className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </CodeBox>
  );
};
export default Card8;
