// Years with references
export const YEARS_START = 1975;
export const YEARS_END = 2023;
export const YEARS = [YEARS_START, YEARS_END];

// Ages we want to show references to
export const AGES_START = 12;
export const AGES_END = 18;
export const AGES = [AGES_START, AGES_END];

// Number of references to show
export const MIN_YEARS = 3;
export const MAX_YEARS = AGES_END - AGES_START;

// Years to show in the input
export const YEARS_INPUT_START = YEARS_START + MIN_YEARS - AGES_END - 1;
export const YEARS_INPUT_END = YEARS_END - MIN_YEARS - AGES_START + 1;
export const YEARS_INPUT = [YEARS_INPUT_START, YEARS_INPUT_END];

export const yearsRangeFromInput = (yearInput) => {
  const yearInputInt = parseInt(yearInput, 10);

  const start = Math.max(YEARS_START, yearInputInt + AGES_START);
  const end = Math.min(YEARS_END, yearInputInt + AGES_END);

  return [start, end];
};

export const yearsFromInput = (yearInput) => {
  const range = yearsRangeFromInput(yearInput);

  return Array.from(
    { length: range[1] - range[0] + 1 },
    (_, i) => range[0] + i
  );
};
