import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FormDataState } from "./AddAssetModal";
import { StyledInput } from "@/app/styling/components/Portfolio/AddAssetModal/styled.FormComponents";

const AssetDate = ({
  selectedDate,
  setFormData,
}: {
  selectedDate: string;
  setFormData: Dispatch<SetStateAction<FormDataState>>;
}) => {
  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value <= today) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          selectedDate: value,
        };
      });
    }
  };

  return (
    <>
      <StyledInput
        type="date"
        max={today}
        value={selectedDate}
        placeholder="Purchased date"
        onChange={(e) => handleDateChange(e)}
      />
    </>
  );
};
export default AssetDate;
