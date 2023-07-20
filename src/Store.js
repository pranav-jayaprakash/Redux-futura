import { configureStore } from "@reduxjs/toolkit";
import PrintNumSlice from "./Components/PrintNumSlice";

export const store = configureStore({
    reducer: {
        print:PrintNumSlice
    }
})