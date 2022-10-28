import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import style from "./Details.module.scss";
import bgImage from "../assets/5576662.jpg";

type Pokemondata = {
  name: any;
  abilities: Array<any>;
  effect_entries: any;
  weight: number;
  base_experience: string;
  height: number;
  moves: string;
};

const Details: React.FC<Pokemondata> = () => {
  const router = useRouter().query;
  const [data, setData] = useState<Pokemondata>({});
  const [ability, setAbility] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + router.id + "/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        fetch(data.abilities[0].ability.url)
          .then((response) => response.json())
          .then((data) => setAbility(data.effect_entries[1].effect));
      });
  }, [router.id]);

  console.log(data);
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
      <div className={style.content}>
        <div>
          <h1>{data.name}</h1>
          <p>With weight {data.weight} KG</p>
        </div>
        <div>
          {data?.abilities?.map((item) => (
            <p key={item.ability.name}>With ability {item.ability.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
