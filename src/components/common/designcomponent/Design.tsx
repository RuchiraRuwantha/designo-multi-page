import type React from "react";

type DesignComponentProps = {
    title: string,
    desc: React.ReactNode
}

const DesignComponent: React.FC<DesignComponentProps> = ({ title, desc }) => {
    return (
        <div className="sm:bg-[url(/images/design_bg.png)] bg-[url(/images/design_mobile_bg.svg)] w-full h-[252px] bg-no-repeat bg-cover sm:bg-center sm:rounded-2xl">
            <div className="py-16 lg:px-72 sm:px-24 px-4 flex flex-col h-full w-full lg:justify-around justify-between">
                <div className="sm:text-5xl/[48px] text-[32px]/[36px] tracking-normal flex justify-center items-center w-full">
                    {title}
                </div>
                <div className="sm:text-base/[26px] text-[15px]/[25px] tracking-normal flex justify-center items-center w-full text-center">
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default DesignComponent;