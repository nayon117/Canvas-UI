import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner7 = () => {
  return (
    <CodeBox>
      <div className="flex justify-evenly">
        <div className="loader w-12 h-12 relative">
          <div className="absolute w-1/2 h-full border-4 border-solid border-blue-600 rounded-full animate-spin"></div>
          <div className="absolute w-1/2 h-full border-4 border-solid border-blue-600 rounded-full animate-spin reverse"></div>
        </div>
        <div className="flex flex-row gap-2">
          <div
            style={{ backgroundImage: 'conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%)' }}
            className="w-14 h-14 rounded-full bg-radial bg-gradient-to-tr animate-spin animation-delay-700ms"
          ></div>
        </div>
      </div>
    </CodeBox>
  );
};

export default Spinner7;
