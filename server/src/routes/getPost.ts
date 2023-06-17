import express from "express";
import { Client, Discussion } from '@hiveio/dhive'


const route = express.Router()
//connect to server which is connected to the network/production
const client = new Client('https://api.hive.blog');
// let opts: any = {};

// //connect to production server
// opts.addressPrefix = 'STM';
// opts.chainId =
//     'beeab0de00000000000000000000000000000000000000000000000000000000';

route.get('/getPost', async (req, res) => {
    const filter = req.body.filter;
    const query = {
        tag: req.body.tag,
        limit: req.body.limit,
    };
    let result = await client.database.getDiscussions(filter, query)
    try {
        result.forEach((post) => {
            console.log("author: ", post.author);
            console.log("title: ", post.title);
        })
        res.send(result)
    } catch (error) {
        console.log("error: ", error);
    }
})

route.get('/getBlog', async (req, res) => {
    const query = {
        tag: req.body.username,
        limit: req.body.limit,
    };
    let result = await client.database.getDiscussions('blog', query)
    try {
        result.forEach((post) => {
            console.log("author: ", post.author);
            console.log("title: ", post.title);
        })
        res.send(result)
    } catch (error) {
        console.log("error: ", error);
    }
})
export default route