import { type StaticImageData } from "next/image";

export type BrandProps = {
  imageData: StaticImageData;
  desiredHeight?: number;
};

export const Brand = ({ imageData, desiredHeight }: BrandProps) => {
  const actualHeight = desiredHeight ?? imageData.height;

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={imageData.src} height={actualHeight} alt="" />;
};
