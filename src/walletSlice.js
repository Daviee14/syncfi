import { createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    selectedWallet: null
  },
  reducers: {
    setSelectedWallet: (state, action) => {
      state.selectedWallet = action.payload;
    }
  }
});

export const { setSelectedWallet } = walletSlice.actions;
export default walletSlice.reducer;