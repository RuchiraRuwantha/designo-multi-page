import type React from "react";
import passionate from "../../../assets/images/PASSIONATE.svg";
import resourceful from "../../../assets/images/RESOURCEFUL.svg";
import friendly from "../../../assets/images/FRIENDLY.svg";

const QualitiesTiles = () => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 mb-8 gap-14">
            <QualityTile
                image={passionate}
                title="PASSIONATE"
                desc="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
            />
            <QualityTile
                image={resourceful}
                title="RESOURCEFUL"
                desc="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
            />
            <QualityTile
                image={friendly}
                title="FRIENDLY"
                desc=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
            />
        </div>
    );
}

export default QualitiesTiles;

type QualityTileProps = {
    image: string
    title: string;
    desc: string;
}

export const QualityTile: React.FC<QualityTileProps> = ({
    image,
    desc,
    title
}) => {
    return (
        <div className="lg:block grid sm:grid-cols-3 grid-cols-1 justify-items-center">
            <img src={image} />
            <div className="col-span-2 lg:block">
                <div className="text-[20px]/[26px] tracking-[5px] font-medium text-[#333136] flex lg:justify-center sm:justify-start justify-center items-center lg:mt-11 mt-8">
                    {title}
                </div>
                <div className="text-[16px]/[26px] tracking-[0px] font-normal text-[#333136] flex lg:justify-center sm:justify-start justify-center items-center lg:text-center sm:text-left text-center lg:mt-8 mt-5 sm:px-0 px-8">
                    {desc}
                </div>
            </div>
        </div>
    );
}