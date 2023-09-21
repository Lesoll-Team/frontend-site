import { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function ShowMapSearch({ center }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_MAP,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map center={center} />;
}

function Map({ center }) {
  const [renderMarker, setRenderMarker] = useState(false);

  useEffect(() => {
    const markerTimer = setTimeout(() => {
      setRenderMarker(true);
    }, 500);

    return () => {
      clearTimeout(markerTimer);
    };
  }, []);
  // console.log(center);
  const locations = [
    { lat: 30.0444, lng: 31.2357 }, // Cairo
    { lat: 30.0596, lng: 31.223 }, // Giza
    { lat: 30.0595, lng: 31.262 }, // Zamalek
    { lat: 30.0562, lng: 31.2395 }, // Downtown Cairo
    { lat: 30.0608, lng: 31.214 }, // Pyramids of Giza
    { lat: 30.0634, lng: 31.2169 }, // Sphinx
    { lat: 30.0599, lng: 31.2283 }, // Egyptian Museum
    { lat: 30.0629, lng: 31.2497 }, // Khan el-Khalili Bazaar
  ];
  return (
    <GoogleMap
      options={{
        zoomControlOptions: true,
        panControlOptions: false,
        gestureHandling: "cooperative",
      }}
      zoom={10}
      center={{ lat: 30.0444, lng: 31.2357 }}
      mapContainerClassName="map"
    >
      {renderMarker &&
        locations.map((location, index) => {
          return (
            <Marker key={index} position={location}>
              hi
            </Marker>
          );
        })}
    </GoogleMap>
  );
}
