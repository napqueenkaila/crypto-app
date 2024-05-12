import { EditIcon, TrashIcon } from "../../SVGs";

const Button = ({
  handleClick,
  id,
  type,
}: {
  handleClick: (id: string) => void;
  id: string;
  type: string;
}) => {
  return (
    <button
      onClick={() => handleClick(id)}
      style={{ backgroundColor: "black" }}
    >
      {type === "trash" ? <TrashIcon /> : <EditIcon />}
    </button>
  );
};
export default Button;
