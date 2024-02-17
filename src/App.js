function App() {
    // 传递自定义参数 而且需要事件对象e
    const handleClick=(name,e)=>{
        console.log('button被点击了',name,e)
    }
  return (
    <div className="App">
        <button onClick={(e)=>handleClick('jack',e)}>click me</button>
    </div>
  );
}

export default App;
