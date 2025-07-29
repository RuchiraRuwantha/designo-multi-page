import { LocationContent } from "../../../utils/constants";
import LocationTile from "./LocationTile";

const LocationComponent = () => {
    return (
        <div className="flex lg:flex-row flex-col gap-12 justify-between items-center sm:py-0 py-20">
            {
                LocationContent.map((item, index) => {
                    return (
                        <LocationTile key={index} country={item.country} imageUrl={item.imageUrl} />
                    )
                })
            }
        </div>
    );
}

export default LocationComponent