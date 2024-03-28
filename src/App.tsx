import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Reviews from './Reviews.json';
import './App.css';

interface ContentData {
    [key: string]: string; // Dynamic content object structure
  }

const App: React.FC = () => {

    const contentData: ContentData = {
        About: "About",
        Impact: "Impact",
        Bernard: "Bernard",
        Scores: "Scores",
        Oneshot: "Oneshot",
      };

      const [selectedContent, setSelectedContent] = useState(contentData.About);

      const handleContentChange = (value: string) => {
        setSelectedContent(contentData[value]);
      };

    return (
        <div className="App">
            <div className="Screen">
                <Header
                    contentOptions={["About", "Bernard", "Scores", "Oneshot", "Impact"]}
                    onContentChange={handleContentChange}
                />
                <Content Reviews={selectedContent} />
                {/* <Header Headline='Harsh' />
                <Content Reviews={Reviews} /> */}
                <Footer Headline='Delyan Banev' />
            </div>
        </div>
    );
}

export default App;