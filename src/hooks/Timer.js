import { useEffect, useState } from 'react';

function useCountdown() {
    const [workSeconds, setWorkSeconds] = useState(0);
    const [workMinutes, setWorkMinutes] = useState(25);
    const [breakSeconds, setBreakSeconds] = useState(0);
    const [breakMinutes, setBreakMinutes] = useState(0);
    const [isWorking, setIsWorking] = useState(true);
    const [paused, setPaused] = useState(true);

    let timer;
    
    useEffect(() => {
        timer = setInterval(() => {
        if (!paused)
        {
            if (isWorking)
            {
                if (workMinutes === 0 && workSeconds === 1)
                {
                    setIsWorking(false);
                    setWorkMinutes(0);
                    setWorkSeconds(0);
                    setBreakMinutes(5);
                    setBreakSeconds(0);
                }
                else
                {
                    if (workSeconds === 0)
                    {
                        setWorkMinutes(workMinutes - 1);
                        setWorkSeconds(59);
                    }
                    else
                    {
                        setWorkSeconds(workSeconds - 1);
                    }
                }
            }
            else
            {
                if (breakMinutes === 0 && breakSeconds === 1)
                {
                    setIsWorking(true);
                    setBreakMinutes(0);
                    setBreakSeconds(0);
                    setWorkMinutes(0);
                    setWorkSeconds(10);
                }
                else
                {
                    if (breakSeconds === 0)
                    {
                        setBreakMinutes(breakMinutes - 1);
                        setBreakSeconds(59);
                    }
                    else
                    {
                        setBreakSeconds(breakSeconds - 1);
                    }
                }
            }
        }
        },1000);
        
        return () => clearInterval(timer);
        
    },[workMinutes, workSeconds, breakMinutes, breakSeconds, isWorking, paused]);

    const restart = () => {
        if(isWorking)
        {
            setWorkMinutes(25);
        }
        else
        {
            setBreakMinutes(5);
        }
        setWorkSeconds(0);
        setBreakSeconds(0);
        setPaused(true);
    };
    const pause = () => {
        setPaused((prevPaused) => !prevPaused);
    };

    const swap = () => {
        if (isWorking)
        {
            setWorkMinutes(0);
            setWorkSeconds(0);
            setBreakMinutes(5);
            setBreakSeconds(0);
            setIsWorking(false);
        }
        else
        {
            setWorkMinutes(25);
            setWorkSeconds(0);
            setBreakMinutes(0);
            setBreakSeconds(0);
            setIsWorking(true);
        }
        setPaused(true);
    }

    
    return { workMinutes, workSeconds, breakMinutes, breakSeconds, paused, isWorking, restart, pause, swap};
    
}

export default useCountdown;