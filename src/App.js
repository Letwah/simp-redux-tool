import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import {
  setLiked,
  setSimpsons,
  selectLiked,
  selectSimpsons,
  setSearch,
  selectSearch,
  setCharacterInput,
  selectCharacterInput,
} from "./features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./features/counter/components/Loading";
import Search from "./features/counter/components/Search";
import Simpsons from "./features/counter/components/Simpsons";

import "./App.css";

const App = () => {
  const simpsons = useSelector(selectSimpsons);
  const search = useSelector(selectSearch);
  const liked = useSelector(selectLiked);
  const characterInput = useSelector(selectCharacterInput);

  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    // console.log("get data ran");
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=${characterInput}` //Would return up to 15 quotes from Homer and Milhouse
      );

      console.log(characterInput);
      //fix the api data to have unique id
      data.forEach((element, index) => {
        element.id = index + Math.random();
      });
      console.log(data);
      dispatch(setSimpsons(data));
    } catch (error) {
      console.log(error);
    }
  }, [characterInput]);

  // console.log(characterInput);

  useEffect(() => {
    getData();
  }, [getData]); // hook that triggers behaviour - means run once cos square brackets (dependancy array)

  const onCharacterInput = (value) => {
    dispatch(setCharacterInput(value));
  };

  const onSearchInput = (e) => {
    // setSearch(e.target.value);
    dispatch(setSearch(e.target.value));
  };

  const onLikeDislikeInput = (e) => {
    // setLiked(e.target.value);
    dispatch(setLiked(e.target.value));
  };

  //if nothing in state show "loading"
  if (!simpsons) return <Loading />;
  // console.log(simpsons); //check if data is in state

  if (simpsons.length === 0) return <p>You deleted everyone!</p>;

  //filter by search
  let simpsonsCopy = [...simpsons];
  if (search) {
    simpsonsCopy = simpsonsCopy.filter((item) => {
      console.log(item.character, search);
      if (item.character.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    });
  }
  //sort by liked/not liked
  // console.log(liked);
  if (liked === "liked") {
    simpsonsCopy.sort((itemOne, itemTwo) => {
      if (itemOne.liked === true) return -1;
      if (!itemTwo.liked) return 1;
    });
  } else if (liked === "notLiked") {
    simpsonsCopy.sort((itemOne, itemTwo) => {
      if (itemTwo.liked === true) return -1;
      if (!itemOne.liked) return 1;
    });
  }

  // calculate the total
  let total = 0;
  simpsonsCopy.forEach((char) => {
    if (char.liked) total++;
  });

  return (
    <>
      <div className="title">
        <img
          className="logo"
          src="src/assets/simpsons-logo-pink.svg"
          alt="simpsons logo"
        ></img>
        <h1>
          Total No of Liked Characters <span>&#128073; </span>
          {total}
        </h1>

        <Search
          characterInput={characterInput}
          onCharacterInput={onCharacterInput}
          onSearchInput={onSearchInput}
          onLikeDislikeInput={onLikeDislikeInput}
        />
      </div>
      <Simpsons
        simpsons={simpsonsCopy}
        // onLikeToggle={onLikeToggle}
        // onDelete={onDelete}
        // onDirection={onDirection}
        // setDirection={onDirection}
      />
    </>
  ); //must return HTML
};

export default App;
