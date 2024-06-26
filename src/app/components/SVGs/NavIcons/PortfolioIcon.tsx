export const PortfolioIcon = ({
  darkMode,
  active,
}: {
  darkMode: boolean;
  active: boolean;
}) => {
  const fillColor = () => {
    if (darkMode && active) {
      return "#FFFFFF";
    } else if (darkMode && !active) {
      return "#FFFFFF80";
    } else {
      return "#353570";
    }
  };
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 12L12.5 18L3.5 12M21.5 16L12.5 22L3.5 16M21.5 8L12.5 14L3.5 8L12.5 2L21.5 8Z"
        stroke={fillColor()}
        strokeOpacity={active ? "1" : ".5"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
