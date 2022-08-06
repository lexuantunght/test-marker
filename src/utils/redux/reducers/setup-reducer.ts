import { TestStructure } from '@domain/model/TestStructure';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SetupState = {
    questionCount?: number;
    testStructures: Array<TestStructure>;
};

const defaultAppState: SetupState = {
    questionCount: 0,
    testStructures: [],
};

const setupSlice = createSlice({
    name: 'setup',
    initialState: defaultAppState,
    reducers: {
        setQuestionCount: (state: SetupState, action: PayloadAction<number | undefined>) => {
            state.questionCount = action.payload;
        },
        setTestStructures: (state: SetupState, action: PayloadAction<Array<TestStructure>>) => {
            state.testStructures = action.payload;
        },
    },
});

const setupReducer = setupSlice.reducer;

export const { setQuestionCount, setTestStructures } = setupSlice.actions;

export default setupReducer;
