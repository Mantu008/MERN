function Hello(){

    let myName="mantu"
    let code=1;
    let fullName=()=>{
       return `${myName} kumar morya`
    }

    return <h3>
       i am now learning react. and i am {fullName()} and the code of mantu is :- {code}
    </h3>
}

export default Hello;