import express from "express"
import cors from "cors"

const server = express();
const PORT = 4000

server.use(express.json()); 
server.use(cors());

let todos =   [
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
];

server.get("/todos", (req, res) => { 
    console.log("Hey, ich bekomme ein Get!")
    res.json(todos)
});


console.log("Server Online")
server.listen(PORT)