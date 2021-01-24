import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2"
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import RoomContainer from "../components/RoomContainer";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const home = () => {
  return (
    <>
      
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
        isPlaying={true}
      >
        <Slider>
          <Slide index={0}>
            <Hero>
          <Banner
          title="Luxurious and cheap rooms"
          subtitle="Deluxe rooms, starting at 99.99$"
          clase="banner"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
        </Hero>
          </Slide>
          <Slide index={1}>
            <Hero hero="defaultHero1">
            <Banner
title="Temporarily close"
subtitle="We are temporaly closed due Covid19 but we will be open soon, please stay home and wear a mask"
clase="banner"
>

</Banner>
        </Hero>
          </Slide>
          
        </Slider>
       
      </CarouselProvider>
        

      <Services />
      <FeaturedRooms />
      <RoomContainer />
    </>
  );
};

export default home;
