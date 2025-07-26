import ContentComponent from "../../components/common/contentComponent/ContentComponent";
import DesignComponent from "../../components/common/designcomponent/Design";
import DesignsTiles from "../../components/common/designNavTiles/designsTiles";
import { graphicDesignContent } from "../../utils/constants";

const Graphic = () => {
    return (
        <div className="flex flex-col lg:gap-32 gap-28 mb-12">
            <DesignComponent
                title="Graphic Design"
                desc={<span>We deliver eye-catching branding materials that are <br />tailored to meet your business objectives.</span>}
            />
            <ContentComponent designContent={graphicDesignContent} />
            <DesignsTiles />
        </div>
    );
}

export default Graphic;