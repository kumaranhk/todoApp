import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [{ id: 1, title: "hello", status: false }],
    reducers: {
        add_todo: (state, action) => {
            console.log(action.payload)
            state.push({ id: Date.now(), title: action.payload.title, status: false })
        },
        remove_todo: (state, action) => {
            return state.filter((val) => val.id !== action.payload.id);
        },
        edit_todo: (state, action) => {
            const { id, title } = action.payload;
            const index = state.findIndex((val) => val.id === id);
            state[index] = { ...state[index], title }
        },
        toggle_todo: (state, action) => {
            const { id } = action.payload;
            const index = state.findIndex((val) => val.id === id);
            state[index] = { ...state[index], status: !state[index].status }
        }
    }
});

export default todoSlice.reducer;
export const { add_todo, remove_todo, edit_todo, toggle_todo } = todoSlice.actions;