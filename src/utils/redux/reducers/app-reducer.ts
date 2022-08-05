import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppState = {
    error?: string;
};

const defaultAppState: AppState = {
    error: undefined,
};

const appSlice = createSlice({
    name: 'app',
    initialState: defaultAppState,
    reducers: {
        setError: (state: AppState, action: PayloadAction<string | undefined>) => {
            state.error = action.payload;
        },
    },
});

const appReducer = appSlice.reducer;

export const { setError } = appSlice.actions;

export default appReducer;
