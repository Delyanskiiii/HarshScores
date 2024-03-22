import React from 'react';

interface ChildProps {
    Headline: string;
}

const Footer: React.FC<ChildProps> = ({ Headline }) => {
    return (
        <div className="Footer">
            <p>
                {Headline}
            </p>
        </div>
    );
}

export default Footer;