import './index.css'
function App() {
  const style={
      color:'red',
      fontSize:'50px'
  }
  return (
      <div>
          {/*行内样式规则*/}
          <span style={style}>this is span</span>
          {/*通过class类名控制*/}
          <span className="foo">this is class foo</span>
      </div>
  );
}

export default App;
