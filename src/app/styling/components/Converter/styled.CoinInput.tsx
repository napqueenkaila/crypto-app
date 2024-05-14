import styled from "styled-components";

const HeaderText = styled.div`
  font-size: 14px;
  color: #ffffffcc;
  margin-bottom: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const CoinName = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const QuantityInput = styled.input`
  background-color: #191932;
  border: none;
  color: #ffffff;
  text-align: right;
  font-weight: 700;
  font-size: 24px;
  &:hover {
    cursor: pointer;
  }
`;

export { HeaderText, InputContainer, CoinContainer, CoinName, QuantityInput };
