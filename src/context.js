import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();
// RoomContext.Provider value={}

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    pets: false,
    breakfast: false,
  };

  //getData(){}

  getMax = (items, value) => {
    const prices = items.map((item) => parseInt(item[value]));
    const maxPrice = Math.max(...prices);
    console.log(prices);
    console.log(maxPrice);
    return maxPrice;
  };

  // getMaxSize = (items) => {
  //   const sizes = items.map((item) => parseInt(item.size));
  //   const maxSize = Math.max(...sizes);
  //   console.log(sizes);
  //   console.log(maxSize);
  //   return maxSize;
  // };

  handleChange = (e) => {
    const target = e.target;
    const name = e.target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.filterRooms(this.state.rooms);
      }
    );
  };

  filterRooms = (rooms) => {
    let sortedRooms = rooms;
    let {
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    capacity = parseInt(capacity);
    price = parseInt(price);
    minSize = parseInt(minSize);
    maxSize = parseInt(maxSize);

    if (type !== "all")
      sortedRooms = rooms.filter((room) => room.type === this.state.type);

    if (capacity > 1)
      sortedRooms = sortedRooms.filter((room) => room.capacity >= capacity);

    sortedRooms = sortedRooms.filter((room) => room.price <= price);

    sortedRooms = sortedRooms.filter(
      (room) => room.size <= maxSize && room.size >= minSize
    );
    if (breakfast) sortedRooms = sortedRooms.filter((room) => room.breakfast);

    if (pets) sortedRooms = sortedRooms.filter((room) => room.pets);

    this.setState({
      sortedRooms,
    });
  };
  componentDidMount() {
    console.log(items);

    let rooms = items.map((item) => this.formatData(item));

    let featuredRooms = rooms.filter((item) => item.featured);
    console.log(featuredRooms);
    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      maxPrice: this.getMax(rooms, "price"),
      maxSize: this.getMax(rooms, "size"),
      price: this.getMax(rooms, "price"),
    });
  }
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }

  formatData = (item) => {
    let room = {};
    let id = item.sys.id;
    let images = item.fields.images.map((cur) => {
      const image = cur.fields.file.url;
      return image;
    });
    room = { ...item.fields, id, images };
    return room;
  };

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
}

const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
export { RoomProvider, RoomConsumer, RoomContext };
