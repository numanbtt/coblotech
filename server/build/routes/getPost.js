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
const dhive_1 = require("@hiveio/dhive");
const route = express_1.default.Router();
//connect to server which is connected to the network/production
const client = new dhive_1.Client('https://api.hive.blog');
let opts = {};
//connect to production server
opts.addressPrefix = 'STM';
opts.chainId =
    'beeab0de00000000000000000000000000000000000000000000000000000000';
route.get('/getPost', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = req.body.filter;
    const query = {
        tag: req.body.tag,
        limit: req.body.limit,
    };
    let result = yield client.database.getDiscussions(filter, query);
    try {
        console.log("author: ", result[0].author);
        console.log("title: ", result[0].title);
        res.send(result[0]);
    }
    catch (error) {
        console.log("error: ", error);
    }
}));
exports.default = route;
