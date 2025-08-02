import ContentComponent from "../../components/common/contentComponent/ContentComponent";
import DesignComponent from "../../components/common/designcomponent/Design";
import DesignsTiles from "../../components/common/designNavTiles/designsTiles";
import { graphicDesignContent } from "../../utils/constants";

const Graphic = () => {
    return (
        <div className="flex flex-col lg:gap-32 sm:gap-28 gap-20 mb-12 sm:pb-[350px] 2xl:pb-[350px] lg:pb-60 pb-60">
            <DesignComponent
                title="Graphic Design"
                desc={<span>We deliver eye-catching branding materials that are tailored to meet your business objectives.</span>}
            />
            <ContentComponent designContent={graphicDesignContent} />
            <DesignsTiles />
        </div>
    );
}

export default Graphic;