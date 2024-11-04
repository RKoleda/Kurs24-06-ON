import express from "express";
import cors from "cors";
import fs from "fs";

const server = express();
const PORT = 4000;

server.use(express.json());
server.use(cors());

server.get("/todos", (req, res) => {
    console.log("Hey, ich bekomme ein Get!");
    const todos = JSON.parse(fs.readFileSync("./todos.json", "utf-8"));
    res.json(todos);
});

console.log("Server Online");
server.listen(PORT);