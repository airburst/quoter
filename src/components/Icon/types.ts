import { RefAttributes, CSSProperties } from "react";
import { DOMProps } from "@react-types/shared";

export interface IconSVGProps extends DOMProps, RefAttributes<SVGSVGElement> {
  style?: CSSProperties;
}

export type IconProps = IconSVGProps;
