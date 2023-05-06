import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers(
    {
        // state name : redurcer tht will control it 
        todosState: todosReducer,
        filterState: filterReducer
        // ... add more states and reducers to include them in the store
    }
)
