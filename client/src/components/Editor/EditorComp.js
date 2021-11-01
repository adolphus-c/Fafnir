import React, { Component } from 'react';

const EditorComp = () => {
  return (
    <div>
      <div>
        <div className='tl pa3 br3' style={{display: "inline"}}>
          <button className='pa2 br3 grow' style={{ margin: "5px" }}>+</button>
          <button className='pa2 br3 grow' style={{ margin: "5px" }}>📁</button>
          <button className='pa2 br3 grow' style={{ margin: "5px" }}>💾</button>
        </div>
        <div className='form tr pa3 br3' style={{display: "inline"}}>
          <input className='pa2 w-25 center' placeholder="Enter collab invite code" type="tex"></input>
          <button className='pa2 br3 grow' style={{ margin: "5px" }}>GO</button>
        </div>
      </div>
      <div style={{paddingTop: "20px"}}>
        <textarea className='form pa5 br3 w-75 h-100 shadow-5'  style={{height: "400px"}}></textarea>
      </div>
    </div>
  );
}

export default EditorComp;
