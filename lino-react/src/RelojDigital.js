import React, { useState, useEffect } from 'react';

function RelojDigital() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <h2>Reloj Digital</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default RelojDigital;
