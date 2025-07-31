import DesignsTiles from "../../components/common/designNavTiles/designsTiles";
import LearnMore from "./components/learnMore";
import QualitiesTiles from "./components/qualitiesTiles";

const Home = () => {
    return (
        <div className="flex flex-col lg:gap-32 gap-28 sm:pb-[350px] pb-60">
            <LearnMore />
            <DesignsTiles />
            <QualitiesTiles />
        </div>
    );
}

export default Home;