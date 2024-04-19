import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around; 
`;

const CoinContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ColorBox = styled.div`
  width: 24px;
  height: 24px;
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
