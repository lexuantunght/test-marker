import { TestStructure } from '@domain/model/TestStructure';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type MarkerState = {
    answers: Array<string>;
    selectedTestStructure?: TestStructure;
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
        setSelectedTestStructure: (state: MarkerState, action: PayloadAction<TestStructure>) => {
            state.selectedTestStructure = action.payload;
        },
    },
});

const markerReducer = markerSlice.reducer;

export const { setAnswers, setSelectedTestStructure } = markerSlice.actions;

export default markerReducer;
