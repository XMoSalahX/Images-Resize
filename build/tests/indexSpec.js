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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const fun_1 = __importDefault(require("../utilities/fun"));
const request = (0, supertest_1.default)(index_1.default);
describe("Test endpoint for api", () => {
    it("gets the api endpoint for Image resize", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/resize?filename=santamonica&width=600&height=100");
        expect(response.status).toBe(200);
    }));
});
describe("Test image Proccess", () => {
    it("Image is valid", () => {
        expect(fun_1.default.sharpFun("Mohammed", 200, 100, "salah")).toEqual([200, 100]);
    });
});
