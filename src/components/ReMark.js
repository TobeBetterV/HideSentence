import React from "react";
import "./style.css";
import ReactMarkdown from 'react-markdown'


function ReMark({children}) {
  return (
    <ReactMarkdown># Hello, *world*!</ReactMarkdown>
  );
}
export default ReMark;
