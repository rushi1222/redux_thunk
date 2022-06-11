import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement} from './reducer/Action'
import Posts from './components/Posts';

function App() {

  const count = useSelector((state) => state);
  const dispatch = useDispatch()
  return (
    <div className="App">
    <h1>{count}</h1>
    {/* <h2><Posts/></h2> */}
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
