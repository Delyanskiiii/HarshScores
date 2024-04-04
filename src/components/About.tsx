// import React from 'react';

// const About: React.FC = () => {
//     return (
//         <div className='Content'>
//             My name is Delyan Banev and I am studying Computer Science in the Netherlands. In my free time I create some cool pet projects. Among them is Bernard, 
//         </div>
//     );
// }

// export default About;


import React from 'react';
// import './About.css'; // Import your CSS file

const About: React.FC = () => {
  return (
    <div className="Content">
        <div className="about-content">
            <p>
                Hi there! I'm Delyan Banev, a computer science student currently studying in the Netherlands. I'm passionate about technology and enjoy creating fun and useful projects in my free time.
            </p>
            <p>
                These projects have their own dedicated pages where you can learn more about their features, functionalities, and how they work. Feel free to explore them and see what piques your interest!
            </p>
            {/* <ul className="project-list">
            <li>
                <h3>Bernard</h3>
                <p>
                    Bernard is a music bot for Discord that allows users to control music playback using voice commands.
                </p>
            </li>
            <li>
                <h3>OneShot</h3>
                <p>
                    OneShot is a tabletop role-playing game system specifically designed for one-shot adventures set in the world of Middle-earth. It provides a streamlined ruleset and mechanics tailored for quick and engaging campaigns within the beloved Tolkien universe.
                </p>
            </li>
            </ul> */}
        </div>
    </div>
  );
};

export default About;