import React from "react";

import './Score.css'
const Score = ({ value = 5 }: { value?: string | number }) => {
    const getBorderColor = () => {
        if (value < 4) return 'border-red-400';
        if (value < 7) return 'border-yellow-400'

        return 'border-green-400';

    };

    const score = Math.floor((typeof value == "string") ? parseFloat(value) : value);
    return (
        <span className={`score inline-block mx-2 py-2 px-3 border-4 bg-black bg-opacity-75 rounded-full ${getBorderColor()}`}>
            {score}
        </span>
    );
};

export default Score;