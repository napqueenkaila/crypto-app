import { useState } from "react";
import styled from "styled-components";

const DescriptionDiv = styled.div`
  grid-area: description;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 15px;
`;

const StyledButton = styled.button`
  background: none;
  color: #5a4fcf;
  border: none;
  display: inline;
`;

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
      <div dangerouslySetInnerHTML={{ __html: clippedText }}></div>
      {!showFullText && (
        <StyledButton onClick={toggleDescription}>read more</StyledButton>
      )}
    </DescriptionDiv>
  );
};

export default CoinDescription;
