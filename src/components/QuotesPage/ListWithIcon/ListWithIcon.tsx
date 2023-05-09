import { ListItem } from "./ListItem";

export const ListWithIcon = ({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) => {
  return (
    <>
      <span>{title}</span>
      <ul>
        <ListItem icon={icon}>General Liability</ListItem>
        <ListItem icon={icon}>Additional Insureds</ListItem>
        <ListItem icon={icon}>No Deductibles</ListItem>
      </ul>
    </>
  );
};
