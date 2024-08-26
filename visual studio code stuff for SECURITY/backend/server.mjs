import http from "http"

const PORT = 3000

const server = http.createServer((req,res) => {
    res.end("im crying less because its working")
})

server.listen(PORT)
