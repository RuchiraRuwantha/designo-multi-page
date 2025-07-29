import type { FC } from "react";
import { type ContentProps } from "../../../utils/constants";
import ContentTile from "./ContentTile";

type ContentComponentProps = {
    designContent: ContentProps[]
}

const ContentComponent: FC<ContentComponentProps> = ({ designContent }) => {
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8 sm:px-0 px-6">
            {
                designContent.map((items, index) => {
                    return (
                        <ContentTile key={index} index={index} contentItem={items} />
                    )
                })
            }
        </div>
    )
}

export default ContentComponent;