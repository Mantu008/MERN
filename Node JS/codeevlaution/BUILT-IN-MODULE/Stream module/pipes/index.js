const fs=require("fs");
const zlib=require("zlib")

const readableStream=fs.createReadStream("./file.txt",{
  encoding:"utf-8",
  highWaterMark:2
});

const writableStream=fs.createWriteStream("./file2.txt")

readableStream.pipe(writableStream);