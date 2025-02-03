/* eslint-disable react/prop-types */

export const PrimaryButton = ({ text, colors, rounded, size, font }) => {
  return (
    <button
      className={`cursor-pointer flex items-center justify-center gap-2 ${
        colors ? colors : "bg-transparent text-light border-light border"
      }
    ${rounded ? rounded : "rounded-[8px]"}
    ${size ? size : "h-[47px] w-[195px]"}
    ${font ? font : "text-[18px] font-bold"}
    `}
    >
      {text}
    </button>
  );
};

export const SecondaryButton = ({ icon, text, colors, border, size, font }) => {
  return (
    <button
      className={`cursor-pointer flex items-center justify-center gap-[6px] ${
        colors ? colors : "bg-light text-dark"
      }
    ${border ? border : "rounded-[100px]"}
    ${size ? size : "px-[10px] py-[5px]"}
    ${font ? font : "text-[15.3px] font-[400]"}
    `}
    >
      {icon && icon}
      {text}
    </button>
  );
};