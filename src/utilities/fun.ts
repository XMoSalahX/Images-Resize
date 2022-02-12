import sharp from "sharp";
const sharpFun = function (
  fileName: string,
  width: number,
  height: number,
  newName: string
): number[] {
  sharp(`./assets/${fileName}.jpg`)
    .resize(width, height)
    .toFile(`./assets/${newName}.jpg`);

  if (typeof width === "number" && typeof height === "number") {
    return [width, height];
  }
  return [width, height];
};
const _ = {
  sharpFun,
};
export default _;
