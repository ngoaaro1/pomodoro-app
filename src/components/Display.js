function Display(props) {
    return (
        <div className="
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
            shadow-[0px_0px_15px_10px_#393e79]
        ">
            <div className=
            {props.wMins === 0 && props.wSecs === 0 ? 'text-white duration-1000 transition':
            'text-[#FF6D88] duration-1000 transition'}>
    
                work</div>
            <div className=
            {props.bMins === 0 && props.bSecs === 0 ? 'text-white duration-1000 transition':
            'text-[#FF6D88] duration-1000 transition'}>
                break
            </div>
        </div>
        
    );
}

export default Display;