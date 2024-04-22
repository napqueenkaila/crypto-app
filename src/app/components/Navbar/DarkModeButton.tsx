import { useAppDispatch } from "@/app/redux/hooks";
import { toggle } from "@/app/redux/features/darkModeSlice";
import { DarkModeIcon } from "../SVGs";
import { StyledModeBtn } from "@/app/styling/components/Navbar/styled.navbar";

const DarkModeButton = ({ darkMode }: { darkMode: boolean }) => {
  const dispatch = useAppDispatch();

  const toggleDarkMode = () => {
    dispatch(toggle());
  };

  return (
    <StyledModeBtn onClick={toggleDarkMode}>
      <DarkModeIcon darkMode={darkMode} />
    </StyledModeBtn>
  );
};

export default DarkModeButton;
