import { Dispatch, SetStateAction } from "react";
import { FormDataState } from "./AddAssetModal";

const AssetDate = ({
  setFormData,
}: {
  setFormData: Dispatch<SetStateAction<FormDataState>>;
}) => {
  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e) => {
    const { value } = e.target;
    if (value > today) {
      alert("Please select a date in the past or today.");
      return;
    } else {
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
        placeholder="Purchased date"
        onChange={(e) => handleDateChange(e)}
      />
    </div>
  );
};
export default AssetDate;
