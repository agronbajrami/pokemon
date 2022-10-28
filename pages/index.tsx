import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Content from "../components/Content";
import Pokemon from "../components/Pokemon";
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/Home.module.scss";
import bgImage from "../assets/5576662.jpg";

const Home: NextPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "390vh",
      }}
    >
      <Header />
      <Content />
    </div>
  );
};

export default Home;
