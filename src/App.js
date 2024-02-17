function App() {
  const list=[
      {id:1001,name:'vue'},
      {id:1002,name:'react'},
      {id:1003,name:'angular'}
  ]
  return (
    <div className="App">
        {/*渲染列表*/}
        <ul>
            {list.map(item=><li key={item.id}>{item.name}</li>)}
        </ul>
    </div>
  );
}

export default App;
