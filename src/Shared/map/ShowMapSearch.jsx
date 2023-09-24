import { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import RealtyCard from "@/components/realtyCard/RealtyCard";
import { HiMiniXMark, HiOutlineXMark } from "react-icons/hi2";
const center = { lat: 30.0444, lng: 31.2357 };
export default function ShowMapSearch({ searchResult }) {
  //   console.log(searchResult);

  useEffect(() => {
    // console.log(searchResult[0].address.latitude);
  }, [searchResult]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_MAP,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map searchResult={searchResult} />;
}

function Map({ searchResult }) {
  const [renderMarker, setRenderMarker] = useState(false);
  const infoWindowRef = useRef(null);
  useEffect(() => {
    const markerTimer = setTimeout(() => {
      setRenderMarker(true);
    }, 500);

    return () => {
      clearTimeout(markerTimer);
    };
  }, []);
  const [seletedPlace, setSeletedPlace] = useState();
  const [property, setProperty] = useState();
  const handleMapClick = (e) => {
    // Check if the InfoWindow is open and the click is outside of it
    if (infoWindowRef.current) {
      setSeletedPlace(null);
    }
  };
  return (
    <GoogleMap
      onZoomChanged={() => {
        // console.log("zoom");
      }}
      options={{
        zoomControlOptions: true,
        panControlOptions: false,
        gestureHandling: "greedy",

        mapTypeControl: false,
        streetViewControl: false,
      }}
      zoom={8}
      center={center}
      mapContainerClassName="map"
      onClick={handleMapClick}
    >
      {renderMarker &&
        searchResult &&
        searchResult.map((location, index) => {
          //   console.log(location.address.latitude, location.address.longitude);
          const lat = parseFloat(location.address.latitude);
          const lng = parseFloat(location.address.longitude);
          return (
            <Marker
              key={index}
              position={{
                lat: lat,
                lng: lng,
              }}
              onClick={() => {
                // setSeletedPlace({lat:location.address.latitude,lng:})
                setSeletedPlace({ lat: lat, lng: lng });
                setProperty(location);
                // console.log(seletedPlace);
              }}
            />
          );
        })}
      {seletedPlace && (
        <InfoWindow
          className="relative"
          position={{ lat: seletedPlace.lat, lng: seletedPlace.lng }}
          zIndex={1}
          options={{
            pixelOffset: {
              width: 0,
              height: -40,
            },
            // Remove the padding and set other styles as needed
          }}
          ref={infoWindowRef}
        >
          <div className="w-full relative">
            <div className="w-full flex h-2 absolute justify-end px-3 top-3 z-[500]">
              <button
                onClick={() => {
                  setSeletedPlace(null);
                }}
              >
                <HiMiniXMark className=" text-xl bg-white rounded-full" />
              </button>
            </div>
            <RealtyCard propertyDetails={property} />
          </div>
          {/* <h2 className="font-bold text-2xl w-96">hi</h2> */}
        </InfoWindow>
        // <div className="absolute top-0 right-0 animate-drip-expand">
        //   <div
        //     onClick={() => {
        //       setSeletedPlace(null);
        //     }}
        //     className="absolute z-[100] left-3 top-3 bg-white rounded-full p-1 cursor-pointer font-bold"
        //   >
        //     {" "}
        //     <HiOutlineXMark className="text-red-700 font-bold" />{" "}
        //   </div>
        //   <RealtyCard propertyDetails={property} />
        // </div>
      )}
    </GoogleMap>
  );
}
