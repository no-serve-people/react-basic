function App() {
    const count =100

    function getName(){
        return 'hhh'
    }
  return (
    <div className="App">
      this is react
        {/* 使用引号传递字符串*/}
        {' this is message'}
        {/*识别Js变量*/}
        {count }
        {/*函数调用*/}
        {getName()}
        {/*方法调用*/}
        {
            new Date().getDate() +'\n'
        }
        {/*使用js对象*/}
        <div style={{color:'red'}}>this is div</div>
    </div>
  );
}

export default App;
