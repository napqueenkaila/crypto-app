import { setCurrency } from "@/app/redux/features/currencySlice";
import { useAppDispatch } from "@/app/redux/hooks";
import { CurrencyDiv, StyledSelect } from "@/app/styling/components/Navbar/styled.navbar";
import { DollarIcon } from "../SVGs";

const CurrencySelect = ({ darkMode }: { darkMode: boolean }) => {
    const dispatch = useAppDispatch();
    const handleCurrencyChange = (e: { target: { value: string } }) => {
      dispatch(setCurrency(e.target.value));
    };
    return (
      <CurrencyDiv>
        <label>
          <DollarIcon darkMode={darkMode} />
        </label>
        <StyledSelect onChange={handleCurrencyChange}>
          <option value="usd">USD</option>
          <option value="gbp">GBP</option>
          <option value="eur">EUR</option>
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
        </StyledSelect>
      </CurrencyDiv>
    );
};
export default CurrencySelect;
