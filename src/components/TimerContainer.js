

function TimerContainer(props) {
    return (
        <div className="
            w-72
            h-72
            rounded-full
            inline-flex
            items-center
            justify-center
            shadow-[0px_0px_15px_10px_#393e79]
            text-6xl
        ">
            <div className="
                w-64
                h-64
                rounded-full
                inline-flex
                items-center
                justify-center
                ring-[#FF6D88]
                ring-4
                pb-2
            ">
                {props.isWorking ? props.wMins:props.bMins} : {props.isWorking ? props.wSecs:props.bSecs}
            </div>
        </div>
    )
}

export default TimerContainer;