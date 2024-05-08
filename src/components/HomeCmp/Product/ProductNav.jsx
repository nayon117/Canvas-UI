import { NavLink } from "react-router-dom";
import { SiSecurityscorecard } from "react-icons/si";
import { MdArrowForwardIos } from "react-icons/md";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { LuLayoutTemplate } from "react-icons/lu";
import { FaUikit } from "react-icons/fa";

const ProductNav = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-1">
          <div className="hover:border p-2">
          <NavLink to="core" className=" " activeClassName="active-link ">
                <div className="flex items-center gap-4 my-2 ">
                    <div><SiSecurityscorecard /></div>
                    <div>
                        <h1>EX-UI Core</h1>
                        <p className="text-sm font-light">Foundational components for fastest building website with EliteX-UI</p>
                    </div>
                </div>
            </NavLink>
            <a href="" className="flex items-center gap-2 ml-8 hover:gap-3">learn more <MdArrowForwardIos /></a>
          </div>

            <div className="hover:border p-2">
                <NavLink to="advance" className="" activeClassName="active-link">
                    <div className="flex items-center gap-4 my-2  ">
                        <div><GiLevelFourAdvanced /></div>
                        <div>
                            <h1>EX-UI Core</h1>
                            <p className="text-sm font-light">Foundational components for fastest building website with EliteX-UI</p>
                        </div>
                    </div>
                </NavLink>
                <a
                    href=""
                    className="flex items-center gap-2 ml-8 hover:gap-3">
                    learn more
                    <MdArrowForwardIos />
                </a>
            </div>

            <div className=" hover:border p-2">
                <NavLink to="template" activeClassName="active-link">
                    <div className="flex items-center gap-4 my-2 ">
                        <div><LuLayoutTemplate /></div>
                        <div>
                            <h1>EX-UI Core</h1>
                            <p className="text-sm font-light">Foundational components for fastest building website with EliteX-UI</p>

                        </div>
                    </div>
                </NavLink>
                <a href="" className="flex items-center gap-2 ml-8 hover:gap-3">learn more <MdArrowForwardIos /></a>
            </div>

            <div className="hover:border p-2">
                <NavLink
                    to="kit"
                    activeClassName="active-link">
                    <div
                        className="flex items-center gap-4 my-2 ">
                        <div>
                            <FaUikit />
                        </div>
                        <div>
                            <h1>
                                EX-UI Core
                            </h1>
                            <p
                                className="text-sm font-light">
                                Foundational components for fastest building website with EliteX-UI
                            </p>
                            {/* Ensure the 'href' attribute points to a valid URL */}

                        </div>
                    </div>
                </NavLink>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 ml-8 hover:gap-3">
                    learn more
                    <MdArrowForwardIos />
                </a>
            </div>

        </div>
    );
};

export default ProductNav;
