const fontSizeGenarator = () => {
  const fontSizes = [];
  for (let i = 2; i <= 72; i += 2) {
    fontSizes.push({ title: i.toString(), value: i.toString() });
  }
  return fontSizes;
};

export { fontSizeGenarator};
