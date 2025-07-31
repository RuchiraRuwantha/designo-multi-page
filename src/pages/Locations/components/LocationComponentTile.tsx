import type { FC } from "react";
import type { iLocationData } from "../../../types";
import LocationMap from "./LocationMap";

type LocationComponentTileProps = {
    index: number,
    location: iLocationData
}

const LocationComponentTile: FC<LocationComponentTileProps> = ({ location, index }) => {
    return (
        <div className={`w-full h-full flex lg:flex-row flex-col-reverse ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} lg:gap-[30px] sm:gap-6`}>
            <div className="lg:flex-2/3 flex flex-col gap-6 lg:px-24 sm:py-[88px] sm:px-[75px] py-20 px-6 sm:bg-[url(/images/location-bg.png)] bg-[url(/images/location-mobile-bg.png)] bg-no-repeat bg-cover sm:rounded-2xl w-full h-full">
                <div className="sm:text-[40px]/[48px] text-[32px]/[36px] tracking-normal flex sm:justify-start justify-center items-center w-full peach-font">
                    {location.country}
                </div>
                <div className="flex sm:flex-row flex-col black-font w-full sm:gap-28 gap-6 items-center text-center lg:text-left">
                    <div>
                        <span className="font-bold">{location.address.officeName}<br /></span>
                        {location.address.addressLine}
                    </div>
                    <div>
                        <span className="font-bold">Contact<br /></span>
                        P : {location.contactInfo.phoneNumber}<br />
                        M : {location.contactInfo.emailAddress}
                    </div>
                </div>
            </div>
            <div className="lg:flex-1/3 sm:h-[326px] h-[320px] z-0">
                <LocationMap mapPosition={location.mapPosition} />
            </div>
        </div>
    );
}

export default LocationComponentTile;