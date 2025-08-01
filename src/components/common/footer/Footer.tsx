import facebook from "../../../assets/images/facebook.svg";
import twitter from "../../../assets/images/twitter.svg";
import pinterest from "../../../assets/images/pinterest.svg";
import youtube from "../../../assets/images/youtube.svg";
import instagram from "../../../assets/images/instagram.svg";
import FooterNav from "./components/FooterNav";
import { useLocation } from "react-router-dom";
import GetInTouch from "./components/GetInTouchComponent";

const Footer = () => {

    const location = useLocation();

    return (
        <div className="pt-40 pb-[70px] lg:px-64 px-12 bg-[#1D1C1E] relative" style={{ paddingTop: location.pathname === '/contact' ? '60px' : '' }}>
            {
                location.pathname !== '/contact' ?
                    <div className="absolute lg:bottom-3/4 bottom-5/6 left-0 w-full pt-16 lg:px-64 px-12 pb-2">
                        <GetInTouch />
                    </div> : null
            }
            <FooterNav />
            <div className="grid sm:grid-cols-3 grid-cols-1 sm:justify-items-start justify-items-center sm:gap-0 gap-8 pt-4 sm:pt-0">
                <div className="md:text-base leading-[26px] tracking-[0px] flex flex-col sm:items-start items-center text-[#F1F3F5] font-light opacity-60 sm:text-left text-center">
                    <span className="font-bold">Designo Central Office</span>
                    3886 Wellington Street<br />
                    Toronto, Ontario M9C 3J5
                </div>
                <div className="md:text-base leading-[26px] tracking-[0px] flex flex-col sm:items-start items-center text-[#F1F3F5] font-light opacity-60 sm:text-left text-center">
                    <span className="font-bold">Contact Us (Central Office)</span>
                    P : +1 253-863-8967 <br />
                    M : contact@designo.co
                </div>
                <div className="flex justify-end sm:items-end gap-4 sm:w-full">
                    <img src={facebook} width={24} height={24} />
                    <img src={youtube} width={24} height={24} />
                    <img src={twitter} width={24} height={24} />
                    <img src={pinterest} width={24} height={24} />
                    <img src={instagram} width={24} height={24} />
                </div>
            </div>
        </div>
    );
}

export default Footer;