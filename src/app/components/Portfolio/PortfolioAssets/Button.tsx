import { EditIcon, TrashIcon } from "../../SVGs";
import { StyledButton } from "@/app/styling/components/Portfolio/PortfolioAssets/styled.Button";

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
    <StyledButton>
      {type === "trash" ? (
        <TrashIcon handleClick={handleClick} id={id} />
      ) : (
        <EditIcon handleClick={handleClick} id={id} />
      )}
    </StyledButton>
  );
};
export default Button;
