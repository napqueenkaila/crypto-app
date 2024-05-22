import { FilterIcon } from "../SVGs";

interface PropType {
  text: string;
  value?: string;
}

const ColumnHeader = ({
  column,
  handleSort,
}: {
  column: PropType;
  handleSort: (column: string | undefined) => void;
}) => {

  return (
    <div>
      {column.text}
      {column.value && (
        <FilterIcon
          handleSort={() => handleSort(column.value)}
          text={column.text}
        />
      )}
    </div>
  );
};
export default ColumnHeader;
