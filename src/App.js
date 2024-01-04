import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import TimerContainer from './components/TimerContainer';
import useCountdown from './components/Timer';
import PauseRestart from './components/PauseRestart';

function App() {
  const { workMinutes, workSeconds, breakMinutes, breakSeconds, paused, isWorking, restart, pause } = useCountdown();
  return (
    <div className="
      h-screen 
      flex 
      items-center 
      justify-center 
      flex-col
      gap-y-10
      ">
      <h className="text-3xl">pomodoro</h>
      <Display wMins={workMinutes} wSecs={workSeconds} bMins={breakMinutes} bSecs={breakSeconds}/>
      <TimerContainer isWorking={isWorking} wMins={workMinutes} wSecs={workSeconds} bMins={breakMinutes} bSecs={breakSeconds}/>
      <PauseRestart restart={restart} pause={pause} paused={paused}/>
    </div>
  );
}

export default App;
