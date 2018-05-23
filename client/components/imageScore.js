import React from "react";


//expecting a prop called up and down
var ImageScore = (props) => {
//props.up number of upvotes
//props.down number of downvotes

/* getVariables downs and ups (es6 destructing property)*/
const { ups , downs } = props;
/* == const const ups = props.ups*/
/* == const const downs = props.downs*/

// `` (backtick) - /*string interpulation*/: part of es6 to get a template string
/*Calc ups bar-percent by using JSX */
const upsPercent = `${100 * (ups / (ups + downs)) }%`;
const downsPercent = `${100 * (downs / (ups + downs)) }%`;


//JSX describes what the UI will look like
return(
  <div>
  Ups/Downs
    <div className = "progress">
    {/*  although div should end </div> JSX allows user to end empty statments with />*/}
      <div style = {{width: upsPercent}} className = "progress-bar progress-bar-success prgress-bar-striped" />
      <div style = {{width: downsPercent}} className = "progress-bar progress-bar-danger prgress-bar-striped" />
    </div>
  </div>
);
};


export default ImageScore;
