import dates from "./dates";

export function getDayCycle() {
  const normalizedDate = normalizeDate(new Date());
  const cycle = dates[normalizedDate];
  return cycle;
}

function normalizeDate(date) {
  // local timezone
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
}
