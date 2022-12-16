import React from "react";
import Navbar from "../components/Navbar";
import MovieGrid from "../components/MovieGrid";
import Popup from "../components/Popup";
import { useAppContext } from "../context/Context";

const Home = () => {
  const { popup } = useAppContext();
  return (
    <>
      {popup.isOpen && <Popup />}
      <section className="home_wrapper" style={{overflow:popup.isOpen?`hidden`:`auto`}}>
        <Navbar />
        <MovieGrid />
      </section>
    </>
  );
};

export default Home;
