import React from 'react';
import { CodeBracketIcon, LinkIcon, InboxIcon } from '@heroicons/react/24/outline';

interface FooterProps {
    Headline: string;
}

const Footer: React.FC<FooterProps> = ({ Headline }) => {
    const mailtoLink = `mailto:delyanbanev@gmail.com`;

    return (
        <div className="Footer">
            <div className="FooterWrapper">
                <a href="https://github.com/Delyanskiiii" target="_blank" rel="noreferrer">
                    <CodeBracketIcon className="Icon" />
                </a>
                <a href="https://linkedin.com/in/delyan-banev-68893a231" target="_blank" rel="noreferrer">
                    <LinkIcon className="Icon" />
                </a>
                <a href={mailtoLink} target="_blank" rel="noreferrer">
                    <InboxIcon className="Icon" />
                </a>
            </div>
            <div className="FooterWrapper">
                <p>
                    {Headline}
                </p>
            </div>
        </div>
    );
}

export default Footer;