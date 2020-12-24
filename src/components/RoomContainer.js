import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
// import { RoomConsumer, RoomContext, } from "../context";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  let { loading, rooms, sortedRooms, handleChange } = context;
  loading = false;
  console.log("Hola");
  if (loading) return <Loading />;
  return (
    <div>
      <RoomFilter rooms={rooms} handleChange={handleChange} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// export default function RoomContainer() {
//   return (
//     <RoomContext>
//       {(value) => {
//         console.log(value);
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) return <Loading />;
//         return (
//           <div>
//             Hello from room container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomContext>
//   );
// }
