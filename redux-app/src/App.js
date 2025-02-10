import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './actions'
 
function App() {
  const myState = useSelector((state) => state.inc_dec);
  const dispatch = useDispatch(); 
  return (
    <div className="App">
      <h1>Welcome To React Redux</h1>
      <input type="text" value={myState} />
      <br />
      <button onClick={() => dispatch(increase())} className='btn btn-primary'>Add</button>
      <button onClick={() => dispatch(decrease())} className='btn btn-danger'>Minus</button>
    </div>
  );
}

export default App;
