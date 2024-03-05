"use client";
import styled from "styled-components";
import LineChart from "./components/Charts/LineChart";
import BarChart from "./components/Charts/BarChart";
import Table from "./components/Home/Table";
const HomeDiv = styled.div`
  margin: 50px auto;
  width: 500px;
`;

export default function Home() {
  return (
    <main>
      <HomeDiv>
        <LineChart />
        <BarChart />
        <div>
          <Table />
        </div>
      </HomeDiv>
    </main>
  );
}
