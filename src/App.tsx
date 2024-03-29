import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import './App.css';

interface ContentData {
    [key: string]: string;
  }

const App: React.FC = () => {

    const contentData: ContentData = {
        About: "Dylan from fucking Fyllar",
        Bernard: "That's enough, Bernard",
        // Impact: "Impact",
        // Scores: "Scores",
        Oneshot: "Male kak shte dmvam",
      };

      const [selectedContent, setSelectedContent] = useState(contentData.About);

      const handleContentChange = (value: string) => {
        setSelectedContent(contentData[value]);
      };

    return (
        <div className="App">
            <div className="Screen">
                <Header
                    contentOptions={Object.keys(contentData)}
                    onContentChange={handleContentChange}
                />
                <Content Reviews={selectedContent} />
                <Footer Headline='Delyan Banev' />
            </div>
        </div>
    );
}

export default App;