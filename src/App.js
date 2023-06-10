import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment, decrement, addPage } from "./redux/reducer";
function App() {
  let dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const increments = () => {
    dispatch(increment());
  };
  const decrements = () => {
    dispatch(decrement());
  };
  const addPages = () => {
    dispatch(addPage(10));
  };

  return (
    <Provider store={store}>
      <div>
        {counter}
        <button onClick={increments}>increment</button>
        <button onClick={decrements}>increment</button>
        <button onClick={addPages}>increment</button>
      </div>
    </Provider>
  );
}

export default App;
