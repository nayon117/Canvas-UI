/* eslint-disable no-unused-vars */
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCode } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { FaCopy } from 'react-icons/fa';
// import { FaMobileAlt } from "react-icons/fa";
// import { IoIosTabletLandscape } from "react-icons/io";
// import { IoMdLaptop } from "react-icons/io";
// import { FiMonitor } from "react-icons/fi";
import JSXCode from "../JSXCode/JSXCode";
import Preview from "../PreviewBox/Preview";

// const devices = [
//   { label: "xs", value: "sm:max-w-xs mx-auto ", icon: <FaMobileAlt /> },
//   { label: "sm", value: "sm:max-w-sm mx-auto ", icon: <FaMobileAlt /> },
//   { label: "md", value: "md:max-w-md mx-auto", icon: <IoIosTabletLandscape /> },
//   { label: "lg", value: "lg:max-w-lg mx-auto", icon: <IoMdLaptop /> },
//   { label: "xl", value: "w-full mx-auto", icon: <FiMonitor /> },
// ];

const CodeBox = ({ children, stringCode, text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isCodeBoxOpen, setIsCodeBoxOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState("w-full h-full");
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  // console.log(selectedDevice);

  return (
    <>
      <div className={`w-full rounded-md h-fit  px-4 py-2 `}>
        <div className={`w-full rounded-md h-fit  px-4 py-1 my-10 `}>
          <h2 className=" text-xl font-semibold mb-3">{text}</h2>

          <div className="flex gap-2 items-center sm:justify-between justify-end rounded-t-lg   shadow-lg bg-transparent py-2">
            <div>

            </div>
            {/* <div className="hidden sm:flex items-center gap-x-5 text-black text-lg ml-2">
              {devices.map((device, i) => (
                <button
                  key={i}
                  className="flex flex-col items-center"
                  onClick={() => setSelectedDevice(device.value)}
                >
                  <span
                    className={`${device.label === "sm" && "text-sm"} ${
                      device.label === "md" && "text-xl"
                    } ${device.label === "lg" && "text-2xl"} ${
                      device.label === "xl" && "text-3xl"
                    }`}
                  >
                    {device.icon}
                  </span>
                  <h1>{device.label}</h1>
                </button>
              ))}
            </div> */}
            <div className="flex items-center">
              <div className="flex ">
                {isCodeBoxOpen ? (
                  <div className=" ">
                    <button
                      onClick={() => setIsCodeBoxOpen(!isCodeBoxOpen)}
                      className="flex  items-center py-1 px-3 rounded-md transition-all duration-300 "
                    >
                      <IoMdEye
                        className="text-xl   cursor-pointer"
                        onClick={() => setIsCodeBoxOpen(!isCodeBoxOpen)}
                      />
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => setIsCodeBoxOpen(!isCodeBoxOpen)}
                      className="flex  items-center py-1 px-2 rounded-md transition-all duration-300"
                    >
                      <FaCode
                        className="text-xl   cursor-pointer ml-2"
                        onClick={() => setIsCodeBoxOpen(!isCodeBoxOpen)}
                      />
                    </button>
                  </div>
                )}
              </div>
              <CopyToClipboard text={stringCode} onCopy={handleCopy}>
                <button className="copy-button px-3 ">
                  {isCopied ? (
                    <div className="flex items-center   px-3  py-2 rounded-md">
                      <IoCheckmarkDoneSharp size={15}  />
                    </div>
                  ) : (
                    <div className="flex items-center  gap-x-2">
                      <div className="   py-2 px-3 rounded-md  ">
                        <FaCopy  />
                      </div>
                    </div>
                  )}
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <div
            className={`
                px-0  h-full overflow-x-auto
                flex justify-center"
            border-r border-b border-l  border-gray-400 rounded-b-lg w-full mx-auto`}
          >
            {isCodeBoxOpen ? (
              <div className="w-full py-0">
                <JSXCode stringCode={stringCode}></JSXCode>
              </div>
            ) : (
              <div className={`${selectedDevice} mx-auto`}>
                <Preview>{children}</Preview>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeBox;
