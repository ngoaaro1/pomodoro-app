import logo from './logo.svg';
import Display from './components/Display';
import TimerContainer from './components/TimerContainer';
import useCountdown from './hooks/Timer';
import PauseRestart from './components/PauseRestart';
import Palette from './components/Palette';
import useColorCycle from './hooks/ColorCycle';

function App() {
  const { workMinutes, workSeconds, breakMinutes, breakSeconds, paused, isWorking, restart, pause, swap} = useCountdown();
  const { ringColor, shadow, bg, color, handleColorChange} = useColorCycle();
  return (
    <div className={`
      h-screen
      w-screen
      duration-1000
      transition
      text-white
      flex 
      items-center 
      justify-center 
      flex-col
      gap-y-10 ` + bg
      }>
      <h className="text-3xl">pomodoro</h>
      <Display swap={swap} shadow={shadow} color={color} wMins={workMinutes} wSecs={workSeconds} bMins={breakMinutes} bSecs={breakSeconds}/>
      <TimerContainer rColor={ringColor} shadow={shadow} color={color} isWorking={isWorking} wMins={workMinutes} wSecs={workSeconds} bMins={breakMinutes} bSecs={breakSeconds}/>
      <PauseRestart restart={restart} pause={pause} paused={paused}/>   
      <Palette colorChange={handleColorChange} />
    </div>
  );
}

export default App;
