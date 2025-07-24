import type React from "react";
import { useNavigate } from "react-router-dom";

const DesignsTiles = () => {

    const navigate = useNavigate();
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 overflow-hidden sm:px-0 px-5">
            <div className="relative overflow-hidden w-full group sm:h-[200px] h-[250px] lg:h-full lg:row-span-2 flex justify-center items-center cursor-pointer rounded-2xl" onClick={() => navigate("/webdesign")}>
                <div className="absolute inset-0 bg-[url(/images/webdesign.png)] bg-no-repeat bg-cover lg:bg-center sm:bg-bottom-left bg-[0%_125%] sm:scale-100 scale-150 transition-transform duration-300 group-hover:scale-105 group overflow-hidden rounded-2xl" />
                <ViewText title="WEB DESIGN" />
                <div className="absolute inset-0 bg-[#E7816B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-2xl"></div>
            </div>
            <div className="relative overflow-hidden w-full group sm:h-[200px] h-[250px] lg:h-[308px] flex justify-center items-center cursor-pointer rounded-2xl" onClick={() => navigate("/appdesign")}>
                <div className="absolute inset-0 bg-[url(/images/appdesign.png)] bg-no-repeat bg-cover sm:bg-left bg-right sm:scale-100 scale-120 transition-transform duration-300 group-hover:scale-105 group overflow-hidden rounded-2xl" />
                <ViewText title="APP DESIGN" />
                <div className="absolute inset-0 bg-[#E7816B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-2xl"></div>
            </div>
            <div className="relative overflow-hidden w-full group sm:h-[200px] h-[250px] lg:h-[308px] flex justify-center items-center cursor-pointer rounded-2xl" onClick={() => navigate("/graphic")}>
                <div className="absolute inset-0 bg-[url(/images/graphicdesign.png)] w-full h-full bg-no-repeat bg-cover lg:bg-center sm:bg-bottom-left bg-top sm:scale-100 scale-120 transition-transform duration-300 group-hover:scale-105 group overflow-hidden rounded-2xl" />
                <ViewText title="GRAPHIC DESIGN" />
                <div className="absolute inset-0 bg-[#E7816B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-2xl"></div>
            </div>
        </div>
    );
}

export default DesignsTiles;

type ViewTextProps = {
    title: string
}
export const ViewText: React.FC<ViewTextProps> = ({ title }) => {
    return (
        <div className="absolute md:text-[40px]/[48px] tracking-wide font-medium text-2xl text-[#FFFF] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span>{title}</span>
            <div className="text-[12px] leading-(auto) tracking-[5px] flex justify-center items-center w-full">
                VIEW PROJECTS
                <svg className="w-1 h-2 text-[#E7816B] dark:text-white ml-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
            </div>
        </div>
    );
}