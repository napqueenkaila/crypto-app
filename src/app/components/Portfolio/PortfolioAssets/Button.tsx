import { EditIcon } from "../../SVGs";

const Button = ({
  handleClick,
  id,
}: {
  handleClick: (id: string) => void;
  id: string;
}) => {
  return (
    <button onClick={() => handleClick(id)} style={{ backgroundColor: "none" }}>
      <EditIcon />
    </button>
  );
};
export default Button;
