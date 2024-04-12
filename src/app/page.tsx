"use client";
import styled from "styled-components";
import Carousel from "./components/Carousel/Carousel";
import ChartsContainer from "./components/Charts/ChartsContainer";
import Table from "./components/Table/Table";

const HomeDiv = styled.div`
  margin: 50px auto;
  max-width: 80vw;
`;

export default function Home() {
  return (
    <main>
      <HomeDiv>
        <Carousel />
        <ChartsContainer/>
        <Table />
      </HomeDiv>
    </main>
  );
}
