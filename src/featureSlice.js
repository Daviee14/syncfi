import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedFeature: null
};

export const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    setSelectedFeature: (state, action) => {
      state.selectedFeature = action.payload;
    }
  }
});

export const { setSelectedFeature } = featureSlice.actions;
export default featureSlice.reducer;