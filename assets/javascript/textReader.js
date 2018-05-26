function readTextFile(filePathName) {
    import fs from "fs";
    // fs.readFileSync(filePathName, "utf8", function(error, data) {
    //     return data;
    // })
    let data = fs.createReadStream(filePathName);
    let rl = require("readline").createInterface( {
        input: data,
        terminal: false
    });
    let textArray = [];
    rl.on("line", function(line) {
        textArray.push(line);
    })
    return textArray;
}
