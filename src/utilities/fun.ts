import sharp from "sharp";
const sharpFun = function (
  fileName: string,
  width: number,
  height: number,
  newName: string
): number[] {
  sharpInAction(fileName, width, height, newName);
  if (typeof width === "number" && typeof height === "number") {
    return [width, height];
  }
  return [width, height];
};

const sharpInAction = async function (
  fileName: string,
  width: number,
  height: number,
  newName: string
) {
  try {
    await sharp(`./assets/${fileName}.jpg`)
      .resize(width, height)
      .toFile(`./assets/${newName}.jpg`);
  } catch {
    console.log("Error in image process");
  }
};
const _ = {
  sharpFun,
  sharpInAction,
};
export default _;
