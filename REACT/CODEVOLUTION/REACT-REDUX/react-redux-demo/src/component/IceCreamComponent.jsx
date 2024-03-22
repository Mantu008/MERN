import { buyIceCream } from "../redux";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function IceCreamComponent(props) {
  return (
    <div>
      <h2>Number of IceCream - {props.noOfIcecream}</h2>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfIcecream: state.iceCream.noOfIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamComponent);
