import { StyledSVGContainer } from "@/app/styling/components/SVGs/styled.SVG";

export const CloseCircle = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  return (
    <StyledSVGContainer>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      onClick={handleCloseModal}
      >
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.17188 14.8299L14.8319 9.16992"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.8319 14.8299L9.17188 9.16992"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledSVGContainer>
  );
};
