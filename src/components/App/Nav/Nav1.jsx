import  { useState } from "react";
import { Link } from "react-router-dom";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Nav1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = ['login', 'register', 'profile'];
  const menuNames = ['Login', 'Register', 'Your Profile'];

  return (
    <CodeBox text={"Without Responsive"} stringCode={`
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const links = ['login', 'register', 'profile'];
    const menuNames = ['Login', 'Register', 'Your Profile'];

    return (
        <div className="flex justify-evenly">
            {/* logo part */}
            <div>
                <h1>Logo</h1>
            </div>
            {/* item section  */}
            <div className="flex flex-col lg:flex-row lg:gap-4">
                {links.map((link, index) => (
                    <div key={link}>
                        <Link to={\`/\${link}\`}>{menuNames[index]}</Link>
                    </div>
                ))}
            </div>
            {/* Profile button  */}
            <div className="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={toggleMenu}
                    >
                        Options
                        {/* Dropdown arrow */}
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                {/* Dropdown menu */}
                {isOpen && (
                    <div
                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <div className="py-1" role="none">
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                Option 1
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                Option 2
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                Option 3
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Nav;
`}>
      <div className="flex justify-evenly">
        {/* logo part */}
        <div>
          <h1>Logo</h1>
        </div>
        {/* item section  */}
        <div className="flex flex-col lg:flex-row lg:gap-4">
          {links.map((link, index) => (
            <div key={link}>
              <Link to={`/${link}`}>{menuNames[index]}</Link>
            </div>
          ))}
        </div>
        {/* Profile button  */}
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={toggleMenu}
            >
              Options
              {/* Dropdown arrow */}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown menu */}
          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Option 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Option 3
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </CodeBox>
  );
};

export default Nav1;
