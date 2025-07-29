import { MapContainer, Marker, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import type { FC } from "react";

type LocationMapProps = {
    mapPosition: [number, number]
}

const LocationMap: FC<LocationMapProps> = ({ mapPosition }) => {
    return (
        <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={false} className="w-full h-full sm:rounded-2xl">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={mapPosition}>
            </Marker>
        </MapContainer>
    );
}

export default LocationMap;