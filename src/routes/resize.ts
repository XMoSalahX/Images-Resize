import express from "express";
const resizes = express.Router();
var fs = require("fs");
import _ from "../utilities/fun";
resizes.get("/resize", async (req, res) => {
  const query = req.query;
  const fileName = query.filename as string;
  const width = query.width as string;
  const height = query.height as string;
  const newName = query.newname as string;
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
      fs.readFile(`./assets/${fileName}.jpg`, function (err: unknown) {
        if (err !== null) {
          res.send("This Image isn't exist");
        } else {
          fs.readFile(`./assets/${newName}.jpg`, function (err: unknown) {
            if (err !== null) {
              fs.readFile(`./assets/${fileName}.jpg`, function (err: unknown) {
                if (err !== null) {
                  res.send("This Image isn't exist");
                } else {
                  console.log(query);
                  _.sharpFun(
                    fileName,
                    parseInt(width),
                    parseInt(height),
                    newName
                  );
                  setTimeout(() => {
                    fs.readFile(
                      `./assets/${newName}.jpg`,
                      function (err: any, data: unknown) {
                        if (err) throw err;
                        res.end(data);
                      }
                    );
                  }, 1000);
                }
              });
            } else {
              fs.readFile(
                `./assets/${newName}.jpg`,
                function (err: any, data: unknown) {
                  res.end(data);
                }
              );
            }
          });
        }
      });
    }
  }
});
export default resizes;
function isNum(width: string) {
  throw new Error("Function not implemented.");
}
