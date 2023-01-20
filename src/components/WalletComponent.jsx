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
import Account from "./Account";

const WalletComponent = () => {
  const [amount, setAmount] = useState("");
  const [newNom, setNewNom] = useState("");


  const {balance,nom,device, operationsHistory, historyBalance, overdraft } = useSelector((state) => state.wallet);

  const dispatch = useDispatch();

//Recuperer le montant saisi
  const handleChange = (e) => {
    setAmount(e.target.value) ;
 
};

  //Changement de non
  const handleChangeNom = (e) => {
    setNewNom(e.target.value);
  };

//Changement du device
  const handleChangeDevice = (e) => {
    dispatch(deviceChange(e.target.value));
  
  };

  return (
    <div>
      <div>Balance: {balance}</div>
      <input
        type="number"
        placeholder="somme a deposer"
        onChange={handleChange}
      />

      <button onClick={() => dispatch(deposit(amount))}>Deposer</button>
      <br />
      <button onClick={() => dispatch(deposit(100))}>Deposer 100€</button>
      <br />
      <button onClick={() => dispatch(retire(amount))}>Retirer</button>
      <br />
      
      <button onClick={() => dispatch(vide())}>Vider le compte</button>
      <br />


      <hr />
      
      <div>Device: {device}</div>
   

          Choisissez votre device:
          <select onChange={handleChangeDevice}>
            <option value="€" > €</option>
            <option value="$" >$ </option>
            <option value="£" >£</option>
          </select>
    
     
      <hr />

      
      <div>Nom: {nom}</div>
      <input
        type="text"
        placeholder="changer le nom"
        onChange={handleChangeNom}
      />
      <button onClick={() => dispatch(changeName(newNom))}>
        Changer le nom
      </button>


         <hr />  
      <div>Historique: 
        {operationsHistory.map((item, index) => 
        <p key={index}> {item}</p>
      )}
      <Account balance={balance} nom={nom} device={device} historyBalance={historyBalance} overdraft={overdraft} />
      </div>
    </div>
  );
};

export default WalletComponent;
