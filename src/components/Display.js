function Display(props) {
    return (
        <div className={`
            rounded-full
            bg-
            border
            border-transparent
            px-7
            py-2
            flex
            items-center
            justify-center
            gap-x-10
            duration-1000
            transition ` + props.shadow
            }>
            <div className=
            {props.wMins === 0 && props.wSecs === 0 ? 'text-white duration-1000 transition':
            'duration-1000 transition ' + props.color}>
    
                work</div>
            <div className=
            {props.bMins === 0 && props.bSecs === 0 ? 'text-white duration-1000 transition':
            'text-skin-salmon duration-1000 ' + props.color}>
                break
            </div>
        </div>
        
    );
}

export default Display;