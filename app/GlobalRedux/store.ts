"use client"
import { configureStore } from "@reduxjs/toolkit"
import ScoreReducer from "../GlobalRedux/Features/Scores/scoresSlice";
export const store = configureStore({
    reducer:{
        ScoreReducer:ScoreReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;