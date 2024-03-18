import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Badge6 = () => {
  return (
    <CodeBox stringCode={`<div className="flex space-x-2 items-center justify-center w-full my-5">
    <div className="inline-flex items-center justify-between space-x-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-sm">
      <svg
        onClick={() => document.getElementById("cat").remove()}
        className="cursor-pointer h-4 w-4 text-green-900"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div id="cat" className="select-none">
        Cat
      </div>
    </div>

    <div className="inline-flex items-center justify-between space-x-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-sm">
      <svg
        onClick={() => document.getElementById("dog").remove()}
        className="cursor-pointer h-4 w-4 text-green-900"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div id="dog" className="select-none">
        Dog
      </div>
    </div>

    <div className="inline-flex items-center justify-between space-x-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-sm">
      <svg
        onClick={() => document.getElementById("snake").remove()}
        className="cursor-pointer h-4 w-4 text-green-900"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div id="snake" className="select-none">
        Snake
      </div>
    </div>

    <div className="inline-flex items-center justify-between space-x-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-sm">
      <svg
        onClick={() => document.getElementById("eagle").remove()}
        className="cursor-pointer h-4 w-4 text-green-900"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div id="eagle" className="select-none">
        Eagle
      </div>
    </div>
  </div>`} text={`Tags List`}>
      <div className="flex space-x-2 items-center justify-center w-full my-5">
        <div className="inline-flex items-center justify-between space-x-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-sm">
          <svg
            onClick={() => document.getElementById("cat").remove()}
            className="cursor-pointer h-4 w-4 text-green-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div id="cat" className="select-none">
            Cat
          </div>
        </div>

        <div className="inline-flex items-center justify-between space-x-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-sm">
          <svg
            onClick={() => document.getElementById("dog").remove()}
            className="cursor-pointer h-4 w-4 text-green-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div id="dog" className="select-none">
            Dog
          </div>
        </div>

        <div className="inline-flex items-center justify-between space-x-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-sm">
          <svg
            onClick={() => document.getElementById("snake").remove()}
            className="cursor-pointer h-4 w-4 text-green-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div id="snake" className="select-none">
            Snake
          </div>
        </div>

        <div className="inline-flex items-center justify-between space-x-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-sm">
          <svg
            onClick={() => document.getElementById("eagle").remove()}
            className="cursor-pointer h-4 w-4 text-green-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div id="eagle" className="select-none">
            Eagle
          </div>
        </div>
      </div>
    </CodeBox>
  );
};
export default Badge6;
