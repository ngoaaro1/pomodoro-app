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
                {props.isWorking ? props.wMins:props.bMins} : {props.isWorking ? props.wSecs:props.bSecs}
            </div>
        </div>
    )
}

export default TimerContainer;