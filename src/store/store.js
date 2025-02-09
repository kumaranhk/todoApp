import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo";

const store = configureStore({
    reducer: {
        todoReducer,
    },
    devTools: true
});
export default store;