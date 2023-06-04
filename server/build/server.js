"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const getPost_1 = __importDefault(require("./routes/getPost"));
const port = 3000;
app.use(express_1.default.json());
app.use("/api", getPost_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
