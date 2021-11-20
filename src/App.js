import './App.css';
import Main from './component/Main';
import ShowLocals from './component/ShowLocals';
import UniqueLocal from './component/UniqueLocal';
 
function App() {
  const main = false;
  const showLoclas = false;
  const uniqueLocals = false;
  return (
    <div className="App">
      {main && <Main />}
      {showLoclas && <ShowLocals/>}
      {uniqueLocals && <UniqueLocal/>}
    </div>
  );
}
 
export default App;