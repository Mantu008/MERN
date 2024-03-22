import React, { useEffect } from "react";
import { connect } from "react-redux";
import { featchUser } from "../redux";

function UserContainer({ featchUser, userData }) {
  useEffect(() => {
    featchUser();
  }, []);
  return userData.loading ? (
    <h2>Loadiong</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user, index) => <p key={index}>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    featchUser: () => dispatch(featchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
