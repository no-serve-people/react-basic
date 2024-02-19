import './App.scss'
import avatar from './images/bozai.png'
import {createContext, useContext, useRef, useState} from "react";
import _ from 'lodash'
import classNames from 'classnames'
import {v4 as uuidV4} from 'uuid'
import dayjs from "dayjs";


const MsgContent=createContext()
function A() {

    return (
        <div>
            this is a component
            <B/>
        </div>
    )
}

function B() {
  const name= useContext(MsgContent)
    return (<div>this is b component,{name}</div>)
}

function App() {

    const name='this is app'
    return (
        <div>
            <MsgContent.Provider value={name}>
                this is a App
                <A/>
            </MsgContent.Provider>

        </div>
    )
}

export default App
