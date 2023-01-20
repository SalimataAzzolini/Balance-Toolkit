import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

const Account = ({ balance, nom, device, historyBalance, overdraft }) => {
  const dispatch = useDispatch();

  const [valueWish, setValueWish] = useState('');
  const [somAfterValueWish, setSomAfterValueWish] = useState('');

  // Etat du compte
  const checkEtat = () => {
    if (balance >= overdraft) {
      return "BON";
    } else {
      return "MAUVAIS";
    }
  };

  //Calcul moyenne des  depots
  const checkAverageBalance = (a) => {
    var b = a.length,
      c = 0,
      i;
    for (i = 0; i < b; i++) {
      c += Number(a[i]);
    }
    return c / b;
  };
  //numAverage([5, 1, 1, 1, 5]);
  // renvoie : 2.6


  //Calcul somme compte apres retrait souhait
  const getSomAfterValueWish = () =>{   
      setSomAfterValueWish(balance - valueWish);
    
  }

//Calcul taux de credit 
console.log(nom.length);
const creditRate  = useMemo(() => 
(nom.length/3) - (checkAverageBalance(historyBalance.slice(-3)) * 1000)/100, [nom, historyBalance]
);

const creditR =  useMemo(() => 
100 * nom.length/checkAverageBalance(historyBalance) , [nom, historyBalance]
);


  return (
    <div>
      <h1> COMPTE BANCAIRE </h1>
      <h2> {nom}</h2>
      <h4>
        SOLDE : {balance}
        {device}
      </h4>
      <h5> ETAT DU COMPTE : {checkEtat()}</h5>
      <h6> Decouvert autorise : {overdraft}€</h6>
      <h6>
        {" "}
        Moyenne trois derniers depot: {checkAverageBalance(historyBalance.slice(-3))}
      </h6>

      <h6> Moyenne tous les depots: {checkAverageBalance(historyBalance)}</h6>

      Faire une prevision solde apres retrait :
      <input type="number" onChange={(e)=> setValueWish(e.target.value)} placeholder="saississez le montant envisage" />
      <button onClick={getSomAfterValueWish}> estimer</button>
      <p> La solde compte apres retrait du souhait : {somAfterValueWish}</p>
      <p> Taux de credit : {creditR}</p>


      <div>
        <h5>Historique depot</h5>
        {historyBalance.map((item, index) => (
          <p key={index}> {item}</p>
        ))}
      </div>
    </div>
  );
};

export default Account;
