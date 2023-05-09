import { ReactNode } from "react";

export const Feature = ({
  icon,
  title,
  description,
  children,
}: {
  icon: string;
  title: string;
  description: string;
  children?: ReactNode;
}) => {
  return (
    <li>
      {/* <img src={icon} /> */}
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </li>
  );
};
