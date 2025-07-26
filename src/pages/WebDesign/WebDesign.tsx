import DesignComponent from "../../components/common/designcomponent/Design";
import DesignsTiles from "../../components/common/designNavTiles/designsTiles";
import ContentComponent from "../../components/common/contentComponent/ContentComponent";
import { WebDesignContent } from "../../utils/constants";

const WebDesign = () => {
    return (
        <div className="flex flex-col lg:gap-32 gap-28 mb-12">
            <DesignComponent
                title="Web Design"
                desc={<span>We build websites that serve as powerful marketing tools<br /> and bring memorable brand experiences.</span>}
            />
            <ContentComponent designContent={WebDesignContent} />
            <DesignsTiles />
        </div>
    );
}

export default WebDesign;