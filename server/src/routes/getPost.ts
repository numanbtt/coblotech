import express from "express";
import { Client, Discussion } from '@hiveio/dhive'


const route = express.Router()
//connect to server which is connected to the network/production
const client = new Client('https://api.hive.blog');
let opts: any = {};

//connect to production server
opts.addressPrefix = 'STM';
opts.chainId =
    'beeab0de00000000000000000000000000000000000000000000000000000000';

route.get('/getPost', async (req, res) => {
    const filter = req.body.filter;
    const query = {
        tag: req.body.tag,
        limit: req.body.limit,
    };
    let result = await client.database.getDiscussions(filter, query)
    try {
        console.log("author: ", result[0].author);
        console.log("title: ", result[0].title);
        res.send(result[0])
    } catch (error) {
        console.log("error: ", error);
    }
})

export default route