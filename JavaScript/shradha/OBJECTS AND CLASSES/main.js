const student={
        stdName:"mantu Kumar Morya",
        marks:85,

        printStuDetail:function(){
            console.log(`Student Name = ${this.stdName} and Marks is = ${this.marks}%`);
        },
};

    student.printStuDetail();
    console.log("name of the student is:-",student.stdName);
    console.log("marks of the student is:-",student.marks);


let arr=["apple","banana","litchi"];
console.log(typeof arr);
arr.push("naspati");    
console.log(arr);


 // creat prototype.....
 console.log("\nprototype");
const employee={
    calTax1(){
        console.log("tax is 10%");
    },

    calTax2:function(){
       console.log("tax is 20%");
    },
};

const mantu={
    salary:1000,
}

const mantu2={
    salary:1000,
}

const mantu3={
    salary:1000,
}

const mantu4={
    salary:2000,
    calTax1(){
      console.log("tax is 30%");
    }
}


//here one object method is use for diff diff refrence objects using prototype it is avoid to creat same method for diff diff objects

 mantu.__proto__=employee;
 console.log("for mantu...");
 mantu.calTax1();
 mantu.calTax2();

 mantu2.__proto__=employee;
 console.log("for mantu2...");
 mantu2.calTax1();
 mantu2.calTax2();

 mantu3.__proto__=employee;
 console.log("for mantu3...");
 mantu3.calTax1();
 mantu3.calTax2();

 mantu4.__proto__=employee;
 console.log("for mantu4...");
 //here the object method is override the prototype method (in that type of situation)
 mantu4.calTax1();      
 mantu4.calTax2();




 //  objects throught classess...

 console.log("\nobjects and classes");

 class Toyotacar{

      constructor(name){
           console.log(`${name} is creatred the object`);
           console.log("creating object with an argument..");
      }

      start(){
        console.log("start..");
      }

      stop(){
        console.log("stop..");
      }

      horn(){
        console.log("po..Po..");
      }

      setbrandName(brand){
        this.brand=brand;
      }
 }


 let fortuner=new Toyotacar("mantu");
 fortuner.setbrandName("fortuner");
 fortuner.start();
 fortuner.stop();
 fortuner.horn();
 let lexes=new Toyotacar("sahil");
 lexes.setbrandName("lexus");
 lexes.start();
 lexes.stop();
 lexes.horn();




 // inharitance....

 console.log("\ninharitance");

 class parent{
     hello(){
        console.log("hello..");
     }
     hii(){
        console.log("hiii..");
     }
 }


 class child extends parent{
       
 }

 let obj=new child();

 obj.hello();


 console.log("\ninharitance other example");

 class person{
    constructor(){
        this.spsies="homo sepions..";
        console.log(this.spsies);
    }
    eat(){
        console.log("eat..");
    }
    sleep(){
        console.log("sleep..");
    }

    work(){
        console.log("work..");
    }
 }

 class Engineer extends person{
    work(){
         console.log("solving problom..");
    }
 }

  let eng=new Engineer();
  eng.work();
  eng.eat();

 class Doctor extends person{
    work(){
         console.log("Treat Patient..");
    }
 }

 let doc=new Doctor();
 doc.work();
 doc.eat();


 // super keyword


class parent1{
   constructor(){
      console.log("i am a constructor of parent");
   }
}

class child1 extends parent1{
     constructor(){
         super();
         console.log("i am a constructor of child");
     }
}

let o=new child1();




//practice set

let Data="i am mantu";


class user{
    constructor(name,email){
       this.name=name;
       this.email=email;
    }

    viewData(){
       console.log(this.name+" "+this.email);
    }
}

 let stusent1=new user("mantu","mantukumar87@gmail.com")
 stusent1.viewData();

 let stusent2=new user("ashish","ashish@123gmail.com")
 stusent2.viewData();


class admin extends user{
    constructor(name,email){
         super();
         this.name=name;
         this.email=email;
    }
    editData(){
      Data="i am admin";
      console.log(Data);
    }
}

let adm=new admin("ppp","kkk");
adm.viewData();
adm.editData();




//eror handling


a=10;
b=20;
console.log(a);
console.log(b);
console.log(a+b);
try {
    console.log(a+b+c);
} catch (err) {
     console.log(err);
}
console.log((a+b)+(a-b));