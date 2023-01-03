import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store"

// ********** NOTES **********
// redux-thunk
// const thunkFunction = (payload) => {
//   return (dispatch, getState) => {
//     async function
//     Timer function
//     Random numbes ...
//// -> We add side effects here!!
//   }
// }
// ********** NOTES **********

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
