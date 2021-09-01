import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import {tomorrowNightEighties} from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function Syntax(props){
   
  return (
    <SyntaxHighlighter language="react" style={tomorrowNightEighties}>
      {props.codeString}
    </SyntaxHighlighter>
  );
}

