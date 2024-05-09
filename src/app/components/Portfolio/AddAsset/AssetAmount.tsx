import { Dispatch, SetStateAction } from "react";
import { FormDataState } from "./AddAssetModal";

const AssetAmount = ({
  setFormData,
}: {
  setFormData: Dispatch<SetStateAction<FormDataState>>;
}) => {
  const handleAmountChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    if (value < 1) {
      alert("Please select an amount greater than 0");
      return;
    } else {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          selectedAmount: value,
        };
      });
    }
  };
  return (
    <input
      type="number"
      placeholder="Purchased amount"
      min="0"
      onChange={handleAmountChange}
    />
  );
};
export default AssetAmount;
