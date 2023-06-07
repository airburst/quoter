const DEFAULT_DELAY_IN_MS = 1000;

// Mock latency with a delay function
export const delay = (ms: number = DEFAULT_DELAY_IN_MS) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const randomId = () => {
  const RANDOM_MULTIPLIER = 100;

  return Math.floor(Math.random() * RANDOM_MULTIPLIER).toString();
};
