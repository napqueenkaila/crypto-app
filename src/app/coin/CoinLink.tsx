import styled from "styled-components";
import { CopyIcon, LinkIcon } from "@/app/components/SVGs";

const LinkDiv = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 12px;
  background-color: #1e1932;
  padding: 16px 24px;
  max-width: fit-content;
`;

const CoinLink = ({link}: {link:string}) => {
  return (
    <LinkDiv>
      <LinkIcon />
      <div>{link}</div>
      <CopyIcon />
    </LinkDiv>
  );
};
export default CoinLink;
