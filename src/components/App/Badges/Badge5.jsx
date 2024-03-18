import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Badge5 = () => {
  return (
    <CodeBox stringCode={`<button
    type="button"
    className="font-[sans-serif] px-4 py-2 inline-flex items-center rounded text-white text-xl tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333] active:bg-black"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36px"
      fill="#fff"
      className="inline mr-2"
      viewBox="0 0 64 64"
    >
      <path fill="#57cef3" d="M7 3v58l33-29z" data-original="#57cef3" />
      <path
        fill="#fff200"
        d="m36 32 8-10 15 10-15 10z"
        data-original="#fff200"
      />
      <path
        fill="#48ff48"
        d="M36 32 7 3h4l34 20z"
        data-original="#48ff48"
      />
      <path
        fill="#ff6c58"
        d="M36 32 7 61h4l34-20z"
        data-original="#ff6c58"
      />
      <path
        fill="#f33"
        d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z"
        data-original="#ff3333"
      />
      <path
        fill="#0779e4"
        d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z"
        data-original="#0779e4"
      />
      <path
        fill="#314a52"
        d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
        data-original="#314a52"
      />
    </svg>
    <div>
      <p className="text-[10px] text-white leading-none text-left">
        Get It On
      </p>
      Google Play
    </div>
  </button>`} text={`Playstore Badge`}>
      <div className="flex items-center justify-center">
      <button
        type="button"
        className="font-[sans-serif] px-4 py-2 inline-flex items-center rounded text-white text-xl tracking-wider font-semibold border-none outline-none bg-black hover:bg-[#333] active:bg-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36px"
          fill="#fff"
          className="inline mr-2"
          viewBox="0 0 64 64"
        >
          <path fill="#57cef3" d="M7 3v58l33-29z" data-original="#57cef3" />
          <path
            fill="#fff200"
            d="m36 32 8-10 15 10-15 10z"
            data-original="#fff200"
          />
          <path
            fill="#48ff48"
            d="M36 32 7 3h4l34 20z"
            data-original="#48ff48"
          />
          <path
            fill="#ff6c58"
            d="M36 32 7 61h4l34-20z"
            data-original="#ff6c58"
          />
          <path
            fill="#f33"
            d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z"
            data-original="#ff3333"
          />
          <path
            fill="#0779e4"
            d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z"
            data-original="#0779e4"
          />
          <path
            fill="#314a52"
            d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
            data-original="#314a52"
          />
        </svg>
        <div>
          <p className="text-[10px] text-white leading-none text-left">
            Get It On
          </p>
          Google Play
        </div>
      </button>
      </div>
    </CodeBox>
  );
};
export default Badge5;
