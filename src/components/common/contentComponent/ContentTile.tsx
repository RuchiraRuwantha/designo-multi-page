import type { FC, JSX } from "react";

type ContentTileProps = {
    index: number,
    contentItem: {
        title: string;
        desc: JSX.Element;
        image: string;
        image_tablet: string;
    }
}
const ContentTile: FC<ContentTileProps> = ({ index, contentItem }) => {
    return (
        <div key={index} className="lg:flex lg:flex-col sm:grid sm:grid-cols-2 rounded-t-4xl rounded-b-2xl justify-between items-center gap-4 bg-[#FDF3F0] hover:bg-[#E7816B] transition-colors duration-300 lg:pb-8 contentItem cursor-pointer">
            <picture className="w-full">
                <source media="(min-width: 1024px)" srcSet={contentItem.image} />
                <source media="(min-width: 640px)" srcSet={contentItem.image_tablet} />
                <img src={contentItem.image} className="w-full lg:rounded-t-md lg:rounded-l-none sm:rounded-l-2xl" />
            </picture>
            <div className="flex flex-col justify-around items-center gap-4 sm:py-0 py-6">
                <div className="peach-font">{contentItem.title}</div>
                <div className="black-font text-center">{contentItem.desc}</div>
            </div>
        </div>
    );
}

export default ContentTile;