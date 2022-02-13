import express from "express";
const resizes = express.Router();
var fs = require("fs");
import _ from "../utilities/fun";
resizes.get("/resize", async (req: express.Request, res: express.Response) => {
  const query = req.query;
  const fileName = query.filename as string;
  const width = query.width as string;
  const height = query.height as string;
  const newName: string = `${fileName}-${width}-${height}`;
  if (
    fileName === undefined &&
    width === undefined &&
    height === undefined &&
    newName === undefined
  ) {
    res.send("Error");
  } else {
    if (isNaN(Number(width))) {
      res.send("Width must be a number");
    } else if (isNaN(Number(height))) {
      res.send("Height must be a number");
    } else {
      fs.readFile(
        `./assets/${newName}.jpg`,
        function (err: unknown, data: unknown) {
          if (err === null) {
            res.end(data);
          } else {
            fs.readFile(
              `./assets/${fileName}.jpg`,
              async function (err: unknown, data: unknown) {
                if (err === null) {
                  console.log(query);
                  await _.sharpInAction(
                    fileName,
                    parseInt(width),
                    parseInt(height),
                    newName
                  );
                  res.end(data);
                } else {
                  res.send("This Image isn't exist");
                }
              }
            );
          }
        }
      );
    }
  }
});
export default resizes;
function isNum(width: string) {
  throw new Error("Function not implemented.");
}
