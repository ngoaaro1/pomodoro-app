import logo from './logo.svg';
import './App.css';
import Display from './components/Display';

function App() {
  return (
    <div className="
      h-screen 
      flex 
      items-center 
      justify-center 
      flex-col
      gap-y-8
      ">
      <h className="text-3xl">pomodoro</h>
      <Display switch={false}/>
    </div>
  );
}

export default App;
