// import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar.js";
import Right from "./components/Right.js"

function App() {
  return (
    <div className="App relative">
      <div className='flex'>
      <Sidebar/>
      <Right/>
      </div>
      
    </div>
  );
}

export default App;
