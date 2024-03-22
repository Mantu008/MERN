
function AddItem(props){
    return(
  <div class="container text-center">
  <div class="row">
    <div class="col-sm-6">
       <h5>{props.todo}</h5>
    </div>
    <div class="col-sm-4">
         <h5>{props.date}</h5>
      </div>
    <div class="col-sm-2">
        <button type="button" class={props.btnclstype}> {props.btntext}
      </button>
      </div>
  </div>
  </div>
    );
}

export default AddItem;