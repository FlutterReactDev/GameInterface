import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import GameInterface from "../Components/GameInterface";

const Home: NextPage = () => {
  return (
    <>
      <GameInterface />
    </>
  );
};

export default Home;
