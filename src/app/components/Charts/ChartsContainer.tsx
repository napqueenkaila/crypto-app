import styled from "styled-components";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 400px;
`;

const ChartsContainer = () => {
  return (
    <Container>
      <LineChart />
      <BarChart />
    </Container>
  );
};
export default ChartsContainer;
