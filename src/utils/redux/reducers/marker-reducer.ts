import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type MarkerState = {
    answers: Array<string>;
};

const defaultAppState: MarkerState = {
    answers: [],
};

const markerSlice = createSlice({
    name: 'setup',
    initialState: defaultAppState,
    reducers: {
        setAnswers: (state: MarkerState, action: PayloadAction<Array<string>>) => {
            state.answers = action.payload;
        },
    },
});

const markerReducer = markerSlice.reducer;

export const { setAnswers } = markerSlice.actions;

export default markerReducer;
