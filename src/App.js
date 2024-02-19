import './App.scss'
import avatar from './images/bozai.png'
import {useRef, useState} from "react";
import _ from 'lodash'
import classNames from 'classnames'
import {v4 as uuidV4} from 'uuid'
import dayjs  from "dayjs";

function Son(props){
    console.log(props)
    return <div>this is son,{props.name}</div>
}
const App = () => {
    const name='this is app name'

    return (
        <div>
            <Son name={name}/>
        </div>
    )
}

export default App
