const COMPLETED = 100;
const HALF = 50;
const THREE_QUARTERS = 75;

// Plain numbers
const TEN = 10;
const EIGHTEEN = 18;
const TWENTY_SIX = 26;
const THIRTY_FOUR = 34;
const FOURTY_TWO = 42;
const FIFTY_EIGHT = 58;
const SIXTY_SIX = 66;
const SEVENTY_FOUR = 74;
const EIGHTY_TWO = 82;
const NINETY = 90;
const NINETY_EIGHT = 98;

export const getProgress: Record<string, number[]> = {
  "/trade": [HALF],
  "/location": [COMPLETED],
  "/what-you-do": [COMPLETED, HALF],
  "/coverages": [COMPLETED, THREE_QUARTERS],
  "/general-liability": [COMPLETED, COMPLETED, TEN],
  "/general-liability/info": [COMPLETED, COMPLETED, TEN],
  "/general-liability/policy-holder": [COMPLETED, COMPLETED, EIGHTEEN],
  "/general-liability/customer": [COMPLETED, COMPLETED, TWENTY_SIX],
  "/general-liability/about-your-business": [COMPLETED, COMPLETED, THIRTY_FOUR],
  "/general-liability/business-location": [COMPLETED, COMPLETED, FOURTY_TWO],
  "/general-liability/employees": [COMPLETED, COMPLETED, HALF],
  "/general-liability/costs": [COMPLETED, COMPLETED, FIFTY_EIGHT],
  "/general-liability/work": [COMPLETED, COMPLETED, SIXTY_SIX],
  "/general-liability/work-continued": [COMPLETED, COMPLETED, SEVENTY_FOUR],
  "/general-liability/previous-coverage": [COMPLETED, COMPLETED, EIGHTY_TWO],
  "/general-liability/business-address": [COMPLETED, COMPLETED, NINETY],
  "/general-liability/customise-quotes": [COMPLETED, COMPLETED, NINETY_EIGHT],
  "/general-liability/coverage-start": [COMPLETED, COMPLETED, COMPLETED],
  "/quotes": [COMPLETED, COMPLETED, COMPLETED, HALF],
};
