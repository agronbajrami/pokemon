import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import style from "./Pokemon.module.scss";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";

const Pokemon = (props: any) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(20);
  const pokemonsVisited = (pageNumber - 1) * usersPerPage;

  const changePage = (page: number, pageSize: number) => {
    setPageNumber(page);
    setUsersPerPage(pageSize);
  };

  return (
    <div>
      <div>
        {props.data.pokemons.results.map((item: any, index: number) => {
          return (
            <PokemonCard
              key={item.name}
              id={item.id}
              name={item.name}
              imgurl={item.image}
              pokemonurl={item.url}
            />
          );
        })}
      </div>
      <div className={style.pagination}>
        <Pagination
          defaultCurrent={pageNumber}
          total={100}
          pageSize={50}
          onChange={changePage}
        />
      </div>
    </div>
  );
};

export default Pokemon;
