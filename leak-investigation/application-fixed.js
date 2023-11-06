const http = require("http");

let theThing = null;
const replaceThing = function () {
    let originalThing = theThing;

    const unused = function () {
        if (originalThing) {
            console.log("Look! I'm unused function!");
        }
    };

    theThing = {
        longStr: new Array(10000).join("*"),
        someMethod: function () {
            console.log("This is message from 'someMethod()'");
        },
    };
    originalThing = null;
};

const server = http.createServer((req, res) => {
    replaceThing();
    res.writeHead(200);
    res.end("Hello World");
});

server.listen(3000);
console.log("Server is running on port 3000");
