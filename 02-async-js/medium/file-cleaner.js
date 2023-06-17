const fs = require('fs');

const fileCleaner = (filePath) => {
    try {
        const contents = fs.readFileSync(filePath, { encoding: 'utf-8' });
        const cleanedArr = contents.split(" ").filter((x) => x !== " " && x !== "");
        const cleanedStr = cleanedArr.join(" ");
        return cleanedStr;
    }
    catch (err) {
        console.log(err);
    }
}
fileCleaner('./1-file-cleaner.md');