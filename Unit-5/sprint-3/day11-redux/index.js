const reducer = (store, { type, payload }) => {
    switch (type) {
        case "ADD_COUNT":
            return { ...store, count: store.count + payload };
        case "ADD_TODO":
            return { ...store, todos: [...store.tod, payload] };
        default:
            return store;
    }
}
// class store{
//     constructor(reducer, initialState) {
//         this.reducer = reducer;
//         this.state = initialState;
//     }
//     getState() {
//         return this.state;
//     }
//     dispatch(action) {
//         this.state = this.reducer(this.state, action);
//     }
// }

import { createStore } from "redux";