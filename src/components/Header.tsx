import React, { useState } from 'react';
import { motion } from "framer-motion"

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
                <motion.button
                    className={`${selectedContent === index ? 'HeaderButtonSelected' : 'HeaderButton'}`}
                    whileHover={{ scale: 1.1, backgroundColor: '#303030' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleClick(option, index)}
                >
                    {option}
                </motion.button>
            ))}
        </div>
    );
}

export default Header;