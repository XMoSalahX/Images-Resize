import express from "express";
const resizes = express.Router();
import sharp from "sharp";
var fs = require("fs");
import check from "../utilities/fun";

resizes.get(`/`, async (req, res) => {
  const query = req.query;
  const fileName = query.filename as string;
  const width = query.width as string;
  const height = query.height as string;
  const newName = query.newname;
  check(fileName);
  if (
    fileName === undefined &&
    width === undefined &&
    height === undefined &&
    newName === undefined
  ) {
    const callB = check(fileName);
    if (callB === undefined) {
      res.send("Error");
    }
  } else {
    fs.readFile(`./assets/${newName}.jpg`, function (err: any) {
      if (err !== null) {
        fs.readFile(`./assets/${fileName}.jpg`, function (err: any) {
          if (err !== null) {
            res.send("This Image isn't exisit");
          } else {
            console.log(query);
            sharp(`./assets/${fileName}.jpg`)
              .resize(parseInt(width), parseInt(height))
              .toFile(`./assets/${newName}.jpg`);
            setTimeout(() => {
              fs.readFile(
                `./assets/${newName}.jpg`,
                function (err: any, data: any) {
                  if (err) throw err;
                  res.end(data);
                }
              );
            }, 1000);
          }
        });
      } else {
        fs.readFile(`./assets/${newName}.jpg`, function (err: any, data: any) {
          res.end(data);
        });
      }
    });
  }
});
export default resizes;
