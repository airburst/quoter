import { atom } from "jotai";

type Step = {
  label: string;
  href: string;
  completed: string;
};

type NavState = {
  steps: Step[];
  currentStep: number;
};

export const navigationAtom = atom<NavState>({
  steps: [
    {
      label: "Welcome",
      href: "/trade",
      completed: "0",
    },
    {
      label: "Coverage",
      href: "/what-you-do",
      completed: "0",
    },
    {
      label: "General Liability",
      href: "/general-liability",
      completed: "0",
    },
    {
      label: "Quotes",
      href: "/quotes",
      completed: "0",
    },
    {
      label: "Checkout",
      href: "/checkout",
      completed: "0",
    },
  ],
  currentStep: 0,
});
