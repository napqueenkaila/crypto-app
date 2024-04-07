import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import SelectSearch, {
  DomProps,
  OptionSnapshot,
  SelectedOption,
} from "react-select-search";
import "react-select-search/style.css";

interface Props {
  options: { name: string; value: string; image: string }[] | undefined;
  coin: string;
  setCoin: Dispatch<SetStateAction<string>>;
}

const SelectWithSearch = ({ options, coin, setCoin }: Props) => {
  const renderCoin = (
    props: DomProps,
    option: SelectedOption,
    snapshot: OptionSnapshot,
    className: string
  ) => {
    return (
      <button {...props} className={className} type="button">
        <span>
          <Image src={option.image} alt="" width={25} height={25} />
          <span>{option.name}</span>
        </span>
      </button>
    );
  };

  return (
    <>
      <SelectSearch
        value={coin}
        onChange={setCoin}
        placeholder="Select a coin"
        options={options}
        renderOption={renderCoin}
        search
      />
    </>
  );
};
export default SelectWithSearch;
