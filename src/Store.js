import { configureStore } from "@reduxjs/toolkit";
import PrintNumSlice from "./Components/PrintNumSlice";
import AddSlice from "./Components/AddSlice";
import Datasr from "./Reduxtwo/Datas";
export const store = configureStore({
    reducer: {
        print:PrintNumSlice,
        Adder:AddSlice,
        datas:Datasr
    },
});

