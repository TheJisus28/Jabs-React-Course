import kings from "./kings";

const usableKings = Object.entries(kings)
  /* eslint-disable no-unused-vars */
  .filter(([_, king]) => king.name.toLowerCase() !== "incognito")
  .slice(0, 6)
  .map(([key, king]) => ({
    key,
    ...king,
  }));
export default usableKings;
