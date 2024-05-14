import { useState } from "react";
import {
  DescriptionDiv,
  Title,
  StyledButton,
  ClippedText,
} from "../styling/components/CoinPage/styled.CoinDescription";

const CoinDescription = ({ description }: { description: string }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleDescription = () => {
    setShowFullText(!showFullText);
  };

  const clippedText = showFullText
    ? description
    : `${description.slice(0, description.length / 3)}...`;

  return (
    <DescriptionDiv>
      <Title>Description</Title>
      <ClippedText
        dangerouslySetInnerHTML={{ __html: clippedText }}
      ></ClippedText>
      {!showFullText && (
        <StyledButton onClick={toggleDescription}>read more</StyledButton>
      )}
    </DescriptionDiv>
  );
};

export default CoinDescription;
