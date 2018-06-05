// @flow

import * as React from "react";

import styled from "styled-components";

import colours from "../../common/colours";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const CreateAccount = styled.div`
  form {
    width: 40%;
  }
  input {
    padding: 5px;
    background: white;
    color: black;
    margin-bottom: 10px;
  }
  button {
    background: ${colours.buttons.purple};
    color: white;
    border: none;
    border-radius: 3px;
    padding: 10px;
    font-size: 18px;
  }
  display: flex;
  margin-top: -100px;
  padding-top: 120px;
  background: linear-gradient(
    180deg,
    rgba(123, 158, 137, 1) 0%,
    rgba(123, 158, 137, 1) 25%,
    white 100%
  );
`;
const Splash = styled.div`
  width: 60%;
  text-align: center;
  font-size: 2.6rem;
`;

const Landing = () => (
  <React.Fragment>
    <Header />
    <CreateAccount>
      <Splash>
        Get transported into<br />a new world.
      </Splash>
      <form>
        <div>New here? Create a free account!</div>
        <input type="text" placeholder="User Name" />
        <br />
        <input type="email" placeholder="Email Address" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button>Sign Up</button>
      </form>
    </CreateAccount>
    <div>
      <div>
        Currently trending this week
        <div>Trending carousel of manga covers.</div>
      </div>
      <div>
        Top ranked
        <div>Top ranked carousel of manga covers.</div>
      </div>
      <div>
        Most popular of all time
        <div>Most popular carousel of manga covers.</div>
      </div>
      <div>
        Explore lists
        <ul>
          <li>List number one</li>
          <li>List number two</li>
        </ul>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

export default Landing;
