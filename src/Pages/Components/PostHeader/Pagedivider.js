import React from 'react';

export default function Pagedivider(props){
    return(
        <>
        <div style = {{ fontSize: '0.8em', fontWeight: '900', display: 'flex', justifyContent: 'space-between'}}>
            <div><p>{props.subject}</p></div>
            
            </div>
            <hr style = {{marginBottom: '3em', marginTop: '-0.8em', border: " 1px solid #E57070"}}/>
        </>
        )}