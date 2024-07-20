import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScoresState {
    rank: number;
    percentile: number;
    score: number;
}

const initialState: ScoresState = {
    rank: 2,
    percentile: 67,
    score: 14
};

const scoresSlice = createSlice({
    name: "scores",
    initialState,
    reducers: {
        updateRank: (state, action: PayloadAction<number>) => {
            state.rank = action.payload;
        },
        updatePercentile: (state, action: PayloadAction<number>) => {
            state.percentile = action.payload;
        },
        updateScore: (state, action: PayloadAction<number>) => {
            state.score = action.payload;
        }
    }
});

export const { updateRank, updatePercentile, updateScore } = scoresSlice.actions;
export default scoresSlice.reducer;