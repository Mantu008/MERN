const buffer=new Buffer.from("Mantu")
console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString())
buffer.write("code")
console.log(buffer.toString())
// it wil not excead the given memory as we pass as to create buffere
buffer.write("javascript")  
console.log(buffer.toString()) 