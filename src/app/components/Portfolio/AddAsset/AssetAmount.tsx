import { Dispatch, SetStateAction } from "react";
import { FormDataState } from "./AddAssetModal";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: #232336;
  border: none;
  width: 100%;
  border-radius: 4px;
  padding: 8px;
  color: #ffffffb2;
  font-size: 16px;
`;

const AssetAmount = ({
  selectedAmount,
  setFormData,
}: {
  selectedAmount: string;
  setFormData: Dispatch<SetStateAction<FormDataState>>;
}) => {
  const handleAmountChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    if (value >= 0) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          selectedAmount: value,
        };
      });
    }
  };

  return (
    <StyledInput
      type="number"
      placeholder="Purchased amount"
      value={selectedAmount}
      min="0"
      onChange={handleAmountChange}
    />
  );
};
export default AssetAmount;
