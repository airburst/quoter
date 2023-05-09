import { ReactNode } from "react";

export const ListItem = ({
  icon,
  children,
}: {
  icon: string;
  children: ReactNode;
}) => {
  return (
    <li>
      {/* <img src={icon} /> */}
      {children}
    </li>
  );
};
