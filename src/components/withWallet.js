import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deposit,
  retire,
  vide,
  changeName,
  deviceChange,
} from "../features/wallet/walletSlice";

const withWallet = (WrappedComponent) => {
  return function WithWallet(props) {
    const { balance, nom, device } = useSelector((state) => state.wallet);

    const dispatch = useDispatch();
    return (
      <WrappedComponent
        balance={balance}
        nom={nom}
        device={device}
        {...props}
      />
    );
  };
};

export default withWallet;
