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

  const formatDate = (dateString: string) => {
    const dateParts = dateString.split("-");
    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value > today) {
      alert("Please select a date in the past or today.");
      return;
    } else {
      const formattedDate = formatDate(value);
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          selectedDate: formattedDate,
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
