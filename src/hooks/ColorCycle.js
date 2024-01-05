import { useState } from 'react';

const useColorCycle = () => {
    const shadows = ['#393e79','#065f46','#1e293b']
    const bgs = ['[#1f2241]','[#022c22]', '[#0b0c10]']
    const colors = ['[#FF6D88]', '[#ffbf34]', '[#67ffcc]'];
    const [colorIdx, setColorIdx] = useState(0);
    const [color, setColor] = useState(colors[0]);
    const [bg, setBg] = useState(bgs[0]);
    const [shadow, setShadow] = useState(shadows[0]);
    
    const handleColorChange = () => {
        const nextIdx = (colorIdx + 1) % colors.length;
        setColorIdx(nextIdx);
        setColor(colors[nextIdx]);
        setBg(bgs[nextIdx]);
        setShadow(shadows[nextIdx]);
    };

    return { shadow, bg, color, handleColorChange };
}

export default useColorCycle;