import React, { useState } from 'react';

interface HeaderProps {
    contentOptions: { value: string; label: string }[];
    onContentChange: (value: string) => void;
  }

const Header: React.FC<HeaderProps> = ({ contentOptions, onContentChange }) => {
    const [selectedValue, setSelectedValue] = useState(contentOptions[0].value);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedValue(event.target.value);
      onContentChange(event.target.value);
    };

    return (
        <div className="Header">
            <p>
                Harsh
            </p>
            <select value={selectedValue} onChange={handleChange}>
                {contentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
                ))}
            </select>
        </div>
    );
}

export default Header;