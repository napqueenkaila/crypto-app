import styled from "styled-components";
import { EditIcon, TrashIcon } from "../../SVGs";

const StyledButton = styled.div`
  background-color: #3a3978;
  padding: 8px;
  border-radius: 4px;
  border: none;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

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
