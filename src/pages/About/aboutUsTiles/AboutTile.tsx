import type { JSX } from "react";
import type React from "react";

type AboutTileProps = {
    bgImage: string;
    flexReverse?: boolean;
    title: string;
    desc: JSX.Element;
    imageURL: string;
    fontStyleDark?: boolean;
}

const AboutTile: React.FC<AboutTileProps> = ({
    bgImage,
    desc,
    imageURL,
    title,
    flexReverse = false,
    fontStyleDark = false
}) => {

    return (
        <div className={`bg-no-repeat bg-cover flex lg:flex-row flex-col-reverse ${flexReverse ? 'lg:flex-row-reverse' : ''} sm:rounded-2xl`} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="flex flex-3/5 flex-col justify-center lg:gap-12 gap-6 text-left 2xl:py-[135px] lg:py-[75px] sm:pt-[68px] sm:pb-[94px] lg:px-24 sm:px-[58px] px-6 py-20">
                <div className={`sm:text-5xl/[48px] text-[32px]/[36px] tracking-normal flex lg:justify-start justify-center items-center w-full ${fontStyleDark ? 'peach-font sm:text-[40px]/[48px]' : ''}`}>
                    {title}
                </div>
                <div className={`sm:text-base/[26px] text-base/[26px] tracking-normal lg:text-left text-center ${fontStyleDark ? 'black-font' : ''}`}>
                    {desc}
                </div>
            </div>
            <div className="flex-2/5">
                <img src={imageURL} className="w-full h-full" />
            </div>
        </div>
    )
}

export default AboutTile