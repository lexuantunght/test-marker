import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SetupState = {
    questionCount?: number;
};

const defaultAppState: SetupState = {
    questionCount: 0,
};

const setupSlice = createSlice({
    name: 'setup',
    initialState: defaultAppState,
    reducers: {
        setQuestionCount: (state: SetupState, action: PayloadAction<number | undefined>) => {
            state.questionCount = action.payload;
        },
    },
});

const setupReducer = setupSlice.reducer;

export const { setQuestionCount } = setupSlice.actions;

export default setupReducer;
