import logo from './logo.svg';
import './App.css';
let name = 'Mohammad Adil Mehmood Ansari';
const car_obj = {name:"Corolla XLI", color:"white", make:"2005"}
function User() {
  return (
    <div className="App">
    <h1>{car_obj.name}</h1>
    <h1>{name}</h1>
    <h1>{5 + 5}</h1>
    <h1>Learning Never Ends</h1>
    </div>
  );
}

export default User;
