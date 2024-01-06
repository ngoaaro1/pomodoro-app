import { useState } from 'react';

const useColorCycle = () => {
    const shadows = ['shadow-[0px_0px_15px_10px_#393e79]','shadow-[0px_0px_15px_10px_#065f46]','shadow-[0px_0px_15px_10px_#1e293b]', 'shadow-[0px_0px_15px_10px_#0d9488]']
    const bgs = ['bg-[#1f2241]','bg-[#022c22]', 'bg-[#0b0c10]', 'bg-[#116466]']
    const colors = ['text-[#FF6D88]', 'text-[#ffbf34]', 'text-[#67ffcc]', 'text-[#D9B08C]'];
    const ringColors = ['ring-[#FF6D88]', 'ring-[#ffbf34]', 'ring-[#67ffcc]', 'ring-[#D9B08C]']
    const [colorIdx, setColorIdx] = useState(0);
    const [color, setColor] = useState(colors[0]);
    const [bg, setBg] = useState(bgs[0]);
    const [shadow, setShadow] = useState(shadows[0]);
    const [ringColor, setRingColor] = useState(ringColors[0]);
    
    const handleColorChange = () => {
        const nextIdx = (colorIdx + 1) % colors.length;
        setColorIdx(nextIdx);
        setColor(colors[nextIdx]);
        setBg(bgs[nextIdx]);
        setShadow(shadows[nextIdx]);
        setRingColor(ringColors[nextIdx]);
    };

    return { ringColor, shadow, bg, color, handleColorChange };
}

export default useColorCycle;