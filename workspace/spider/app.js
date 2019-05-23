const request = require("request");
const { writeFile } = require("./util");
const { analyze } = require("./analyze")

request("https://m.dxy.com/column/4233").pipe(writeFile("./", "temp", "html"));

// request("https://m.dxy.com/column/4233").on(
//     "response",
//     function (res) {
//         let chunks = [];
//         res.on("data", function (chunk) {
//             chunks = chunks.concat(chunk);
//         });
//         res.on("end", function () {
//             let html = Buffer.concat(chunks);
//             let jsonData = analyze(html);
//             writeFile("./", "temp", "json").write(jsonData);
//         });
//     }
// );
