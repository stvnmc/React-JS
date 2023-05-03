// Incremental ID for  Todos
let nextTodoID = 0;

// Action Type
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILiTY_FILTER = 'SET_VISIBILiTY_FILTER';

/*
* param {string} text
*returns action ADD_TODO
*/
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID++,
            text
        }
    }
}

/*
 * @param {number} id
 * @returns action TOGGLE_TODO
 */

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

/*
 * @param {string} filter
 * @returns action SET_VISIBILiTY_FILTER
 */

export const serVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILiTY_FILTER,
        payload: {
            filter
        }
    }
}