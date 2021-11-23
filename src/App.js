import './App.css';
import Main from './components/Main/Main';
import ShowLocals from './components/ShowLocals/ShowLocals';
import UniqueLocal from './components/UniqueLocal';
import Router from './components/Router';
import Header from './components/Header/Header';
 
function App() {

  let url = window.location.href;
  url = url.substring(url.indexOf('0/')+2, url.length);

  return (
    <div className="App">
      <Header />
      {(url === 'main') && <Main />}
      {(url === 'locals-list') && <ShowLocals/>}
      {(url === 'local') && <UniqueLocal/>}
    </div>
  );
}
 
export default App;