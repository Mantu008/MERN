const SuperHero=require('./super-hero')
const batman=new SuperHero("Batman");
console.log(batman.getName());
batman.setName("Brouse Bane")
console.log(batman.getName());

const superman=new SuperHero("Superman")
console.log(superman.getName());
