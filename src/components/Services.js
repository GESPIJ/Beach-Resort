import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaShuttleVan, FaBeer, FaHiking } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Esto es solo un subtitulo de prueba del establecimiento",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Esto es solo un subtitulo de prueba del establecimiento",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Esto es solo un subtitulo de prueba del establecimiento",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Esto es solo un subtitulo de prueba del establecimiento",
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
