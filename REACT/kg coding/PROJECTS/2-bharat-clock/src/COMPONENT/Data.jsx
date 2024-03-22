function Data(){
  var now = new Date();
    return(
      <>
        <h3>This is the Clock that Shows the Time in Bharat at all times</h3>

       <h3>This is the Current time :{now.toLocaleString()}</h3>

      </>
      
    );
}

export default Data;
