"use client";
import styled from "styled-components";
import Carousel from "./components/Carousel/Carousel";
import LineChart from "./components/Charts/LineChart";
import BarChart from "./components/Charts/BarChart";
import Table from "./components/Table/Table";

const HomeDiv = styled.div`
  margin: 50px auto;
  max-width: 80vw;
`;

const ChartDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export default function Home() {
  return (
    <main>
      <HomeDiv>
        <Carousel />
        <ChartDiv>
          <LineChart />
          <BarChart />
        </ChartDiv>
        <Table />
      </HomeDiv>
    </main>
  );
}
