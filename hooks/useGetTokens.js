import { useState, useEffect } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

export const useGetTokens = () => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

  useEffect(() => {
    const getTokens = async () => {
      const coins = await fetch(
        "https://52p0te8l.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%2C%0A%20%20%7D"
      );

      const tempSanityToken = await coins.json();
      setSanityTokens(tempSanityToken.result);

      setThirdWebTokens(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      );
    };
    getTokens();
  }, []);

  return {
    sanityTokens,
    thirdWebTokens,
  };
};
