import React, { useState } from 'react';

interface HeaderProps {
    contentOptions: string[];
    onContentChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ contentOptions, onContentChange }) => {

    const handleClick = (option: string) => {
        onContentChange(option);
    };

    return (
        <div className="Header">
            {contentOptions.map((option) => (
                <button className="HeaderButton" key={option} onClick={() => handleClick(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Header;