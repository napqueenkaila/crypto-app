import styled from "styled-components";
import { CopyIcon, LinkIcon } from "@/app/components/SVGs";
import Link from "next/link";

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
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <LinkDiv>
      <Link href={link}>
        <LinkIcon />
      </Link>
      <div>{link}</div>
      <CopyIcon copyToClipboard={copyToClipboard} />
    </LinkDiv>
  );
};
export default CoinLink;
