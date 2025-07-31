import { LocationData } from "../../utils/constants";
import LocationComponentTile from "./components/LocationComponentTile";

const Location = () => {
    return (
        <div className="flex flex-col lg:gap-10 sm:gap-24 gap-10 mb-12 sm:pb-[350px] pb-60">
            {
                LocationData.map((location, index) => <LocationComponentTile key={index} index={index} location={location} />)
            }
        </div>
    );
}

export default Location;