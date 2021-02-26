export const getRandomIndex = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
