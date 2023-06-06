// Mock latency with a delay function
export const delay = (ms: number = 1000) =>
  new Promise(resolve => setTimeout(resolve, ms));
