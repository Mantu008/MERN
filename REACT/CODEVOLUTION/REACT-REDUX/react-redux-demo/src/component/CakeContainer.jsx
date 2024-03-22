import { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  const [Number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cake - {props.numOfCakes}</h2>
      <input
        type="text"
        value={Number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(Number)}>Buy {Number} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (Number) => dispatch(buyCake(Number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
