import { FaPalette } from "react-icons/fa";

function Palette (props) {
    return (
        <button onClick={props.colorChange} className="
        hover:scale-110 
        active:scale-100 
        duration-200 
        transition
        ">
            <FaPalette size={40}/>
        </button>
    )
}

export default Palette;