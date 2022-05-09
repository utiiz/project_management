"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.port || 5000;
app.use((0, cors_1.default)());
app.options('*', (0, cors_1.default)());
app.get("/", (req, res) => {
    var users = [
        { id: 1, firstname: 'Tanguy', lastname: 'Kervran', username: 'utiiz' },
        { id: 2, firstname: 'Laura', lastname: 'Pagnucco', username: 'awa' },
        { id: 3, firstname: 'Adrien', lastname: 'Rioual', username: 'mavys' },
    ];
    res.json(users);
});
app.listen(port, () => {
    console.info(`⚡️Listening on port ${port}`);
});
