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
const sharp_1 = __importDefault(require("sharp"));
const sharpFun = function (fileName, width, height, newName) {
    sharpInAction(fileName, width, height, newName);
    if (typeof width === "number" && typeof height === "number") {
        return [width, height];
    }
    return [width, height];
};
const sharpInAction = function (fileName, width, height, newName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, sharp_1.default)(`./assets/${fileName}.jpg`)
                .resize(width, height)
                .toFile(`./assets/${newName}.jpg`);
        }
        catch (_a) {
            console.log("Error in image process");
        }
    });
};
const _ = {
    sharpFun,
    sharpInAction,
};
exports.default = _;
