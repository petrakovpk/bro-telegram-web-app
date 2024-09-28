// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import zodiacReducer from './zodiacSlice';

export const store = configureStore({
  reducer: {
    zodiac: zodiacReducer
  }
});

// Типизация для хранилища
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
