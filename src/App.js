import React, { useEffect, useState } from "react";
import "./App.css";
import { ConnectButton } from "web3uikit";
import logo from "./images/Moralis.png";
import Coin from "./components/Coin";

const App = () => {
  const [btc, setBtc] = useState(50);
  const [eth, setEth] = useState(48);
  const [link, setLink] = useState(60);
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" height="50px" />
          Sentiment
        </div>
        <ConnectButton />
      </div>
      <div className="instructions">
        Where do you think tokens are going? Up or Down?
      </div>
      <div className="list">
        <Coin perc={btc} setPerc={setBtc} token={"BTC"} />
        <Coin perc={eth} setPerc={setBtc} token={"ETH"} />
        <Coin perc={link} setPerc={setBtc} token={"LINK"} />
      </div>
    </>
  );
};

export default App;
