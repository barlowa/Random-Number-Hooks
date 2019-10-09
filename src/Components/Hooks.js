import { useState } from 'react';

export function useCounter() {
    const [count, setCount] = useState(0)

    const more = () => {
        setCount(count => count + 1)
    }

    const less = () => {
        setCount(count => count - 1)
    }

    return [count, more, less]
}

export function useRandomNumber({ maximum }) {
    const [number, setNumber] = useState(0)

    function onClick() {
        setNumber(Math.floor(Math.random() * Math.floor(maximum)))
    }
    return [number, onClick]
}