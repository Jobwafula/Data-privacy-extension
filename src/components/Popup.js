// src/components/Popup.js
import { useState, useEffect } from 'react';

function Popup() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.type === 'sensitive_data_detected') {
                setLogs(prevLogs => [...prevLogs, message.data]);
            }
        });
    }, []);

    return (
        <div>
            <h1>Real-Time Monitoring</h1>
            <h2>Detected Sensitive Data:</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
}

export default Popup;
