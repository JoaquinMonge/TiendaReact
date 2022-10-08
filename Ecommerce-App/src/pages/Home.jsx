import React from "react";
import { Annoucement } from "../Components/Annoucement";
import { Categories } from "../Components/Categories";
import { Navbar } from "../Components/Navbar";
import { Slider } from "../Components/Slider";

export const Home = () => {
  return (
    <>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
    </>
  );
};
