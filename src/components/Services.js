import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaShuttleVan, FaBeer, FaHiking } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Free cocktails, top bartending service, flair bartending shows and more",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Yo don't want to walk? No a problem, we have free shuttle all over the campus",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Strongest beer, more that the german ones, give it a shot",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Hiking activities from novice to advanced guided by certified hiking trainers",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((current, index) => (
            <article key={index} className="service">
              <span>{current.icon}</span>
              <h6>{current.title}</h6>
              <p>{current.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
