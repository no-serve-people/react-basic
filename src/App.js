import './App.scss'
import avatar from './images/bozai.png'
import {useRef, useState} from "react";
import _ from 'lodash'
import classNames from 'classnames'
import {v4 as uuidV4} from 'uuid'
import dayjs  from "dayjs";

function Son({onGetMsg}){
    const msg= 'this is son msg'

    return (
        <button onClick={()=>onGetMsg(msg)}>点击</button>
    )
}
const App = () => {
    const [msg,setMsg]=useState('')
    const getMsg=(text)=>{
        console.log(text)
        setMsg(text)
    }
    return (
        <div>
            <span>{msg}</span>
            <Son
                onGetMsg={getMsg}
          />
        </div>
    )
}

export default App
