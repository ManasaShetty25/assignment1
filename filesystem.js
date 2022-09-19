const fs = require("fs");

async function writeFile(filename,txt) {
    try{
        await fs.promises.writeFile(filename,txt);
        console.log("file successful created");

    } catch (err) {
        console.log(err);
    }
}
writeFile("HIIIII!!", "MANASA HERE");