import React from 'react';

export default function PostHeader(props){
    return(
        <>
        <div style = {{ fontSize: '0.8em', fontWeight: '900', display: 'flex', justifyContent: 'space-between'}}>
            <div><p><span style = {{color: 'darkgrey'}}>Subject: </span><span>{props.subject}</span></p></div>
            <div><p><span style = {{color: 'darkgrey'}}>Date: </span><span>{props.date}</span></p>   </div>
            </div>
            <hr style = {{marginBottom: '3em', marginTop: '-0.8em', border: " 1px solid #E57070"}}/>
        </>
        )}