export const getDataRandom = () => {
  const data = [];
  const count = Math.round(Math.random() * 20);
  for (let i = 0; i < count; i += 1) {
    const item = {
      name: `Page ${i}`,
      line1: Math.round(Math.random() * (1000 + 1))
    };
    data.push(item);
  }
  return data;
};
