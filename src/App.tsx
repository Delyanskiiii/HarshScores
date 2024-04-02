import React, { ReactElement, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Bernard from './Components/Bernard';
import Scores from './Components/Scores';
import './App.css';

interface ContentData {
    [key: string]: ReactElement;
  }

const App: React.FC = () => {

    const contentData: ContentData = {
        About: <About />,
        Bernard: <Bernard />,
        // Impact: <Impact />,
        Scores: <Scores />,
        // Oneshot: <Oneshot />,
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
                {selectedContent}
                <Footer Headline='Delyan Banev' />
            </div>
        </div>
    );
}

export default App;