import http from "http";
console.log("Server started")

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
    res.end("Hello, world!")
})

server.listen(4000);    