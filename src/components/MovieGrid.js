import React from "react";
import Card from "./Card";
import SectionHeader from "./SectionHeader"
import {useAppContext} from "../context/Context"

const MovieGrid = () => {
  const {movies,searchActive} = useAppContext();
  const baseURL=`https://image.tmdb.org/t/p/original`;
  return( 
  <main className="movie_grid_wrapper">
    <SectionHeader title={searchActive?`Search Results...`:`Most Recent`}/>
    {
      movies.length===0 && <h1 className="no_result_text">Sorry no results found...</h1>
    }
    <section className="movie_grid">
      {
        movies.map(({id,backdrop_path,release_date,first_air_date,vote_count,name,original_title,title,poster_path,overview,vote_average})=>{
          return <Card key={id} title={title||original_title||name} poster={`${baseURL}${poster_path||backdrop_path}`} description={overview} rating={vote_average} release_date={release_date||first_air_date} vote_count={vote_count}/>
        })
      }
    </section>

  </main>)
};

export default MovieGrid;
