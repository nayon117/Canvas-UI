import { useState } from "react"; // Import useState hook
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Modal2 = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage modal open/close

  const handleOpenModal = () => {
    setIsOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsOpen(false); // Close the modal
  };

  console.log("isOpen:", isOpen); // Log the isOpen state

  return (
    <CodeBox
      stringCode={`const Modal2 = () => {
        const [isOpen, setIsOpen] = useState(false); // State to manage modal open/close
      
        const handleOpenModal = () => {
          setIsOpen(true); // Open the modal
        };
      
        const handleCloseModal = () => {
          setIsOpen(false); // Close the modal
        };
      
        console.log("isOpen:", isOpen); // Log the isOpen state
      
        return (
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-800 text-white hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none"
              onClick={handleOpenModal} // Call handleOpenModal on button click
            >
              Open modal
            </button>
      
            {isOpen && ( // Render the modal only if isOpen is true
              <div className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
                {/* Modal content */}
                <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  {/* Modal header */}
                  <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                      Modal title
                    </h3>
                    <button
                      type="button"
                      className="hs-dropup-toggle flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                      onClick={handleCloseModal} // Call handleCloseModal on button click
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </button>
                  </div>
                  {/* Modal body */}
                  <div className="p-4 overflow-y-auto">
                    <p className="mt-1 text-gray-800 dark:text-neutral-400">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content.
                    </p>
                  </div>
                  {/* Modal footer */}
                  <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                    <button
                      type="button"
                      className="hs-dropup-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                      onClick={handleCloseModal} // Call handleCloseModal on button click
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-800 text-white hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            )}
        );
      }`}
    >
      <div className="flex justify-center">
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-800 text-white hover:bg-green-900 disabled:opacity-50 disabled:pointer-events-none"
          onClick={handleOpenModal} // Call handleOpenModal on button click
        >
          Open modal
        </button>

        {isOpen && ( // Render the modal only if isOpen is true
          <div className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
            {/* Modal content */}
            <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
              {/* Modal header */}
              <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Modal title
                </h3>
                <button
                  type="button"
                  className="hs-dropup-toggle flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                  onClick={handleCloseModal} // Call handleCloseModal on button click
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 overflow-y-auto">
                <p className="mt-1 text-gray-800 dark:text-neutral-400">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
              {/* Modal footer */}
              <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                <button
                  type="button"
                  className="hs-dropup-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                  onClick={handleCloseModal} // Call handleCloseModal on button click
                >
                  Close
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-800 text-white hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </CodeBox>
  );
};

export default Modal2;
