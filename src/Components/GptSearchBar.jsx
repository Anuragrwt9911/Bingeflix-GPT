import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openaiGPT";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  //subscribing to our store with lang state.
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "=&include_adult=false&language=en-US&page=",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(searchText.current.value);
    //explain our prompt more precisely to give appropriate results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movie for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example results given ahead. Example result : Gadar, Sholay, Don, Koi Mil Gaya, Golmal";

    //making opeapi call
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    //error handling if gptResults not found :
    if (!gptResults) return <p>NO movies found!😴😴</p>;

    console.log(gptResults?.choices?.[0]?.message?.content); //gpt results is a function given by openai api which gives us the result and it contains some nestd object where our result is stored.

    //creating an arrray of movies which is seperated by , out of gpt results
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    {
      /**Andaz apna apna,  Here Pheri, Chupke Chupke, Jaane bhi do no, Padosan */
    }

    //for each movie I will search TMDB
    //mapping our search api to get 5 movies bcoz searchapi is called one time -> shows only 1 movie. so we mapped it so that api calling occurs until our array doesn't fill.
    const promiseArray = getMovies.map((movie) => searchMovieTMDB(movie));
    //it will call  search api 5 times which takes some time but we map this api for each movie but our api callng takes time so it returns a array of promiss which contains 5 movies (5 items in array bcoz we prompt our gpt to give 5 movies only) and th promise state of each array is pending as the api for each movie comes it will give the result thereafter.

    //so we use promise.all which basically takes an array of promises and wait for them to complete one by one it awaits for the api
    //we gave it a promiseArray and give a await keyword so that it waits for the proimse array to be finished completely after then it show results.

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
  };

  return (
    <div className="md:top-20 md:left-[50vh] top-40  left-3 absolute bg-black p-1  rounded-xl">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="md:px-8 md:py-4 px-6 py-2 w-[200px] md:w-[400px] rounded-xl focus:outline-none    "
          type="text"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        <button
          onClick={handleGptSearch}
          className="rounded-xl  bg-red-600 md:px-8 md:py-4 px-4 py-2 text-white shadow-lg font-bold"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
