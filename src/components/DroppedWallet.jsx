import React from 'react';
import withWallet from './withWallet';

const DroppedWallet = (props) => {
    const {balance,nom,device } = props
    return (
        <div>
            <h4> DROPPED WALLET </h4>
            <p> {balance}</p>
            <p> {nom}</p>
            <p> {device}</p>
        </div>
    );
};

export default withWallet (DroppedWallet);