
import { Suspense, useState } from 'react';
import BatsMen from './cricke';
import User from './users';
import Loadfetch from './loadfetch';
import './App.css'
import Posts from './loadfetch';
import Users from './users';


const fetchUser = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const load = async () => {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json()
}



function App() {
  const fetchLoad = load();
  return (
    <>



      <Suspense fallback={<p>HIii</p>}>
        <Posts fetchLoad={fetchLoad}></Posts>
      </Suspense>


      <h1>Hello ! This is my 1st React Page
      </h1>

      <Person />
      <Age />
      <BatsMen></BatsMen>
      <Player></Player>
      <Button></Button>
      <Counter></Counter>

      <Suspense fallback={<p>waiting for message...</p>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>
    </>

  )

}

function Person() {
  const name = "Aritro Mazumdar Apon";
  return (
    <p>My name is {name}</p>
  )
}

function Age() {
  const age = 20;
  return (
    <p>Age: {age}  </p>
  )
}

function Player() {
  const playerStyle = {
    border: '2px solid yellow'
  }

  return (
    <div>
      <div style={playerStyle}>
        <h1> Cricket Bats Man Name</h1>
        <p>My favourite </p>
        <ul>
          <li>Sakib Al Hasan </li>
          <li>Vitar Kholi</li>
          <li>Liton Kumar Das </li>
          <li>Musfikur Rahaman </li>
        </ul>
      </div>
      {/* 2nd div  */}
      <div style={playerStyle}>
        <h1>Cricket bowler Name</h1>
        <ul>
          <li>Mustafizur Rahaman</li>
          <li>Taskin Ahamed</li>
          <li>Bumbra</li>
          <li>Masrafi Bin Mortuza</li>
        </ul>
      </div>

    </div>


  )
}

function Button() {
  const handleClick = () => {
    alert('Click one')
  }
  const handleAdd = (num) => {
    const add = num + 5;
    alert(add)
  }
  return (
    <div>
      <button onClick={handleClick}>Click here 1</button>
      <button onClick={() => handleAdd(7)}>Click here 2</button>

    </div>

  )
}

function Counter() {
  const [count, setCount] = useState(0)

  const addBtn = () => {
    const newCount = count + 1;
    setCount(newCount)
  }

  const countStyle = {
    border: '2px solid red'
  }

  return (
    <div style={countStyle}>
      <h3>Count:{count} </h3>
      <button onClick={addBtn} > Add</button>
    </div>
  )
}


export default App
