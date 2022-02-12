"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8001;
const resize_1 = __importDefault(require("./routes/resize"));
app.use("/resize", resize_1.default);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
exports.default = app;