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
        option1: "This is the content for Option 1. You can add any HTML here.",
        option2: "This is the content for Option 2. This can be anything you want to display.",
        option3: "This is the content for Option 3. Change this content to reflect your needs.",
      };

      const [selectedContent, setSelectedContent] = useState(contentData.option1);

      const handleContentChange = (value: string) => {
        setSelectedContent(contentData[value]);
      };

    return (
        <div className="App">
            <div className="Screen">
                <Header
                    contentOptions={Object.entries(contentData).map(([value, label]) => ({
                    value,
                    label,
                    }))}
                    onContentChange={handleContentChange}
                />
                <Content Reviews={selectedContent} />
                {/* <Header Headline='Harsh' />
                <Content Reviews={Reviews} />
                <Footer Headline='Harsh' /> */}
            </div>
        </div>
    );
}

export default App;