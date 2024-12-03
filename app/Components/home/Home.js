import React from "react";
import "./Home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import Head from "next/head";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img
          src="/girl.png"
          height={295}
          width={390}
          alt=""
          className="home__img"
        />
        <h1 className="home__name">Pranati Sahoo</h1>
        <span className="home__education">
          <Head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Raleway:400,400i,700"
            />
          </Head>
          <div class="container3">
            <div class="typewriter3">I'm Front end Developer</div>
          </div>
        </span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me
        </a>
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
