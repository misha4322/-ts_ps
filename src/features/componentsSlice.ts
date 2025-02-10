import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface SelectedComponents {
  [key: string]: any;
}


interface ComponentsState {
  selectedComponents: SelectedComponents;
}


const initialState: ComponentsState = {
  selectedComponents: {},
};

const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    setSelectedComponents(state: ComponentsState, action: PayloadAction<SelectedComponents>) {
      state.selectedComponents = action.payload;
    },
  },
});

export const { setSelectedComponents } = componentsSlice.actions;
export default componentsSlice.reducer;