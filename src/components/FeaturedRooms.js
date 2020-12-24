import React, { Component } from "react";
import { RoomContext } from "../context";
import Room from "./Room";
import Title from "./Title";
import Loading from "./Loading";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // const value = this.context;
    // const prueba = this.context.prueba;
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    console.log(rooms);
    loading = false;
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms"></Title>
        <div className="featured-rooms-center">{loading ? false : rooms}</div>
      </section>
    );
  }
}
