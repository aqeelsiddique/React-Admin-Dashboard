import './App.css'
import MainSection from './components/MainSection/MainSection';
import Sidebar from  './components/Sidebar';
import Right from './components/Right/Right'

function App() {
  return (
    <div className="App">
        <div className='QuizApp'>
          <Sidebar/>
          <MainSection/>
          <Right/>

        </div>
    </div>
  );
}

export default App;
