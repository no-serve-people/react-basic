import {useState} from "react";
function App() {
    const [count,setCount]=useState(0)
    const handleClick=()=>{
        setCount(count+1)
    }
    // 修改对象状态
    const [form,setForm]=useState({name:'jack'})

    const changeForm=()=>{
        setForm({
            ...form,
            name: 'john'
        })
    }
  return (
    <div className="App">
        <button onClick={handleClick}>{count}</button>
        <button onClick={changeForm}>修改form {form.name}</button>
    </div>
  );
}

export default App;
