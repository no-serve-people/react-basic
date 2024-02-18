import './App.scss'
import avatar from './images/bozai.png'
import {useRef, useState} from "react";
import _ from 'lodash'
import classNames from 'classnames'

const App = () => {

    const inputRef=useRef(null)
    const showDom=()=>{
        console.dir(inputRef.current)
    }
  return (
      <div>
       <input type="text" ref={inputRef}/>
          <button onClick={showDom}>获取dom</button>
      </div>
  )
}

export default App
