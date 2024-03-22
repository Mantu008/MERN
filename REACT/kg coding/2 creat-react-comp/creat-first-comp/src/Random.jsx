function Random(){

  let number=Math.round(Math.random()*100);
    
  return <h2 style={{'background-color':'green'}}>Random number is: { number}</h2>
}

export default Random;