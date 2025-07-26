import DesignComponent from "../../components/common/designcomponent/Design";
import DesignsTiles from "../../components/common/designNavTiles/designsTiles";
// import { WebDesignContent } from "../../utils/constants";
import ContentComponent from "../../components/common/contentComponent/ContentComponent";

const WebDesign = () => {
    return (
        <div className="flex flex-col lg:gap-32 gap-28">
            <DesignComponent
                title="Web Design"
                desc={<span>We build websites that serve as powerful marketing tools<br /> and bring memorable brand experiences.</span>}
            />
            <ContentComponent />
            <DesignsTiles />
        </div>
    );
}

export default WebDesign;