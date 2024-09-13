import { configureStore } from '@reduxjs/toolkit';
import linksSlice from './linksSlice';

const store = configureStore({
    reducer: {
        links: linksSlice,
    },
});

// Define RootState based on the store's state shape
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
