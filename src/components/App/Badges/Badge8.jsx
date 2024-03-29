import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Badge8 = () => {
  return (
    <CodeBox stringCode={`<span className="bg-blue-600 px-2 py-1 text-xs text-white rounded">Badge</span>
<span className="bg-purple-600 px-2 py-1 text-xs text-white rounded">Badge</span>
<div className="relative"><span className="bg-orange-500 px-2 py-1 text-xs text-white rounded">Badge</span><span className="bg-green-500 px-1 py-0.5 text-[10px] text-white rounded absolute -top-3">New</span></div>`} text={`Badge`}> 
      <div className="font-[sans-serif] space-x-6 flex justify-center mt-4">
        <span className="bg-blue-600 px-2 py-1 text-xs text-white rounded">
          Badge
        </span>
        <span className="bg-purple-600 px-2 py-1 text-xs text-white rounded">
          Badge
        </span>
        <div className="relative">
          <span className="bg-orange-500 px-2 py-1 text-xs text-white rounded">
            Badge
          </span>
          <span className="bg-green-500 px-1 py-0.5 text-[10px] text-white rounded absolute -top-3">
            New
          </span>
        </div>
      </div>
    </CodeBox>
  );
};
export default Badge8;
