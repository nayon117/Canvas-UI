import logo from "../../assets/logo.png";

const PageLogo = () => {
    return (
        <div className="flex items-center">
            <img className="w-14" src={logo} alt="EliteX UI" />
            <h2 className="text-xl font-bold ">EliteX UI</h2>
        </div>
    );
};

export default PageLogo;