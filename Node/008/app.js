const http = require("http");
const server = http.createServer(function (req, res) {
    console.log("server가 구동중입니다.");
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    res.write("hello world");
    res.end();
});

// 테스트 서버로 많이 사용하는 port
// 8080 서버로 노드를 실행시켜라
server.listen(8080);
