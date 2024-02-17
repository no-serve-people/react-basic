function App() {
    const articleType=1

    function getArticleTem(){
        if (articleType===0){
            return <div>我是无图文章</div>
        }else if( articleType===1){
            return <div>我是单图文章</div>
        }else {
            return <div>我是三图模式</div>
        }
    }
  return (
    <div className="App">
        {/*调用函数渲染不同的模板*/}
        {getArticleTem()}
    </div>
  );
}

export default App;
