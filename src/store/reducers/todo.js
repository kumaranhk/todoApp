import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, title: "Hey buddy! Good to see you! If you are looking for a app which is a virtual sticky notes you are on a right place 📝", isCompleted: false },
        { id: 2, title: "When you completed an added Task! Mark it as completed by using the checkbox ✅", isCompleted: false },
        { id: 3, title: "We provide option to edit & remove the added tasks 🔄", isCompleted: false }
    ],
    reducers: {
        add_todo: (state, action) => {
            state.push({ id: Date.now(), title: action.payload.title, isCompleted: false })
        },
        remove_todo: (state, action) => {
            return state.filter((val) => val.id !== action.payload.id);
        },
        edit_todo: (state, action) => {
            console.log(action.payload)
            const { id, title } = action.payload;
            const index = state.findIndex((val) => val.id === id);
            state[index] = { ...state[index], title }
        },
        toggle_todo: (state, action) => {
            const { id } = action.payload;
            const index = state.findIndex((val) => val.id === id);
            state[index] = { ...state[index], isCompleted: !state[index].isCompleted }
        }
    }
});

export default todoSlice.reducer;
export const { add_todo, remove_todo, edit_todo, toggle_todo } = todoSlice.actions;