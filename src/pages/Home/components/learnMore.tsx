import { useNavigate } from "react-router-dom";
import oval from "../../../assets/images/Oval.png"
import phone from "../../../assets/images/mobile_phone.png"
import phone2 from "../../../assets/images/mobile_phone_2.png"

const LearnMore = () => {

        const navigate = useNavigate();

    return (
        <div className="bg-[#E7816B] w-full sm:rounded-md relative overflow-hidden flex flex-col lg:flex-row justify-start sm:px-0 px-5 sm:pt-0 pt-16">
            <div className="absolute lg:top-0 lg:right-0 sm:top-1/12 sm:-right-1/12 top-1/6 -right-4/12">
                <img src={oval} alt="Oval" />
            </div>
            <div className="lg:max-w-5xl z-10 lg:pl-28 lg:py-32 sm:px-16 sm:py-10 text-center lg:text-left">
                <p className="sm:text-5xl/[48px] text-[32px]/[36px] tracking-normal text-[#FFFFFF] pb-10 font-medium">
                    Award-winning custom<br />
                    designs and digital<br />
                    branding solutions
                </p>
                <p className="text-[16px]/[26px] tracking-normal text-[#FFFFFF] font-thin lg:px-0 sm:px-16 px-3">
                    With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                </p>
                <button
                    className="inline-block bg-white text-black px-6 py-4 my-8 rounded-md font-medium text-[15px] leading-(auto) tracking-wide shadow transition hover:text-white hover:bg-[#FFAD9B]"
                    onClick={()=>navigate('/about')}
                >
                    LEARN MORE
                </button>
            </div>
            <div className="flex justify-center">
                <div className="relative overflow-hidden lg:block flex justify-center">
                    <img src={phone} alt="Phone Mockup" className="lg:block hidden w-full h-full object-cover lg:pl-0 pl-10 rounded-[2rem]" />
                    <img src={phone2} alt="Phone Mockup" className="lg:hidden w-1/2 h-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export default LearnMore;