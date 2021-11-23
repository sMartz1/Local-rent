import './App.css';
import Main from './components/Main';
import ShowLocals from './components/ShowLocals';
import UniqueLocal from './components/UniqueLocal';
import Header from './components/Header';

function App() {
    const main = false;
    const showLocals = false;
    const uniqueLocals = false;
    return ( 
      <div className = "App" >
        <Header /> { main && < Main /> } { showLocals && < ShowLocals /> } { uniqueLocals && < UniqueLocal /> } 
       </div>
    );
}

export default App;