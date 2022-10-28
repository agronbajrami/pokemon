import styled from "@emotion/styled";
import { CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cardphoto from "../assets/pikachu.jpg";
import style from "./PokemonCard.module.scss";

const PokemonCard = (props: any) => {
  return (
    <Link href={"/" + props.id} key={props.id}>
      <div className={style.card}>
        <CardContent>
          <Image src={props.imgurl} alt='' layout='fill' style={{}}></Image>
          <Typography variant='body2' sx={{ fontSize: "25px" }}>
            {props.name}
          </Typography>
        </CardContent>
      </div>
    </Link>
  );
};

export default PokemonCard;
