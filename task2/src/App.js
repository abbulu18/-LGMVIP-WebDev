/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import React, { useState} from "react";
import './App.css';
const App=()=> {
  const[users, setUsers] = useState([]);

  const loadUsers=async()=>{
        const response = await fetch("https://reqres.in/api/users?page=1" );
    const jsonR = await response.json();
    setUsers(jsonR.data);
  };
return (
    <div>
      <header>
      <p>Lets Grow more!!</p>

      <button onClick={loadUsers} ><p class="hi">Come on Click me to load users data!!</p></button>
      </header>
      <ul>

        {users.map(({ id , email,first_name,last_name,avatar }) => (
          <li class="list"key = {id}> 
            <img class="avatar" src={avatar}></img>
            <li>NAME : {first_name} {last_name}</li>
            <li>Email ID : {email}</li>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
