import React from "react";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const GoogleMaps = ({ lat, lng }) => {
  const center = {
    lat: 25.276987,
    lng: 55.296249,
  };

  const { isLoaded, loadError } = useLoadScript({
    // Uncomment the line below and add your API key
    googleMapsApiKey: "AIzaSyC93ieiNDoIv0_M7xmdzrKCe1noGSUoa98",
  });

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap
      googleMapURL={
        "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      }
      mapContainerStyle={containerStyle}
      center={center}
      zoom={9}
    >
      <Marker position={{ lat: +lat, lng: +lng }} />
    </GoogleMap>
  );
};

export default GoogleMaps;
