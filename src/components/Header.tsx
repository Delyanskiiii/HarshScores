import React, { useState } from 'react';

interface HeaderProps {
    contentOptions: string[];
    onContentChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ contentOptions, onContentChange }) => {

    const [selectedContent, setSelectedContent] = useState(0);

    const handleClick = (option: string, index: number) => {
        onContentChange(option);
        setSelectedContent(index);
    };

    return (
        <div className="Header">
            {contentOptions.map((option, index) => (
                <button className={`${selectedContent === index ? 'HeaderButtonSelected' : 'HeaderButton'}`} onClick={() => handleClick(option, index)}>
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Header;