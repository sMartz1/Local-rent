import './App.css';
import Main from './component/Main';
import ShowLocals from './component/ShowLocals';
import UniqueLocal from './component/UniqueLocal';
import Header from './components/Header/Header';
 
function App() {
  const main = false;
  const showLocals = false;
  const uniqueLocals = false;
  return (
    <div className="App">
      <Header />
      {main && <Main />}
      {showLocals && <ShowLocals/>}
      {uniqueLocals && <UniqueLocal/>}
    </div>
  );
}
 
export default App;