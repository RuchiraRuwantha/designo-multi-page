import type { FC } from "react";
import type { LocationContentProps } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

const LocationTile: FC<LocationContentProps> = ({ country, countryId, imageUrl }) => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-between items-center gap-8 px-16">
            <img src={imageUrl} />
            <div className="text-[20px]/[26px] tracking-wider black-font uppercase">{country}</div>
            <button
                className="inline-block bg-[#E7816B] text-white px-6 py-4 rounded-md font-medium text-[15px] leading-(auto) tracking-wide shadow transition hover:text-white hover:bg-[#FFAD9B]"
                onClick={() => navigate({ pathname: '/location', hash: `${countryId}` })}
            >
                SEE LOCATION
            </button>
        </div>
    );
}

export default LocationTile