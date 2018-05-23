 //Image Detail
import React from 'react';
import ImageScore from './imageScore';


const ImageDetail = (props) => {
  //JSX remeber to use {} to ref js vars
  return (
    <li className = "media list-group-item">

{/* IMAGE   */}
      <div className = "media-left">
        <img src={props.image.link} />
      </div>
{/*  TITLE   */}
      <div className = "media-body">
        <h4 className = "media-heading">
        {props.image.title}
        </h4>
        <p> {props.image.description} </p>
{/*  pass image ups and downs data to imageScore  */}
         <ImageScore ups={props.image.ups} downs = {props.image.downs} />
      </div>
    </li>
  );
};

export default ImageDetail;
