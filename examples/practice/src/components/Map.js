import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  const position = [24.63, 90.45];
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={6}
      scrollWheelZoom={false}
      >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;