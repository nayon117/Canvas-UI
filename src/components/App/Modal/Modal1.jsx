import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Modal1 = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage modal open/close

    const handleOpenModal = () => {
      setIsOpen(true); // Open the modal
    };
  
    const handleCloseModal = () => {
      setIsOpen(false); // Close the modal
    };
    const handleSaveChanges = () => {
        // Your logic to save changes goes here
        // For now, let's just close the modal
        handleCloseModal(); // Close the modal
      };
  return (
    <CodeBox stringCode={`const Modal1 = () => {
        const [isOpen, setIsOpen] = useState(false); // State to manage modal open/close
    
        const handleOpenModal = () => {
          setIsOpen(true); // Open the modal
        };
      
        const handleCloseModal = () => {
          setIsOpen(false); // Close the modal
        };
        const handleSaveChanges = () => {
            // Your logic to save changes goes here
            // For now, let's just close the modal
            handleCloseModal(); // Close the modal
          };
      return (
         <div>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-800 text-white hover:bg-green-900 disabled:opacity-50 disabled:pointer-events-none"
            onClick={handleOpenModal} // Call handleOpenModal on button click
          >
            Open modal
          </button>
    
          {isOpen && ( // Render the modal only if isOpen is true
            <div className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto bg-white border shadow-sm rounded-xl">
                <div className="flex justify-between items-center py-3 px-4 border-b">
                  <h3 className="font-bold text-gray-800">Modal title</h3>
                  <button
                    type="button"
                    className="text-gray-800 hover:bg-gray-100 rounded-full p-2"
                    onClick={handleCloseModal} // Call handleCloseModal on button click
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-gray-800">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
                <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                    onClick={handleCloseModal} // Call handleCloseModal on button click
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                    onClick={handleSaveChanges} // Call handleSaveChanges on button click
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div> 
      );
    };`}>
     <div>
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-800 text-white hover:bg-green-900 disabled:opacity-50 disabled:pointer-events-none"
        onClick={handleOpenModal} // Call handleOpenModal on button click
      >
        Open modal
      </button>

      {isOpen && ( // Render the modal only if isOpen is true
        <div className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto bg-white border shadow-sm rounded-xl">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3 className="font-bold text-gray-800">Modal title</h3>
              <button
                type="button"
                className="text-gray-800 hover:bg-gray-100 rounded-full p-2"
                onClick={handleCloseModal} // Call handleCloseModal on button click
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-800">
                This is a wider card with supporting text below as a natural lead-in to additional content.
              </p>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                onClick={handleCloseModal} // Call handleCloseModal on button click
              >
                Close
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                onClick={handleSaveChanges} // Call handleSaveChanges on button click
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
export default Modal1;
