export const ArrowIcon = ({ isPositive }: { isPositive: boolean }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 8 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isPositive ? (
        <path
          d="M4.00065 0.333008L0.667318 3.66634L7.33398 3.66634L4.00065 0.333008Z"
          fill="#01F1E3"
        />
      ) : (
        <path
          d="M3.99935 3.66699L7.33268 0.333659L0.666016 0.333659L3.99935 3.66699Z"
          fill="#FE2264"
        />
      )}
    </svg>
  );
};
