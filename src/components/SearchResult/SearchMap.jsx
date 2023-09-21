// import { Wrapper } from "@googlemaps/react-wrapper";
// import { useEffect, useRef, useState } from "react";

// const SearchMap = ({ searchResult }) => {
//   return (
//     <div className=" sticky top-0 h-[100dvh] bg-blue-300">
//       <Wrapper
//         apiKey={process.env.NEXT_PUBLIC_API_KEY_MAP}
//         version="beta"
//         libraries={["marker"]}
//       >
//         <MyMap />
//       </Wrapper>
//     </div>
//   );
// };

// export default SearchMap;
// const mapOptions = {
//   mapId: process.env.NEXT_PUBLIC_MAP_ID,
//   center: { lat: 43.66293, lng: -79.39314 },
//   zoom: 10,
//   disableDefaultUI: true,
// };
// const MyMap = () => {
//   const [map, setMap] = useState();
//   const ref = useRef();
//   const mapRef = useRef(null);

//   useEffect(() => {
//     setMap(new window.google.maps.Map(mapRef.current, mapOptions));
//   });
//   return <div ref={mapRef}>map</div>;
// };
