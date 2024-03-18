import {
    createSlice
} from "@reduxjs/toolkit";

const unitContext = createSlice({
    name: "unitHandler",

    initialState: {
        actualUnit: 1,
    },
    reducers: {
        setActualUnit(state) {
            state.actualUnit = 1;
        },
        setActualUnit2(state) {
            state.actualUnit = 2;
        },
    },
});

export const unitActions = unitContext.actions;

export default unitContext;