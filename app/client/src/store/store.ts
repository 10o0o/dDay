import { configureStore } from '@reduxjs/toolkit';
import dDayReducer from './reducers';

export const store = configureStore({
  reducer: {
    dDay: dDayReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
