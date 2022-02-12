"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizes = express_1.default.Router();
var fs = require("fs");
const fun_1 = __importDefault(require("../utilities/fun"));
resizes.get("/resize", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const fileName = query.filename;
    const width = query.width;
    const height = query.height;
    const newName = query.newname;
    if (fileName === undefined &&
        width === undefined &&
        height === undefined &&
        newName === undefined) {
        res.send("Error");
    }
    else {
        fs.readFile(`./assets/${newName}.jpg`, function (err) {
            if (err !== null) {
                fs.readFile(`./assets/${fileName}.jpg`, function (err) {
                    if (err !== null) {
                        res.send("This Image isn't exisit");
                    }
                    else {
                        console.log(query);
                        fun_1.default.sharpFun(fileName, parseInt(width), parseInt(height), newName);
                        setTimeout(() => {
                            fs.readFile(`./assets/${newName}.jpg`, function (err, data) {
                                if (err)
                                    throw err;
                                res.end(data);
                            });
                        }, 1000);
                    }
                });
            }
            else {
                fs.readFile(`./assets/${newName}.jpg`, function (err, data) {
                    res.end(data);
                });
            }
        });
    }
}));
exports.default = resizes;
