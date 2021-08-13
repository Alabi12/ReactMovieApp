import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";



const ReactMovie = () => {
  const [movies, setMovies] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchMovies = async() => {
    try {
        const res = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=&api-key=pNPhS82RXSowWG8xKQjqtGkLauZU1QSi`
        )
        const movies = await res.json()
        console.log(movies.results)
        setMovies(movies.results)
        setIsLoading(false)

      } catch (error) {
      console.error (error);
    }
  }
    fetchMovies()
  }, [])



  return (
    <>
    <div className="showCase">
      <div className="overlay px-5">
        <h1 className="text-4x1 font-bold text-white text-center mb-4 lg:text-6x1">Streaming movies Search Area</h1>
        <SearchForm />
        </div>
    </div>

    {isLoading ? (
    <h1 className="text-center mt-20 font-bold text-5x2">Loading...</h1>
    ):(
    
    <section className="grid grid-cols-1 gap-10 px-5 pt-10 pb-20">
    {movies.map((movie, index)=>{
      const {byline,
        critic_pick,
        display_title,
        headline,} = movie

      return(
        <movie key={index} className="bg-white py-10 px-5 
        rounded-lg lg:w-9/12 lg:mx-auto">
          <h1 className="font-bold text-2x1 mb-5 lg:text-4x1">{headline}</h1>
          <p>{display_title}</p>
          <p>{byline}</p>
          <p>{critic_pick}</p>

        </movie>
      )
    })}

  </section>

    )}
    </>
  );
}

export default ReactMovie;
