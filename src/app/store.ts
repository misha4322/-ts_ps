import { configureStore } from '@reduxjs/toolkit';
import componentsReducer from '../features/componentsSlice';


export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    components: componentsReducer,
  },
});

export default store;