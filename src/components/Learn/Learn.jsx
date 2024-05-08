import React from 'react';
import './Learn.css';
import CodeSnippet from '../CodeHighlight/CodeSnippet';
const Learn = () => {
  const javascriptCode = `const greeting = "Hello, world!";`;
  return (
    <div className="learn-container">
      <div className="side-menu" />
      <div className="learn-content">
        <h1>Learning Resources</h1>
        <CodeSnippet code={javascriptCode} language="javascript" />
      </div>
    </div>
  );
};

export default Learn;
