import './App.scss'
import avatar from './images/bozai.png'
import {useState} from "react";
import _ from 'lodash'
import classNames from 'classnames'

const App = () => {

  const [value,setValue]=useState('')
  return (
      <div>
          <input
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          type="text"
          />
      </div>
  )
}

export default App
