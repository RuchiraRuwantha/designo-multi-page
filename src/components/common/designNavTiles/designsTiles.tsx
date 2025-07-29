import { useLocation, useNavigate } from "react-router-dom";
import { designsPaths } from "../../../utils/constants";
import { ViewText } from "./ViewText";

const DesignsTiles = () => {

    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname === '/');

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 overflow-hidden sm:px-0 px-5">
            {
                location.pathname !== designsPaths.webDesign ?
                    <div
                        className={`relative overflow-hidden w-full group sm:h-[200px] h-[250px] lg:h-full flex justify-center items-center cursor-pointer rounded-2xl`}
                        style={{ gridRow: location.pathname === '/' ? 'span 2' : 'span 1' }}
                        onClick={() => navigate("/webdesign")}
                    >
                        <div className="absolute inset-0 bg-[url(/images/webdesign.png)] bg-no-repeat bg-cover lg:bg-center sm:bg-bottom-left bg-[0%_125%] sm:scale-100 scale-150 transition-transform duration-300 group-hover:scale-105 group overflow-hidden rounded-2xl" />
                        <ViewText title="WEB DESIGN" />
                        <div className="absolute inset-0 bg-[#E7816B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-2xl"></div>
                    </div> : null
            }
            {
                location.pathname !== designsPaths.appDesign ?
                    <div className="relative overflow-hidden w-full group sm:h-[200px] h-[250px] lg:h-[308px] flex justify-center items-center cursor-pointer rounded-2xl" onClick={() => navigate("/appdesign")}>
                        <div className="absolute inset-0 bg-[url(/images/appdesign.png)] bg-no-repeat bg-cover sm:bg-left bg-right sm:scale-100 scale-120 transition-transform duration-300 group-hover:scale-105 group overflow-hidden rounded-2xl" />
                        <ViewText title="APP DESIGN" />
                        <div className="absolute inset-0 bg-[#E7816B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-2xl"></div>
                    </div> : null
            }
            {
                location.pathname !== designsPaths.graphicDesign ?
                    <div className="relative overflow-hidden w-full group sm:h-[200px] h-[250px] lg:h-[308px] flex justify-center items-center cursor-pointer rounded-2xl" onClick={() => navigate("/graphic")}>
                        <div className="absolute inset-0 bg-[url(/images/graphicdesign.png)] w-full h-full bg-no-repeat bg-cover lg:bg-center sm:bg-bottom-left bg-top sm:scale-100 scale-120 transition-transform duration-300 group-hover:scale-105 group overflow-hidden rounded-2xl" />
                        <ViewText title="GRAPHIC DESIGN" />
                        <div className="absolute inset-0 bg-[#E7816B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-2xl"></div>
                    </div> : null
            }
        </div >
    );
}

export default DesignsTiles;