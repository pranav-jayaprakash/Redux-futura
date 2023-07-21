import { configureStore } from "@reduxjs/toolkit";
import PrintNumSlice from "./Components/PrintNumSlice";
import AddSlice from "./Components/AddSlice";

export const store = configureStore({
    reducer: {
        print:PrintNumSlice,
        Adder:AddSlice
    }
})