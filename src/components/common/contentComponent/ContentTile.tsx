import type { FC, JSX } from "react";

type ContentTileProps = {
    index: number,
    contentItem: {
        title: string;
        desc: JSX.Element;
        image: string;
    }
}
const ContentTile: FC<ContentTileProps> = ({ index, contentItem }) => {
    return (
        <div key={index} className="flex flex-col rounded-2xl justify-between items-center gap-4 bg-[#FDF3F0] pb-8">
            <img src={contentItem.image} className="w-full rounded-t-md" />
            <div className="flex flex-col justify-between items-center gap-4">
                <div className="peach-font">{contentItem.title}</div>
                <div className="black-font text-center">{contentItem.desc}</div>
            </div>
        </div>
    )
}

export default ContentTile;