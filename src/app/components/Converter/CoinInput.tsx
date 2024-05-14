import Image from "next/image";
import { useState } from "react";
import Search from "./Search";
import { DownArrow } from "../SVGs/DownArrow";
import { CoinInputProps } from "@/app/types/interfaces/converter.interfaces";
import {
  HeaderText,
  InputContainer,
  CoinContainer,
  CoinName,
  QuantityInput,
} from "@/app/styling/components/Converter/styled.CoinInput";
import { spaceGrotesk } from "@/app/styling/theme/font";

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
