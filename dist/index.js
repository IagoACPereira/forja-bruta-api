"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./api/app"));
const port = Number(process.env.PORTA) || 3000;
app_1.default.listen(port, () => console.log(`API rodando em http://localhost:${port}${process.env.ENDPOINT_RAIZ}`));
//# sourceMappingURL=index.js.map