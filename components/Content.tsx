import React from "react";
import { gql, useQuery } from "@apollo/client";
import Pokemon from "./Pokemon";
import style from "./index.module.scss";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
        id
      }
    }
  }
`;

const gqlVariables = {
  limit: 50,
  offset: 0,
};

const Content = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });
  if (loading)
    return <h1 style={{ textAlign: "center", margin: "20px" }}>LOADING</h1>;
  if (error) return <h1>`Error! ${error.message}`</h1>;

  console.log(data);
  return (
    <div className={style.cards}>
      <Pokemon data={data} limit={gqlVariables.limit} />
    </div>
  );
};

export default Content;
