import { WebDesignContent } from "../../../utils/constants";
import ContentTile from "./ContentTile";

const ContentComponent = () => {
    return (
        <div className="grid grid-cols-3 gap-6">
            {
                WebDesignContent.map((items, index) => {
                    return (
                        <ContentTile key={index} index={index} contentItem={items}/>
                    )
                })
            }
        </div>
    )
}

export default ContentComponent;