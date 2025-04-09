const getOpacityColor = (color: string, opacity: number) => {
  return color.replace("1)", opacity.toString());
};

export { getOpacityColor };
