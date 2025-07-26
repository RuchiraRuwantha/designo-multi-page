import background from "../../../../assets/images/get_in_touch_bg.png";
import background2 from "../../../../assets/images/get_in_touch_bg_2.png";
import background3 from "../../../../assets/images/get_in_touch_bg_3.png";

const GetInTouch = () => {
    return (
        <div className="relative mt-12 h-full">
            <img src={background} className="w-full hidden lg:block" />
            <img src={background2} className="w-full lg:hidden sm:block hidden" />
            <img src={background3} className="w-full sm:hidden" />
            <div className="absolute inset-0 flex flex-col justify-between items-center lg:grid lg:grid-cols-2 lg:pt-18 sm:px-24 lg:pb-[46px] sm:py-16 px-4 py-12">
                <div className="flex flex-col justify-center sm:gap-8 gap-4 text-[#FFFFFF]">
                    <div className="sm:text-[40px] text-[32px]/[36px] sm:leading-[40px] tracking-normal font-medium flex items-center text-center">
                        Let’s talk about your project
                    </div>
                    <div className="sm:text-base text-[15px] sm:leading-[26px] tracking-normal font-normal flex justify-center items-center lg:text-left text-center">
                        Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <button className="rounded-[8px] text-[#333136] bg-white md:text-[15px] leading-[auto] tracking-wide font-normal transition hover:text-white hover:bg-[#FFAD9B] p-4 cursor-pointer">
                        GET IN TOUCH
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;