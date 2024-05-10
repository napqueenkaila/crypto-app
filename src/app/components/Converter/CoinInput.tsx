import Image from "next/image";
import { useState } from "react";
import Search from "./Search";
import { DownArrow } from "../SVGs/DownArrow";
import { CoinInputProps } from "@/app/types/interfaces/converter.interfaces";
import styled from "styled-components";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

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
  &:hover{
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
  &:hover{
    cursor: pointer;
  }
`;

const CoinInput = ({
  text,
  coinData,
  setCoin,
  quantity,
  resetQuantities,
  handleQuantityChange,
}: CoinInputProps) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleShowSearch = () => {
    setIsSearching(!isSearching);
  };

  return (
    <>
      <HeaderText>{text}</HeaderText>
      <InputContainer>
        {isSearching ? (
          <Search
            setCoin={setCoin}
            resetQuantities={resetQuantities}
            isSearching={isSearching}
            setIsSearching={setIsSearching}
          />
        ) : (
          <CoinContainer onClick={handleShowSearch}>
            {coinData && (
              <>
                <Image src={coinData.image} alt="" width={25} height={25} />
                <CoinName>{coinData.name}</CoinName>
              </>
            )}
            <DownArrow />
          </CoinContainer>
        )}
        <div>
          <QuantityInput
            type="number"
            className={spaceGrotesk.className}
            placeholder="e.g. 10"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
      </InputContainer>
    </>
  );
};
export default CoinInput;
