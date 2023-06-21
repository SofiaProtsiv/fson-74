// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";

// // action
// function increment() {
//   return { type: INCREMENT };
// }
// function decrement() {
//   return { type: DECREMENT };
// }

// // reducer
// function counter1(state = 0, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     default:
//       state;
//   }
// }

// // store
// const store1 = Redux.createStore(counter1);

// // handle action
// document.querySelector(".increment").addEventListener("click", () => {
//   store1.dispatch(increment());
// });


// // redux-toolkit

// const increment = createAction("INCREMENT")
// const decrement = createAction("DECREMENT")

// const counter2 = createReducer(0, {
//     [increment]: state => state + 1,
//     [decrement]: state => state - 1
// }) 

// const store2 = configureStore({
//     reducer: counter2,
// })

// document.querySelector(".increment").addEventListener("click", () => {
//     store2.dispatch(increment());
//   });