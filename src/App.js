import './App.css';
import Main from 'components/Main';
import ShowLocals from 'components/ShowLocals';
import UniqueLocal from 'components/UniqueLocal';
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  let url = window.location.href;
  url = url.substring(url.indexOf('0/')+2, url.length);

  return (
    <div className="App">
      <Header showSeacrh={url === 'main'}/>
      {(url === 'main') && <Main />}
      {(url === 'locals-list') && <ShowLocals/>}
      {(url === 'local') && <UniqueLocal/>}
      <Footer />
    </div>
  );
}

export default App;