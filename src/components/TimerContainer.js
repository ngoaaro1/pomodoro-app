function TimerContainer(props) {
    return (
        <div className={`
            w-72
            h-72
            rounded-full
            inline-flex
            items-center
            justify-center
            duration-1000
            transition
            text-6xl ` + props.shadow
            }>
            <div className={` 
            w-64 
            h-64 
            rounded-full 
            inline-flex 
            items-center 
            justify-center 
            ring-4 
            pb-2 
            duration-1000 
            transition ` + props.rColor
            }>
                {props.isWorking ?  
                (props.wMins<10 ? "0"+props.wMins:props.wMins) :
                (props.bMins<10 ? "0"+props.bMins:props.bMins)} 
                : 
                {props.isWorking ? 
                (props.wSecs<10? "0"+props.wSecs:props.wSecs) :
                (props.bSecs<10? "0"+props.bSecs:props.bSecs)}
            </div>
        </div>
    )
}

export default TimerContainer;