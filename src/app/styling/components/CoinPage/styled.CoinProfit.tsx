import styled from "styled-components";
import { ArrowIcon } from "@/app/components/SVGs";

const ProfitDiv = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.coinPage.blockBackgroundColor};
  max-width: fit-content;
  padding: 40px 56px;
  grid-area: profit;
`;

const CurrentPrice = styled.div`
  font-weight: 700;
  font-size: 28px;
`;

const AllTimeDiv = styled.div`
  display: grid;
  grid-template-areas:
    "arrow title"
    "arrow date";
  place-items: center left;
`;

const StyledArrow = styled(ArrowIcon)`
  grid-area: arrow;
`;

const AllTimeTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  grid-area: title;
  text-overflow: ellipsis;
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 20px;
`;

const AllTimeDate = styled.div`
  color: ${({theme})=> theme.coinPage.allTimeDateColor};
  font-weight: 400;
  font-size: 14px;
  grid-area: date;
`;

export {
  ProfitDiv,
  CurrentPrice,
  AllTimeDiv,
  AllTimeTitle,
  AllTimeDate,
  StyledArrow,
  StyledSpan,
};
