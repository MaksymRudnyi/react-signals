import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Todos from './Todos.jsx'
import {signal} from "@preact/signals-react";

const Header = () => {
  console.log('header rendering');
  return (
    <div>
      Header
    </div>
  )
}
const count = signal(0);
const Counter = () => {

  console.log('rendering counter')
  return (
    <>

    <button onClick={() => {count.value += 1}}>Clicks: {count.value}</button>
      <Header/>
    </>
  )
}
function App() {
  return (
    // <>
    //   <div>
    //     <Header/>
    //     <Todos/>
    //   </div>
    // </>
    <Counter/>
  )
}

export default App
