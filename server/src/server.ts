import express from 'express';
const app = express();
import getPostRouter from "./routes/getPost";
const port = 3000;

app.use(express.json())
app.use("/api", getPostRouter)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});