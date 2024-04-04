import React, { ReactElement } from 'react';
import { motion } from "framer-motion"

interface Links {
    [key: string]: ReactElement;
}

const Footer: React.FC = () => {

    const links: Links = {
        "https://github.com/Delyanskiiii": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 -3 30 30" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>,
        "https://linkedin.com/in/delyan-banev-68893a231": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 -3 30 30" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>,
        "mailto:delyanbanev@gmail.com": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 -3 30 30" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" /></svg>,
      };

    const handleClick = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div className="Footer">
            <div className="FooterWrapper">
                {Object.entries(links).map(([key, value]) => (
                    <motion.button
                        className='FooterButton'
                        whileHover={{ scale: 1.1, backgroundColor: '#303030', color: '#DBD8E3' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleClick(key)}
                    >
                        {value}
                    </motion.button>
                ))}
            </div>
            <div className="FooterWrapper">
                <p>
                    © 2024 Delyan Banev
                </p>
            </div>
        </div>
    );
}

export default Footer;