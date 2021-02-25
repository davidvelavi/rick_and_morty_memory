export const getRandomIndex = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
