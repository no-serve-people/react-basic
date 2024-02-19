import './App.scss'
import avatar from './images/bozai.png'
import {useRef, useState} from "react";
import _ from 'lodash'
import classNames from 'classnames'
import {v4 as uuidV4} from 'uuid'
import dayjs from "dayjs";


function A({onGetMsg}) {
    const msg = 'this is a component'

    return (
        <div>
            this is a,
            <button onClick={()=>onGetMsg(msg)}>send</button>
        </div>
    )
}

function B({name}) {
    return (<div>this is b component,{name}</div>)
}

function App() {

    const [name, setName] = useState('')
    const getMsg = (msg) => {
        setName(msg)
    }
    return (
        <div>
            <A onGetMsg={getMsg}/>
            <B name={name}/>
        </div>
    )
}

export default App
