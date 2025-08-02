import ContentComponent from "../../components/common/contentComponent/ContentComponent";
import DesignComponent from "../../components/common/designcomponent/Design";
import DesignsTiles from "../../components/common/designNavTiles/designsTiles";
import { appDesignContent } from "../../utils/constants";

const AppDesign = () => {
    return (
        <div className="flex flex-col lg:gap-32 sm:gap-28 gap-20 mb-12 sm:pb-[350px] 2xl:pb-[350px] lg:pb-60 pb-60">
            <DesignComponent
                title="App Design"
                desc={<span>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</span>}
            />
            <ContentComponent designContent={appDesignContent} />
            <DesignsTiles />
        </div>
    );
}

export default AppDesign;