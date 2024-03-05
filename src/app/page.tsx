"use client";
import styled from "styled-components";
import LineChart from "./components/Charts/LineChart";
import BarChart from "./components/Charts/BarChart";
const HomeDiv = styled.div`
  margin: 50px auto;
  border: 3px red solid;
  width: 500px;
`;

export default function Home() {
  return (
    <main>
      <HomeDiv>
        <LineChart />
        <BarChart />
      </HomeDiv>
    </main>
  );
}
