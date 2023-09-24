import { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function ShowMap({ center }) {
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
  return (
    <GoogleMap
      options={{
        zoomControlOptions: true,
        panControlOptions: false,
        gestureHandling: "greedy",
        mapTypeControl: false,
        streetViewControl: false,
      }}
      zoom={15}
      center={center}
      mapContainerClassName="map"
    >
      {renderMarker && center && (
        <Marker position={{ lat: center.lat, lng: center.lng }} />
      )}
    </GoogleMap>
  );
}
