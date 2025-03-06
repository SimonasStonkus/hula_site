// import React, { useState } from "react";
// import ImageMapper, { MapArea } from "react-img-mapper";
import "./ClassPicture.css";

// const mapTurtle = {
//   name: "map-turtle",
//   areas: [
//     {
//       id: "1",
//       shape: "polygon",
//       coords: [
//         100, 50, 120, 70, 140, 80,
//         // ...all remaining Turtle polygon points...
//       ],
//     },
//   ],
// };

// const mapPeacock = {
//   name: "map-peacock",
//   areas: [
//     {
//       id: "2",
//       shape: "polygon",
//       coords: [0, 0 /* ...coords for Peacock... */, , 0, 0],
//     },
//   ],
// };

// const mapBear = {
//   name: "map-bear",
//   areas: [
//     {
//       id: "3",
//       shape: "polygon",
//       coords: [0, 0 /* ...coords for Bear... */, , 0, 0],
//     },
//   ],
// };

// const mapBeaver = {
//   name: "map-Beaver",
//   areas: [
//     {
//       id: "4",
//       shape: "polygon",
//       coords: [0, 0 /* ...coords for Beaver... */, , 0, 0],
//     },
//   ],
// };

// const mapFish = {
//   name: "map-Fish",
//   areas: [
//     {
//       id: "5",
//       shape: "polygon",
//       coords: [0, 0 /* ...coords for Fish... */, , 0, 0],
//     },
//   ],
// };

// export default function ClassPicture() {
//   const [hovered, setHovered] = useState("");

//   const handleMouseEnter = (area: MapArea) => {
//     console.log(area);
//     setHovered(area.id);
//   };
//   const handleMouseLeave = () => setHovered("");
//   console.log(hovered);
//   return (
//     <div className="relative w-[640px] h-[360px]">
//       <ImageMapper
//         src="/cast/hitbox/TurtleHitbox.webp"
//         name={mapTurtle.name}
//         areas={mapTurtle.areas}
//         width={640}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         containerProps={{ className: "character" }}
//         imgProps={{
//           className: `${hovered === "1" ? "grayscale" : ""}`,
//         }}
//         fillColor="rgba(0,0,0,0)"
//         strokeColor="rgba(0,0,0,0)"
//         ref={React.createRef()}
//       />
//       <ImageMapper
//         src="/cast/hitbox/PeacockHitbox.webp"
//         name={mapPeacock.name}
//         areas={mapPeacock.areas}
//         width={640}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         containerProps={{ className: "character" }}
//         imgProps={{
//           className: `${hovered === "2" ? "grayscale" : ""}`,
//         }}
//         fillColor="rgba(0,0,0,0)"
//         strokeColor="rgba(0,0,0,0)"
//         ref={React.createRef()}
//       />
//       <ImageMapper
//         src="/cast/hitbox/BearHitbox.webp"
//         name={mapBear.name}
//         areas={mapBear.areas}
//         width={640}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         containerProps={{ className: "character" }}
//         imgProps={{
//           className: `${hovered === "3" ? "grayscale" : ""}`,
//         }}
//         fillColor="rgba(0,0,0,0)"
//         strokeColor="rgba(0,0,0,0)"
//         ref={React.createRef()}
//       />
//       <ImageMapper
//         src="/cast/hitbox/BeaverHitbox.webp"
//         name={mapBeaver.name}
//         areas={mapBeaver.areas}
//         width={640}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         containerProps={{ className: "character" }}
//         imgProps={{ className: `${hovered === "4" ? "grayscale" : ""}` }}
//         fillColor="rgba(0,0,0,0)"
//         strokeColor="rgba(0,0,0,0)"
//         ref={React.createRef()}
//       />
//       <ImageMapper
//         src="/cast/hitbox/FishHitbox.webp"
//         name={mapFish.name}
//         areas={mapFish.areas}
//         width={640}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         containerProps={{ className: "character" }}
//         imgProps={{ className: `${hovered === "5" ? "grayscale" : ""}` }}
//         fillColor="rgba(0,0,0,0)"
//         strokeColor="rgba(0,0,0,0)"
//         ref={React.createRef()}
//       />
//     </div>
//   );
// }

export default function ClassPicture() {
  return (
    <div className="w-[720px] h-[720px]">
      <div className="character bg-[url('/cast/hitbox/PeacockHitbox.webp')] w-[684px] h-[486px]" />
      <div className="character bg-[url('/cast/hitbox/TurtleHitbox.webp')] w-[197px] h-[348px] translate-x-[165px] translate-y-[186px]" />
      <div className="character bg-[url('/cast/hitbox/BearHitbox.webp')] w-[197px] h-[348px] translate-x-[344px] translate-y-[148px]" />
      <div className="character bg-[url('/cast/hitbox/HorseHitbox.webp')] w-[144px] h-[150px] translate-x-[512px] translate-y-[181px]" />
      <div className="character bg-[url('/cast/hitbox/FishHitbox.webp')] w-[164px] h-[197px] translate-x-[150px] translate-y-[348px]" />
      <div className="character bg-[url('/cast/hitbox/FoxHitbox.webp')] w-[185px] h-[289px] translate-x-[270px] translate-y-[295px] scale-[110%]" />
      <div className="character bg-[url('/cast/hitbox/FrogHitbox.webp')] w-[123px] h-[199px] translate-x-[405px] translate-y-[355px] scale-[110%]" />
      <div className="character bg-[url('/cast/hitbox/BeaverHitbox.webp')] w-[143px] h-[188px] translate-x-[500px] translate-y-[310px] scale-[110%]" />
      {/* 



       */}
    </div>
  );
}
