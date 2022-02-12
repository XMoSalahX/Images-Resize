"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const sharpFun = function (fileName, width, height, newName) {
    (0, sharp_1.default)(`./assets/${fileName}.jpg`)
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
exports.default = _;
