import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Alert3 = () => {
  return (
    <CodeBox stringCode={`<div className="warning flex items-center justify-start bg-yellow-200 border border-yellow-400 rounded-lg shadow-md p-3"><div className="warning__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"> <path fill="#F7C752" d="m13 14h-2v-5h2zm0 4h-2v-2h2zm-12 3h22l-11-19z"></path></svg></div><div className="ml-2 font-semibold text-yellow-900">lorem ipsum dolor sit amet</div><div className="ml-auto cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20"><path fill="#755118" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path></svg></div></div>`}  text={`Warning Alert`}>
      <div className="warning flex items-center justify-start bg-yellow-200 border border-yellow-400 rounded-lg shadow-md p-3">
        <div className="warning__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            height="24"
            fill="none"
          >
            <path
              fill="#F7C752"
              d="m13 14h-2v-5h2zm0 4h-2v-2h2zm-12 3h22l-11-19z"
            ></path>
          </svg>
        </div>
        <div className="ml-2 font-semibold text-yellow-900">
          lorem ipsum dolor sit amet
        </div>
        <div className="ml-auto cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 20 20"
            height="20"
          >
            <path
              fill="#755118"
              d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
            ></path>
          </svg>
        </div>
      </div>
    </CodeBox>
  );
};
export default Alert3;
