 // Create image list component\

// import React
import React from 'react';
import ImageDetail from './Image_Detail';


//props is from parent class main - access by first argument to the function
const ImageList = (props) => {

  //Built in filter method on arrays
  const validImages =  props.images.filter(image => !image.is_album);

  const RenderedImage = validImages.map(image =>
    //sending image as a property detail to child component, ImageDetail
    //key is ID for each component
     <ImageDetail key={image.id} image={image} />
  );

//instead of jsx tags <ImageDetail /> use js variable Rendered Images by using
  return (
    <ul className = "media-list list-group" >
    {RenderedImage}
    </ul>
  );
};


//export our component
export default ImageList;
