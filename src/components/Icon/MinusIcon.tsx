import { IconProps } from "./types";

export const MinusIcon = (props: IconProps) => {
  const { ref, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      {...otherProps}
    >
      <path d="M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32z"></path>
    </svg>
  );
};
