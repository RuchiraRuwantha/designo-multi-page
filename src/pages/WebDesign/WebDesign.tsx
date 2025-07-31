import DesignComponent from "../../components/common/designcomponent/Design";
import DesignsTiles from "../../components/common/designNavTiles/designsTiles";
import ContentComponent from "../../components/common/contentComponent/ContentComponent";
import { WebDesignContent } from "../../utils/constants";

const WebDesign = () => {
    return (
        <div className="flex flex-col lg:gap-32 sm:gap-28 gap-20 mb-12 sm:pb-[350px] pb-60">
            <DesignComponent
                title="Web Design"
                desc={<span>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</span>}
            />
            <ContentComponent designContent={WebDesignContent} />
            <DesignsTiles />
        </div>
    );
}

export default WebDesign;