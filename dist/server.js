"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    static bootstrap() {
        return new Server();
    }
    config() {
    }
    routes() {
        this.app.get('/', function (req, res) {
            res.send('work!');
        });
    }
    api() {
    }
}
exports.Server = Server;
