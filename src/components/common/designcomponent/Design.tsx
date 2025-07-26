import type React from "react";

type DesignComponentProps = {
    title: string,
    desc: React.ReactNode
}

const DesignComponent: React.FC<DesignComponentProps> = ({ title, desc }) => {
    return (
        <div className="bg-[url(images/design_bg.png)] w-full h-[252px] bg-no-repeat bg-cover sm:bg-center rounded-2xl">
            <div className="py-16 px-48 flex flex-col h-full justify-between">
                <div className="text-5xl/[48px] tracking-normal flex justify-center items-center w-full">
                    {title}
                </div>
                <div className="text-base/[26px] tracking-normal flex justify-center items-center w-full text-center">
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default DesignComponent;