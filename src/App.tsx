import React, { useEffect, useRef } from 'react';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer'
import ImageEditor from './ImageEditor';
import './App.css';

function App() {


  return (
    <div className="App">
      <div style={{ width: "50%", border: "1px solid black", margin: "2px" }}>
        <ImageEditor />
      </div>
      <div style={{ width: "50%", border: "1px solid black", margin: "2px" }}>
        <ImageEditor />
      </div>
    </div>
  );
}

export default App;
