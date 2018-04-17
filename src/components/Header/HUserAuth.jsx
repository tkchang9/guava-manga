import React from 'react';

const HUserAuth = props => {
  let checkSignIn;
  if (props.signedIn) {
    checkSignIn = (
      <React.Fragment>
        <div>My List</div>
        <div className={props.className} id="hAuth">
          {props.userName}
        </div>
      </React.Fragment>
    );
  } else {
    checkSignIn = (
      <React.Fragment>
        <div>Sign In</div>
        <div>Sign Up</div>
      </React.Fragment>
    );
  }
  return checkSignIn;
};

export default HUserAuth;
