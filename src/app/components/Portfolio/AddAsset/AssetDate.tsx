import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FormDataState } from "./AddAssetModal";

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
    <div>
      <input
        type="date"
        max={today}
        value={selectedDate}
        placeholder="Purchased date"
        onChange={(e) => handleDateChange(e)}
      />
    </div>
  );
};
export default AssetDate;
