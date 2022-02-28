import React from "react";
import { useParams } from "react-router";

const Price = (props) => {
  // Our api key from coinapi.io
  const apiKey = " 64D1C7C1-BB54-49B2-ABDA-D92DD6793843";
  const params = useParams()
  console.log(params);
  // Grabbing the Currency symbol from the URL Param
  const symbol = params.symbol;
  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  //state to hold the coin data
  const [coin, setCoin] = React.useState("null");

  //function to fetch coin data
  const getCoin = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setCoin(data);
  };

  // useEffect to run getCoin when component mounts
  React.useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin ? loaded() : loading();
};

export default Price;