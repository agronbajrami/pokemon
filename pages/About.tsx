import React from "react";
import Header from "../components/Header";
import style from "./About.module.scss";
import image from "../assets/pika.jpg";
import Image from "next/image";
import bgImage from "../assets/5576662.jpg";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100vh",
        color: "black",
        fontSize: "35px",
      }}
    >
      <Header />
      <div className={style.photo}>
        <Image src={image} alt='' width={700} height={300} />
      </div>
      <div className={style.aboutus}>
        The original Pokémon is a role-playing game based around building a
        small team of monsters to battle other monsters in a quest to become the
        best. Pokémon are divided into types, such as water and fire, each with
        different strengths. Battles between them can be likened to the simple
        hand game rock-paper-scissors.
      </div>
    </div>
  );
};

export default About;
