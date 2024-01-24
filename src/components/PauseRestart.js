import { VscDebugRestart } from "react-icons/vsc";
import { FaPlay, FaPause} from "react-icons/fa";

function PauseRestart(props) {
    const playButton = 
        <button onClick={props.pause} className="
        hover:scale-110 
        active:scale-100 
        duration-200 
        transition
        ">
            <FaPlay size={40}/>
        </button>
    const pauseButton = 
        <button onClick={props.pause} className="
        hover:scale-110 
        active:scale-100 
        duration-200 
        transition
        ">
            <FaPause size={40}/>
        </button>

    return (
        <div className="flex gap-x-5">
            <button onClick={props.restart} className="
            hover:scale-110 
            active:scale-100 
            duration-200 
            transition">
                <VscDebugRestart size={50}/>
            </button>
            {props.paused ? playButton : pauseButton}
        </div>
        
    )
}

export default PauseRestart;