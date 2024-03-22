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
        About: "This is the content for Option 1. You can add any HTML here.",
        Impact: "This is the content for Option 2. This can be anything you want to display.",
        Bernard: "This is the content for Option 3. Change this content to reflect your needs.",
      };

      const [selectedContent, setSelectedContent] = useState(contentData.option1);

      const handleContentChange = (value: string) => {
        setSelectedContent(contentData[value]);
      };

    return (
        <div className="App">
            <div className="Screen">
                <Header
                    contentOptions={["About", "Impact", "Bernard"]}
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