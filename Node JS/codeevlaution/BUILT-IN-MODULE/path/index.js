
const path=require("path");

//get the directory
console.log(__filename);
console.log(__dirname);


//for getting the basename
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

//for getting the extinsion
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

//for getting the properties objects represent signefecent elements of the path
console.log(path.parse(__filename));

//for getting the  path after parse method
console.log(path.format(path.parse(__filename)));

//for getting the  path is absolute or not (true or false)
console.log(path.isAbsolute(__filename));  //true
console.log(path.isAbsolute("./data.json"));  //false

//for getting the  contaction of given strings to /
console.log(path.join(__dirname
  ,"./data.json"));
console.log(path.join(__dirname
,"../data.json")); 



console.log();
console.log("resolve method...");


console.log(path.resolve("folder1","folder2","index.html"));
console.log(path.resolve("/folder1","folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","../index.html"));

console.log();

console.log(path.resolve(__dirname
  ,"./data.json"));
console.log(path.resolve(__dirname
,"../data.json")); 









