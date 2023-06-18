import React, { useEffect, useCallback } from "react";
import axios from "axios";
import {
  setSimpsons,
  selectSimpsons,
  selectSearch,
  selectLikedDropdownOption,
} from "./features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./features/counter/components/Loading";
import Search from "./features/counter/components/Search";
import Simpsons from "./features/counter/components/Simpsons";

import "./App.css";

const App = () => {
  const simpsons = useSelector(selectSimpsons);
  const search = useSelector(selectSearch);
  const likedDropdownOption = useSelector(selectLikedDropdownOption);

  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    // console.log("get data ran");
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=${search}` //Would return up to 15 quotes from Homer and Milhouse
      );

      console.log(search);
      //fix the api data to have unique id
      data.forEach((element, index) => {
        element.id = index + Math.random();
      });
      console.log(data);
      dispatch(setSimpsons(data));
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  // console.log(characterInput);

  useEffect(() => {
    getData();
  }, [getData]); // hook that triggers behaviour - means run once cos square brackets (dependancy array)

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
  if (likedDropdownOption === "liked") {
    simpsonsCopy.sort((itemOne, itemTwo) => {
      if (itemOne.liked === true) return -1;
      if (!itemTwo.liked) return 1;
    });
  } else if (likedDropdownOption === "notLiked") {
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
          src={
            require("./features/counter/assets/simpsons-logo-pink.svg").default
          }
          alt="simpsons logo"
        ></img>
        <h1>
          Total No of Liked Characters <span>&#128073; </span>
          {total}
        </h1>

        <Search />
      </div>
      <Simpsons simpsons={simpsonsCopy} />
    </>
  ); //must return HTML
};

export default App;
