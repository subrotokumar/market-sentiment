import React, { useEffect, useState } from "react";
import "./App.css";
import { ConnectButton } from "web3uikit";
import logo from "./images/Moralis.png";
import Coin from "./components/Coin";

const App = () => {
  const [btc, setBtc] = useState(50);
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" height="50px" />
          Sentiment
        </div>

        <ConnectButton />
        <div className="instructions">
          Where do you think tokens are going? Up or Down?
        </div>
        <Coin perc={btc} setPerc={setBtc} token={"BTC"} />
      </div>
    </>
  );
};

export default App;
