import { useRouter } from "next/navigation";

export const useGoNext = (href: string) => {
  const router = useRouter();
  const goNext = () => router.push(href);

  return goNext;
};
