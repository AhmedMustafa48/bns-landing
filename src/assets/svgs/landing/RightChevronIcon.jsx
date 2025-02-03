/* eslint-disable react/prop-types */
const RightChevronIcon = ({ width = 12, height = 18 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.71167 9.41211L10.6944 9.41212"
        stroke="#262627"
        strokeWidth="1.41176"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.70325 4.42078L10.6946 9.41216L5.70327 14.4035"
        stroke="#262627"
        strokeWidth="1.41176"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightChevronIcon;
