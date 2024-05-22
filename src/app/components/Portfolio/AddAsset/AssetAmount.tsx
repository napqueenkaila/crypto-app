import { Dispatch, SetStateAction } from "react";
import { FormDataState } from "./AddAssetModal";
import { StyledInput } from "@/app/styling/components/Portfolio/AddAssetModal/styled.FormComponents";

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
