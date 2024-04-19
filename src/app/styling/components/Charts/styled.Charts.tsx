import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.charts.barBackgroundColor};
  border-radius: 12px;
  padding: 20px 0;
`;

const Container = styled.div<{ $compareCoins: boolean }>`
  position: relative;
  height: 35vh;
  padding: 10px;
  padding-bottom: ${(props) => (props.$compareCoins ? "25px" : "0px")};
`;

export { Wrapper, Container };