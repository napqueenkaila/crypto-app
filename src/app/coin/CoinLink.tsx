import Link from "next/link";
import { useAppSelector } from "../redux/hooks";
import { selectDarkMode } from "../redux/features/darkModeSlice";
import { CopyIcon, LinkIcon } from "@/app/components/SVGs";
import { LinkDiv } from "../styling/components/CoinPage/styled.CoinLink";

const CoinLink = ({ link }: { link: string }) => {
  const { darkMode } = useAppSelector(selectDarkMode);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <LinkDiv>
      <Link href={link}>
        <LinkIcon darkMode={darkMode} />
      </Link>
      <div>{link}</div>
      <CopyIcon darkMode={darkMode} copyToClipboard={copyToClipboard} />
    </LinkDiv>
  );
};
export default CoinLink;
