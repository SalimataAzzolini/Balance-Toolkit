import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: { 
    balance: 0,
    device: '€',
    nom: 'sali',
    operationsHistory: [],
    historyBalance: [],
    overdraft: -200,
 
    },
  reducers: {
    // dépot d'argent
    deposit: (state, action) => {
      state.balance += parseInt(action.payload);
      state.operationsHistory.push(
        `Vous avez depose :  ${action.payload}`
      );
      state.historyBalance.push(
        state.balance
      )
    },

       // retire 
    retire: (state, action) => {
        state.balance -= action.payload;
        state.operationsHistory.push(
          `Vous avez retire :  ${action.payload}`
        )
      },

   // vider le compte 
     vide : (state, action) => {
    state.balance = 0
    state.operationsHistory.push(
      `Vous avez vide le compte:  ${state.balance}`
    )
  },


    // ajout device 
    deviceChange : (state, action) => {
        state.device = action.payload;
      },

      // ajout nom
      changeName : (state, action) => {
        state.nom = action.payload;
      },

  },
});

// Export des actions
export const { deposit, retire, vide, changeName, deviceChange } = walletSlice.actions;
// Export du reducer
export default walletSlice.reducer;
