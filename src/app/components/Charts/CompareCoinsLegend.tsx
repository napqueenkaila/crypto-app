import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #d1d1d1;
  font-size: 14px;
`;

const ColorBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  background-color: ${(props) => props.color};
`;

const CompareCoinsLegend = ({
  coinOne,
  coinTwo,
}: {
  coinOne: string;
  coinTwo: string;
}) => {
  return (
    <Container>
      <CoinContainer>
        <ColorBox color="#7878fa" />
        <div>{coinOne}</div>
      </CoinContainer>
      <CoinContainer>
        <ColorBox color="#D878FA" />
        <div>{coinTwo}</div>
      </CoinContainer>
    </Container>
  );
};
export default CompareCoinsLegend;
