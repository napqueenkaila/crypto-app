import { ChangeEvent, Dispatch, SetStateAction } from "react";
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
