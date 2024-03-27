// import { useState, useEffect } from "react";
// // import { useLoadScript,GoogleMap, Marker} from "@react-google-maps/api";

// // import { GoogleMap } from "@react-google-maps/api/dist/GoogleMap";
// // import { useLoadScript } from "@react-google-maps/api/dist/LoadScript";
// import {
//   Marker,
//   useLoadScript,
//   GoogleMap,
// } from "@react-google-maps/api/dist/index";
// import { useSelector } from "react-redux";
// import { HiMiniMapPin } from "react-icons/hi2";

// export default function ShowMap({ center }) {
//   const language = useSelector((state) => state.GlobalState.languageIs);

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_MAP,
//   });
//   const openDirectionsInGoogleMaps = () => {
//     if (center.lat && center.lng) {
//       const url = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
//       window.open(url, "_blank");
//     }
//   };
//   if (!isLoaded) return <div>Loading...</div>;
//   return (
//     <>
//       <button
//         className="px-4 py-1 border-2 text-lightGreen  rounded-lg mb-2 mx-2 flex items-center justify-center gap-1 hover:border-lightGreen hover:bg-lightGreen hover:text-white duration-150"
//         onClick={openDirectionsInGoogleMaps}
//       >
//         {language ? "الإتجهات" : "Directions"} <HiMiniMapPin />
//       </button>
//       <MapUi center={center} />
//     </>
//   );
// }

// function MapUi({ center }) {
//   const [renderMarker, setRenderMarker] = useState(false);

//   useEffect(() => {
//     const markerTimer = setTimeout(() => {
//       setRenderMarker(true);
//     }, 500);

//     return () => {
//       clearTimeout(markerTimer);
//     };
//   }, []);
//   return (
//     <GoogleMap
//       options={{
//         zoomControlOptions: true,
//         panControlOptions: false,
//         gestureHandling: "greedy",
//         mapTypeControl: false,
//         streetViewControl: false,
//       }}
//       zoom={15}
//       center={center}
//       mapContainerClassName="map"
//     >
//       {renderMarker && center && (
//         <Marker
//           icon={{
//             url: "https://cdn.discordapp.com/attachments/1124959275895230576/1158099242573905960/locationIcom.png?ex=651b0377&is=6519b1f7&hm=c008e991ee0862483ff799aacbc53e32bc9101769ce9e1f18155e57074012566&",

//             anchor: new google.maps.Point(17, 46),

//             scaledSize: new google.maps.Size(37, 37),
//           }}
//           position={{ lat: center.lat, lng: center.lng }}
//         />
//       )}
//     </GoogleMap>
//   );
// }
