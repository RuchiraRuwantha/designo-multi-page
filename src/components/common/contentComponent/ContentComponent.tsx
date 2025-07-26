import type { FC } from "react";
import { type ContentProps } from "../../../utils/constants";
import ContentTile from "./ContentTile";

type ContentComponentProps = {
    designContent: ContentProps[]
}

const ContentComponent: FC<ContentComponentProps> = ({ designContent }) => {
    return (
        <div className="grid grid-cols-3 gap-6">
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