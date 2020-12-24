import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const getUniqueValues = (items, type) => {
  return [...new Set(items.map((item) => item[type]))];
};
export default function RoomFilter({ handleChange, rooms }) {
  const context = useContext(RoomContext);
  console.log(handleChange);
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
    breakfast,
  } = context;

  let roomTypes = ["all", ...getUniqueValues(rooms, "type")];
  let roomCap = getUniqueValues(rooms, "capacity");

  roomTypes = roomTypes.map((type, index) => (
    <option value={type} key={index}>
      {type}
    </option>
  ));
  roomCap = roomCap.map((capacity, index) => (
    <option value={capacity} key={index}>
      {capacity}
    </option>
  ));
  console.log(roomTypes, roomCap);
  return (
    <section className="filter-container">
      <Title title="Search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type </label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {roomTypes}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Capacity </label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {roomCap}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price ${price} </label>
          <input
            name="price"
            type="range"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <input
            name="minSize"
            type="number"
            id="size"
            value={minSize}
            className="size-input"
            onChange={handleChange}
          />
          <input
            name="maxSize"
            type="number"
            id="size"
            value={maxSize}
            className="size-input"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
        </div>
        <div className="single-extra">
          <input
            type="checkbox"
            name="pets"
            id="pets"
            checked={pets}
            onChange={handleChange}
          />
          <label htmlFor="pets">Pets</label>
        </div>
      </form>
    </section>
  );
}
