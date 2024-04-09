import styled from "styled-components";
import { CopyIcon, LinkIcon } from "@/app/components/SVGs";
import Link from "next/link";
import { useAppSelector } from "../redux/hooks";
import { selectDarkMode } from "../redux/features/darkModeSlice";

const LinkDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.coinPage.blockBackgroundColor};
  color: ${({ theme }) => theme.coinPage.textColor};
  padding: 16px 24px;
`;

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
