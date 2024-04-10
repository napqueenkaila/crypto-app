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

  const todaysDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(new Date(Date.now()));

  return (
    <Container>
      <LineChart todaysDate={todaysDate} />
      <BarChart todaysDate={todaysDate} />
    </Container>
  );
};
export default ChartsContainer;
